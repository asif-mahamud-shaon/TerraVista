"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Landmark, Compass, Award, Shield } from "lucide-react";

export default function AboutPage() {
  const leadership = [
    {
      name: "Marcus Sterling",
      role: "CEO & Founder",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lady Penelope Vance",
      role: "Global Acquisitions Partner",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Richard K. Chen",
      role: "Head Investment Desk",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const milestones = [
    { year: "2016", title: "Inception in London", desc: "Founded in Mayfair, London, representing private wealth clients with off-market assets." },
    { year: "2019", title: "Middle East Influx", desc: "Opened the Dubai Marina private office to manage Gulf sovereign acquisitions." },
    { year: "2022", title: "$1B Asset Threshold", desc: "Surpassed $1 Billion in cumulative closed residential and commercial transaction volumes." },
    { year: "2025", title: "Bespoke AI Launch", desc: "Introduced programmatic matching index engines, matching portfolios algorithmically." },
  ];

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white">
      {/* Light Header */}
      <section className="bg-secondary/70 text-primary p-6 md:p-8 rounded-b-[40px] relative border-b border-black/5">
        <header className="flex justify-between items-center z-20 mb-12">
          <div className="flex space-x-3">
            <Link
              href="/contact"
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all"
            >
              Contacts
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
              Consult Broker
            </Link>
          </div>
        </header>

        {/* Content banner */}
        <div className="max-w-7xl mx-auto py-8 space-y-4">
          <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full font-bold">
            Corporate Heritage
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-none">
            Our Legacy <span className="font-light text-primary/75">& Vision</span>
          </h1>
          <p className="text-primary/70 font-light text-xs max-w-md">
            Bridging the gap between discerning sovereign families, private portfolios, and the world&apos;s most extraordinary real estate assets.
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
            <span>Corporate structure: Fiduciary Desk</span>
            <span>Headquarters: London Mayfair</span>
          </div>
        </div>

        {/* Story split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-playfair text-3xl font-bold tracking-wide text-primary">
              Refining Luxury Acquisitions
            </h2>
            <p className="text-slate-650 font-light text-sm leading-relaxed">
              TerraVista is an international boutique brokerage created to bridge the gap between private wealth registries and secure global estate allocations.
            </p>
            <p className="text-slate-500 font-light text-xs leading-relaxed">
              We operate under absolute discretion, structuring legal and financial avenues to safeguard generational assets across multiple geographical jurisdictions.
            </p>
          </div>
          <div className="lg:col-span-6 h-80 w-full rounded-3xl overflow-hidden border border-black/5 relative shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero_building.png"
              alt="TerraVista Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values list */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/5 shadow-md p-8 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Landmark className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-primary">Our Vision</h3>
            <p className="text-xs text-slate-550 font-light leading-relaxed">
              To stand as the absolute global benchmark for luxury acquisitions, aligning properties with client portfolios flawlessly.
            </p>
          </div>

          <div className="bg-white border border-black/5 shadow-md p-8 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Compass className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-primary">Our Mission</h3>
            <p className="text-xs text-slate-550 font-light leading-relaxed">
              To engineer secure, transparent, and high-yield real estate acquisitions through quantitative analysis and advisory.
            </p>
          </div>

          <div className="bg-white border border-black/5 shadow-md p-8 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-primary">Our Fiduciary Code</h3>
            <p className="text-xs text-slate-550 font-light leading-relaxed">
              Privacy above all. We act as long-term fiduciary custodians, safeguarding assets across multiple generations.
            </p>
          </div>
        </section>

        {/* Chronological Timeline */}
        <section className="space-y-12">
          <h2 className="font-playfair text-2xl font-bold tracking-wide text-center text-primary">Historical Milestones</h2>
          <div className="relative max-w-4xl mx-auto pl-8 border-l border-gold/45 space-y-12 py-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative space-y-2">
                <span className="absolute -left-[38px] top-1 w-4.5 h-4.5 rounded-full bg-white border-2 border-gold flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-playfair font-bold text-lg text-gold">{m.year}</span>
                  <span className="font-playfair font-bold text-base text-primary">{m.title}</span>
                </div>
                <p className="text-xs text-slate-550 font-light leading-relaxed max-w-2xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership grid */}
        <section className="space-y-12">
          <h2 className="font-playfair text-2xl font-bold tracking-wide text-center text-primary">Executive Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((l, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/5 shadow-md p-6 rounded-3xl text-center space-y-4"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-gold/30 shadow-xl relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.photo} alt={l.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-playfair font-bold text-base text-primary">{l.name}</h4>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold">{l.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
