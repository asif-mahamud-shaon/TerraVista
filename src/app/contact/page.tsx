"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Landmark, MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

// Dynamic import of Leaflet map
const PropertiesMap = dynamic(
  () => import("@/components/properties/PropertiesMap"),
  { ssr: false, loading: () => <div className="h-64 bg-[#111827] rounded-3xl animate-pulse flex items-center justify-center text-gray-500">Loading Map...</div> }
);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Acquisitions");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSuccess(false), 5000);
  };

  const offices = [
    {
      city: "Dubai",
      address: "Suite 4802, Marina Heights Tower, Dubai Marina, UAE",
      phone: "+971 4 555 0199",
      email: "dxb@terravista.com",
      hours: "09:00 - 18:00 GST",
      coordinates: { lat: 25.2048, lng: 55.2708 },
    },
    {
      city: "London",
      address: "12 Grosvenor Crescent, Belgravia, London SW1X, UK",
      phone: "+44 20 7946 0999",
      email: "lon@terravista.com",
      hours: "09:00 - 17:30 GMT",
      coordinates: { lat: 51.5074, lng: -0.1278 },
    },
    {
      city: "New York",
      address: "590 Madison Ave, Manhattan, New York, NY 10022, USA",
      phone: "+1 212 555 0999",
      email: "nyc@terravista.com",
      hours: "09:00 - 18:00 EST",
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
  ];

  // Dummy property nodes for map markers
  const officePins = offices.map((off, idx) => ({
    id: `office-${idx}`,
    title: `${off.city} Private Desk`,
    price: 0,
    priceFormatted: "TerraVista Intl",
    location: off.address,
    city: off.city,
    country: "",
    bedrooms: 0,
    bathrooms: 0,
    area: "",
    roi: "Private Office",
    rentalYield: "",
    appreciation: "",
    demandIndex: "",
    category: "Commercial Towers" as const,
    description: "",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"],
    virtualTourUrl: "",
    videoUrl: "",
    amenities: [],
    coordinates: off.coordinates,
    agentId: "",
    highlights: [],
    nearbyPlaces: [],
    featured: true,
  }));

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white">
      {/* Light Header banner */}
      <section className="bg-secondary/70 text-primary p-6 md:p-8 rounded-b-[40px] relative border-b border-black/5">
        <header className="flex justify-between items-center z-20 mb-12">
          <div className="flex space-x-3">
            <Link
              href="/about"
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all"
            >
              Our Story
            </Link>
          </div>
          <Link href="/" className="font-playfair text-xl tracking-widest font-black uppercase text-primary">
            TERRA<span className="text-gold">VISTA</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Link
              href="/properties"
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all bg-primary text-white hover:bg-transparent hover:text-primary shadow-sm"
            >
              Browse Registry
            </Link>
          </div>
        </header>

        {/* Content detail */}
        <div className="max-w-7xl mx-auto py-8 space-y-4">
          <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full font-bold">
            Private Desk Contact
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-none">
            Secure Private <span className="font-light text-primary/75">Transmissions</span>
          </h1>
          <p className="text-primary/70 font-light text-xs max-w-md">
            Encrypted networks handling capital inquiries and off-market project allocations.
          </p>
        </div>
      </section>

      {/* Main page content grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        
        {/* Flanking tag borders */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-black/5 py-4 text-[10px] tracking-widest uppercase font-bold text-slate-500 gap-4">
          <div className="flex space-x-6">
            <span>PUBLIC</span>
            <span>QUALITY</span>
            <span>INNOVATION</span>
          </div>
          <div className="flex space-x-6">
            <span>Transmission type: SSL Encrypted</span>
            <span>Availability: 24/7 Priority Desk</span>
          </div>
        </div>

        {/* Form and Map splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry form */}
          <div className="lg:col-span-6 bg-white border border-black/5 p-8 rounded-3xl shadow-md space-y-6">
            <h2 className="font-playfair text-xl font-bold text-primary tracking-wide border-b border-black/5 pb-3 flex items-center space-x-2.5">
              <MessageSquare className="w-5 h-5 text-gold" />
              <span>Representative Inquiry Form</span>
            </h2>

            {success ? (
              <div className="bg-gold/10 border border-gold/30 p-6 rounded-xl text-xs text-gold text-center space-y-2 leading-relaxed">
                <p className="font-bold">Transmission Successful</p>
                <p className="font-light">
                  Your details have been successfully encrypted and submitted. Our executive counselor will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Name / Representative</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Representative Name"
                    className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl placeholder-slate-400"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@register.com"
                    className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl placeholder-slate-400"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Inquiry Focus</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl cursor-pointer [&>option]:bg-white [&>option]:text-primary"
                  >
                    <option value="Acquisitions">Acquisitions Desk</option>
                    <option value="Off-Market">Private Off-Market Registers</option>
                    <option value="Liquidations">Disposition & Liquidation Desks</option>
                    <option value="Institutional">Sovereign / Institutional Portfolios</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Details / Notes</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly state target yield or location scope..."
                    rows={4}
                    className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl resize-none placeholder-slate-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-gold text-white hover:text-white font-bold text-xs tracking-widest uppercase py-3.5 rounded-full transition-colors cursor-pointer shadow-md"
                >
                  Send Encrypted Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Maps and Office grids */}
          <div className="lg:col-span-6 space-y-8">
            <div className="h-[320px] w-full rounded-3xl overflow-hidden border border-black/5">
              <PropertiesMap properties={officePins} />
            </div>

            {/* Offices detail grids */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {offices.map((off) => (
                <div key={off.city} className="bg-white border border-black/5 p-5 rounded-3xl shadow-sm space-y-3">
                  <div className="flex items-center space-x-2 border-b border-black/5 pb-2">
                    <Landmark className="w-4 h-4 text-gold" />
                    <h3 className="font-playfair font-bold text-xs text-primary">{off.city} Desk</h3>
                  </div>
                  <div className="space-y-2 text-[10px] font-light text-slate-500">
                    <p className="flex items-start">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mr-1.5 mt-0.5" />
                      <span>{off.address}</span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-3.5 h-3.5 text-gold shrink-0 mr-1.5" />
                      <span>{off.phone}</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-3.5 h-3.5 text-gold shrink-0 mr-1.5" />
                      <span>{off.email}</span>
                    </p>
                    <p className="flex items-center text-gold">
                      <Clock className="w-3.5 h-3.5 text-gold shrink-0 mr-1.5" />
                      <span>{off.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
