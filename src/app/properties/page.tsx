"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/properties/PropertyCard";
import { useStore } from "@/store/useStore";
import { PROPERTIES, Property } from "@/data/properties";
import { SlidersHorizontal, Map, Grid, RefreshCw, X, Check, Compass, Landmark, Menu } from "lucide-react";

// Dynamic import of PropertiesMap to prevent SSR hydration errors
const PropertiesMap = dynamic(
  () => import("@/components/properties/PropertiesMap"),
  { ssr: false, loading: () => <div className="w-full h-full bg-[#111827] animate-pulse rounded-3xl flex items-center justify-center text-gray-500">Loading Map Engine...</div> }
);

export default function PropertiesPage() {
  const { filters, setFilters, resetFilters } = useStore();
  const [showMapView, setShowMapView] = useState(false);
  const [sortBy, setSortBy] = useState<string>("popular");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState<number>(100000000);

  // Hardcoded filters lists
  const countries = ["All", "UAE", "USA", "United Kingdom", "Europe", "Canada", "Australia", "Singapore", "Japan", "Bahamas"];
  const propertyTypes = ["All", "Waterfront Villas", "Penthouses", "Smart Homes", "Mansions", "Private Islands", "Commercial Towers", "Apartments"];
  const bedBathOptions = ["Any", "1", "2", "3", "4", "5", "6+"];
  
  const allAmenities = [
    "Infinity Pool",
    "Private Beach",
    "Smart Automation",
    "Wellness Spa",
    "Home Cinema",
    "Wine Cellar",
    "Helipad",
    "Private Jetty",
    "Concierge Service",
  ];

  // Toggle single amenity
  const handleToggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  // Filter and Sort properties
  const filteredProperties = useMemo(() => {
    let result = PROPERTIES;

    // Filter by Search Query
    if (filters.location) {
      const q = filters.location.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q)
      );
    }

    // Filter by Country
    if (filters.country && filters.country !== "All") {
      result = result.filter(
        (p) => p.country.toLowerCase() === filters.country.toLowerCase()
      );
    }

    // Filter by Property Type
    if (filters.propertyType && filters.propertyType !== "All") {
      result = result.filter((p) => p.category === filters.propertyType);
    }

    // Filter by Bedrooms
    if (filters.bedrooms && filters.bedrooms !== "Any") {
      const val = parseInt(filters.bedrooms);
      result = result.filter((p) => p.bedrooms >= val);
    }

    // Filter by Bathrooms
    if (filters.bathrooms && filters.bathrooms !== "Any") {
      const val = parseInt(filters.bathrooms);
      result = result.filter((p) => p.bathrooms >= val);
    }

    // Filter by Max Price
    if (priceMax) {
      result = result.filter((p) => p.price <= priceMax);
    }

    // Filter by Amenities
    if (selectedAmenities.length > 0) {
      result = result.filter((p) =>
        selectedAmenities.every((amenity) => p.amenities.includes(amenity))
      );
    }

    // Sorting Logic
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "roi") {
      result = [...result].sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
    } else {
      result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters, priceMax, selectedAmenities, sortBy]);

  const clearAllFilters = () => {
    resetFilters();
    setSelectedAmenities([]);
    setPriceMax(100000000);
    setSortBy("popular");
  };

  return (
    <div className="bg-white min-h-screen text-primary font-manrope selection:bg-gold selection:text-white">
      {/* Cinematic light-grey header section */}
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
              Consult Advisor
            </Link>
          </div>
        </header>

        {/* Banner Details */}
        <div className="max-w-7xl mx-auto py-8 space-y-4">
          <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full font-bold">
            Curated Assets
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-none">
            Properties <span className="font-light text-primary/75">Registry</span>
          </h1>
          <p className="text-primary/70 font-light text-xs max-w-md">
            Explore our world-class index of custom smart estates, waterfront structures, and high-yield properties globally.
          </p>
        </div>
      </section>

      {/* Main filters & grids */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        
        {/* Flanking Borders & Toggles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-black/5 py-4 text-[10px] tracking-widest uppercase font-bold text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-primary focus:outline-none cursor-pointer font-bold [&>option]:bg-white [&>option]:text-primary"
            >
              <option value="popular">Signatures First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="roi">Yield index (ROI)</option>
            </select>
          </div>

          <div className="flex space-x-6 items-center">
            {/* View Layout Toggle */}
            <div className="flex border border-black/5 rounded-full overflow-hidden shrink-0">
              <button
                onClick={() => setShowMapView(false)}
                className={`px-4 py-1.5 text-[9px] tracking-widest uppercase font-bold transition-colors cursor-pointer ${
                  !showMapView ? "bg-primary text-white" : "bg-secondary text-primary/70 hover:text-primary"
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setShowMapView(true)}
                className={`px-4 py-1.5 text-[9px] tracking-widest uppercase font-bold transition-colors cursor-pointer ${
                  showMapView ? "bg-primary text-white" : "bg-secondary text-primary/70 hover:text-primary"
                }`}
              >
                Map Split
              </button>
            </div>
          </div>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar filters rounded panel */}
          <div className="bg-white border border-black/5 shadow-md p-6 rounded-3xl h-fit space-y-6 lg:sticky lg:top-24">
            <div className="flex justify-between items-center border-b border-black/5 pb-4">
              <h3 className="font-playfair text-lg font-bold text-primary tracking-wide flex items-center space-x-2">
                <SlidersHorizontal className="w-4.5 h-4.5 text-gold" />
                <span>Filters</span>
              </h3>
              <button
                onClick={clearAllFilters}
                className="text-slate-500 hover:text-gold text-[10px] tracking-wider uppercase font-semibold flex items-center space-x-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Country Selector */}
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Country</label>
              <select
                value={filters.country}
                onChange={(e) => setFilters({ country: e.target.value })}
                className="w-full bg-white border border-black/10 text-primary text-xs py-2 px-3 focus:outline-none focus:border-gold rounded-xl cursor-pointer [&>option]:bg-white"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Collection</label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ propertyType: e.target.value })}
                className="w-full bg-white border border-black/10 text-primary text-xs py-2 px-3 focus:outline-none focus:border-gold rounded-xl cursor-pointer [&>option]:bg-white"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-gold">Bedrooms (Min)</label>
              <div className="grid grid-cols-5 gap-1">
                {bedBathOptions.slice(0, 5).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFilters({ bedrooms: opt })}
                    className={`py-1 text-xs border rounded-lg transition-colors cursor-pointer text-center ${
                      filters.bedrooms === opt
                        ? "bg-gold/15 border-gold text-gold font-bold"
                        : "border-black/10 hover:border-gold/30 text-primary/70"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Max slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase font-bold">
                <span className="text-gold">Max Price</span>
                <span className="text-primary/70">
                  {priceMax === 100000000 ? "Any" : `$${(priceMax / 1000000).toFixed(1)}M`}
                </span>
              </div>
              <input
                type="range"
                min={10000000}
                max={100000000}
                step={5000000}
                value={priceMax}
                onChange={(e) => setPriceMax(parseInt(e.target.value))}
                className="w-full accent-gold bg-secondary h-1 rounded-full cursor-pointer"
              />
            </div>

            {/* Amenities Checklist */}
            <div className="space-y-3 pt-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-gold block">Amenities</label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {allAmenities.map((amenity) => {
                  const isChecked = selectedAmenities.includes(amenity);
                  return (
                    <button
                      key={amenity}
                      onClick={() => handleToggleAmenity(amenity)}
                      className="flex items-center space-x-2.5 text-xs text-slate-600 hover:text-primary transition-colors cursor-pointer text-left w-full"
                    >
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? "bg-gold border-gold text-white" : "border-black/20 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-light">{amenity}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* List display */}
          <div className="lg:col-span-3">
            {showMapView ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[650px]">
                <div className="overflow-y-auto pr-1 space-y-6 h-full">
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                      <div key={property.id} className="h-[380px]">
                        <PropertyCard property={property} />
                      </div>
                    ))
                  ) : (
                    <div className="py-20 text-center text-slate-500 font-light border border-black/5 rounded-3xl bg-white shadow-sm">
                      No properties match your filter preferences.
                    </div>
                  )}
                </div>
                <div className="h-full">
                  <PropertiesMap properties={filteredProperties} />
                </div>
              </div>
            ) : (
              <>
                {filteredProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center text-slate-500 font-light border border-black/5 rounded-3xl bg-white shadow-sm">
                    No properties match your filter preferences.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
