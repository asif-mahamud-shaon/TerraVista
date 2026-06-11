"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import SearchBar from "@/components/properties/SearchBar";
import Footer from "@/components/layout/Footer";
import {
  Compass,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Globe,
  ChevronDown,
  Menu,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What Services Does TerraVista Offer?",
      a: "We specialize in ultra-luxury property brokerage, off-market asset sourcing, investment yield optimization, and architectural consulting for legacy properties."
    },
    {
      q: "Do You Design and Source Both Residential and Commercial Projects?",
      a: "Yes. Our portfolio includes private beachfront villas, central business high-rises, boutique retail complexes, and private island retreats."
    },
    {
      q: "How Does the Yield Comparative ROI System Work?",
      a: "Registered clients gain access to our live comparative ROI matrices, tracking year-over-year growth, demand index scoring, and historical asset appreciation."
    },
    {
      q: "Can I Schedule a Virtual 3D Site Tour?",
      a: "Absolutely. All signature listings support high-definition virtual tours, aerial drone sweeps, and remote spatial walkthroughs guided by our lead brokers."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:border-gold/25 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left px-6 py-5 flex justify-between items-center text-primary font-bold text-xs uppercase tracking-wider hover:text-gold transition-colors focus:outline-none"
            >
              <span>{faq.q}</span>
              <span className={`text-gold text-lg transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-40 border-t border-black/5" : "max-h-0"
              }`}
            >
              <p className="px-6 py-5 text-xs text-slate-500 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    startAutoplay(); // Reset the 5s timer
  };

  const slides = [
    {
      image: "/images/hero_building.png",
      title: "Modérn Residences",
      subtitle: "Sunset Organic Villa",
      specTag: "Materials",
      specTitle: "Crafted with Precision",
      specSub: "Wood &bull; Concrete &bull; Glass",
      specDesc: "We use premium materials and sustainable architectural technology to create modern structures that stand the test of time.",
    },
    {
      image: "/images/residential_mansion.png",
      title: "Waterfront Estate",
      subtitle: "Dusk Blue Mansion",
      specTag: "Waterfront",
      specTitle: "Infinite Ocean Views",
      specSub: "Travertine &bull; Bronze &bull; Water",
      specDesc: "Designed with flowing lines that transition seamlessly from marble indoor halls to cantilevered private beach docks.",
    },
    {
      image: "/images/business_center.png",
      title: "Helix Business Center",
      subtitle: "Louvered Glass Skyscraper",
      specTag: "Commercial",
      specTitle: "Aerodynamic Louvers",
      specSub: "Steel &bull; Glass &bull; Titanium",
      specDesc: "A towering spire engineered with automated aerodynamic louvers that reduce solar heat by 45% while optimizing daylight.",
    },
    {
      image: "/images/commercial_complex.png",
      title: "Aura Retail Gallery",
      subtitle: "Curved Concrete Canopy",
      specTag: "Retail",
      specTitle: "Fluid Public Spaces",
      specSub: "Concrete &bull; Terrazzo",
      specDesc: "An open-air retail canopy featuring self-supporting curved arches and high-durability marble terrazzo floorings.",
    },
    {
      image: "/images/sky_penthouse.png",
      title: "Stellar Penthouse",
      subtitle: "Metropolitan Sky Oasis",
      specTag: "Penthouse",
      specTitle: "Gravity-Defying Design",
      specSub: "Acrylic Pool &bull; Onyx &bull; Slate",
      specDesc: "An ultra-exclusive sky sanctuary with a double-cantilevered transparent acrylic pool suspended 200 meters above the metropolis.",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white overflow-x-hidden">
      
      {/* Custom Keyframes & Animations Style tag */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* SECTION 1 – CINEMATIC 3D SLIDER HERO (Full Screen Height, no scroll-jacking) */}
      <section className="relative h-screen w-full bg-[#050811] z-0">
        
        {/* Full-bleed 3D Background Slides */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
          {slides.map((slide, idx) => {
            let diff = idx - activeIndex;
            if (diff < -2) diff += 5;
            if (diff > 2) diff -= 5;

            let opacity = 0;
            let transform = "";
            let zIndex = 0;

            if (diff === 0) {
              opacity = 1;
              transform = "translate3d(0, 0, 0) rotateY(0deg) scale(1)";
              zIndex = 10;
            } else if (diff === 1) {
              opacity = 0;
              transform = "translate3d(100%, 0, -150px) rotateY(-20deg) scale(0.9)";
              zIndex = 5;
            } else if (diff === -1) {
              opacity = 0;
              transform = "translate3d(-100%, 0, -150px) rotateY(20deg) scale(0.9)";
              zIndex = 5;
            } else {
              opacity = 0;
              transform = diff > 0 
                ? "translate3d(150%, 0, -250px) rotateY(-30deg) scale(0.85)" 
                : "translate3d(-150%, 0, -250px) rotateY(30deg) scale(0.85)";
              zIndex = 0;
            }

            return (
              <div
                key={idx}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  opacity: opacity,
                  transform: transform,
                  zIndex: zIndex,
                  transition: "all 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: "none",
                }}
              />
            );
          })}
        </div>

        {/* Dark luxury glass overlay for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10 pointer-events-none" />

        {/* Hero Container layout */}
        <div className="relative h-full w-full flex flex-col justify-start p-6 md:p-8 z-20">
          
          {/* Header */}
          <header className="relative flex justify-between items-center z-20 w-full">
            {/* Left Buttons */}
            <div className="flex space-x-3">
              <Link
                href="/contact"
                className="px-5 py-2 border border-white/20 hover:border-white rounded-full text-xs font-semibold tracking-wider text-white transition-all backdrop-blur-sm"
              >
                Home
              </Link>
              <Link
                href="/agents"
                className="px-5 py-2 border border-white/20 hover:border-white rounded-full text-xs font-semibold tracking-wider text-white transition-all backdrop-blur-sm hidden sm:inline-block"
              >
                Agents
              </Link>
              <Link
                href="/investment"
                className="px-5 py-2 border border-white/20 hover:border-white rounded-full text-xs font-semibold tracking-wider text-white transition-all backdrop-blur-sm hidden md:inline-block"
              >
                Collection
              </Link>
            </div>

            {/* Logo center */}
            <Link href="/" className="font-playfair text-xl tracking-[0.2em] font-black uppercase text-white">
              TERRA<span className="text-gold">VISTA</span>
            </Link>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-5 py-2 bg-white text-primary hover:bg-gold hover:text-primary rounded-full text-xs font-bold tracking-wider transition-all shadow-lg hidden sm:inline-block"
              >
                +971 4 555 0199
              </Link>
              <Link
                href="/properties"
                className="px-5 py-2 border border-white/20 hover:border-white rounded-full text-xs font-semibold tracking-wider text-white transition-all backdrop-blur-sm"
              >
                Start Exploring
              </Link>
            </div>
          </header>

          {/* Right Sticky Indicator Dots */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center group relative ${
                  activeIndex === idx
                    ? "border-gold bg-gold scale-125 shadow-lg shadow-gold/45"
                    : "border-white/40 hover:border-white bg-transparent"
                }`}
                title={`Slide ${idx + 1}`}
              >
                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-white bg-[#0B1220]/90 border border-white/10 px-2.5 py-1 rounded-sm whitespace-nowrap tracking-wider font-bold">
                  {slides[idx].title}
                </span>
              </button>
            ))}
          </div>

          {/* Central Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col justify-start mt-10 md:mt-14 lg:mt-16">
            
            {/* Left Side: Large Text & Buttons */}
            <div className="max-w-3xl space-y-6 text-left animate-fade-slide-up">
              <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Premium Properties</span>
              
              <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl font-black text-white leading-tight tracking-tight">
                Find Your <span className="text-gold">Dream Home</span> <br />
                <span className="font-light italic text-white/90">Live the Luxury</span>
              </h1>
              
              <p className="text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
                Discover exceptional properties that redefine luxury living. Your perfect home is just a step away.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/properties"
                  className="px-8 py-4 bg-gold hover:bg-gold-hover text-white font-bold text-xs tracking-widest uppercase transition-all rounded-full shadow-2xl shadow-gold/20 hover:shadow-gold/45 hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
                >
                  <span>Explore Properties</span>
                  <span className="text-sm">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-bold text-xs tracking-widest uppercase transition-all rounded-full cursor-pointer hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

          </div>

          {/* Floating Search Bar Overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-5xl px-6 z-30">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* SECTION A – FROM VISION TO CREATION */}
      <section className="bg-white pt-80 md:pt-64 lg:pt-48 pb-24 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Architecture Studio</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-black text-primary leading-tight">
                From Vision To Creation, <br />Flawlessly
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pl-12 space-y-4">
              <p className="text-xs text-slate-550 font-light leading-relaxed">
                From modern homes and commercial buildings to urban planning and interior concepts, TerraVista delivers timeless designs built with precision, passion, and unparalleled luxury standard.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="px-5 py-2.5 border border-primary/20 hover:border-gold text-primary hover:text-gold rounded-full text-xs font-semibold tracking-wider transition-all"
                >
                  Explore Studio
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
            {/* Left Card: Vertical render */}
            <div className="md:col-span-5 bg-slate-50 border border-black/5 rounded-[32px] overflow-hidden group hover:border-gold/30 hover:shadow-xl transition-all duration-500 h-[480px] flex flex-col justify-between p-6 relative">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent z-10" />
              </div>
              <span className="relative z-20 self-start bg-gold/90 text-primary text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-gold/30">
                Studio Signature
              </span>
              <div className="relative z-20 text-white space-y-2">
                <h3 className="font-playfair font-bold text-xl leading-snug">Shaping The Future Of Design</h3>
                <p className="text-[10px] text-white/80 font-light">Organic architectures matching natural topographies.</p>
              </div>
            </div>

            {/* Right Group: 2 rows */}
            <div className="md:col-span-7 flex flex-col gap-8">
              {/* Top Row: Spaces That Tell Stories */}
              <div className="bg-slate-50 border border-black/5 rounded-[32px] p-8 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-gold/30 hover:shadow-xl transition-all duration-500">
                <div className="space-y-4 max-w-sm">
                  <h3 className="font-playfair font-black text-2xl text-primary leading-tight">Spaces That Tell Stories</h3>
                  <p className="text-xs text-slate-550 font-light leading-relaxed">
                    Every texture, angle, and lighting coordinate is calibrated to align with human experience and prestige living.
                  </p>
                  <div className="flex items-center space-x-4 pt-2">
                    <div className="flex -space-x-2.5">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">12.0K Registered Clients</span>
                  </div>
                </div>
                <div className="w-full md:w-48 h-36 rounded-2xl overflow-hidden relative border border-black/5 shrink-0 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Bottom Row: Minimalist layout info card */}
              <div className="bg-slate-50 border border-black/5 rounded-[32px] overflow-hidden group hover:border-gold/30 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-stretch min-h-[200px]">
                <div className="md:w-1/2 h-48 md:h-auto relative bg-white border-r border-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[8px] bg-gold/15 text-gold font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                      Materials
                    </span>
                    <h4 className="font-playfair font-bold text-lg text-primary pt-1">Bespoke Spatial Crafting</h4>
                    <p className="text-[11px] text-slate-555 font-light leading-relaxed">
                      Custom travertine, micro-cement finishes, and structural glass canopies tailored to regional microclimates.
                    </p>
                  </div>
                  <Link href="/properties" className="text-[10px] text-primary hover:text-gold transition-colors font-bold uppercase tracking-wider flex items-center space-x-1">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3 h-3 text-gold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION B – TURNING IDEAS INTO SUSTAINABLE SPACES */}
      <section className="bg-white py-24 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Vertical stack of categories */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-black/5 rounded-[32px] p-6.5 space-y-4 shadow-sm">
                <div className="flex justify-between items-center border-b border-black/5 pb-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">All Categories</span>
                  <span className="text-[10px] text-gold font-bold uppercase">In Stock</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { title: "Bold Ideas, Brilliant Structures", desc: "Premium architectural templates for skyline icons.", value: "15.0", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=100&q=80" },
                    { title: "Inspiring Life Through Design", desc: "Integrated organic layouts for tranquil family sanctuaries.", value: "15.0", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=100&q=80" },
                    { title: "Excellence in Every Detail", desc: "Bespoke specifications built with imported materials.", value: "15.0", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=100&q=80" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white border border-black/[0.03] p-3.5 rounded-2xl hover:border-gold/30 hover:shadow-md transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-black/5 relative bg-slate-50">
                          <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div>
                          <h4 className="font-playfair font-bold text-xs text-primary group-hover:text-gold transition-colors">{item.title}</h4>
                          <p className="text-[9px] text-slate-400 font-light mt-0.5 line-clamp-1">{item.desc}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 font-mono pl-3">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Title and wide render preview */}
            <div className="lg:col-span-7 space-y-8 lg:pl-6">
              <div className="space-y-4">
                <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Sustainable Future</span>
                <h2 className="font-playfair text-4xl md:text-5xl font-black text-primary leading-tight">
                  Turning Ideas Into <br />Sustainable Spaces
                </h2>
                <p className="text-xs text-slate-550 font-light leading-relaxed max-w-xl">
                  We lead the global market in carbon-neutral structural materials and smart home solar battery networks, delivering zero-emission wellness zones across the Mediterranean and Gulf regions.
                </p>
                <div className="pt-2">
                  <Link
                    href="/properties"
                    className="px-6 py-2.5 bg-primary hover:bg-gold text-white hover:text-primary rounded-full text-xs font-bold tracking-wider transition-all shadow-md"
                  >
                    Explore Sustainable Collection
                  </Link>
                </div>
              </div>

              <div className="h-64 rounded-[32px] overflow-hidden relative border border-black/5 bg-slate-50 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="TerraVista Sustainable Canopy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 – PORTFOLIO METRICS SECTION */}
      <section className="bg-white pt-16 pb-28 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Flanking tag borders */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-gold/15 py-4.5 text-[9px] tracking-[0.2em] uppercase font-bold text-slate-505 gap-4">
            <div className="flex space-x-6 text-slate-500">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5 animate-pulse" />PUBLIC</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5 animate-pulse" />QUALITY</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5 animate-pulse" />INNOVATION</span>
            </div>
            <div className="flex space-x-6 text-slate-500">
              <span>Architectural style: Neo-modern</span>
              <span>&bull;</span>
              <span>Completion status: 2026+</span>
            </div>
          </div>

          {/* Section title */}
          <div className="text-center space-y-4">
            <div className="w-8 h-8 mx-auto rounded-full border border-gold/45 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-wide text-primary leading-tight">
              We built <span className="bg-gradient-to-r from-gold to-gold-hover bg-clip-text text-transparent">50+ architectural</span> <br />
              & residential projects
            </h2>
            <p className="text-xs text-slate-500 font-light max-w-sm mx-auto leading-relaxed">
              A bold vision of living spaces that merge innovation, precision, and timeless aesthetics.
            </p>
          </div>

          {/* Three-Card Flanked Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
            
            {/* Left Card: Commercial */}
            <div className="lg:col-span-3 bg-white p-4.5 rounded-[32px] border border-black/[0.05] shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 group transform hover:-translate-y-1.5 flex flex-col justify-between">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-100 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/commercial_complex.png"
                  alt="TerraVista Commercial Complex"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2 px-1 pb-1">
                <span className="bg-gold/10 text-gold text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                  commercial
                </span>
                <h3 className="font-playfair font-bold text-sm text-primary pt-2.5">
                  Modern Commercial Complex
                </h3>
                <p className="text-[10px] text-slate-400 font-light">Global business workspaces</p>
              </div>
            </div>

            {/* Center Card: Large Stats Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-white to-slate-50/50 border border-gold/25 p-10 rounded-[36px] space-y-8 text-center relative overflow-hidden group shadow-md hover:shadow-2xl hover:border-gold/45 transition-all duration-500 flex flex-col justify-center">
              
              {/* background design visual (extremely subtle light watermark) */}
              <div className="absolute inset-0 opacity-5 pointer-events-none filter grayscale">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/residential_mansion.png"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <div className="relative z-10 space-y-8 py-4 w-full">
                <div className="grid grid-cols-2 gap-8 divide-x divide-gold/15">
                  <div className="space-y-2.5">
                    <p className="font-playfair text-5xl md:text-6xl font-black bg-gradient-to-r from-gold via-gold-hover to-gold bg-clip-text text-transparent">500k+</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-400">sq meters built</p>
                  </div>
                  <div className="space-y-2.5">
                    <p className="font-playfair text-5xl md:text-6xl font-black bg-gradient-to-r from-gold via-gold-hover to-gold bg-clip-text text-transparent">120+</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-400">real projects</p>
                  </div>
                </div>

                <div className="border-t border-gold/15 pt-8">
                  <span className="bg-gold/15 border border-gold/30 text-gold text-[9px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full font-bold">
                    residence
                  </span>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-primary mt-6 tracking-wide leading-relaxed">
                    TerraVista Completed <br /> Residential Project
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Card: Residential */}
            <div className="lg:col-span-3 bg-white p-4.5 rounded-[32px] border border-black/[0.05] shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 group transform hover:-translate-y-1.5 flex flex-col justify-between">
              <div className="h-64 rounded-2xl overflow-hidden relative bg-slate-100 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/residential_mansion.png"
                  alt="TerraVista Luxury Residence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2 px-1 pb-1">
                <span className="bg-gold/10 text-gold text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                  residential
                </span>
                <h3 className="font-playfair font-bold text-sm text-primary pt-2.5">
                  Luxury Private Residence
                </h3>
                <p className="text-[10px] text-slate-400 font-light">Custom waterfront properties</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C – PROJECTS WITH PASSION AND CARE */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto relative pt-8">
          
          {/* Protruding Tab "Graph / metrics" */}
          <div className="absolute -top-[16px] left-12 bg-primary border-t border-x border-gold/30 rounded-t-2xl px-6 py-2.5 text-[9px] tracking-[0.2em] font-bold text-gold uppercase z-20 hidden md:block">
            Portfolio Graph & Metrics
          </div>

          <div className="bg-primary text-white rounded-[40px] border border-gold/25 p-8 md:p-14 relative overflow-hidden shadow-2xl space-y-12">
            
            {/* background subtle watermark */}
            <div className="absolute inset-0 opacity-10 pointer-events-none filter grayscale">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/10 pb-10">
              <div className="space-y-3 max-w-xl">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold leading-tight tracking-wide">
                  Projects Designed With Passion And Care.
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Every signature TerraVista development coordinates regional engineering regulations with premium visual aesthetics to enhance capital yield valuation.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 shrink-0">
                <div className="flex -space-x-3.5 bg-black/20 p-2 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary relative">
                    <img src="/images/commercial_complex.png" alt="" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-primary relative">
                    <img src="/images/residential_mansion.png" alt="" className="object-cover w-full h-full" />
                  </div>
                </div>
                <Link
                  href="/properties"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-gold hover:text-white transition-colors uppercase tracking-widest pl-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="space-y-2 md:pr-8">
                <h4 className="font-playfair text-5xl font-black text-gold">50%</h4>
                <p className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Carbon Neutral Integration</p>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">
                  We believe architecture is not just about structure, but about environmental synergy.
                </p>
              </div>
              <div className="space-y-2 pt-6 md:pt-0 md:px-10">
                <h4 className="font-playfair text-5xl font-black text-gold">12.0K</h4>
                <p className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Hours of Calibration</p>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">
                  We believe architecture is not just about structure, but about human-centric geometry.
                </p>
              </div>
              <div className="space-y-2 pt-6 md:pt-0 md:pl-10">
                <h4 className="font-playfair text-5xl font-black text-gold">23M+</h4>
                <p className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Capital Value Appreciation</p>
                <p className="text-[11px] text-white/70 font-light leading-relaxed">
                  We believe architecture is not just about structure, but about compounding asset value.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 – STUDIO VISION & BUSINESS TOWER */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="w-8 h-8 mx-auto rounded-full border border-gold/40 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-gold" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold tracking-wide max-w-4xl mx-auto leading-tight text-primary">
              TerraVista Architecture — a design studio <br />
              focused on <span className="text-gold">form, function,</span> and human experience
            </h2>
            <p className="text-xs text-slate-500 font-light max-w-sm mx-auto leading-relaxed">
              A bold vision of living spaces that merge innovation, precision, and timeless aesthetics.
            </p>
          </div>

          {/* Details split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            
            {/* Left element: Small thumbnail preview */}
            <div className="lg:col-span-3 space-y-4 group hidden lg:block">
              <div className="h-48 rounded-2xl overflow-hidden border border-black/5 relative bg-secondary shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/business_center.png"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-xs text-primary">Modern Business Center</h4>
                <p className="text-[9px] text-slate-550 mt-0.5">Commercial high-rises portfolio</p>
              </div>
            </div>

            {/* Center element: Featured vertical tower render */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[360px] h-[480px] rounded-3xl overflow-hidden border border-black/5 bg-secondary relative group shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/business_center.png"
                  alt="TerraVista Business Center Tower"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right element: Text description, buttons and avatars */}
            <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-8">
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold leading-tight text-primary">
                  The future of architecture isn&apos;t about what looks impressive today.
                </h3>
                <p className="text-xs text-slate-550 font-light leading-relaxed">
                  It&apos;s about creating spaces that inspire, evoke, and last. Merging sustainable technology, organic layout shapes, and premium capital structures.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex space-x-3">
                <Link
                  href="/about"
                  className="px-6 py-2.5 border border-primary/20 hover:border-gold text-primary hover:text-gold rounded-full text-xs font-semibold tracking-wider transition-all"
                >
                  Reviews
                </Link>
                <Link
                  href="/properties"
                  className="px-6 py-2.5 border border-primary/20 hover:border-gold rounded-full text-xs font-semibold tracking-wider transition-all bg-primary text-white hover:bg-transparent hover:text-primary shadow-md"
                >
                  Our approach
                </Link>
              </div>

              {/* Partner Avatars */}
              <div className="flex items-center space-x-4 pt-4 border-t border-black/5">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-light leading-relaxed">
                    Over 50 partners across Europe and the US trust TerraVista to build the future.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Footer border segment */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-black/5 pt-8 text-[10px] tracking-widest uppercase font-bold text-slate-500 gap-4">
            <div className="flex space-x-6">
              <span>PUBLIC</span>
              <span>QUALITY</span>
              <span>INNOVATION</span>
            </div>
            <div className="flex space-x-6">
              <span>Architectural style: Neo-modern</span>
              <span>Completion status: 2026+</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION D – WITH POWERFUL ACQUISITION STRATEGIES */}
      <section className="bg-slate-50/50 py-24 px-6 border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: content details & progress parameters */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Acquisition Intelligence</span>
                <h2 className="font-playfair text-4xl md:text-5xl font-black text-primary leading-tight">
                  With Powerful Acquisition <br />Strategies
                </h2>
                <p className="text-xs text-slate-550 font-light leading-relaxed">
                  TerraVista acts as a bespoke sourcing bureau, leveraging global transactional networks to acquire properties before they reach public listing boards.
                </p>
              </div>

              {/* Progress parameter meters */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-primary">
                    <span>Acquisition Precision Match</span>
                    <span className="text-gold">95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-primary">
                    <span>Client Trust Retention Index</span>
                    <span className="text-gold">90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-6">
                <Link
                  href="/investment"
                  className="px-6 py-2.5 border border-primary/20 hover:border-gold rounded-full text-xs font-bold tracking-wider text-primary hover:text-gold transition-all"
                >
                  Explore Yields
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-widest text-primary hover:text-gold transition-colors flex items-center space-x-1.5"
                >
                  <span>Consult Sourcing Agent</span>
                  <ArrowUpRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>

            {/* Right side: collage photos */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[480px] h-[400px]">
                
                {/* Main large back image */}
                <div className="w-[80%] h-[80%] rounded-[32px] overflow-hidden border border-black/5 bg-white shadow-lg absolute top-0 left-0 group">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Overlap front image */}
                <div className="w-[55%] h-[55%] rounded-[24px] overflow-hidden border-4 border-white bg-white shadow-2xl absolute bottom-0 right-0 group z-10 transform hover:translate-y-[-4px] transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=500&q=80"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Overlap client review tag card */}
                <div className="absolute top-[40%] right-[10%] z-20 bg-white border border-gold/25 p-4 rounded-2xl shadow-xl w-48 space-y-2">
                  <span className="bg-gold/15 text-gold text-[8px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full block w-max">
                    Acquisition Partner
                  </span>
                  <h4 className="font-playfair font-bold text-xs text-primary leading-tight">Architecture That Blends Beauty</h4>
                  <div className="flex -space-x-1.5 pt-1">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80" alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=50&q=80" alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                    <div className="w-6 h-6 rounded-full bg-gold/15 border border-white flex items-center justify-center text-[8px] font-black text-gold">+50</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION E – CRAFTING TIMELESS DESIGNS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-black/5 pb-8">
            <div className="space-y-3">
              <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Bespoke Operations FAQ</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-black text-primary leading-tight">
                Crafting Timeless Designs Purpose.
              </h2>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-primary/20 hover:border-gold text-primary hover:text-gold rounded-full text-xs font-bold tracking-wider transition-all shrink-0"
            >
              Ask custom query
            </Link>
          </div>

          {/* Accordion Component Grid */}
          <div className="max-w-4xl mx-auto">
            <FaqAccordion />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
