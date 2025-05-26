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
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          <h2 className="w-fit mx-auto text-5xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
            SERVICES
            <span className="block h-px w-24 mx-auto mt-3 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          </h2>

          {/* grid */}
          <div className="grid gap-10 lg:gap-14 sm:grid-cols-2">
            {notryorkservices.map((svc) => (
              <Link
                key={svc.notname}
                href="/notryork/checkout"
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

      <footer className="py-12 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex justify-center items-center ">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
              MR.BARBER UNISEX SALON
            </h3>
            <p className="text-gray-400 mb-4">
              Where gentlemen receive the royal treatment.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-amber-500 hover:text-yellow-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-amber-500 hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div> */}
          </div>
          {/* <div>
            <h4 className="text-white font-bold mb-4">HOURS</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 10AM - 9PM</li>
              <li>Saturday: 9AM - 7PM</li>
              <li>Sunday: 10AM - 6PM</li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-white font-bold mb-4">CONTACT</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Email: Mr.BarberUnisexBeautySalon@gmail.com</li>
              <li>Phone: +1 416-604-4066</li>
              <li>Address: 2912 Dundas St W, Toronto</li>
              
            </ul>
          </div> */}
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
