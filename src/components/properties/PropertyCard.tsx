"use client";

import Link from "next/link";
import { useStore } from "@/store/useStore";
import { Bed, Bath, Maximize2, TrendingUp, Heart, MapPin } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { toggleSavedProperty, isSaved } = useStore();
  const saved = isSaved(property.id);

  return (
    <div className="bg-white border border-black/5 rounded-3xl overflow-hidden group flex flex-col h-full hover:border-gold/40 hover:shadow-lg transition-all duration-350">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient overlay to ensure top/bottom readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white text-primary text-[9px] tracking-widest font-bold px-3 py-1.5 uppercase rounded-full border border-black/5 shadow-md">
            {property.category}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSavedProperty(property.id);
          }}
          className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full border border-black/5 hover:border-gold hover:text-gold transition-all duration-300 shadow-md cursor-pointer text-primary"
        >
          <Heart className={`w-4 h-4 transition-colors ${saved ? "fill-gold text-gold" : "text-primary/70"}`} />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 left-4">
          <p className="font-playfair text-xl font-bold text-primary tracking-wide bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-black/5 shadow-lg">
            {property.priceFormatted}
          </p>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div>
          <h3 className="font-playfair text-lg font-bold tracking-wide text-primary group-hover:text-gold transition-colors duration-300">
            <Link href={`/properties/${property.id}`}>{property.title}</Link>
          </h3>
          <p className="text-slate-500 text-xs font-light mt-1 flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>{property.location}</span>
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-3 py-3 border-y border-black/5 text-xs text-slate-600 font-light">
          <div className="flex items-center space-x-1.5 justify-center">
            <Bed className="w-3.5 h-3.5 text-gold" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-center">
            <Bath className="w-3.5 h-3.5 text-gold" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center space-x-1.5 justify-center">
            <Maximize2 className="w-3.5 h-3.5 text-gold" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="flex justify-between items-center pt-2 text-xs">
          <div className="flex items-center space-x-1.5 text-gold font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ROI: {property.roi}</span>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="text-[10px] tracking-widest text-primary uppercase font-bold group-hover:text-gold transition-all duration-300 relative py-1"
          >
            View Details
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary group-hover:bg-gold transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
