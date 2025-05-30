"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db, analytics } from "../lib/firebase";
import { logEvent } from "firebase/analytics";
import { motion } from "framer-motion";

import {
  FiEdit,
  FiTrash2,
  FiCheck,
  FiX,
  FiCalendar,
  FiUser,
  FiPhone,
  FiMail,
  FiScissors,
  FiMapPin,
  FiClock,
  FiLogOut,
} from "react-icons/fi";

const Dashboard = () => {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
      logEvent(analytics, "admin_signed_out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

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
    const matchesFilter = filter === "all" || booking.status === filter;
    const matchesSearch =
      booking.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm);

    return matchesFilter && matchesSearch;
  });

  // Handle mark as completed with confirmation
  const handleComplete = async (id) => {
    const confirmComplete = window.confirm(
      "Are you sure you want to mark this booking as completed?"
    );
    
    if (!confirmComplete) return;

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
      alert(
        "You already have a pending booking with these details. Please wait for the admin to mark it as completed."
      );
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
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333] p-4 md:p-8 text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-400">
              Booking Dashboard
            </h1>
            <p className="text-gray-400 mt-2">
              Manage all customer appointments in one place
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-900/80 hover:bg-red-800 text-red-100 rounded-lg transition-colors border border-red-800"
            >
              <FiLogOut className="text-lg" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-700 bg-[#1a1a1a] text-gray-200 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-0 focus:border-amber-500 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-500 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <select
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-gray-200
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-0 focus:border-amber-500 transition"
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
          {[
            {
              title: "Total Bookings",
              count: bookings.length,
              icon: <FiCalendar className="text-amber-500 text-xl" />,
              bg: "bg-amber-900",
            },
            {
              title: "Pending",
              count: bookings.filter((b) => b.status === "pending").length,
              icon: <FiClock className="text-yellow-400 text-xl" />,
              bg: "bg-yellow-900",
            },
            {
              title: "Completed",
              count: bookings.filter((b) => b.status === "completed").length,
              icon: <FiCheck className="text-green-400 text-xl" />,
              bg: "bg-green-900",
            },
          ].map(({ title, count, icon, bg }) => (
            <div
              key={title}
              className="bg-[#2d2d2d]/80 p-6 rounded-xl shadow-sm border border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">{title}</p>
                  <h3 className="text-2xl font-bold mt-1 text-gray-100">
                    {count}
                  </h3>
                </div>
                <div className={`${bg} p-3 rounded-full`}>{icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bookings List */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="bg-[#2d2d2d]/80 rounded-xl shadow-sm p-8 text-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium">No bookings found</h3>
            <p className="mt-1">Try adjusting your search or filter criteria</p>
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
                className={`bg-[#2d2d2d]/80 border border-gray-700 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md
              ${booking.status === "completed" ? "opacity-90" : ""}`}
              >
                <div
                  className={`p-1 ${
                    booking.status === "completed"
                      ? "bg-amber-600"
                      : "bg-yellow-500"
                  }`}
                ></div>

                <div className="p-6 text-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-amber-400">
                        {booking.firstName} {booking.lastName}
                      </h3>
                      <p className="text-gray-400">{booking.service}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "completed"
                          ? "bg-amber-900 text-amber-200"
                          : "bg-yellow-900 text-yellow-200"
                      }`}
                    >
                      {booking.status === "completed" ? "Completed" : "Pending"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 text-gray-300">
                    <div className="flex items-center">
                      <FiUser className="mr-2 text-gray-500" />
                      <span>
                        {booking.firstName} {booking.lastName}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiMail className="mr-2 text-gray-500" />
                      <span>{booking.email}</span>
                    </div>
                    <div className="flex items-center">
                      <FiPhone className="mr-2 text-gray-500" />
                      <span>{booking.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <FiScissors className="mr-2 text-gray-500" />
                      <span>
                        {booking.service} with {booking.barber}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-2 text-gray-500" />
                      <span>{booking.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-2 text-gray-500" />
                      <span>
                        {new Date(booking.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-start">
                      <FiScissors className="mr-2 mt-1 text-gray-500" />
                      <div>
                        {booking.servicesWithPrices ? (
                          booking.servicesWithPrices.map((service, i) => (
                            <div key={i}>
                              <span className="font-medium text-amber-400">
                                {service.name}
                              </span>{" "}
                              - {service.price}
                            </div>
                          ))
                        ) : (
                          <span>{booking.service}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {booking.notes && (
                    <div className="mt-4 p-3 bg-[#1a1a1a] rounded-lg text-sm text-gray-400">
                      <strong>Notes:</strong> {booking.notes}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-6 flex justify-between items-center">
                    {booking.status !== "completed" && (
                      <button
                        onClick={() => handleComplete(booking.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-900/80 hover:bg-green-800 text-green-100 rounded-lg transition-colors"
                      >
                        <FiCheck className="text-lg" />
                        Mark as Completed
                      </button>
                    )}
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(booking)}
                        className="p-2 text-amber-400 hover:text-amber-300 transition-colors"
                        title="Edit booking"
                      >
                      </button>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                        title="Delete booking"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;