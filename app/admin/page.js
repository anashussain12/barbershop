"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { analytics } from "../lib/firebase";
import { logEvent } from "firebase/analytics";
import { query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { FiEdit, FiTrash2, FiCheck, FiX, FiCalendar, FiUser, FiPhone, FiMail, FiScissors, FiMapPin, FiClock } from "react-icons/fi";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch bookings data from Firebase Firestore
  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Filter bookings based on status and search term
  const filteredBookings = bookings.filter((booking) => {
    const matchesFilter =
      filter === "all" || booking.status === filter;
    const matchesSearch = 
      booking.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm);
    
    return matchesFilter && matchesSearch;
  });

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

      logEvent(analytics, "booking_completed", {
        bookingId: id,
        status: "completed",
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

      logEvent(analytics, "booking_updated", {
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
    if (!confirm("Are you sure you want to delete this booking?")) return;
    
    try {
      const bookingRef = doc(db, "bookings", id);
      await deleteDoc(bookingRef);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );

      logEvent(analytics, "booking_deleted", {
        bookingId: id,
      });
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Something went wrong while deleting the booking.");
    }
  };

  const handleBooking = async (formData) => {
    const bookingsRef = collection(db, "bookings");
    const q = query(
      bookingsRef,
      where("firstName", "==", formData.firstName),
      where("lastName", "==", formData.lastName),
      where("email", "==", formData.email),
      where("service", "==", formData.service),
      where("barber", "==", formData.barber),
      where("location", "==", formData.location),
      where("date", "==", formData.date),
      where("phone", "==", formData.phone),
      where("status", "==", "pending")
    );
  
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      alert("You already have a pending booking with these details. Please wait for the admin to mark it as completed.");
      return;
    }
  
    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        ...formData,
        status: "pending",
      });
  
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking appointment: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Booking Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Manage all customer appointments in one place
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative w-full">
              {/* <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> */}
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <select
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Bookings</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Bookings</p>
                <h3 className="text-2xl font-bold mt-1">{bookings.length}</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FiCalendar className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending</p>
                <h3 className="text-2xl font-bold mt-1">
                  {bookings.filter(b => b.status === "pending").length}
                </h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <FiClock className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Completed</p>
                <h3 className="text-2xl font-bold mt-1">
                  {bookings.filter(b => b.status === "completed").length}
                </h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FiCheck className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No bookings found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md ${
                  booking.status === "completed" ? "opacity-90" : ""
                }`}
              >
                <div className={`p-1 ${
                  booking.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                }`}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {booking.firstName} {booking.lastName}
                      </h3>
                      <p className="text-gray-500">{booking.service}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === "completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {booking.status === "completed" ? "Completed" : "Pending"}
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center text-gray-600">
                      <FiUser className="mr-2 text-gray-400" />
                      <span>{booking.firstName} {booking.lastName}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMail className="mr-2 text-gray-400" />
                      <span>{booking.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiPhone className="mr-2 text-gray-400" />
                      <span>{booking.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiScissors className="mr-2 text-gray-400" />
                      <span>{booking.service} with {booking.barber}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="mr-2 text-gray-400" />
                      <span>{booking.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-2 text-gray-400" />
                      <span>{new Date(booking.createdAt).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {booking.notes && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Note:</span> {booking.notes}
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-6 flex justify-end space-x-2">
                    <button
                      onClick={() => handleEdit(booking)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                      title="Edit"
                    >
                      <FiEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      title="Delete"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleComplete(booking.id)}
                      disabled={booking.status === "completed"}
                      className={`p-2 rounded-full transition-colors ${
                        booking.status === "completed"
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-500 hover:text-green-600 hover:bg-green-50"
                      }`}
                      title={booking.status === "completed" ? "Already completed" : "Mark as completed"}
                    >
                      <FiCheck className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {isEditing && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Edit Booking</h2>
                  <button
                    onClick={handleCancel}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={selectedBooking.firstName}
                      onChange={(e) =>
                        setSelectedBooking({
                          ...selectedBooking,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={selectedBooking.lastName}
                      onChange={(e) =>
                        setSelectedBooking({
                          ...selectedBooking,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea
                      value={selectedBooking.notes}
                      onChange={(e) =>
                        setSelectedBooking({
                          ...selectedBooking,
                          notes: e.target.value,
                        })
                      }
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdate}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
// export default Dashboard;