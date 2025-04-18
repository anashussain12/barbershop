'use client';

import { useState } from 'react';
import Link from "next/link";
import Header from "../../../components/Header";

export default function CheckoutPage() {
  const [selectedService, setSelectedService] = useState('Relaxed Cut');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Ajman');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });

  const services = [
    {
      name: "Relaxed Cut",
      price: "AED 80",
      duration: "35 min",
    },
    {
      name: "Express Trim",
      price: "AED 50",
      duration: "20 min",
    },
    {
      name: "Full Experience",
      price: "AED 140",
      duration: "70 min",
    },
    {
      name: "Beard Design",
      price: "AED 65",
      duration: "30 min",
    },
    {
      name: "Senior Special",
      price: "AED 70",
      duration: "40 min",
    },
    {
      name: "Kids Cut",
      price: "AED 60",
      duration: "25 min",
    }
  ];

  const barbers = ["Saeed", "Yusuf", "Ibrahim", "Any Available Barber"];
  
  const locations = ["Dubai", "Sharjah", "Ajman"];

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleBarberChange = (e) => {
    setSelectedBarber(e.target.value);
  };
  
  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setSelectedLocation(newLocation);
    
    // Redirect to the appropriate location's checkout page
    if (newLocation !== 'Ajman') {
      window.location.href = `/${newLocation.toLowerCase()}/checkout`;
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.firstName} ${form.lastName}!`);
  };

  // Find the selected service details
  const selectedServiceDetails = services.find(service => service.name === selectedService) || services[0];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333333] text-white">
      <Header />

      {/* Checkout Content */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/ajman" className="text-amber-500 hover:text-yellow-400 transition-colors duration-300 flex items-center w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Services
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">COMPLETE YOUR BOOKING</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Select your preferred service, barber, date and time to complete your booking at our Ajman location.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Service Selection */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">SELECT LOCATION</h3>
                  
                  <div className="space-y-3 mb-6">
                    {locations.map((location) => (
                      <div 
                        key={location} 
                        className={`flex items-center p-4 rounded-md cursor-pointer transition-all duration-300 ${
                          selectedLocation === location 
                            ? 'bg-white/10 border border-white/10' 
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="location" 
                          id={location.toLowerCase()} 
                          value={location}
                          checked={selectedLocation === location}
                          onChange={handleLocationChange}
                          className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-600 bg-gray-700"
                        />
                        <label htmlFor={location.toLowerCase()} className="ml-3 block text-white cursor-pointer">
                          <span className={selectedLocation === location ? 'text-amber-400' : ''}>{location}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-px w-full bg-white/10 my-6"></div>
                  
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">SELECT SERVICE</h3>
                  
                  <div className="space-y-3">
                    {services.map((service) => (
                      <div 
                        key={service.name} 
                        className={`flex items-center p-4 rounded-md cursor-pointer transition-all duration-300 ${
                          selectedService === service.name 
                            ? 'bg-white/10 border border-white/10' 
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="service" 
                          id={service.name.replace(/\s+/g, '-').toLowerCase()} 
                          value={service.name}
                          checked={selectedService === service.name}
                          onChange={handleServiceChange}
                          className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-600 bg-gray-700"
                        />
                        <label htmlFor={service.name.replace(/\s+/g, '-').toLowerCase()} className="ml-3 block text-white cursor-pointer w-full">
                          <div className="flex justify-between">
                            <span className={selectedService === service.name ? 'text-amber-400' : ''}>{service.name}</span>
                            <span className={`font-bold ${selectedService === service.name ? 'text-white' : 'text-amber-500'}`}>{service.price}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">SELECT BARBER</h3>
                  
                  <div className="space-y-3">
                    {barbers.map((barber) => (
                      <div 
                        key={barber} 
                        className={`flex items-center p-4 rounded-md cursor-pointer transition-all duration-300 ${
                          selectedBarber === barber 
                            ? 'bg-white/10 border border-white/10' 
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="barber" 
                          id={barber.replace(/\s+/g, '-').toLowerCase()} 
                          value={barber}
                          checked={selectedBarber === barber}
                          onChange={handleBarberChange}
                          className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-600 bg-gray-700"
                        />
                        <label htmlFor={barber.replace(/\s+/g, '-').toLowerCase()} className="ml-3 block text-white cursor-pointer">
                          <span className={selectedBarber === barber ? 'text-amber-400' : ''}>{barber}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">SELECT DATE & TIME</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-gray-300 mb-2">Date</label>
                      <input 
                        type="date" 
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-gray-300 mb-2">Time</label>
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
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)]">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">YOUR DETAILS</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-gray-300 mb-2">Special Requests (Optional)</label>
                    <textarea 
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows="3" 
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-md p-2 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                      placeholder="Any special requests or notes for your barber"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Right Column - Summary */}
              <div className="md:col-span-1">
                <div className="bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 rounded-lg p-6 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] sticky top-6">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">BOOKING SUMMARY</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span className="text-white font-medium">{selectedLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Service:</span>
                      <span className="text-white font-medium">{selectedServiceDetails.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Price:</span>
                      <span className="text-amber-500 font-bold">{selectedServiceDetails.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Duration:</span>
                      <span className="text-white">{selectedServiceDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Barber:</span>
                      <span className="text-white">{selectedBarber || 'Select a barber'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white">{form.date || 'Select a date'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white">{form.time ? `${form.time}` : 'Select a time'}</span>
                    </div>
                    
                    <div className="border-t border-white/10 pt-4 mt-4">
                      <div className="flex justify-between text-lg">
                        <span className="text-white font-medium">Total:</span>
                        <span className="text-amber-500 font-bold">{selectedServiceDetails.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]"
                  >
                    CONFIRM BOOKING
                  </button>
                  
                  <p className="text-gray-400 text-sm mt-4 text-center">
                    By confirming, you agree to our booking terms and cancellation policy.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#111111] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Royal Barber. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-500">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-500">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}