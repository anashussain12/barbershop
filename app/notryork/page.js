import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "../components/ImageWithFallback";
import Header from "../../components/Header";

export default function SharjahPage() {
  const services = [
    {
      name: "Hair Cut & Styling",
      // price: "AED 120",
      // duration: "45 min",
      description:
        "Precision cut with styling, hot towel refreshment, and scalp massage",
      image: "/royal-haircut.jpeg",
    },
    {
      name: "Threading",
      // price: "AED 80",
      // duration: "30 min",
      description:
        "Expert beard shaping with hot towel treatment and essential oils",
      image: "/beard-sculpting.jpg",
    },
    {
      name: "Waxing",
      // price: "AED 180",
      // duration: "75 min",
      description: "Haircut, beard trim, facial cleanse, and styling",
      image: "/complete-grooming.jpg",
    },
    {
      name: "Pearcing",
      // price: "AED 90",
      // duration: "40 min",
      description:
        "Traditional straight razor shave with hot towel preparation",
      image: "/hot-towel-shave.jpg",
    },
    {
      name: "Skin care",
      // price: "AED 150",
      // duration: "60 min",
      description: "Deep conditioning treatment with scalp therapy and styling",
      image: "/hair-scalp-treatment.jpg",
    },
    {
      name: "Hair Colour & Highlights",
      // price: "AED 140",
      // duration: "60 min",
      description:
        "Natural-looking color application specifically for grey coverage",
      image: "/grey-coverage.jpg",
    },
    {
      name: "Makeup Artistry",
      // price: "AED 140",
      // duration: "60 min",
      description:
        "Natural-looking color application specifically for grey coverage",
      image: "/grey-coverage.jpg",
    },
    {
      name: "Perm",
      // price: "AED 140",
      // duration: "60 min",
      description:
        "Natural-looking color application specifically for grey coverage",
      image: "/grey-coverage.jpg",
    },
  ];


  const barbers = [
    {
      name: "Fahad",
      specialty: "Classic Cuts",
      image: "/barber-fahad.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
    {
      name: "Omar",
      specialty: "Beard Styling",
      image: "/barber-omar.jpg",
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
    },
    {
      name: "Khalid",
      specialty: "Traditional Techniques",
      image: "/barber-khalid.jpg",
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
          src="/sharjah-location-hero.jpg"
          alt="Sharjah Barber Shop"
          fill
          className="object-cover z-5"
          priority
          fallbackClassName="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            NOTRYORK
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200 mb-8">
            Classic styles with modern techniques
          </p>
          <Link
            href="/notryork/checkout"
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
              <Link
                key={service.name}
                href="/notryork/checkout"
                className="group"
              >
                <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  {/* Subtle glow effect on hover */}
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
            <Link href="services" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]">
              VIEW FULL MENU
            </Link>
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
                      2528 Finch Avenue w 416 749 4757
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9AM - 8PM</p>
                    <p className="text-gray-300">Saturday: 9AM - 7PM</p>
                    <p className="text-gray-300">Sunday: 10AM - 6PM</p>
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
                    <p className="text-gray-300">Phone: +1 416-604-4066</p>
                    {/* <p className="text-gray-300">
                      Email: sharjah@mistrbarber.com
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <ImageWithFallback
                src="/sharjah-map.jpg"
                alt="Sharjah Location Map"
                fill
                className="object-cover"
                fallbackClassName="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="bg-black/70 p-4 rounded-lg backdrop-blur-sm w-full">
                  <h3 className="text-xl font-bold mb-2">Find Us</h3>
                  <p className="text-gray-300 mb-4">
                    Located in the heart of Al Nahda, easily accessible from all
                    parts of NOTRYORK.
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
            at our NOTRYORK location.
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

      <footer className="py-12 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
              MISTR BARBER
            </h3>
            <p className="text-gray-400 mb-4">
              Where gentlemen receive the royal treatment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-500 hover:text-yellow-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-amber-500 hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">HOURS</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 10AM - 9PM</li>
              <li>Saturday: 9AM - 7PM</li>
              <li>Sunday: 10AM - 6PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">CONTACT</h4>
            <ul className="text-gray-400 space-y-2">
              <h1 className="text-amber-500 font-bold mb-2">
                Mr Barber unisex{" "}
              </h1>
              <li>Email: info@mistrbarber.com</li>
              <li>Phone: +1 416-604-4066</li>
              <li>Address: 2528 Finch Avenue w 416 749 4757 </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">
            © 2024 MISTR BARBER. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
