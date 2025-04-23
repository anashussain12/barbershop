"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

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

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Booking Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Service:</strong> {booking.service}</p>
            <p><strong>Barber:</strong> {booking.barber}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Date:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
