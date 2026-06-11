"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { Menu, X, Landmark, Compass, Heart, MessageSquareCode } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const savedCount = useStore((state) => state.savedProperties.length);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Properties", href: "/properties" },
    { name: "Investments", href: "/investment" },
    { name: "Agents", href: "/agents" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4 shadow-md"
          : "bg-white/40 backdrop-blur-sm py-5 border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Landmark className="w-8 h-8 text-gold transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-playfair text-2xl tracking-wider font-semibold text-primary">
            TERRA<span className="text-gold">VISTA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest font-semibold uppercase transition-all duration-300 relative py-1 hover:text-gold ${
                  isActive ? "text-gold" : "text-primary/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA / Controls */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="text-primary/80 hover:text-gold transition-colors flex items-center relative py-1"
            title="User Dashboard"
          >
            <Heart className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold text-primary font-bold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center animate-pulse">
                {savedCount}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-500 rounded-sm font-semibold text-xs tracking-widest uppercase hover:shadow-lg"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Link href="/dashboard" className="text-primary/80 hover:text-gold relative">
            <Heart className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-gold text-primary font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-gold transition-colors focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[70px] bg-white/95 backdrop-blur-lg z-40 transform transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } border-t border-black/5`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl tracking-widest uppercase font-semibold text-primary hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="text-lg tracking-widest uppercase font-semibold text-primary/80 hover:text-gold transition-colors"
          >
            Dashboard ({savedCount} Saved)
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-sm font-semibold tracking-widest uppercase"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
