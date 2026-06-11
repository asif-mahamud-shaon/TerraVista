"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { DESTINATIONS } from "@/data/properties";
import { TrendingUp, Award, Coins, BarChart2, ShieldAlert } from "lucide-react";

export default function InvestmentPage() {
  const [purchasePrice, setPurchasePrice] = useState(15000000);
  const [appreciationRate, setAppreciationRate] = useState(7.5);
  const [rentalYieldRate, setRentalYieldRate] = useState(5.5);
  const [holdingYears, setHoldingYears] = useState(10);

  const calculatedResults = useMemo(() => {
    const capitalGains = purchasePrice * (Math.pow(1 + appreciationRate / 100, holdingYears) - 1);
    const rentalRevenue = purchasePrice * (rentalYieldRate / 100) * holdingYears;
    const finalAssetValue = purchasePrice + capitalGains;
    const totalProfit = capitalGains + rentalRevenue;
    const netRoi = (totalProfit / purchasePrice) * 100;

    return {
      capitalGains: capitalGains.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      rentalRevenue: rentalRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      finalAssetValue: finalAssetValue.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      totalProfit: totalProfit.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      netRoi: netRoi.toFixed(1),
    };
  }, [purchasePrice, appreciationRate, rentalYieldRate, holdingYears]);

  const compareRegions = [
    { city: "Dubai", yield: "7.8%", growth: "+14.2%", tax: "0% Income & Capital Gains", score: "AAA" },
    { city: "Sydney", yield: "5.5%", growth: "+9.5%", tax: "Standard bracket, land tax applies", score: "AA+" },
    { city: "London", yield: "4.8%", growth: "+8.9%", tax: "15% SDLT threshold, non-res CGT", score: "AAA" },
    { city: "New York", yield: "4.2%", growth: "+6.8%", tax: "Federal + State + City tax rates", score: "AA+" },
    { city: "Paris", yield: "4.5%", growth: "+7.2%", tax: "Wealth tax + high local bracket", score: "AA" },
  ];

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
              className="px-5 py-2 border border-primary/20 hover:border-primary rounded-full text-xs font-semibold tracking-wider transition-all bg-primary text-white hover:bg-transparent hover:text-primary shadow-sm"
            >
              Consult Broker
            </Link>
          </div>
        </header>

        {/* Content details */}
        <div className="max-w-7xl mx-auto py-8 space-y-4">
          <span className="bg-primary/10 border border-primary/20 text-primary text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full font-bold">
            Acquisition Intelligence
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-none">
            Global Wealth <span className="font-light text-primary/75">& Analytics</span>
          </h1>
          <p className="text-primary/70 font-light text-xs max-w-md">
            Model yields, appreciation projections, and tax optimizations across sovereign jurisdictions dynamically.
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
            <span>Financial style: Institutional</span>
            <span>Calculation basis: Net yields</span>
          </div>
        </div>

        {/* Calculator */}
        <section className="bg-white border border-black/5 p-8 rounded-3xl shadow-md space-y-8">
          <div className="flex items-center space-x-2.5 border-b border-black/5 pb-4">
            <Coins className="w-5 h-5 text-gold" />
            <h2 className="font-playfair text-xl font-bold tracking-wide text-primary">
              Bespoke Asset Modeling
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Sliders */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Capital Committed</span>
                  <span className="text-primary font-bold">${purchasePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={2000000}
                  max={100000000}
                  step={1000000}
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(parseInt(e.target.value))}
                  className="w-full accent-gold bg-secondary h-1 rounded-full cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Appreciation Forecast (Annual %)</span>
                  <span className="text-gold font-bold">+{appreciationRate}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.5}
                  value={appreciationRate}
                  onChange={(e) => setAppreciationRate(parseFloat(e.target.value))}
                  className="w-full accent-gold bg-secondary h-1 rounded-full cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Net Rental Yield (Annual %)</span>
                  <span className="text-primary font-bold">{rentalYieldRate}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={0.25}
                  value={rentalYieldRate}
                  onChange={(e) => setRentalYieldRate(parseFloat(e.target.value))}
                  className="w-full accent-gold bg-secondary h-1 rounded-full cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Holding Term</span>
                  <span className="text-primary font-bold">{holdingYears} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={holdingYears}
                  onChange={(e) => setHoldingYears(parseInt(e.target.value))}
                  className="w-full accent-gold bg-secondary h-1 rounded-full cursor-pointer"
                />
              </div>
            </div>

            {/* Output */}
            <div className="bg-secondary/60 border border-black/5 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm">
              <h3 className="font-playfair text-sm font-bold tracking-widest text-gold uppercase text-center border-b border-black/5 pb-3">
                Investment Inflow Projections
              </h3>
              <div className="space-y-3.5 text-xs font-light text-slate-600">
                <div className="flex justify-between">
                  <span>Projected Capital Gain</span>
                  <span className="font-semibold text-primary">${calculatedResults.capitalGains}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rental Inflows</span>
                  <span className="font-semibold text-primary">${calculatedResults.rentalRevenue}</span>
                </div>
                <div className="flex justify-between border-t border-black/5 pt-3">
                  <span>Asset Exit Value</span>
                  <span className="font-semibold text-primary">${calculatedResults.finalAssetValue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumulative Profit</span>
                  <span className="font-semibold text-gold">${calculatedResults.totalProfit}</span>
                </div>
              </div>
              <div className="border-t border-black/5 pt-4 text-center">
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">Net ROI Forecast</p>
                <p className="font-playfair text-4xl font-black text-gold mt-1">
                  {calculatedResults.netRoi}%
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Comparison table */}
        <section className="space-y-6">
          <h2 className="font-playfair text-2xl font-bold tracking-wide text-primary">
            Global Jurisdictional Yields comparison
          </h2>

          <div className="overflow-x-auto border border-black/5 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-secondary border-b border-black/10 text-gold font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">City Node</th>
                  <th className="py-4 px-6">Avg Net Yield</th>
                  <th className="py-4 px-6">YoY Growth</th>
                  <th className="py-4 px-6">Tax Framework</th>
                  <th className="py-4 px-6">Market Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 font-light">
                {compareRegions.map((row) => (
                  <tr key={row.city} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-primary">{row.city}</td>
                    <td className="py-4 px-6 text-gold font-semibold">{row.yield}</td>
                    <td className="py-4 px-6 text-primary">{row.growth}</td>
                    <td className="py-4 px-6 text-slate-500 max-w-xs">{row.tax}</td>
                    <td className="py-4 px-6">
                      <span className="bg-gold/15 border border-gold/30 text-gold px-2.5 py-0.5 rounded-full font-semibold">
                        {row.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Analytics Insights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/5 shadow-md p-6 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-primary">Yield Preservation</h3>
            <p className="text-xs text-slate-550 font-light leading-relaxed">
              Investing in high-yield centers like Dubai ensures regular income that offsets global inflation index factors.
            </p>
          </div>

          <div className="bg-white border border-black/5 shadow-md p-6 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-primary">Capital appreciation</h3>
            <p className="text-xs text-slate-550 font-light leading-relaxed">
              Exuma Cay islands and coastal French Riviera cliffs show capital appreciation outstripping standard residential portfolios.
            </p>
          </div>

          <div className="bg-white border border-black/5 shadow-md p-6 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-playfair text-lg font-bold text-primary">Tax Optimization</h3>
            <p className="text-xs text-slate-550 font-light leading-relaxed">
              Optimal alignment of SPVs and trust assets allows generational wealth transfers under tax-friendly registries.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
