import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "../components/ImageWithFallback";
import Header from "../../components/Header";

export default function DubaiPage() {
  // Hair Color and Highlights
  const services = [
    // ETOBICOKE SERVICES
    {
      name: "Individual Highlights",
      price: "$10",
      location: "Etobicoke",
      // duration: "45 min",
      // description:
      //   "Precision cut with styling, hot towel refreshment, and scalp massage",
      image: "/royal-haircut.jpeg",
    },
    {
      name: "Cap Highlights",
      price: "$60",
      location: "Etobicoke",
      // duration: "30 min",
      // description:
      //   "Expert beard shaping with hot towel treatment and essential oils",
      image: "/beard-sculpting.jpg",
    },
    {
      name: "Hair Colour for Men with Wash",
      price: "$20",
      location: "Etobicoke",
      // duration: "75 min",
      // description: "Haircut, beard trim, facial cleanse, and styling",
      image: "/complete-grooming.jpg",
    },
    {
      name: "Hair Smoothing",
      price: "$200 & up",
      location: "Etobicoke",
      // duration: "40 min",
      // description:
      //   "Traditional straight razor shave with hot towel preparation",
      image: "/hot-towel-shave.jpg",
    },
    {
      name: "Hair Keratin",
      price: "$200 & up",

      location: "Etobicoke",
      // duration: "60 min",
      // description: "Deep conditioning treatment with scalp therapy and styling",
      image: "/hair-scalp-treatment.jpg",
    },
    {
      name: "Women Root Touchup",
      price: "$35",
      location: "Etobicoke",
      // duration: "60 min",
      // description:
      //   "Natural-looking color application specifically for grey coverage",
      image: "/grey-coverage.jpg",
    },
  ];

  const notryorkservices = [
    // NOTRYORK SERVICES

    {
      notname: "Gentleman's Package",
      notprice: "AED 150",
      notlocation: "Notryork",
      notduration: "65 min",
      notdescription:
        "Haircut, beard trim, facial scrub, and relaxing scalp massage",
      notimage: "/package.jpg",
    },

    {
      notname: "Beard Trim",
      notprice: "AED 60",
      notlocation: "Notryork",
      notduration: "25 min",
      notdescription:
        "Expert beard shaping with essential oils and moisturizing treatment",
      notimage: "/beard-trim.jpg",
    },

    {
      notname: "Father & Son",
      notprice: "AED 130",
      notlocation: "Notryork",
      notduration: "60 min",
      notdescription: "Haircuts for both father and son in a shared experience",
      notimage: "/father-son.jpg",
    },

    {
      notname: "Traditional Shave",
      notprice: "AED 70",
      notlocation: "Notryork",
      notduration: "35 min",
      notdescription:
        "Classic straight razor shave with pre and post-shave treatments",
      notimage: "/hot-towel-shave.jpg",
    },
    {
      notname: "Classic Cut",
      notprice: "AED 90",
      notlocation: "Notryork",
      notduration: "40 min",
      notdescription:
        "Traditional haircut with precision styling and hot towel finish",
      notimage: "/classic-cut.jpg",
    },
    {
      notname: "Hair Coloring",
      notprice: "AED 120",
      notlocation: "Notryork",
      notduration: "60 min",
      notdescription:
        "Professional color application with natural-looking results",
      notimage: "/hair-color.jpg",
    },
  ];

  const dundasservices = [
    {
      dundasname: "Relaxed Cut",
      dundasprice: "AED 80",
      dundaslocation: "DundasLocation",
      dundasduration: "35 min",
      dundasdescription:
        "Laid-back haircut with styling and complimentary beverage",
      dundasimage: "/relaxed.jpg",
    },
    {
      dundasname: "Express Trim",
      dundasprice: "AED 50",
      dundaslocation: "DundasLocation",
      dundasduration: "20 min",
      dundasdescription: "Quick touch-up for those on the go, includes styling",
      dundasimage: "/beard-trim.jpg",
    },
    {
      dundasname: "Full Experience",
      dundasprice: "AED 140",
      dundaslocation: "DundasLocation",
      dundasduration: "70 min",
      dundasdescription: "Haircut, beard trim, face mask, and shoulder massage",
      dundasimage: "/complete-grooming.jpg",
    },
    {
      dundasname: "Beard Design",
      dundasprice: "AED 65",
      dundaslocation: "DundasLocation",
      dundasduration: "30 min",
      dundasdescription:
        "Creative beard styling with precision detailing and conditioning",
      dundasimage: "/beard-sculpting.jpg",
    },
    {
      dundasname: "Senior Special",
      dundasprice: "AED 70",
      dundaslocation: "DundasLocation",
      dundasduration: "40 min",
      dundasdescription:
        "Specialized service for our distinguished senior clients",
      dundasimage: "/gentle-cut.jpg",
    },
    {
      dundasname: "Kids Cut",
      dundasprice: "AED 60",
      dundaslocation: "DundasLocation",
      dundasduration: "25 min",
      dundasdescription: "Fun and friendly haircuts for the little gentlemen",
      dundasimage: "/kids.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333333] text-white">
      <Header />
      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#333333] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-5xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
                SERVICES
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
            </h2>
          </div>
          {/* ETOBICOKE MAP  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                href="/etobicoke/checkout"
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
                  <p className="text-white font-semibold mb-2 relative z-10">
                    <span className="text-amber-500 pr-1">Location:</span>{" "}
                    {service.location}
                  </p>
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
          {/* NOTRYORK MAP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notryorkservices.map((notryorkservice) => (
              <Link
                key={notryorkservice.notname}
                href="/notryork/checkout"
                className="group"
              >
                <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                  <Image
                    src={notryorkservice.notimage}
                    alt={notryorkservice.notname}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">
                    {notryorkservice.notname}
                  </h3>
                  <div className="flex justify-between mb-4 relative z-10">
                    <span className="text-amber-500 font-bold">
                      {notryorkservice.notprice}
                    </span>
                    <span className="text-gray-400">
                      {notryorkservice.notduration}
                    </span>
                  </div>
                  <p className="text-white font-semibold mb-2 relative z-10">
                    <span className="text-amber-500 pr-1">Location:</span>{" "}
                    {notryorkservice.notlocation}
                  </p>
                  <p className="text-gray-300 mb-6 relative z-10">
                    {notryorkservice.notdescription}
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
          {/* DUNDASLOCATION MAP  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dundasservices.map((dundaslocationservice) => (
              <Link
                key={dundaslocationservice.name}
                href="/dundaslocation/checkout"
                className="group"
              >
                <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle glow effect on hover */}

                  <Image
                    src={dundaslocationservice.dundasimage}
                    alt={dundaslocationservice.dundasname}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>

                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">
                    {dundaslocationservice.dundasname}
                  </h3>
                  <div className="flex justify-between mb-4 relative z-10">
                    <span className="text-amber-500 font-bold">
                      {dundaslocationservice.dundasprice}
                    </span>
                    <span className="text-gray-400">
                      {dundaslocationservice.dundasduration}
                    </span>
                  </div>
                  <p className="text-white font-semibold mb-2 relative z-10">
                    <span className="text-amber-500 pr-1">Location:</span>{" "}
                    {dundaslocationservice.dundaslocation}
                  </p>
                  <p className="text-gray-300 mb-6 relative z-10">
                    {dundaslocationservice.dundasdescription}
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
        </div>
      </section>

      {/* Footer */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
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
              <li>Phone: +971 4 123 4567</li>
              <li>Address: 1625 albion Road 416 749 7900 </li>
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
//
//
//
