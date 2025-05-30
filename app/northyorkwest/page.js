import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";

export default function DubaiPage() {
  const notryorkservices = [
    {
      notname: "Hair Cut & Styling ",
      notdescription: [
        "Men Haircut",
        "Women Haircut & wash",
        "Women Haircut & style",
        "Women Hair Shampoo & Blow dry",
        "Women oil head massage",
        "Kids Hair cut",
        "Girls Hair cut under age",
        "Women layers cut",
        "Hair straightening",
        "Ladies shampoo",
        "Mens beard cut",
      ],
      notimage: "/package.jpg",
    },
    {
      notname: "Threading",
      notdescription: [
        "Eyebrow",
        "Upper lips",
        "Chin",
        "Forehead",
        "Full face",
        "Full face & Neck",
        "Mens threading",
      ],
      notimage: "/threadingmen.png",
    },
    {
      notname: "Skin care",
      notdescription: [
        "Men facial staring",
        "Full face bleach",
        "Herbal facial",
        "Gold facial",
        "Diamond facial",
        "Acne facial",
      ],
      notimage: "/skincare.jpg",
    },
    {
      notname: "Hair colour & Highlights",
      notdescription: [
        "Individual highlights",
        "Cap highlights",
        "Hair colour for men with mesh",
        "Hair smoothing",
        "Hair keratin",
        "Women root touchup",
      ],
      notimage: "/highlighthair.png",
    },
    {
      notname: "Makeup Artistry",
      notdescription: [
        "Party makeup",
        "Party hairstyles",
        "Full bridal makeup in salon",
        "Bridal mehndi",
        "Mehndi per hand",
      ],
      notimage: "/artistry.jpg",
    },
    {
      notname: "Piercing",
      notdescription: ["Ear", "Nose"],
      notimage: "/piercing.jpg",
    },
    {
      notname: "Waxing",
      notdescription: [
        "Eyebrow",
        "Upper lips",
        "Chin",
        "Forehead",
        "Full face",
        "Under arm",
        "Full arm",
        "Full legs",
        "Half legs",
        "Stomach",
        "Full back",
        "Full body",
        "Brazilian",
        "Bikini/Line",
      ],
      notimage: "/waxing.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333] text-white">
      <Header />

 <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#4a3c31]/50 z-10" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            NORTHYORK WEST
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200 mb-8">
            Classic styles with modern techniques
          </p>
          <Link
            href="/northyorkwest/checkout"
            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          <h2 className="w-fit mx-auto text-5xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
           OUR SERVICES
            <span className="block h-px w-24 mx-auto mt-3 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          </h2>

          {/* grid */}
          <div className="grid gap-10 lg:gap-14 sm:grid-cols-2">
            {notryorkservices.map((svc) => (
              <Link
                key={svc.notname}
                href="/northyorkwest/checkout"
                className="group relative rounded-2xl overflow-hidden "
              >
                {/* container */}
                <article className="flex flex-col lg:flex-row bg-gradient-to-b from-[#2d2d2d]/80 to-[#1a1a1a]/80 backdrop-blur-sm">
                  {/* image */}
                  <Image
                    src={svc.notimage}
                    alt={svc.notname}
                    width={400}
                    height={300}
                    className="object-cover w-full lg:w-64 h-56 lg:h-auto"
                  />

                  {/* text panel */}
                  <div className="flex flex-col flex-1 p-6 lg:p-8">
                    {/* title */}
                    <header className="mb-2">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                        {svc.notname}
                      </h3>
                      <div className="h-0.5 w-20 bg-gradient-to-r from-amber-500 to-yellow-400 mt-1" />
                    </header>

                    {/* description list */}
                    <ul className="flex-1 space-y-1 list-disc list-inside text-gray-300/90">
                      {svc.notdescription.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="pt-6 text-right">
                      <span
                        className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 px-4 py-2 rounded font-bold text-black
                                         group-hover:from-amber-400 group-hover:to-yellow-300 transition"
                      >
                        BOOK NOW
                      </span>
                    </div>
                  </div>
                </article>

                {/* soft glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>
              <section className="py-16 px-6 bg-[#1a1a1a]">
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
                    <p className="text-gray-300">Location: North York West</p>
                    <p className="text-gray-300">
                      Address: 2528 Finch Avenue w 
                    </p>
                    <p className="text-gray-300">
                      Phone number: +1 416-749-4757 
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
                   <p className="text-gray-300">Tuesday - Saturday: 10AM - 8PM</p>
                    <p className="text-gray-300">Sunday - Monday: 10AM - 7PM</p>
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
                    <p className="text-gray-300">Phone: +1 416-749-4757</p>
                    <p className="text-gray-300">
                      Email: Mr.BarberUnisexBeautySalon@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

            <footer className="py-12 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex justify-center items-center ">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">MR.BARBER UNISEX SALON</h3>
            <p className="text-gray-400 mb-4">Where gentlemen receive the royal treatment.</p>
           
          </div>
          
        </div>
        <div className="mt-12  pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">© 2024 MR.BARBER UNISEX SALON. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
