"use client"; // Add this line

import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
// Analytics
import { analytics } from '../lib/firebase'; // Adjust the path accordingly
import { logEvent } from 'firebase/analytics';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch bookings data from Firebase Firestore
  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(data);
    };

    fetchBookings();
  }, []);

  // Handle mark as completed
  const handleComplete = async (id) => {
    try {
      const bookingRef = doc(db, "bookings", id);
      await updateDoc(bookingRef, { status: "completed" });
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, status: "completed" } : booking
        )
      );

      // Log event for booking completion
      logEvent(analytics, 'booking_completed', {
        bookingId: id,
        status: 'completed',
      });

    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // Handle edit action
  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setIsEditing(true);
  };

  // Handle update action
  const handleUpdate = async () => {
    try {
      const bookingRef = doc(db, "bookings", selectedBooking.id);
      await updateDoc(bookingRef, selectedBooking);
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === selectedBooking.id ? selectedBooking : booking
        )
      );
      setIsEditing(false);

      // Log event for booking update
      logEvent(analytics, 'booking_updated', {
        bookingId: selectedBooking.id,
        updatedFields: selectedBooking,
      });

    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // Handle cancel editing
  const handleCancel = () => {
    setSelectedBooking(null);
    setIsEditing(false);
  };

  // Handle delete booking
  const handleDelete = async (id) => {
    try {
      const bookingRef = doc(db, "bookings", id);
      await deleteDoc(bookingRef);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );
      alert("Booking deleted successfully");

      // Log event for booking deletion
      logEvent(analytics, 'booking_deleted', {
        bookingId: id,
      });

    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Something went wrong while deleting the booking.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Booking Dashboard</h1>

      {/* Bookings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <p className="font-semibold text-lg text-gray-700">
              {booking.firstName} {booking.lastName}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {booking.email}
            </p>
            <p className="text-gray-600">
              <strong>Service:</strong> {booking.service}
            </p>
            <p className="text-gray-600">
              <strong>Barber:</strong> {booking.barber}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {booking.location}
            </p>
            <p className="text-gray-600">
              <strong>Note:</strong> {booking.notes}
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Date:</strong> {new Date(booking.createdAt).toLocaleString()}
            </p>
            <p className={`text-sm font-semibold ${booking.status === "completed" ? "text-green-500" : "text-yellow-500"} `}>
              <strong>Status:</strong> {booking.status || "Pending"}
            </p>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(booking)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleComplete(booking.id)}
                className={`bg-${booking.status === "completed" ? "gray" : "green"}-500 bg-black text-white px-4 py-2 rounded-md hover:bg-green-600`}
                disabled={booking.status === "completed"}
              >
                {booking.status === "completed" ? "Completed" : "Mark as Completed"}
              </button>
              <button
                onClick={() => handleDelete(booking.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <h2 className="text-2xl font-bold mb-4">Edit Booking</h2>
            <input
              type="text"
              value={selectedBooking.firstName}
              onChange={(e) =>
                setSelectedBooking({ ...selectedBooking, firstName: e.target.value })
              }
              className="border border-gray-300 p-2 w-full mb-4 rounded-md"
              placeholder="First Name"
            />
            <input
              type="text"
              value={selectedBooking.lastName}
              onChange={(e) =>
                setSelectedBooking({ ...selectedBooking, lastName: e.target.value })
              }
              className="border border-gray-300 p-2 w-full mb-4 rounded-md"
              placeholder="Last Name"
            />
            <textarea
              value={selectedBooking.notes}
              onChange={(e) =>
                setSelectedBooking({ ...selectedBooking, notes: e.target.value })
              }
              className="border border-gray-300 p-2 w-full mb-4 rounded-md"
              placeholder="Notes"
            ></textarea>

            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
