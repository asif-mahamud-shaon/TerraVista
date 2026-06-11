import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export interface Booking {
  id: string;
  propertyId?: string;
  agentId: string;
  clientName: string;
  email: string;
  date: string;
  time: string;
  message?: string;
}

export interface SearchFilters {
  mode: "Buy" | "Rent" | "Commercial" | "Off Plan";
  location: string;
  country: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  priceRange: [number, number];
  currency: string;
}

interface AppState {
  // Saved properties
  savedProperties: string[];
  toggleSavedProperty: (id: string) => void;
  isSaved: (id: string) => boolean;

  // Search filters
  filters: SearchFilters;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;

  // AI Chat assistant
  chatMessages: ChatMessage[];
  addChatMessage: (msg: Omit<ChatMessage, "id" | "timestamp">) => void;
  clearChat: () => void;

  // Agent Bookings
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id">) => void;

  // Property Alerts
  alerts: string[];
  addAlert: (alertText: string) => void;
  removeAlert: (index: number) => void;
}

const initialFilters: SearchFilters = {
  mode: "Buy",
  location: "",
  country: "All",
  propertyType: "All",
  bedrooms: "Any",
  bathrooms: "Any",
  priceRange: [0, 100000000],
  currency: "USD",
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Saved properties
      savedProperties: [],
      toggleSavedProperty: (id) =>
        set((state) => {
          const exists = state.savedProperties.includes(id);
          const nextSaved = exists
            ? state.savedProperties.filter((pId) => pId !== id)
            : [...state.savedProperties, id];
          return { savedProperties: nextSaved };
        }),
      isSaved: (id) => get().savedProperties.includes(id),

      // Search filters
      filters: initialFilters,
      setFilters: (newFilters) =>
        set((state) => ({ filters: { ...state.filters, ...newFilters } })),
      resetFilters: () => set({ filters: initialFilters }),

      // AI Chat assistant
      chatMessages: [
        {
          id: "initial-msg",
          sender: "ai",
          text: "Welcome to TerraVista. I am your bespoke AI property advisor. How may I assist you with your global real estate acquisitions today?",
          timestamp: new Date().toISOString(),
        },
      ],
      addChatMessage: (msg) =>
        set((state) => {
          const newMsg: ChatMessage = {
            ...msg,
            id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date().toISOString(),
          };
          return { chatMessages: [...state.chatMessages, newMsg] };
        }),
      clearChat: () =>
        set({
          chatMessages: [
            {
              id: "initial-msg",
              sender: "ai",
              text: "Welcome to TerraVista. I am your bespoke AI property advisor. How may I assist you with your global real estate acquisitions today?",
              timestamp: new Date().toISOString(),
            },
          ],
        }),

      // Agent Bookings
      bookings: [],
      addBooking: (booking) =>
        set((state) => {
          const newBooking: Booking = {
            ...booking,
            id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          };
          return { bookings: [...state.bookings, newBooking] };
        }),

      // Property Alerts
      alerts: [],
      addAlert: (alertText) =>
        set((state) => ({ alerts: [...state.alerts, alertText] })),
      removeAlert: (index) =>
        set((state) => ({ alerts: state.alerts.filter((_, i) => i !== index) })),
    }),
    {
      name: "terravista-store",
      partialize: (state) => ({
        savedProperties: state.savedProperties,
        chatMessages: state.chatMessages,
        bookings: state.bookings,
        alerts: state.alerts,
      }),
    }
  )
);
