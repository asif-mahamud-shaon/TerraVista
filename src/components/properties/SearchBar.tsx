"use client";
 
import { useState } from "react";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { Search, MapPin, DollarSign, Home, Bed, Bath, Globe, ChevronDown } from "lucide-react";

export interface SearchBarProps {
  variant?: "default" | "hero";
}

export default function SearchBar({ variant = "default" }: SearchBarProps) {
  const router = useRouter();
  const { filters, setFilters } = useStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/properties");
  };

  const countries = ["All", "UAE", "USA", "United Kingdom", "Europe", "Canada", "Australia", "Singapore", "Japan", "Bahamas"];
  const propertyTypes = ["All", "Waterfront Villas", "Penthouses", "Smart Homes", "Mansions", "Private Islands", "Commercial Towers", "Apartments"];
  const bedBathOptions = ["Any", "1", "2", "3", "4", "5", "6+"];
  const currencies = ["USD", "AED", "GBP", "EUR"];

  // Mapping price values to human readable ranges for the hero dropdown
  const priceRanges = [
    { label: "Any Price", value: "all", range: [0, 100000000] as [number, number] },
    { label: "$100,000 - $5,000,000", value: "low", range: [100000, 5000000] as [number, number] },
    { label: "$5,000,000 - $15,000,000", value: "mid", range: [5000000, 15000000] as [number, number] },
    { label: "$15,000,000 - $50,000,000", value: "high", range: [15000000, 50000000] as [number, number] },
    { label: "$50,000,000 - $100,000,000", value: "ultra", range: [50000000, 100000000] as [number, number] },
  ];

  const currentPriceRangeValue = () => {
    const min = filters.priceRange[0];
    const max = filters.priceRange[1];
    const match = priceRanges.find(r => r.range[0] === min && r.range[1] === max);
    return match ? match.value : "all";
  };

  const handlePriceRangeChange = (value: string) => {
    const match = priceRanges.find(r => r.value === value);
    if (match) {
      setFilters({ priceRange: match.range });
    }
  };

  if (variant === "hero") {
    return (
      <div className="w-full relative z-35">
        <form 
          onSubmit={handleSearch} 
          className="w-full bg-white rounded-3xl md:rounded-full shadow-2xl border border-slate-100 p-3 flex flex-col md:flex-row items-center justify-between gap-2 max-w-5xl mx-auto"
        >
          {/* Field 1: Location/Country */}
          <div className="flex-1 w-full px-6 py-2.5 flex flex-col text-left border-b md:border-b-0 md:border-r border-slate-100 relative group">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Location</span>
            <div className="relative flex items-center mt-1">
              <select
                value={filters.country}
                onChange={(e) => setFilters({ country: e.target.value })}
                className="w-full text-sm font-bold text-primary bg-transparent focus:outline-none cursor-pointer appearance-none pr-6"
              >
                <option value="All">Select Location</option>
                {countries.filter(c => c !== "All").map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* Field 2: Property Type */}
          <div className="flex-1 w-full px-6 py-2.5 flex flex-col text-left border-b md:border-b-0 md:border-r border-slate-100 relative">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Property Type</span>
            <div className="relative flex items-center mt-1">
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ propertyType: e.target.value })}
                className="w-full text-sm font-bold text-primary bg-transparent focus:outline-none cursor-pointer appearance-none pr-6"
              >
                <option value="All">All Types</option>
                {propertyTypes.filter(t => t !== "All").map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* Field 3: Price Range */}
          <div className="flex-1 w-full px-6 py-2.5 flex flex-col text-left border-b md:border-b-0 md:border-r border-slate-100 relative">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Price Range</span>
            <div className="relative flex items-center mt-1">
              <select
                value={currentPriceRangeValue()}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                className="w-full text-sm font-bold text-primary bg-transparent focus:outline-none cursor-pointer appearance-none pr-6"
              >
                {priceRanges.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* Field 4: Bedrooms */}
          <div className="flex-1 w-full px-6 py-2.5 flex flex-col text-left border-b md:border-b-0 md:mr-3 relative">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Bedrooms</span>
            <div className="relative flex items-center mt-1">
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ bedrooms: e.target.value })}
                className="w-full text-sm font-bold text-primary bg-transparent focus:outline-none cursor-pointer appearance-none pr-6"
              >
                {bedBathOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* Sleek Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-[#0B1220] hover:bg-[#151F33] text-white text-xs font-bold tracking-widest uppercase rounded-2xl md:rounded-full flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-[#0B1220]/20 hover:scale-[1.02] cursor-pointer shrink-0"
          >
            <Search className="w-4 h-4 text-gold" />
            <span>Search Property</span>
          </button>
        </form>
      </div>
    );
  }

  // Default block layout used for search pages
  return (
    <div className="relative w-full mx-auto">
      
      {/* Background Soft Glows */}
      <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-gold/10 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-gold/5 filter blur-3xl pointer-events-none" />

      {/* Premium Luxury Card Container */}
      <div
        className="w-full bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-gold/20 shadow-xl relative z-10 transition-all duration-300"
      >
        {/* Mode Selectors */}
        <div className="bg-slate-50 p-1 rounded-full border border-slate-200/60 flex space-x-1 mb-6 max-w-fit shadow-sm">
          {(["Buy", "Rent", "Commercial", "Off Plan"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setFilters({ mode })}
              className={`px-6 py-2 text-xs tracking-widest uppercase font-bold transition-all duration-300 rounded-full cursor-pointer ${
                filters.mode === mode
                  ? "bg-gold text-white shadow-md shadow-gold/15 scale-[1.02]"
                  : "text-slate-400 hover:text-gold hover:bg-slate-100/40"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Main Filter Fields */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          
          {/* Field 1: Location */}
          <div className="space-y-2.5">
            <label className="text-[10px] tracking-widest uppercase font-black text-slate-400 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Location / City</span>
            </label>
            <input
              type="text"
              value={filters.location}
              onChange={(e) => setFilters({ location: e.target.value })}
              placeholder="e.g. Dubai Marina or Central Park"
              className="w-full bg-white border border-slate-200 text-primary placeholder-slate-400 text-sm py-3 px-4 focus:outline-none focus:border-gold rounded-xl shadow-sm focus:shadow-md transition-all duration-300"
            />
          </div>

          {/* Field 2: Country Selector */}
          <div className="space-y-2.5">
            <label className="text-[10px] tracking-widest uppercase font-black text-slate-400 flex items-center space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>Country</span>
            </label>
            <div className="relative flex items-center">
              <select
                value={filters.country}
                onChange={(e) => setFilters({ country: e.target.value })}
                className="w-full bg-white border border-slate-200 text-primary text-sm py-3 pl-4 pr-10 focus:outline-none focus:border-gold rounded-xl shadow-sm focus:shadow-md transition-all duration-300 cursor-pointer appearance-none [&>option]:bg-white [&>option]:text-primary"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* Field 3: Property Type */}
          <div className="space-y-2.5">
            <label className="text-[10px] tracking-widest uppercase font-black text-slate-400 flex items-center space-x-1.5">
              <Home className="w-3.5 h-3.5 text-gold" />
              <span>Property Type</span>
            </label>
            <div className="relative flex items-center">
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ propertyType: e.target.value })}
                className="w-full bg-white border border-slate-200 text-primary text-sm py-3 pl-4 pr-10 focus:outline-none focus:border-gold rounded-xl shadow-sm focus:shadow-md transition-all duration-300 cursor-pointer appearance-none [&>option]:bg-white [&>option]:text-primary"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gold absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* Field 4: Action Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-hover text-white text-xs font-bold tracking-widest uppercase py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/35 hover:-translate-y-0.5 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Find Properties</span>
            </button>
          </div>

          {/* Advanced Filters Drawer (Beds, Baths, Currency) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-150 mt-4">
            
            {/* Bedrooms */}
            <div className="space-y-2.5">
              <label className="text-[10px] tracking-widest uppercase font-black text-slate-400 flex items-center space-x-1.5">
                <Bed className="w-3.5 h-3.5 text-gold" />
                <span>Bedrooms</span>
              </label>
              <div className="flex space-x-1 bg-slate-50 p-1 rounded-xl border border-slate-200/60 shadow-sm">
                {bedBathOptions.slice(0, 5).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFilters({ bedrooms: opt })}
                    className={`flex-1 py-1.5 text-xs font-bold transition-all rounded-lg cursor-pointer ${
                      filters.bedrooms === opt
                        ? "bg-gold text-white shadow-md shadow-gold/15 scale-[1.02]"
                        : "text-slate-400 hover:text-gold hover:bg-slate-100/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms */}
            <div className="space-y-2.5">
              <label className="text-[10px] tracking-widest uppercase font-black text-slate-400 flex items-center space-x-1.5">
                <Bath className="w-3.5 h-3.5 text-gold" />
                <span>Bathrooms</span>
              </label>
              <div className="flex space-x-1 bg-slate-50 p-1 rounded-xl border border-slate-200/60 shadow-sm">
                {bedBathOptions.slice(0, 5).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFilters({ bathrooms: opt })}
                    className={`flex-1 py-1.5 text-xs font-bold transition-all rounded-lg cursor-pointer ${
                      filters.bathrooms === opt
                        ? "bg-gold text-white shadow-md shadow-gold/15 scale-[1.02]"
                        : "text-slate-400 hover:text-gold hover:bg-slate-100/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Preference */}
            <div className="space-y-2.5">
              <label className="text-[10px] tracking-widest uppercase font-black text-slate-400 flex items-center space-x-1.5">
                <DollarSign className="w-3.5 h-3.5 text-gold" />
                <span>Preferred Currency</span>
              </label>
              <div className="flex space-x-1 bg-slate-50 p-1 rounded-xl border border-slate-200/60 shadow-sm">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setFilters({ currency: curr })}
                    className={`flex-1 py-1.5 text-xs font-bold transition-all rounded-lg cursor-pointer ${
                      filters.currency === curr
                        ? "bg-gold text-white shadow-md shadow-gold/15 scale-[1.02]"
                        : "text-slate-400 hover:text-gold hover:bg-slate-100/40"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
