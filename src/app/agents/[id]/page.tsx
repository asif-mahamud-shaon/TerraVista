"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/properties/PropertyCard";
import { AGENTS, PROPERTIES } from "@/data/properties";
import { useStore } from "@/store/useStore";
import { Star, Calendar, Clock, ArrowLeft, Award, Languages, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AgentProfilePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const agentId = resolvedParams.id;

  const agent = useMemo(() => {
    return AGENTS.find((a) => a.id === agentId);
  }, [agentId]);

  if (!agent) {
    notFound();
  }

  const agentListings = useMemo(() => {
    return PROPERTIES.filter((p) => p.agentId === agent.id);
  }, [agent]);

  const { addBooking } = useStore();

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [bookMessage, setBookMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !bookDate || !bookTime) return;

    addBooking({
      agentId: agent.id,
      clientName,
      email: clientEmail,
      date: bookDate,
      time: bookTime,
      message: bookMessage,
    });

    setSuccess(true);
    setClientName("");
    setClientEmail("");
    setBookDate("");
    setBookTime("");
    setBookMessage("");
    setTimeout(() => setSuccess(false), 5000);
  };

  const mockReviews = [
    {
      author: "H.R.H. Prince Fahad",
      rating: 5,
      text: `${agent.name} represented our interests during the off-market estate acquisition. His attention to contract details and negotiation depth was peerless.`,
      date: "Feb 2026",
    },
    {
      author: "Clara Vandermere",
      rating: 5,
      text: "Securing a duplex penthouse in Manhattan was extremely stressful until we engaged TerraVista. Complete discretion and professional guidance throughout the process.",
      date: "April 2026",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white">
      {/* Light Header */}
      <section className="bg-secondary/70 text-primary p-6 md:p-8 rounded-b-[40px] relative border-b border-black/5">
        <header className="flex justify-between items-center z-20 mb-8">
          <div className="flex space-x-3">
            <Link
              href="/agents"
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Council</span>
            </Link>
          </div>
          <Link href="/" className="font-playfair text-xl tracking-widest font-black uppercase text-primary">
            TERRA<span className="text-gold">VISTA</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all bg-primary text-white hover:bg-transparent hover:text-primary shadow-sm"
            >
              Contact Desk
            </Link>
          </div>
        </header>

        {/* Profile Info */}
        <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-gold/40 shadow-xl shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-full">
              Senior Advisor Partner
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold tracking-tight text-primary leading-tight pt-2">
              {agent.name}
            </h1>
            <div className="flex items-center justify-center md:justify-start space-x-1 text-gold text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
              <span className="text-slate-800 font-semibold ml-1">({agent.rating})</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        
        {/* Profile split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info cards */}
          <div className="lg:col-span-4 bg-white border border-black/5 p-8 rounded-3xl shadow-md space-y-6 text-center">
            <div className="grid grid-cols-2 gap-4 py-4 border-b border-black/5 text-xs font-light">
              <div>
                <p className="text-slate-500">Experience</p>
                <p className="font-bold text-primary text-base mt-1">{agent.experience}</p>
              </div>
              <div>
                <p className="text-slate-500">Properties Sold</p>
                <p className="font-bold text-primary text-base mt-1">{agent.propertiesSold}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-left">
              <p className="text-[10px] text-gold uppercase tracking-widest font-bold">Languages</p>
              <div className="flex flex-wrap gap-1.5">
                {agent.languages.map((l) => (
                  <span
                    key={l}
                    className="bg-secondary border border-black/5 text-[9px] text-slate-600 px-3 py-1 rounded-full uppercase tracking-wider font-semibold"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Details & accomplishments */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold tracking-wide text-primary">Professional Brief</h2>
              <p className="text-slate-650 font-light text-sm leading-relaxed whitespace-pre-line">
                {agent.biography}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="font-playfair text-xl font-bold tracking-wide flex items-center space-x-2 text-primary">
                <Award className="w-5 h-5 text-gold" />
                <span>Accreditations & Accomplishments</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agent.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-black/5 shadow-sm p-5 rounded-2xl flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-light leading-relaxed">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Listings & Schedulers split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-black/5">
          {/* Listings */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-playfair text-2xl font-bold tracking-wide text-primary">
              Active Registry Portfolio ({agentListings.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {agentListings.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-black/5 shadow-md p-6 rounded-3xl space-y-6 lg:sticky lg:top-24">
              <div className="space-y-1">
                <h3 className="font-playfair text-lg font-bold text-primary tracking-wide">
                  Schedule Private Interview
                </h3>
                <p className="text-[9px] text-gold uppercase tracking-widest font-semibold">
                  Direct booking desk
                </p>
              </div>

              {success ? (
                <div className="bg-gold/10 border border-gold/30 p-4 rounded-xl text-xs text-gold text-center space-y-2">
                  <p className="font-bold">Consultation Booked</p>
                  <p className="font-light">
                    Your request has been submitted to {agent.name}&apos;s desk. You will receive an invitation shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Name</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl placeholder-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Email</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="private@client.com"
                      className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl placeholder-slate-400"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Date</label>
                      <input
                        type="date"
                        value={bookDate}
                        onChange={(e) => setBookDate(e.target.value)}
                        className="w-full bg-white border border-black/10 text-primary text-xs py-2 px-2.5 focus:outline-none focus:border-gold rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Time</label>
                      <input
                        type="time"
                        value={bookTime}
                        onChange={(e) => setBookTime(e.target.value)}
                        className="w-full bg-white border border-black/10 text-primary text-xs py-2 px-2.5 focus:outline-none focus:border-gold rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Inquiry details</label>
                    <textarea
                      value={bookMessage}
                      onChange={(e) => setBookMessage(e.target.value)}
                      placeholder="Describe target portfolio scope..."
                      rows={3}
                      className="w-full bg-white border border-black/10 text-primary text-xs py-2.5 px-3 focus:outline-none focus:border-gold rounded-xl resize-none placeholder-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-gold text-white hover:text-white font-bold text-xs tracking-widest uppercase py-3 rounded-full transition-colors cursor-pointer shadow-md"
                  >
                    Schedule Interview
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Client Reviews */}
        <section className="space-y-6 pt-12 border-t border-black/5">
          <h3 className="font-playfair text-2xl font-bold tracking-wide text-primary">Client Appraisals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockReviews.map((rev, idx) => (
              <div key={idx} className="bg-white border border-black/5 shadow-md p-6 rounded-3xl space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-primary">{rev.author}</span>
                  <span className="text-slate-500 font-light">{rev.date}</span>
                </div>
                <div className="flex text-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-slate-600 font-light text-xs leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
