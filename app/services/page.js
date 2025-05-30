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
