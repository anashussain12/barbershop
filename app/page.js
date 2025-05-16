import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "./components/ImageWithFallback";
import Header from "../components/Header";

export default function Home() {
  const locations = [
    { 
      name: "ETOBICOKE", 
      image: "/dubai-barber.jpg", 
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
      description: "Premium cuts in the heart of Downtown"
    },
    { 
      name: "NOTRYORK", 
      image: "/sharjah-barber.jpg", 
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
      description: "Classic styles with modern techniques"
    },
    { 
      name: "DundasLocation", 
      image: "/ajman-barber.jpg", 
      fallbackColor: "bg-gradient-to-br from-gray-800 to-amber-900",
      description: "Relaxed atmosphere with expert service"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333333] text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#4a3c31]/50 z-10" />
        <ImageWithFallback
          src="/banner.jpeg"
          alt="Barber Shop Hero"
          fill
          className="object-cover z-5"
          priority
          fallbackClassName="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 transform -rotate-2">
            <span className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text text-lg md:text-xl font-semibold tracking-wider uppercase">Exclusive Grooming</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">MISTR BARBER</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-200 mb-8">Where gentlemen receive the royal treatment</p>
          
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <section className="py-20 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture-bg.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold relative">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">SELECT YOUR LOCATION</span>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {locations.map((location) => (
            <Link key={location.name} href={`/${location.name.toLowerCase()}`}>
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
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">{location.name}</h3>
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

      {/* Features Section */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <section className="py-20 px-6 bg-gradient-to-b from-[#333333] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">THE ROYAL EXPERIENCE</span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-3"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
              
              <div className="mb-6 text-amber-500 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">Master Stylists</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">Our elite team of barbers are trained in both classic and contemporary techniques to deliver the perfect cut.</p>
              
              {/* Subtle border highlight effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
            </div>
            
            <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
              
              <div className="mb-6 text-amber-500 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">Luxury Amenities</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">Complimentary premium beverages, hot towel service, and relaxing scalp massage with every visit.</p>
              
              {/* Subtle border highlight effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
            </div>
            
            <div className="p-8 rounded-lg bg-gradient-to-b from-[#2d2d2d]/90 to-[#1a1a1a]/90 backdrop-blur-sm border border-white/5 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
              
              <div className="mb-6 text-amber-500 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text relative z-10">VIP Membership</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">Join our exclusive membership program for priority bookings, special rates, and complimentary grooming products.</p>
              
              {/* Subtle border highlight effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-lg transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <section className="py-20 px-6 bg-[#1a1a1a] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/texture-bg.jpg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-amber-500 mb-8 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl font-light italic text-gray-200 mb-8">The attention to detail and personalized service at MISTR BARBER is unmatched. It&aposs more than a haircut—it&aposs an experience every gentleman deserves.</p>
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

      {/* Footer */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <footer className="py-12 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">MISTR BARBER</h3>
            <p className="text-gray-400 mb-4">Where gentlemen receive the royal treatment.</p>
            <div className="flex space-x-4">
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
              <li>Email: info@mistrbarber.com</li>
              <li>Phone: +1 416-604-4066</li>
              <li>Address: 2912 Dundas St W, Toronto</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500">© 2024 MISTR BARBER. All rights reserved.</p>
        </div>
      </footer>
    </main>
    // </main>
    // </main>
  );
}
