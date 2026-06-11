"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useStore } from "@/store/useStore";
import { PROPERTIES, AGENTS } from "@/data/properties";
import { Heart, Calendar, Bell, LineChart, User, Trash2, ExternalLink, MapPin, Plus } from "lucide-react";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<"favorites" | "meetings" | "alerts" | "watchlist">("favorites");
  const { savedProperties, bookings, alerts, toggleSavedProperty, addAlert, removeAlert } = useStore();

  const [newAlertText, setNewAlertText] = useState("");

  const favoritedList = useMemo(() => {
    return PROPERTIES.filter((p) => savedProperties.includes(p.id));
  }, [savedProperties]);

  const handleAddAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAlertText.trim()) {
      addAlert(newAlertText.trim());
      setNewAlertText("");
    }
  };

  const enrichedBookings = useMemo(() => {
    return bookings.map((b) => {
      const agent = AGENTS.find((a) => a.id === b.agentId);
      const property = PROPERTIES.find((p) => p.id === b.propertyId);
      return {
        ...b,
        agentName: agent ? agent.name : "Advisor",
        propertyTitle: property ? property.title : "Direct Consultation Desk",
      };
    });
  }, [bookings]);

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white">
      {/* Light Header banner */}
      <section className="bg-secondary/70 text-primary p-6 md:p-8 rounded-b-[40px] relative border-b border-black/5">
        <header className="flex justify-between items-center z-20 mb-12">
          <div className="flex space-x-3">
            <Link
              href="/properties"
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all"
            >
              Registry
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

        {/* Content Details */}
        <div className="max-w-7xl mx-auto py-8 flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-widest uppercase px-3 py-1 rounded-full font-bold">
              Private Register Desk
            </span>
            <h1 className="font-playfair text-3xl font-bold tracking-tight text-primary leading-tight pt-1">
              Investor Command
            </h1>
          </div>
        </div>
      </section>

      {/* Main page content grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        
        {/* Flanking tag borders */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-black/5 py-4 text-[10px] tracking-widest uppercase font-bold text-slate-500 gap-4">
          <div className="flex space-x-6">
            <span>PUBLIC</span>
            <span>QUALITY</span>
            <span>INNOVATION</span>
          </div>
          <div className="flex space-x-6">
            <span>Active alerts: {alerts.length}</span>
            <span>Consultations: {enrichedBookings.length}</span>
          </div>
        </div>

        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation panel */}
          <div className="lg:col-span-3 bg-white border border-black/5 p-4 rounded-3xl shadow-md space-y-2">
            {[
              { id: "favorites", name: "Saved Estates", count: favoritedList.length, icon: Heart },
              { id: "meetings", name: "Scheduled Viewings", count: enrichedBookings.length, icon: Calendar },
              { id: "alerts", name: "Property Alerts", count: alerts.length, icon: Bell },
              { id: "watchlist", name: "Yield Watchlist", count: favoritedList.length > 0 ? 1 : 0, icon: LineChart },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                    isActive ? "bg-primary text-white shadow-lg" : "text-primary/70 hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4.5 h-4.5" />
                    <span>{tab.name}</span>
                  </div>
                  {tab.count > 0 && (
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? "bg-white text-gold" : "bg-gold/15 text-gold border border-gold/35"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Folder tabs sections */}
          <div className="lg:col-span-9 min-h-[400px]">
            {activeTab === "favorites" && (
              <div className="space-y-6">
                <h2 className="font-playfair text-xl font-bold text-primary border-b border-black/5 pb-3">
                  Saved Estates Registry
                </h2>

                {favoritedList.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favoritedList.map((prop) => (
                      <div
                        key={prop.id}
                        className="bg-white border border-black/5 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-gold/40 hover:shadow-lg transition-all duration-300 shadow-md"
                      >
                        <div className="relative h-48 w-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover" />
                          <div className="absolute top-3 right-3">
                            <button
                              onClick={() => toggleSavedProperty(prop.id)}
                              className="bg-white/95 backdrop-blur-md p-2 rounded-full border border-black/10 text-red-500 hover:text-red-600 transition-colors shadow-md cursor-pointer"
                              title="Remove Bookmark"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <div className="p-5 space-y-4">
                          <div>
                            <h3 className="font-playfair font-bold text-base text-primary">{prop.title}</h3>
                            <p className="text-slate-500 text-[10px] font-light mt-1 flex items-center space-x-1">
                              <MapPin className="w-3 h-3 text-gold" />
                              <span>{prop.location}</span>
                            </p>
                          </div>
                          <div className="flex justify-between items-center text-xs pt-2 border-t border-black/5">
                            <span className="font-bold text-gold">{prop.priceFormatted}</span>
                            <Link
                              href={`/properties/${prop.id}`}
                              className="inline-flex items-center space-x-1.5 text-primary hover:text-gold transition-colors font-bold uppercase tracking-wider text-[10px]"
                            >
                              <span>Open Listing</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-500 font-light border border-dashed border-black/10 bg-secondary/35 rounded-3xl">
                    Your estate register is currently empty. Explore our listings to add bookmarks.
                  </div>
                )}
              </div>
            )}

            {activeTab === "meetings" && (
              <div className="space-y-6">
                <h2 className="font-playfair text-xl font-bold text-primary border-b border-black/5 pb-3">
                  Viewing Appointments & Consultation registry
                </h2>

                {enrichedBookings.length > 0 ? (
                  <div className="space-y-4">
                    {enrichedBookings.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white border border-black/5 p-5 rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-4 shadow-md"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2.5">
                            <span className="w-2 h-2 rounded-full bg-gold animate-ping shrink-0" />
                            <h3 className="font-playfair font-bold text-sm text-primary">
                              {b.propertyTitle}
                            </h3>
                          </div>
                          <p className="text-[10px] text-gold uppercase tracking-wider font-semibold">
                            Assigned Broker: {b.agentName}
                          </p>
                          {b.message && (
                            <p className="text-[11px] text-slate-500 font-light italic">
                              &ldquo;{b.message}&rdquo;
                            </p>
                          )}
                        </div>
                        <div className="flex items-center space-x-6 shrink-0 text-xs font-semibold">
                          <div className="text-right">
                            <p className="text-primary">{b.date}</p>
                            <p className="text-gold mt-0.5">{b.time}</p>
                          </div>
                          <span className="bg-gold/15 border border-gold/30 text-gold text-[9px] font-bold px-3 py-1.5 uppercase rounded-full">
                            Confirmed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-500 font-light border border-dashed border-black/10 bg-secondary/35 rounded-3xl">
                    No consultations scheduled. Schedule one from any property details page.
                  </div>
                )}
              </div>
            )}

            {activeTab === "alerts" && (
              <div className="space-y-6">
                <h2 className="font-playfair text-xl font-bold text-primary border-b border-black/5 pb-3">
                  Active Search Alerts Registry
                </h2>

                <form onSubmit={handleAddAlert} className="flex gap-2">
                  <input
                    type="text"
                    value={newAlertText}
                    onChange={(e) => setNewAlertText(e.target.value)}
                    placeholder="e.g. Dubai Waterfront Villas under $40M"
                    className="flex-grow bg-white border border-black/10 text-primary placeholder-slate-400 text-xs py-2.5 px-4 focus:outline-none focus:border-gold rounded-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-gold text-white p-3 rounded-full font-bold text-xs flex items-center justify-center shrink-0 cursor-pointer shadow-md"
                  >
                    <Plus className="w-4.5 h-4.5" />
                  </button>
                </form>

                {alerts.length > 0 ? (
                  <div className="space-y-3 pt-2">
                    {alerts.map((al, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-black/5 shadow-sm px-5 py-3 rounded-xl flex justify-between items-center text-xs text-slate-600"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span className="font-light">{al}</span>
                        </div>
                        <button
                          onClick={() => removeAlert(idx)}
                          className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                          title="Unsubscribe Alert"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-500 font-light border border-dashed border-black/10 bg-secondary/35 rounded-3xl">
                    No active property alerts registered.
                  </div>
                )}
              </div>
            )}

            {activeTab === "watchlist" && (
              <div className="space-y-6">
                <h2 className="font-playfair text-xl font-bold text-primary border-b border-black/5 pb-3">
                  Comparative ROI Analytics Grid
                </h2>

                {favoritedList.length > 0 ? (
                  <div className="overflow-x-auto border border-black/5 rounded-3xl bg-white shadow-sm">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-secondary border-b border-black/10 text-gold font-bold uppercase tracking-wider">
                          <th className="py-4 px-6">Property</th>
                          <th className="py-4 px-6">Capital Value</th>
                          <th className="py-4 px-6">Net Rental Yield</th>
                          <th className="py-4 px-6">YoY Growth</th>
                          <th className="py-4 px-6">ROI Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5 font-light">
                        {favoritedList.map((prop) => (
                          <tr key={prop.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-6">
                              <Link
                                href={`/properties/${prop.id}`}
                                className="font-semibold text-primary hover:text-gold transition-colors"
                              >
                                {prop.title}
                              </Link>
                            </td>
                            <td className="py-4 px-6 text-primary font-medium">{prop.priceFormatted}</td>
                            <td className="py-4 px-6 text-gold font-semibold">{prop.rentalYield}</td>
                            <td className="py-4 px-6 text-primary">{prop.appreciation}</td>
                            <td className="py-4 px-6">
                              <span className="bg-gold/15 border border-gold/30 text-gold px-2.5 py-0.5 rounded-full font-semibold">
                                {prop.roi}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-500 font-light border border-dashed border-black/10 bg-secondary/35 rounded-3xl">
                    Bookmark properties to populate the comparative analytics matrix.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
