"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import { db } from "../../lib/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const [selectedBarber, setSelectedBarber] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("ETOBICOKE NORTH");
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",

    date: "",
    time: "",
    notes: "",
  });

  const [openSections, setOpenSections] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const data = [
    {
      title: "Hair Cut & Styling",
      options: [
        { name: "Men Hair Cut", price: "$25", tax: " +Tax" },
        { name: "Women Hair Cut & Wash", price: "$30", tax: " +Tax" },
        { name: "Women Hair Cut Wa & Style", price: "$45", tax: " +Tax" },
        { name: "Women Hair Shampoo & Blow Dry", price: "$25", tax: " +Tax" },
        { name: "Women Oil Head Massage", price: "$25", tax: " +Tax" },
        { name: "Kids Hair Cut", price: "$20", tax: " +Tax" },
        { name: "Girls Hair Cut Under age", price: "$20", tax: " +Tax" },
        { name: "Women Layers Cut", price: "$40", tax: " +Tax" },
        { name: "Hair Straightening", price: "$35 & up", tax: " +Tax" },
        { name: "Ladies Shampoo", price: "$10", tax: " +Tax" },
        { name: "Mens Beard Cut", price: "$20", tax: " +Tax" },
      ],
    },
    {
      title: "Threading",
      options: [
        { name: "Eyebrow", price: "$5", tax: " +Tax" },
        { name: "Upper Lips", price: "$5", tax: " +Tax" },
        { name: "Chin", price: "$5", tax: " +Tax" },
        { name: "Forehead", price: "$5", tax: " +Tax" },
        { name: "Full Face", price: "$25", tax: " +Tax" },
        { name: "Full Face & Neck", price: "$30", tax: " +Tax" },
        { name: "Mens Threading", price: "$10", tax: " +Tax" },
      ],
    },

    {
      title: "Waxing",
      options: [
        { name: "Eyebrow", price: "$5", tax: " +Tax" },
        { name: "Upper Lips", price: "$5", tax: " +Tax" },
        { name: "Chin", price: "$5", tax: " +Tax" },
        { name: "Forehead", price: "$5", tax: " +Tax" },
        { name: "Full Face", price: "$25", tax: " +Tax" },
        { name: "Under Arm", price: "$10", tax: " +Tax" },
        { name: "Full Arm", price: "$20", tax: " +Tax" },
        { name: "Full Legs", price: "$35", tax: " +Tax" },
        { name: "Half Legs", price: "$20", tax: " +Tax" },
        { name: "Stomach", price: "$25", tax: " +Tax" },
        { name: "Full Back", price: "$25", tax: " +Tax" },
        { name: "Full Body", price: "$100", tax: " +Tax" },
        { name: "Brazilian", price: "$35", tax: " +Tax" },
        { name: "Bikini/Line", price: "$15", tax: " +Tax" },
      ],
    },
    {
      title: "Piercing",
      options: [
        { name: "Ear", price: "$25", tax: " +Tax" },
        { name: "Nose", price: "$25", tax: " +Tax" },
      ],
    },
    {
      title: "Skin Care",
      options: [
        { name: "Men Facial Staring", price: "$60", tax: " +Tax" },
        { name: "Full Face Bleach", price: "$15", tax: " +Tax" },
        { name: "Herbal Facial", price: "$60", tax: " +Tax" },
        { name: "Gold Facial", price: "$70", tax: " +Tax" },
        { name: "Diamond Facial", price: "$80", tax: " +Tax" },
        { name: "Acne Facial", price: "$80", tax: " +Tax" },
      ],
    },

    {
      title: "Hair Colour & Highlights",
      options: [
        { name: "Individual Highlights", price: "$10", tax: " +Tax" },
        { name: "Cap Highlights", price: "$60", tax: " +Tax" },
        { name: "Hair Colour for Men with Wash", price: "$20", tax: " +Tax" },
        { name: "Hair Smoothing", price: "$200 Up", tax: " +Tax" },
        { name: "Hair Keratin", price: "$200 Up", tax: " +Tax" },
        { name: "Women Root Touchup", price: "$35", tax: " +Tax" },
      ],
    },

    {
      title: "Makeup Artistry",
      options: [
        { name: "Party Makeup", price: "$80", tax: " +Tax" },
        { name: "Party Hairstyles", price: "$40", tax: " +Tax" },
        { name: "Full Bridal Makeup in Salon", price: "$150", tax: " +Tax" },
        { name: "Bridal Mehndi", price: "$90", tax: " +Tax" },
        { name: "Mehndi per Hand", price: "$15", tax: " +Tax" },
      ],
    },

    {
      title: "Perm",
      options: [
        { name: "Men & Women Perm", price: "$100 & Up", tax: " +Tax" },
        { name: "Beard Perm", price: "$80", tax: " +Tax" },
      ],
    },
  ];
  const [loading, setLoading] = useState(false); // NEW

  const barbers = ["Waseem", "Hussain", "Honey", "ilyas" , "Mahfooz", "Manju", "Harpeet"];

  const locations = ["ETOBICOKE NORTH", "NORTHYORK WEST", "DUNDAS WEST"];

  const createSlug = (text) => text.toLowerCase().replace(/\s+/g, ""); // Removes all spaces

  const toggleSection = (title) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleCheckboxChange = (sectionTitle, option) => {
    setSelectedOptions((prev) => {
      const section = prev[sectionTitle] || {};
      if (section[option.name]) {
        const newSection = { ...section };
        delete newSection[option.name];
        return { ...prev, [sectionTitle]: newSection };
      }
      return { ...prev, [sectionTitle]: { ...section, [option.name]: option } };
    });
  };

  const getSelectedServices = () => {
    return Object.values(selectedOptions).reduce((acc, section) => {
      return [
        ...acc,
        ...Object.values(section).filter(
          (service) => typeof service === "object"
        ),
      ];
    }, []);
  };

  const handleBarberChange = (e) => {
    setSelectedBarber(e.target.value);
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setSelectedLocation(newLocation);

    const slug = createSlug(newLocation);
    if (newLocation !== "ETOBICOKE NORTH") {
      router.push(`/${slug}/checkout`);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const selectedServices = getSelectedServices();
    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      setLoading(false);
      return;
    }

    try {
      /* check duplicate */
      const bookingsRef = collection(db, "bookings");
      const q = query(
        bookingsRef,
        where("firstName", "==", form.firstName),
        where("lastName", "==", form.lastName),
        where("email", "==", form.email),
        where("barber", "==", selectedBarber),
        where("location", "==", selectedLocation),
        where("date", "==", form.date),
        where("phone", "==", form.phone),
        where("service", "==", form.service),
        where("status", "==", "pending")
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        alert(
          "You have already booked this service with the same details. Please wait until the previous booking is completed."
        );
        return;
      }

      /* add new booking */
      const bookingData = {
        ...form,
        services: selectedServices.map((s) => s.name),
        servicesWithPrices: selectedServices,
        barber: selectedBarber,
        location: selectedLocation,
        createdAt: new Date().toISOString(),
        status: "pending",
      };

      // First create the booking
      await addDoc(bookingsRef, bookingData);

      // Then send confirmation email
      try {
        const emailResponse = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            barber: selectedBarber,
            location: selectedLocation,
            phone: form.phone,
            service: form.service,
            date: form.date,
            time: form.time,
            notes: form.notes,
            services: selectedServices.map((s) => s.name), // Ensure this is an array
          }),
        });

        const emailResult = await emailResponse.json();

        if (!emailResponse.ok) {
          console.error("Email sending failed:", emailResult.message);
          // Don't fail the entire booking if email fails
          alert("Booking created! But we couldn't send a confirmation email.");
        } else {
          alert(
            "Your appointment has been confirmed! A confirmation has been sent to your email."
          );
        }
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Continue even if email fails
        alert("Booking created! But we couldn't send a confirmation email.");
      }

      /* reset form */
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        time: "",
        notes: "",
      });
      setSelectedOptions({});
      setSelectedBarber("");
      setSelectedLocation("ETOBICOKE");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333333] text-white">
      <Header />
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/services"
              className="text-amber-500 hover:text-yellow-400 transition-colors duration-300 flex items-center w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Services
            </Link>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              COMPLETE YOUR BOOKING
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Select your preferred service, barber, date and time to complete
              your booking at our location.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    SELECT LOCATION
                  </h3>

                  <div className="space-y-3 mb-6">
                    {locations.map((location) => {
                      const slug = createSlug(location);
                      return (
                        <div
                          key={slug}
                          className={`flex items-center p-4 rounded-md cursor-pointer transition-all duration-300 ${
                            selectedLocation === location
                              ? "bg-white/10 border border-white/10"
                              : "hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <input
                            type="radio"
                            name="location"
                            id={slug}
                            value={location}
                            checked={selectedLocation === location}
                            onChange={handleLocationChange}
                            className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-600 bg-gray-700"
                          />
                          <label
                            htmlFor={slug}
                            className="ml-3 block text-white cursor-pointer"
                          >
                            <span
                              className={
                                selectedLocation === location
                                  ? "text-amber-400"
                                  : ""
                              }
                            >
                              {location}
                            </span>
                          </label>
                        </div>
                      );
                    })}
                  </div>

                  <div className="h-px w-full bg-white/10 my-6"></div>
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    SELECT SERVICE
                  </h3>
                  <div className="w-full max-w-md mx-auto space-y-4 text-white">
                    {data.map((section) => (
                      <div
                        key={section.title}
                        className="bg-[#2d2d2d] p-4 rounded-md border border-gray-600"
                      >
                        <button
                          type="button"
                          onClick={() => toggleSection(section.title)}
                          className="flex justify-between items-center w-full"
                        >
                          <span className="font-semibold">{section.title}</span>
                          <span className="text-xl font-bold">
                            {openSections.includes(section.title) ? "−" : "+"}
                          </span>
                        </button>

                        {openSections.includes(section.title) && (
                          <div className="mt-3 pl-2 space-y-2 text-sm text-gray-300">
                            {section.options.map((option) => (
                              <label
                                key={option.name}
                                className="flex justify-between items-center cursor-pointer"
                              >
                                <div className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={
                                      !!selectedOptions[section.title]?.[
                                        option.name
                                      ]
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(
                                        section.title,
                                        option
                                      )
                                    }
                                    className="accent-pink-500"
                                  />
                                  <span>{option.name}</span>
                                </div>
                                <p className="text-gray-400">
                                  {option.price}
                                  <span className="text-[10px]">
                                    {option.tax}
                                  </span>
                                </p>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    SELECT BARBER
                  </h3>
                  <div className="space-y-3">
                    {barbers.map((barber) => (
                      <div
                        key={barber}
                        className={`flex items-center p-4 rounded-md cursor-pointer transition-all duration-300 ${
                          selectedBarber === barber
                            ? "bg-white/10 border border-white/10"
                            : "hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <input
                          required
                          type="radio"
                          name="barber"
                          id={barber.replace(/\s+/g, "-").toLowerCase()}
                          value={barber}
                          checked={selectedBarber === barber}
                          onChange={handleBarberChange}
                          className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-600 bg-gray-700"
                        />
                        <label
                          htmlFor={barber.replace(/\s+/g, "-").toLowerCase()}
                          className="ml-3 block text-white cursor-pointer"
                        >
                          <span
                            className={
                              selectedBarber === barber ? "text-amber-400" : ""
                            }
                          >
                            {barber}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    SELECT DATE &amp; TIME
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* ---- DATE ---- */}
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-gray-300 mb-2"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        min={minDate} // ⬅️ new
                        required
                        className="w-full h-10 p-2 bg-[#1a1a1a] …"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="block text-gray-300 mb-2"
                      >
                        Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                      >
                        <option value="">Select a time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    YOUR DETAILS
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-gray-300 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2
                   text-white focus:border-amber-500 focus:ring-1
                   focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-gray-300 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2
                   text-white focus:border-amber-500 focus:ring-1
                   focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2
                   text-white focus:border-amber-500 focus:ring-1
                   focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your email address"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-300 mb-2"
                      >
                        Phone
                      </label>

                      <div className="flex">
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={form.countryCode || "+1"}
                          onChange={handleChange}
                          className="bg-[#1a1a1a] border border-white/10 rounded-l-md p-2
                     text-white focus:border-amber-500 focus:ring-1
                     focus:ring-amber-500 transition-all duration-300"
                        >
                          <option value="+1">+1</option>
                        </select>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onKeyPress={(e) =>
                            !/[0-9]/.test(e.key) && e.preventDefault()
                          }
                          pattern="\d{6,10}"
                          maxLength={10}
                          required
                          className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2
             text-white focus:border-amber-500 focus:ring-1
             focus:ring-amber-500 transition-all duration-300"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-gray-300 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows="3"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2
                 text-white focus:border-amber-500 focus:ring-1
                 focus:ring-amber-500 transition-all duration-300"
                      placeholder="Any special requests or notes for your barber"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] sticky top-6">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    BOOKING SUMMARY
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white font-medium">
                        {selectedLocation}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Services:</span>
                      <div className="text-right">
                        {getSelectedServices().map((service) => (
                          <div
                            key={service.name}
                            className="text-white font-medium"
                          >
                            {service.name} - {service.price}
                          </div>
                        ))}
                        {getSelectedServices().length === 0 &&
                          "No service selected"}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Barber:</span>
                      <span className="text-white">
                        {selectedBarber || "Select a barber"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white">
                        {form.date || "Select a date"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white">
                        {form.time ? `${form.time}` : "Select a time"}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-white font-medium">Total:</span>
                      <div className="text-right">
                        <span className="text-amber-500 font-bold">
                          $
                          {getSelectedServices().reduce((total, service) => {
                            const price = parseInt(
                              service.price.replace(/\D/g, "")
                            );
                            return total + price;
                          }, 0)}
                        </span>
                        <span className="text-[11px] text-gray-400 ml-1">
                          +Tax
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 flex items-center justify-center
    bg-gradient-to-r from-amber-500 to-yellow-400
    hover:from-amber-400 hover:to-yellow-300
    text-black font-bold rounded-md transition-all duration-300
    transform hover:scale-[1.02]
    shadow-[0_5px_15px_rgba(0,0,0,0.2)]
    hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]
    ${loading ? "opacity-60 cursor-not-allowed hover:scale-100" : ""}
  `}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    ) : (
                      "CONFIRM BOOKING"
                    )}
                  </button>

                  <p className="text-gray-400 text-sm mt-4 text-center">
                    By confirming, you agree to our booking terms and
                    cancellation policy.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="py-12 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex justify-center items-center ">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
              MR.BARBER UNISEX SALON
            </h3>
            <p className="text-gray-400 mb-4">
              Where gentlemen receive the royal treatment.
            </p>
          </div>
        </div>
        <div className="mt-12  pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">
            © 2024 MR.BARBER UNISEX SALON. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
// }
// }
