"use client";
import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "./components/ImageWithFallback";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slides = [
    {
      image: "/unisexsalon.jpg",
      title: "MR.BARBER UNISEX SALON",
      subtitle: "Where gentlemen and womens receive the royal treatment",
      label: "Exclusive Grooming",
    },
    {
      image: "/beard-trim.jpg",
      title: "MR.BARBER UNISEX SALON",
      subtitle: "Where gentlemen and womens receive the royal treatment",
      label: "Exclusive Grooming",
    },
    {
      image: "/highlighthair.png",
      title: "MR.BARBER UNISEX SALON",
      subtitle: "Where gentlemen and womens receive the royal treatment",
      label: "Exclusive Grooming",
    },
    {
      image: "/girlscut.jpg",
      title: "MR.BARBER UNISEX SALON",
      subtitle: "Where gentlemen and womens receive the royal treatment",
      label: "Exclusive Grooming",
    },
    {
      image: "/kids.jpg",
      title: "MR.BARBER UNISEX SALON",
      subtitle: "Where gentlemen and womens receive the royal treatment",
      label: "Exclusive Grooming",
    },
    {
      image: "/father-son.jpg",
      title: "MR.BARBER UNISEX SALON",
      subtitle: "Where gentlemen and womens receive the royal treatment",
      label: "Exclusive Grooming",
    },
  ];

  const locations = [
    {
      title: "ETOBICOKE NORTH",
      slug: "etobicokenorth",
      image: "/ajman-barber.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
    {
      title: "NORTHYORK WEST",
      slug: "northyorkwest",

      image: "/sharjah-barber.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
    {
      title: "DUNDAS WEST",
      slug: "dundaswest",

      image: "/dubai-barber.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333333] text-white">
      <Header />

      <div className="relative h-[60vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#4a3c31]/50 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover z-5"
              priority
            />
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
              <div className="mb-6 transform -rotate-2">
                <span className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text text-lg md:text-xl font-semibold tracking-wider uppercase">
                  {slide.label}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl text-gray-200 mb-8">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <section className="py-20 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture-bg.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold relative">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
              SELECT YOUR LOCATION
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {locations.map((location) => (
            <Link key={location.slug} href={`/${location.slug}`}>
              <div className="group relative h-96 rounded-lg overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/5 z-10 pointer-events-none"></div>

                <ImageWithFallback
                  src={location.image}
                  alt={`${location.name} Barber Shop`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90"
                  fallbackClassName={location.fallbackColor}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-90" />
                <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-white/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    {location.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{location.description}</p>
                  <div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 rounded text-black font-bold transform transition-all duration-300 group-hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                    RESERVE NOW
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <section className="py-20 px-6 bg-gradient-to-b from-[#333333] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
                THE ROYAL EXPERIENCE
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

              <div className="mb-6 text-amber-500 relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">
                Master Barbers & Hairstylists
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Our elite team of barbers and hairstylists are trained in both
                classic and contemporary techniques to deliver the perfect cut.
              </p>

              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
            </div>

            <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

              <div className="mb-6 text-amber-500 relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">
                Luxury Amenities
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Complimentary premium beverages, hot towel service, and relaxing
                scalp massage with every visit.
              </p>

              {/* Subtle border highlight effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
            </div>

            <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

              <div className="mb-6 text-amber-500 relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">
                VIP Membership
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Join our exclusive membership program for priority bookings,
                special rates, and complimentary grooming products.
              </p>

              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <section className="py-20 px-6 bg-[#1a1a1a] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture-bg.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-amber-500 mb-8 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl font-light italic text-gray-200 mb-8">
            The attention to detail and personalized service at Mr.BARBER UNISEX
            SALON is unmatched. It is more than a haircut—it&aposs an experience
            every gentleman deserves.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full mr-4 overflow-hidden relative">
              <ImageWithFallback
                src="/testimonial-avatar.jpg"
                alt="Client"
                fill
                className="object-cover"
                fallbackClassName="bg-gradient-to-br from-gray-800 to-amber-900"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-white">Ahmed Al Mansouri</p>
              <p className="text-amber-500">Loyal Client</p>
            </div>
          </div>
        </div>
      </section>
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
