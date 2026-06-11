"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/properties/PropertyCard";
import { PROPERTIES, AGENTS } from "@/data/properties";
import { useStore } from "@/store/useStore";
import {
  Bed,
  Bath,
  Maximize2,
  TrendingUp,
  MapPin,
  Calendar,
  Mail,
  Phone,
  ArrowLeft,
  DollarSign,
  Compass,
  CheckCircle2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Plane,
  School,
  ShoppingBag,
  Palmtree,
  Utensils,
  Award,
  Shield,
  Layers,
  Cpu,
  Bookmark,
  Share2
} from "lucide-react";

// Dynamic import of Leaflet map
const PropertiesMap = dynamic(
  () => import("@/components/properties/PropertiesMap"),
  { ssr: false, loading: () => <div className="h-64 bg-[#F4F6F9] rounded-3xl animate-pulse flex items-center justify-center text-slate-400">Loading Map...</div> }
);

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PropertyDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const propertyId = resolvedParams.id;

  const property = useMemo(() => {
    return PROPERTIES.find((p) => p.id === propertyId);
  }, [propertyId]);

  if (!property) {
    notFound();
  }

  const agent = useMemo(() => {
    return AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];
  }, [property]);

  const { toggleSavedProperty, isSaved, addBooking } = useStore();
  const saved = isSaved(property.id);

  // Gallery index
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Mortgage Calculator state
  const [homePrice, setHomePrice] = useState(property.price);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Agent Booking state
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [bookMessage, setBookMessage] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const mortgageResults = useMemo(() => {
    const principal = homePrice * (1 - downPaymentPercent / 100);
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTermYears * 12;

    let monthlyPayment = 0;
    if (monthlyRate === 0) {
      monthlyPayment = principal / totalPayments;
    } else {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }

    const taxes = (homePrice * 0.012) / 12;
    const insurance = (homePrice * 0.0035) / 12;
    const totalMonthly = monthlyPayment + taxes + insurance;

    return {
      principal: principal.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      monthlyPayment: monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      taxes: taxes.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      insurance: insurance.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      totalMonthly: totalMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears]);

  const similarProperties = useMemo(() => {
    return PROPERTIES.filter((p) => p.category === property.category && p.id !== property.id).slice(0, 3);
  }, [property]);

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !bookDate || !bookTime) return;

    addBooking({
      propertyId: property.id,
      agentId: agent.id,
      clientName,
      email: clientEmail,
      date: bookDate,
      time: bookTime,
      message: bookMessage,
    });

    setBookingSuccess(true);
    setClientName("");
    setClientEmail("");
    setBookDate("");
    setBookTime("");
    setBookMessage("");
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  const getNearbyIcon = (type: string) => {
    switch (type) {
      case "Airport": return <Plane className="w-4 h-4 text-gold" />;
      case "School": return <School className="w-4 h-4 text-gold" />;
      case "Shopping": return <ShoppingBag className="w-4 h-4 text-gold" />;
      case "Beach": return <Palmtree className="w-4 h-4 text-gold" />;
      case "Restaurant": return <Utensils className="w-4 h-4 text-gold" />;
      default: return <MapPin className="w-4 h-4 text-gold" />;
    }
  };

  // Splitting dynamic title to match mockup style (Hamida Villa -> first word bold uppercase, second word italic light)
  const titleWords = property.title.split(" ");
  const titleFirst = titleWords[0] || "Estate";
  const titleRest = titleWords.slice(1).join(" ") || "Registry";

  const handleScrollToMap = () => {
    const mapEl = document.getElementById("location-map-section");
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white overflow-x-hidden">
      
      {/* Dynamic Marquee styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Back button, brand, save header bar */}
      <section className="bg-white px-6 py-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/properties"
            className="px-5 py-2 border border-primary/10 hover:border-gold rounded-full text-xs font-semibold tracking-wider text-slate-500 hover:text-gold transition-all flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Registry</span>
          </Link>
          <Link href="/" className="font-playfair text-xl tracking-widest font-black uppercase text-primary">
            TERRA<span className="text-gold">VISTA</span>
          </Link>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleSavedProperty(property.id)}
              className="p-3 bg-slate-50 hover:bg-gold/10 text-primary hover:text-gold border border-black/5 hover:border-gold/30 rounded-full transition-all cursor-pointer shadow-sm"
              title={saved ? "Remove Bookmark" : "Bookmark Estate"}
            >
              <Heart className={`w-4 h-4 ${saved ? "fill-gold text-gold" : "text-primary"}`} />
            </button>
          </div>
        </div>
      </section>

      {/* MOCKUP DESIGN SECTION 1: Dynamic stylized title & Split Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header text layout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/5 pb-10">
            <div className="space-y-2">
              <span className="text-[10px] text-gold font-bold tracking-[0.25em] uppercase block">
                Signature coordinates
              </span>
              <h1 className="font-playfair text-5xl md:text-7xl font-black text-primary leading-none uppercase tracking-tight">
                {titleFirst} <br />
                <span className="font-light text-slate-400 italic block mt-2 text-4xl md:text-6xl">{titleRest}</span>
              </h1>
            </div>

            <div className="space-y-2 bg-slate-50 border border-black/5 p-5 rounded-2xl md:text-right shrink-0">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.25em] block">
                Acquisition Value
              </span>
              <p className="text-xs font-bold text-slate-500 uppercase">
                FOR SALE — <span className="text-gold font-black text-2xl tracking-wide pl-1">{property.priceFormatted}</span>
              </p>
              <p className="text-[10px] text-slate-400 font-light mt-0.5">
                ESTIMATED LEASE — {property.rentalYield} / MONTH &bull; {property.roi} ROI
              </p>
            </div>
          </div>

          {/* Three-column layout split based on mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Vertical parameter card */}
            <div className="lg:col-span-3 bg-slate-50 border border-black/5 rounded-[32px] p-5.5 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="h-64 rounded-2xl overflow-hidden relative border border-black/5 bg-slate-100 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex justify-between items-center pb-2.5 border-b border-black/5">
                  <span className="font-light text-slate-400 uppercase tracking-widest text-[9px]">Coordinates</span>
                  <span className="font-bold text-primary truncate max-w-[130px]" title={property.location}>
                    {property.location}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-black/5">
                  <span className="font-light text-slate-400 uppercase tracking-widest text-[9px]">Bedrooms</span>
                  <span className="font-bold text-primary">{property.bedrooms} Ensuite</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 border-b border-black/5">
                  <span className="font-light text-slate-400 uppercase tracking-widest text-[9px]">Bathrooms</span>
                  <span className="font-bold text-primary">{property.bathrooms} Baths</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-light text-slate-400 uppercase tracking-widest text-[9px]">Total Area</span>
                  <span className="font-bold text-primary">{property.area}</span>
                </div>
              </div>
            </div>

            {/* Center Column: Large visual image render */}
            <div className="lg:col-span-5 rounded-[32px] overflow-hidden border border-black/5 bg-slate-100 shadow-md min-h-[400px] relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={property.images[1] || property.images[0]}
                alt=""
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* Right Column: Location Advantages */}
            <div className="lg:col-span-4 bg-slate-50 border border-black/5 rounded-[32px] p-8 flex flex-col justify-between space-y-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] text-gold font-bold tracking-[0.2em] uppercase block mb-1">
                    Connectivity Parameters
                  </span>
                  <h3 className="font-playfair text-2xl font-bold tracking-wide text-primary">
                    Location Advantages
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {property.nearbyPlaces.slice(0, 4).map((place, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-black/[0.04] pb-2 text-xs">
                      <div className="flex items-center space-x-2.5 font-light text-slate-600">
                        {getNearbyIcon(place.type)}
                        <span>{place.name}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] text-slate-500 uppercase tracking-wide leading-relaxed font-bold border-l-2 border-l-gold pl-3">
                  LIVING IN THIS PROPERTY MEANS YOU&apos;RE PERFECTLY POSITIONED TO ENJOY CONVENIENCE, COMFORT, AND CONNECTIVITY. EVERYTHING YOU NEED IS JUST MINUTES AWAY.
                </p>
                
                <button
                  onClick={handleScrollToMap}
                  className="w-full bg-primary hover:bg-gold text-white hover:text-primary py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Map And Location</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOCKUP DESIGN SECTION 2: Scrolling Verified Banner */}
      <div className="bg-[#0B1220] text-white py-5 overflow-hidden border-y border-gold/15 relative z-10 flex">
        <div className="animate-marquee whitespace-nowrap flex space-x-12 text-[10px] tracking-[0.3em] font-bold uppercase select-none shrink-0">
          <span>Verified Property &bull; {property.city.toUpperCase()} Portfolio Registry &bull; AAA Investment Rating &bull; Premium Sourced Capital &bull; 3D Verified Floor Plan &bull; </span>
          <span>Verified Property &bull; {property.city.toUpperCase()} Portfolio Registry &bull; AAA Investment Rating &bull; Premium Sourced Capital &bull; 3D Verified Floor Plan &bull; </span>
        </div>
        <div className="animate-marquee whitespace-nowrap flex space-x-12 text-[10px] tracking-[0.3em] font-bold uppercase select-none shrink-0">
          <span>Verified Property &bull; {property.city.toUpperCase()} Portfolio Registry &bull; AAA Investment Rating &bull; Premium Sourced Capital &bull; 3D Verified Floor Plan &bull; </span>
          <span>Verified Property &bull; {property.city.toUpperCase()} Portfolio Registry &bull; AAA Investment Rating &bull; Premium Sourced Capital &bull; 3D Verified Floor Plan &bull; </span>
        </div>
      </div>

      {/* MOCKUP DESIGN SECTION 3: Property Details Grid & Narrative */}
      <section className="bg-white py-24 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: 12 detailed neomorphic feature parameters */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Ensuite Bedrooms", val: `${property.bedrooms} Bed`, icon: Bed },
                { label: "Luxury Bathrooms", val: `${property.bathrooms} Bath`, icon: Bath },
                { label: "Total Area (Sq Ft)", val: property.area, icon: Maximize2 },
                { label: "ROI Value (Net)", val: property.roi, icon: TrendingUp },
                { label: "Rental Yield", val: property.rentalYield, icon: DollarSign },
                { label: "Sourcing Security", val: "Grade A", icon: Shield },
                { label: "Structural Glass", val: "Custom Canopy", icon: Layers },
                { label: "Crestron Nodes", val: "Integrated", icon: Cpu },
                { label: "Nearby Airport", val: "Sourced Close", icon: Plane },
                { label: "Appreciation Rate", val: property.appreciation, icon: TrendingUp },
                { label: "Sourcing Rating", val: "AAA Rating", icon: Award },
                { label: "Sourced Status", val: "Available", icon: CheckCircle2 }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-black/[0.03] p-4.5 rounded-2xl flex flex-col justify-between h-28 hover:border-gold/30 hover:shadow-md transition-all duration-300 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-inner">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="font-playfair font-bold text-xs text-primary mt-0.5">{item.val}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Big typography block & Description Narrative */}
            <div className="lg:col-span-6 space-y-8 lg:pl-8">
              <div className="space-y-4">
                <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Property Details</span>
                <h2 className="font-playfair text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tight">
                  Dream home with <br />this pro design
                </h2>
                <p className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed font-bold border-l-2 border-l-gold pl-3">
                  A {property.bedrooms}-BEDROOM RESIDENCE LOCATED IN THE HEART OF {property.location.toUpperCase()} FOR LUXURY AND URBAN LIVING.
                </p>
              </div>

              <div className="space-y-6 text-slate-550 font-light text-sm leading-relaxed">
                <p className="whitespace-pre-line">{property.description}</p>
                <div className="bg-slate-50 border border-black/5 rounded-2xl p-5 space-y-3.5">
                  <h4 className="font-playfair font-bold text-sm text-primary">Signature Highlights</h4>
                  <ul className="space-y-2 text-xs">
                    {property.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* MOCKUP DESIGN SECTION 5: Multi-image Gallery row */}
      <section className="bg-white py-24 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Visual gallery</span>
            <h3 className="font-playfair text-3xl font-black text-primary uppercase">Interior Showroom</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {property.images.map((img, idx) => (
              <div
                key={idx}
                className="h-80 rounded-[28px] overflow-hidden border border-black/5 shadow-md relative group bg-slate-50 cursor-pointer"
                onClick={() => setActiveImgIdx(idx)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedulers & Calculator split */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Schedulers Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-black/5 shadow-md p-8 rounded-[32px] space-y-6">
              <div className="space-y-1">
                <span className="text-[9px] text-gold font-bold uppercase tracking-widest">
                  Discreet booking desk
                </span>
                <h3 className="font-playfair text-2xl font-bold text-primary tracking-wide">
                  Schedule Private Viewing
                </h3>
              </div>

              {bookingSuccess ? (
                <div className="bg-gold/10 border border-gold/30 p-4 rounded-xl text-xs text-gold text-center space-y-2 leading-relaxed animate-in fade-in duration-300">
                  <p className="font-bold">Booking Submitted</p>
                  <p className="font-light">Our scheduling desk will contact your representative to coordinate access credentials shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleBookConsultation} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Representative Name</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Representative Name"
                      className="w-full bg-white border border-black/10 text-primary text-xs py-3 px-4 focus:outline-none focus:border-gold rounded-xl placeholder-slate-400 shadow-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Secure Email</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="private@client.com"
                      className="w-full bg-white border border-black/10 text-primary text-xs py-3 px-4 focus:outline-none focus:border-gold rounded-xl placeholder-slate-400 shadow-sm"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Date</label>
                      <input
                        type="date"
                        value={bookDate}
                        onChange={(e) => setBookDate(e.target.value)}
                        className="w-full bg-white border border-black/10 text-primary text-xs py-3 px-3 focus:outline-none focus:border-gold rounded-xl shadow-sm"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Time</label>
                      <input
                        type="time"
                        value={bookTime}
                        onChange={(e) => setBookTime(e.target.value)}
                        className="w-full bg-white border border-black/10 text-primary text-xs py-3 px-3 focus:outline-none focus:border-gold rounded-xl shadow-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Notes</label>
                    <textarea
                      value={bookMessage}
                      onChange={(e) => setBookMessage(e.target.value)}
                      placeholder="Access requests, helicopter clearance..."
                      rows={3}
                      className="w-full bg-white border border-black/10 text-primary text-xs py-3 px-4 focus:outline-none focus:border-gold rounded-xl resize-none placeholder-slate-400 shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-gold text-white hover:text-primary font-bold text-xs tracking-widest uppercase py-3.5 rounded-full transition-colors cursor-pointer shadow-md"
                  >
                    Confirm Date
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Mortgage Calculator Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-black/5 shadow-md p-8 rounded-[32px] space-y-8">
            <div className="flex items-center space-x-2 border-b border-black/5 pb-4">
              <DollarSign className="w-6 h-6 text-gold" />
              <h3 className="font-playfair text-2xl font-bold tracking-wide text-primary">Acquisition Calculator</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-550">Home Price</span>
                    <span className="text-primary font-bold">${homePrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={5000000}
                    max={100000000}
                    step={1000000}
                    value={homePrice}
                    onChange={(e) => setHomePrice(parseInt(e.target.value))}
                    className="w-full accent-gold bg-slate-200 h-1.5 rounded-full cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-550">Down Payment %</span>
                    <span className="text-primary font-bold">
                      {downPaymentPercent}% (${((homePrice * downPaymentPercent) / 100).toLocaleString()})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    step={5}
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                    className="w-full accent-gold bg-slate-200 h-1.5 rounded-full cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Interest (%)</label>
                    <input
                      type="number"
                      step={0.05}
                      value={interestRate}
                      onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                      className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-widest uppercase font-bold text-gold">Loan Term</label>
                    <select
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(parseInt(e.target.value))}
                      className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl cursor-pointer"
                    >
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={30}>30 Years</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col justify-between text-xs space-y-4 shadow-sm">
                <h4 className="font-playfair font-bold text-sm tracking-wider text-gold uppercase text-center border-b border-black/5 pb-3">
                  Asset Costs Estimate
                </h4>
                <div className="space-y-3 font-light text-slate-650">
                  <div className="flex justify-between">
                    <span>Mortgage Principal & Int.</span>
                    <span className="font-semibold text-primary">${mortgageResults.monthlyPayment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Local Taxes</span>
                    <span className="font-semibold text-primary">${mortgageResults.taxes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Homeowner Insurance</span>
                    <span className="font-semibold text-primary">${mortgageResults.insurance}</span>
                  </div>
                </div>
                <div className="border-t border-black/5 pt-4 text-center">
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Monthly Overhead</p>
                  <p className="font-playfair text-3xl font-black text-gold mt-1.5">
                    ${mortgageResults.totalMonthly}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map coordinate locations */}
      <section id="location-map-section" className="bg-white py-16 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">Neighborhood geography</span>
            <h3 className="font-playfair text-3xl font-black text-primary uppercase">Location Map</h3>
          </div>
          <div className="h-[400px] w-full rounded-[32px] overflow-hidden border border-black/5 relative shadow-md">
            <PropertiesMap properties={[property]} />
          </div>
        </div>
      </section>

      {/* Similar collections list */}
      {similarProperties.length > 0 && (
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <h3 className="font-playfair text-3xl font-black text-primary uppercase">
              Similar Portfolio Collections
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
