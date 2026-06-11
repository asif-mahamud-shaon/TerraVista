"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Landmark, ArrowRight, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-8 text-slate-600 font-manrope">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Top Row: Brand & Newsletter Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full border border-gold/45 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <Landmark className="w-5 h-5 text-gold" />
              </div>
              <span className="font-playfair text-2xl tracking-[0.15em] font-black text-primary">
                TERRA<span className="text-gold">VISTA</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 font-light max-w-sm leading-relaxed">
              TerraVista is a premier global brokerage specializing in ultra-luxury estates, waterfront mansions, and high-yield real estate investments for selective portfolios.
            </p>
            <div className="flex items-center space-x-3 text-[10px] text-gold font-bold uppercase tracking-wider">
              <span className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1" /> Global Acquisitions</span>
              <span>&bull;</span>
              <span>Off-Market Sourcing</span>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-7 space-y-4 lg:pl-12 w-full">
            <div>
              <span className="text-[9px] text-gold font-bold tracking-[0.25em] uppercase block mb-1">
                Private Register
              </span>
              <h4 className="font-playfair text-xl font-bold text-primary">
                Subscribe to the Collection
              </h4>
              <p className="text-xs text-slate-500 font-light mt-1">
                Receive private off-market listings, ROI market reports, and executive acquisitions directly in your inbox.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-4 text-xs text-gold font-semibold max-w-md animate-in fade-in duration-300">
                ✓ Thank you. Your email has been added to our confidential registry.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md w-full relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="confidential@yourdomain.com"
                  className="w-full bg-slate-50 border border-black/10 text-primary placeholder-slate-400 text-xs py-3.5 pl-4 pr-16 focus:outline-none focus:border-gold focus:bg-white rounded-full transition-all shadow-inner"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-gold text-white hover:text-primary px-4 rounded-full font-bold transition-all flex items-center justify-center cursor-pointer shadow-md"
                  title="Submit"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Row: Links & Headquarters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-8 border-t border-black/5">
          
          {/* Column 1: Properties */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-primary font-playfair font-black tracking-widest text-xs uppercase border-b border-black/5 pb-2">
              Registry Portfolio
            </h4>
            <ul className="space-y-3 text-xs font-light text-slate-500">
              {[
                "Waterfront Villas",
                "Luxury Penthouses",
                "Smart Estates",
                "Historical Mansions",
                "Private Islands",
                "Luxury Apartments"
              ].map((link) => (
                <li key={link}>
                  <Link href="/properties" className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Investments */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-primary font-playfair font-black tracking-widest text-xs uppercase border-b border-black/5 pb-2">
              Acquisition Yields
            </h4>
            <ul className="space-y-3 text-xs font-light text-slate-500">
              {[
                "Comparative ROI Matrix",
                "Market Activity Reports",
                "Tax Efficiency Indexes",
                "Portfolio Management",
                "Off-Plan Projections"
              ].map((link) => (
                <li key={link}>
                  <Link href="/investment" className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-primary font-playfair font-black tracking-widest text-xs uppercase border-b border-black/5 pb-2">
              Executive Desk
            </h4>
            <ul className="space-y-3 text-xs font-light text-slate-500">
              {[
                "About TerraVista",
                "Meet Our Advisors",
                "Confidential Careers",
                "Sourcing Office Map",
                "Brokerage contact Bureau"
              ].map((link) => (
                <li key={link}>
                  <Link href="/about" className="hover:text-gold hover:translate-x-1 inline-block transition-all duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Global Offices */}
          <div className="lg:col-span-3 space-y-4 text-xs font-light text-slate-500">
            <h4 className="text-primary font-playfair font-black tracking-widest text-xs uppercase border-b border-black/5 pb-2">
              Global Offices
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">Dubai Headquarters</p>
                  <p className="text-[10px] text-slate-400">Palm Jumeirah, Frond D, Level 40</p>
                  <p className="text-[10px] text-gold mt-0.5 flex items-center"><Phone className="w-2.5 h-2.5 mr-1" /> +971 4 555 0199</p>
                </div>
              </div>
              <div className="flex items-start space-x-2 border-t border-black/[0.03] pt-3">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary">London Bureau</p>
                  <p className="text-[10px] text-slate-400">Belgravia Square, Westminster</p>
                  <p className="text-[10px] text-gold mt-0.5 flex items-center"><Phone className="w-2.5 h-2.5 mr-1" /> +44 20 7946 0958</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Oversized Brand Typography Watermark (Awwwards Style) */}
        <div className="select-none font-playfair font-black tracking-[0.25em] text-slate-100 text-[9vw] leading-none text-center border-t border-black/5 pt-10 uppercase">
          TERRAVISTA
        </div>

        {/* Bottom Row: Social & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500 pt-6 border-t border-black/5">
          <p className="font-light">
            &copy; {new Date().getFullYear()} TerraVista International Realty. Sourcing the future of luxury living.
          </p>
          <div className="flex space-x-6 text-[11px]">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gold transition-colors">Security Registry</Link>
          </div>
          <div className="flex space-x-3.5">
            {[
              {
                name: "Instagram",
                path: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              },
              {
                name: "LinkedIn",
                path: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )
              },
              {
                name: "Twitter",
                path: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                )
              }
            ].map((soc) => (
              <Link
                key={soc.name}
                href="#"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                title={soc.name}
              >
                {soc.path}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
