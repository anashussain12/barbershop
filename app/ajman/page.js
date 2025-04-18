import Link from "next/link";
import ImageWithFallback from "../components/ImageWithFallback";
import Header from "../../components/Header";
import Image from "next/image";

export default function AjmanPage() {
  const services = [
    {
      name: "Relaxed Cut",
      price: "AED 80",
      duration: "35 min",
      description: "Laid-back haircut with styling and complimentary beverage",
      image: "/relaxed.jpg",
    },
    {
      name: "Express Trim",
      price: "AED 50",
      duration: "20 min",
      description: "Quick touch-up for those on the go, includes styling",
      image: "/beard-trim.jpg",
    },
    {
      name: "Full Experience",
      price: "AED 140",
      duration: "70 min",
      description: "Haircut, beard trim, face mask, and shoulder massage",
      image: "/complete-grooming.jpg",
    },
    {
      name: "Beard Design",
      price: "AED 65",
      duration: "30 min",
      description:
        "Creative beard styling with precision detailing and conditioning",
      image: "/beard-sculpting.jpg",
    },
    {
      name: "Senior Special",
      price: "AED 70",
      duration: "40 min",
      description: "Specialized service for our distinguished senior clients",
      image: "/gentle-cut.jpg",
    },
    {
      name: "Kids Cut",
      price: "AED 60",
      duration: "25 min",
      description: "Fun and friendly haircuts for the little gentlemen",
      image: "/kids.jpg",
    },
  ];

  const barbers = [
    {
      name: "Saeed",
      specialty: "Family Cuts",
      image: "/barber-saeed.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
    {
      name: "Yusuf",
      specialty: "Quick Styles",
      image: "/barber-yusuf.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
    {
      name: "Ibrahim",
      specialty: "Relaxed Experience",
      image: "/barber-ibrahim.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333333] text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#4a3c31]/50 z-10" />
        <ImageWithFallback
          src="/ajman-location-hero.jpg"
          alt="Ajman Barber Shop"
          fill
          className="object-cover z-5"
          priority
          fallbackClassName="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            AJMAN
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200 mb-8">
            Relaxed atmosphere with expert service
          </p>
          <Link
            href="/ajman/checkout"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#333333] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
                OUR SERVICES
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.name} href="/ajman/checkout" className="group">
                <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle glow effect on hover */}

                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">
                    {service.name}
                  </h3>
                  <div className="flex justify-between mb-4 relative z-10">
                    <span className="text-amber-500 font-bold">
                      {service.price}
                    </span>
                    <span className="text-gray-400">{service.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-6 relative z-10">
                    {service.description}
                  </p>
                  <div className="flex justify-end relative z-10">
                    <span className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 px-4 py-2 rounded text-black font-bold transition-all duration-300 group-hover:from-amber-400 group-hover:to-yellow-300">
                      BOOK NOW
                    </span>
                  </div>

                  {/* Subtle border highlight effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]">
              VIEW FULL MENU
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Location Details Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
                  LOCATION DETAILS
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-amber-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-300">
                      Sheikh Rashid Bin Humaid Street
                    </p>
                    <p className="text-gray-300">Al Nuaimiya, Ajman, UAE</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-amber-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hours</h3>
                    <p className="text-gray-300">
                      Monday - Thursday: 10AM - 8PM
                    </p>
                    <p className="text-gray-300">Friday: 2PM - 9PM</p>
                    <p className="text-gray-300">
                      Saturday - Sunday: 10AM - 7PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-amber-500 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-gray-300">Phone: +971 6 987 6543</p>
                    <p className="text-gray-300">
                      Email: ajman@royalbarber.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <ImageWithFallback
                src="/ajman-map.jpg"
                alt="Ajman Location Map"
                fill
                className="object-cover"
                fallbackClassName="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-black/70 p-4 rounded-lg backdrop-blur-sm w-full">
                  <h3 className="text-xl font-bold mb-2">Find Us</h3>
                  <p className="text-gray-300 mb-4">
                    Conveniently located in Al Nuaimiya, with easy parking and
                    access.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 px-4 py-2 rounded text-black font-bold transform transition-all duration-300 hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Barbers Section */}
      <section className="py-20 px-6 bg-[#1a1a1a] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture-bg.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
                MEET OUR BARBERS
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {barbers.map((barber) => (
              <div key={barber.name} className="group">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] mb-6">
                  <ImageWithFallback
                    src={barber.image}
                    alt={`Barber ${barber.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fallbackClassName="bg-gradient-to-br from-gray-800 to-amber-900"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-90" />
                </div>
                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  {barber.name}
                </h3>
                <p className="text-amber-500">{barber.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Booking Section */}
      <section className="py-20 px-6 bg-[#1a1a1a] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture-bg.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            READY FOR THE ROYAL TREATMENT?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Book your appointment today and experience premium grooming services
            at our Ajman location.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]">
              BOOK ONLINE
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-amber-500/30 text-white font-bold rounded-md transition-all duration-300 hover:border-amber-500/50 transform hover:scale-105">
              CALL US
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#111111] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Royal Barber. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-amber-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
