"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { PROPERTIES } from "@/data/properties";
import { MessageSquare, X, Send, Bot, User, Trash2, MapPin, Sparkles, AlertCircle } from "lucide-react";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { chatMessages, addChatMessage, clearChat } = useStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isOpen, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userText = text.trim();
    addChatMessage({ sender: "user", text: userText });
    setIsTyping(true);

    // Simulate AI response with matching database recommendations
    setTimeout(() => {
      let responseText = "I have analyzed your acquisition criteria. Based on our current global register of ultra-exclusive listings:\n\n";
      const query = userText.toLowerCase();

      let matchedProperties = PROPERTIES;

      if (query.includes("dubai")) {
        matchedProperties = matchedProperties.filter(p => p.city.toLowerCase() === "dubai");
        responseText += "Here are the top luxury listings in Dubai, presenting strong rental yields and stable capital appreciation:\n";
      } else if (query.includes("new york") || query.includes("nyc") || query.includes("manhattan")) {
        matchedProperties = matchedProperties.filter(p => p.city.toLowerCase() === "new york");
        responseText += "Here are the signature properties in Manhattan offering historic value preservation:\n";
      } else if (query.includes("london")) {
        matchedProperties = matchedProperties.filter(p => p.city.toLowerCase() === "london");
        responseText += "Here is our listed Belgravia portfolio in London:\n";
      } else if (query.includes("waterfront") || query.includes("beach")) {
        matchedProperties = matchedProperties.filter(p => p.category === "Waterfront Villas");
        responseText += "Explore our pristine beach and waterfront estates:\n";
      } else if (query.includes("roi") || query.includes("yield") || query.includes("investment")) {
        matchedProperties = matchedProperties.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi));
        responseText += "These properties present the highest Return on Investment (ROI) indices globally:\n";
      } else if (query.includes("island")) {
        matchedProperties = matchedProperties.filter(p => p.category === "Private Islands");
        responseText += "Our private island portfolio in the Caribbean cays:\n";
      } else {
        matchedProperties = matchedProperties.slice(0, 2);
        responseText = "I recommend exploring these curated options from our signature collection, representing top appreciation forecast coordinates:";
      }

      setIsTyping(false);

      if (matchedProperties.length > 0) {
        addChatMessage({ sender: "ai", text: responseText });
        
        // Output recommendations directly in the message stream
        matchedProperties.forEach(prop => {
          addChatMessage({
            sender: "ai",
            text: `💎 **[${prop.title}](file:///properties/${prop.id})** in *${prop.location}*\n• Price: **${prop.priceFormatted}**\n• ROI Index: **${prop.roi}**\n• Size: **${prop.area}**`,
          });
        });
      } else {
        addChatMessage({
          sender: "ai",
          text: "I couldn't locate specific matches for that filter. However, our advisors can source off-market opportunities. Would you like me to schedule a consultation?",
        });
      }
    }, 1200);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  const handleSuggestion = (suggestionText: string) => {
    sendMessage(suggestionText);
  };

  // Render message text with custom parser for luxury property cards
  const renderMessageContent = (msg: { sender: string; text: string }) => {
    const isAi = msg.sender === "ai";
    const propertyMatch = msg.text.match(/file:\/\/\/properties\/(prop-\d+)/);

    if (isAi && propertyMatch) {
      const propId = propertyMatch[1];
      const prop = PROPERTIES.find(p => p.id === propId);
      if (prop) {
        return (
          <div className="space-y-3 w-full">
            <div className="bg-white border border-gold/20 rounded-[20px] overflow-hidden shadow-md hover:shadow-xl hover:border-gold/40 transition-all duration-300 w-full max-w-[280px]">
              <div className="relative h-28 w-full bg-slate-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prop.images[0]}
                  alt={prop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-md text-gold text-[8px] font-bold tracking-[0.1em] px-2 py-0.5 rounded-full border border-gold/30">
                  {prop.roi} ROI
                </div>
              </div>
              <div className="p-3 space-y-2">
                <div>
                  <h5 className="font-playfair font-bold text-xs text-primary line-clamp-1">{prop.title}</h5>
                  <p className="text-[9px] text-slate-400 font-light flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-gold shrink-0" />
                    <span className="truncate">{prop.location}</span>
                  </p>
                </div>
                <div className="flex justify-between items-center text-[10px] pt-2 border-t border-black/5">
                  <span className="font-bold text-gold">{prop.priceFormatted}</span>
                  <Link
                    href={`/properties/${prop.id}`}
                    onClick={() => setIsOpen(false)}
                    className="bg-primary hover:bg-gold text-white hover:text-primary px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase transition-colors shadow-sm"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="space-y-1">
        {msg.text.split("\n").map((line, idx) => {
          const linkRegex = /\[(.*?)\]\((.*?)\)/;
          const match = line.match(linkRegex);
          if (match) {
            const [_, linkText, url] = match;
            const path = url.replace("file://", "");
            const prefix = line.substring(0, line.indexOf("["));
            const suffix = line.substring(line.indexOf(")") + 1);
            return (
              <p key={idx}>
                {prefix}
                <Link
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className="text-gold underline font-semibold hover:text-gold-hover transition-colors"
                >
                  {linkText}
                </Link>
                {suffix}
              </p>
            );
          }
          return <p key={idx} className="whitespace-pre-wrap">{line}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Chat Trigger Button with Double Pulse Glow */}
      <div className="fixed bottom-6 right-6 z-50">
        <span className="absolute -inset-2.5 rounded-full bg-gold/15 animate-ping pointer-events-none" />
        <span className="absolute -inset-1.5 rounded-full bg-gold/25 animate-pulse-gold blur-sm pointer-events-none" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-primary hover:bg-primary-hover text-gold p-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border border-gold/25 cursor-pointer flex items-center justify-center h-14 w-14"
          title="Acquisition AI Advisor"
        >
          {isOpen ? <X className="w-5.5 h-5.5 text-gold" /> : <Sparkles className="w-5.5 h-5.5 text-gold" />}
        </button>
      </div>

      {/* Chat window panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[92vw] sm:w-[410px] h-[560px] z-50 glass-panel rounded-[28px] shadow-2xl flex flex-col overflow-hidden border border-gold/30 animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Top Hairline accent */}
          <div className="h-1 bg-gradient-to-r from-gold via-gold-hover to-gold w-full" />

          {/* Header */}
          <div className="bg-white/95 px-5 py-4.5 border-b border-gold/15 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/35 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold" />
              </div>
              <div>
                <span className="text-[8px] text-gold font-bold tracking-[0.2em] uppercase block">
                  TerraVista Digital Desk
                </span>
                <h4 className="font-playfair font-black text-sm text-primary tracking-wide">
                  Concierge Portfolio Advisor
                </h4>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="flex items-center space-x-1 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full text-[8px] font-bold text-emerald-600 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online</span>
              </span>
              <button
                onClick={clearChat}
                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded-full transition-all cursor-pointer"
                title="Clear History"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-full transition-all cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-[#F8FAFC]/50 scrollbar-none">
            {chatMessages.map((msg) => {
              const isAi = msg.sender === "ai";
              return (
                <div
                  key={msg.id}
                  className={`flex ${isAi ? "justify-start" : "justify-end"} items-start space-x-2.5`}
                >
                  {isAi && (
                    <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-gold" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-[20px] p-3.5 text-xs leading-relaxed ${
                      isAi
                        ? "bg-white text-primary border border-black/5 shadow-sm border-l-2 border-l-gold rounded-tl-none"
                        : "bg-primary text-white font-medium rounded-tr-none shadow-md"
                    }`}
                  >
                    {renderMessageContent(msg)}
                  </div>
                  {!isAi && (
                    <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5 border border-gold/30">
                      <User className="w-3.5 h-3.5 text-gold" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bouncing Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start items-start space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-gold animate-pulse" />
                </div>
                <div className="bg-white border border-black/5 rounded-[20px] rounded-tl-none px-4 py-3.5 shadow-sm flex items-center space-x-1.5 border-l-2 border-l-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Bar */}
          <div className="px-5 py-2.5 bg-white border-t border-gold/10 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
            {[
              "Dubai Waterfront Villas",
              "High ROI Properties",
              "NYC Sky Penthouses",
              "Private Islands Bahamas",
            ].map((sug) => (
              <button
                key={sug}
                onClick={() => handleSuggestion(sug)}
                className="bg-slate-50 border border-gold/20 text-[9px] font-bold uppercase tracking-wider text-slate-500 px-3.5 py-1.5 rounded-full whitespace-nowrap hover:border-gold hover:text-gold hover:bg-gold/5 transition-all cursor-pointer shadow-sm"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="bg-white px-4 py-3.5 border-t border-gold/15 flex items-center space-x-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, yields, regions..."
              className="flex-grow bg-slate-50 border border-gold/15 text-primary placeholder-slate-400 text-xs py-2.5 px-4 focus:outline-none focus:border-gold focus:bg-white rounded-full transition-all shadow-inner"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-gold text-white hover:text-primary p-2.5 rounded-full transition-colors cursor-pointer shadow-md hover:shadow-gold/10 flex items-center justify-center shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
