"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AGENTS, Agent } from "@/data/properties";
import { Star, ShieldCheck, Languages } from "lucide-react";

export default function AgentsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");

  const filteredAgents = AGENTS.filter((agent) => {
    if (selectedLanguage === "All") return true;
    return agent.languages.includes(selectedLanguage);
  });

  const languages = ["All", "English", "Arabic", "French", "German", "Russian", "Spanish", "Mandarin"];

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white">
      {/* Light Header banner */}
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
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all bg-primary text-white hover:bg-transparent hover:text-primary"
            >
              Consult Broker
            </Link>
          </div>
        </header>

        {/* Content detail */}
        <div className="max-w-7xl mx-auto py-8 space-y-4">
          <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full font-bold">
            Advisory Council
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-none">
            Global Brokerage <span className="font-light text-primary/75">Partners</span>
          </h1>
          <p className="text-primary/70 font-light text-xs max-w-md">
            Meet our executive specialists. Operating under strict non-disclosure registries to coordinate private acquisitions.
          </p>
        </div>
      </section>

      {/* Main page content grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {/* Language selector chips */}
        <div className="flex flex-wrap gap-2 justify-center border-b border-black/5 pb-8">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-5 py-1.5 rounded-full text-xs transition-all cursor-pointer border ${
                selectedLanguage === lang
                  ? "bg-primary border-primary text-white font-bold shadow-md"
                  : "border-black/10 hover:border-black/20 text-primary/70"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white border border-black/5 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-gold/40 hover:shadow-lg transition-all duration-300 shadow-md"
            >
              {/* Photo */}
              <div className="relative h-80 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-black/5 rounded-full shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-[9px] tracking-widest font-bold text-primary uppercase">Sovereign Advisor</span>
                </div>
              </div>

              {/* Descriptions */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between bg-transparent">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-playfair text-xl font-bold text-primary tracking-wide">
                      {agent.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-gold text-xs font-semibold">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span>{agent.rating}</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-gold font-bold uppercase tracking-widest">
                    {agent.experience} Experience &bull; {agent.propertiesSold} Properties Sold
                  </p>
                  <p className="text-slate-500 font-light text-xs leading-relaxed line-clamp-3">
                    {agent.biography}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {agent.languages.map((l) => (
                      <span
                        key={l}
                        className="bg-secondary border border-black/5 text-[9px] text-slate-500 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                      >
                        {l}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/agents/${agent.id}`}
                    className="w-full inline-flex items-center justify-center text-center py-2.5 bg-primary hover:bg-gold text-white hover:text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-full cursor-pointer shadow-sm"
                  >
                    Arrange Private Interview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
