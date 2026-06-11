export interface Agent {
  id: string;
  name: string;
  photo: string;
  rating: number;
  propertiesSold: number;
  languages: string[];
  experience: string;
  biography: string;
  email: string;
  phone: string;
  achievements: string[];
}

export interface NearbyPlace {
  name: string;
  type: "Airport" | "School" | "Shopping" | "Beach" | "Restaurant" | "Nature";
  distance: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  priceFormatted: string;
  location: string;
  city: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  roi: string;
  rentalYield: string;
  appreciation: string;
  demandIndex: string;
  category: "Waterfront Villas" | "Penthouses" | "Smart Homes" | "Mansions" | "Private Islands" | "Commercial Towers" | "Apartments";
  description: string;
  images: string[];
  virtualTourUrl: string;
  videoUrl: string;
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  agentId: string;
  highlights: string[];
  nearbyPlaces: NearbyPlace[];
  featured: boolean;
  floorPlanImage?: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  avgPriceSqft: string;
  annualGrowth: string;
  marketActivity: string;
  investmentRating: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export const AGENTS: Agent[] = [
  {
    "id": "agent-1",
    "name": "Alexander Vance",
    "photo": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    "rating": 4.95,
    "propertiesSold": 184,
    "languages": [
      "English",
      "Arabic",
      "French"
    ],
    "experience": "14 Years",
    "biography": "Alexander is a seasoned advisor specializing in off-plan developments and luxury penthouses in Dubai Marina and Palm Jumeirah. With a background in finance, he guides clients through high-yield investments.",
    "email": "a.vance@terravista.com",
    "phone": "+971 50 123 4567",
    "achievements": [
      "Top Producer 2024",
      "Luxury Specialist of the Year",
      "$500M+ Career Volume"
    ]
  },
  {
    "id": "agent-2",
    "name": "Sophia Sterling",
    "photo": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    "rating": 4.98,
    "propertiesSold": 142,
    "languages": [
      "English",
      "German",
      "Russian"
    ],
    "experience": "11 Years",
    "biography": "Sophia manages the European and UK portfolio. She works closely with high-net-worth families, securing historic estates in Mayfair and modern villas on the French Riviera.",
    "email": "s.sterling@terravista.com",
    "phone": "+44 20 7946 0958",
    "achievements": [
      "Best Customer Satisfaction 2025",
      "Global Network Leader"
    ]
  },
  {
    "id": "agent-3",
    "name": "Marcus Thorne",
    "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    "rating": 4.92,
    "propertiesSold": 210,
    "languages": [
      "English",
      "Spanish",
      "Mandarin"
    ],
    "experience": "16 Years",
    "biography": "Based in New York City, Marcus represents premium penthouse developments and private estates in Manhattan, Miami, and Los Angeles. He is widely known for his discreet transactions.",
    "email": "m.thorne@terravista.com",
    "phone": "+1 212 555 0192",
    "achievements": [
      "Chairman's Circle Award 2023-2025",
      "Sotheby's Network Legend"
    ]
  },
  {
    "id": "agent-4",
    "name": "Elena Rostova",
    "photo": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    "rating": 4.96,
    "propertiesSold": 154,
    "languages": [
      "English",
      "Russian",
      "Spanish"
    ],
    "experience": "12 Years",
    "biography": "Elena specializes in luxury penthouses and residential properties in Dubai and Paris. She has a deep knowledge of the European buyer profile.",
    "email": "e.rostova@terravista.com",
    "phone": "+971 50 234 5678",
    "achievements": [
      "Europe Leader 2024",
      "Top Dealmaker Paris"
    ]
  },
  {
    "id": "agent-5",
    "name": "David Kim",
    "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    "rating": 4.93,
    "propertiesSold": 128,
    "languages": [
      "English",
      "Korean",
      "Japanese"
    ],
    "experience": "9 Years",
    "biography": "David oversees our Asia-Pacific listings, focusing on high-rise development and waterfront condominiums in Singapore and Tokyo.",
    "email": "d.kim@terravista.com",
    "phone": "+65 9123 4567",
    "achievements": [
      "APAC Top Broker 2025"
    ]
  },
  {
    "id": "agent-6",
    "name": "Amira Al-Sayed",
    "photo": "https://images.unsplash.com/photo-1594744803329-e58310de471d?auto=format&fit=crop&w=400&q=80",
    "rating": 4.97,
    "propertiesSold": 165,
    "languages": [
      "English",
      "Arabic",
      "Turkish"
    ],
    "experience": "13 Years",
    "biography": "Amira is a key advisor for GCC region private acquisitions. She manages high-value beachfront properties and private villas on Palm Jumeirah.",
    "email": "a.alsayed@terravista.com",
    "phone": "+971 50 345 6789",
    "achievements": [
      "GCC Top Sales Award 2024",
      "$300M+ Volume"
    ]
  },
  {
    "id": "agent-7",
    "name": "Lucas Silva",
    "photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    "rating": 4.91,
    "propertiesSold": 112,
    "languages": [
      "English",
      "Portuguese",
      "Spanish"
    ],
    "experience": "8 Years",
    "biography": "Lucas covers South American luxury markets and Florida estates. He has unmatched expertise in waterfront villas and private estates in Miami.",
    "email": "l.silva@terravista.com",
    "phone": "+1 305 555 0143",
    "achievements": [
      "Miami Rising Star 2024"
    ]
  },
  {
    "id": "agent-8",
    "name": "Chloe Dubois",
    "photo": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    "rating": 4.94,
    "propertiesSold": 139,
    "languages": [
      "English",
      "French",
      "Italian"
    ],
    "experience": "10 Years",
    "biography": "Chloe represents premium European assets including private islands and historic estates in the French Riviera and Switzerland.",
    "email": "c.dubois@terravista.com",
    "phone": "+33 6 5550 1782",
    "achievements": [
      "Elite Club Member 2025"
    ]
  },
  {
    "id": "agent-9",
    "name": "Kenji Takahashi",
    "photo": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    "rating": 4.99,
    "propertiesSold": 198,
    "languages": [
      "English",
      "Japanese",
      "Mandarin"
    ],
    "experience": "15 Years",
    "biography": "Kenji is an authority on luxury commercial properties and high-net-worth acquisitions across Japan, Singapore, and Australia.",
    "email": "k.takahashi@terravista.com",
    "phone": "+81 3 5555 0198",
    "achievements": [
      "Global Chairman's Award 2024",
      "$600M+ Career Volume"
    ]
  },
  {
    "id": "agent-10",
    "name": "Sarah Jenkins",
    "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    "rating": 4.96,
    "propertiesSold": 147,
    "languages": [
      "English",
      "German"
    ],
    "experience": "11 Years",
    "biography": "Sarah guides HNW clients through high-yield smart home and penthouse investments across New York, Toronto, and London.",
    "email": "s.jenkins@terravista.com",
    "phone": "+1 212 555 0247",
    "achievements": [
      "East Coast Top Producer 2025"
    ]
  },
  {
    "id": "agent-11",
    "name": "Mateo Fernandez",
    "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    "rating": 4.92,
    "propertiesSold": 119,
    "languages": [
      "English",
      "Spanish",
      "Catalan"
    ],
    "experience": "7 Years",
    "biography": "Mateo works with Mediterranean estates and private villas. He manages our Ibiza, Saint-Tropez, and Mallorca luxury portfolio.",
    "email": "m.fernandez@terravista.com",
    "phone": "+34 600 555 123",
    "achievements": [
      "Best Client Relations 2024"
    ]
  },
  {
    "id": "agent-12",
    "name": "Aisha Diallo",
    "photo": "https://images.unsplash.com/photo-1554151228-14d9def656a4?auto=format&fit=crop&w=400&q=80",
    "rating": 4.95,
    "propertiesSold": 135,
    "languages": [
      "English",
      "French",
      "Wolof"
    ],
    "experience": "9 Years",
    "biography": "Aisha is a global investment analyst turned broker. She handles high-value commercial properties, sky penthouses, and beachfront retreats.",
    "email": "a.diallo@terravista.com",
    "phone": "+44 7700 900077",
    "achievements": [
      "London Investment Specialist of the Year"
    ]
  },
  {
    "id": "agent-13",
    "name": "Oliver Hansen",
    "photo": "https://images.unsplash.com/photo-1507591064344-4c6ce005b133?auto=format&fit=crop&w=400&q=80",
    "rating": 4.94,
    "propertiesSold": 125,
    "languages": [
      "English",
      "Danish",
      "Swedish"
    ],
    "experience": "10 Years",
    "biography": "Oliver manages our Northern European and UK acquisitions. He specializes in private city estates and sustainable smart homes.",
    "email": "o.hansen@terravista.com",
    "phone": "+45 35 55 01 25",
    "achievements": [
      "Sustainable Design Advisor 2025"
    ]
  },
  {
    "id": "agent-14",
    "name": "Mei-Ling Wang",
    "photo": "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80",
    "rating": 4.98,
    "propertiesSold": 172,
    "languages": [
      "English",
      "Mandarin",
      "Cantonese"
    ],
    "experience": "12 Years",
    "biography": "Mei-Ling handles prime residential and commercial tower transactions in Singapore, Hong Kong, and Sydney. She has a high volume of off-market sales.",
    "email": "ml.wang@terravista.com",
    "phone": "+65 8123 4568",
    "achievements": [
      "Global Elite Circle 2024-2025",
      "$400M+ Career Volume"
    ]
  }
];

export const PROPERTIES: Property[] = [
  {
    "id": "prop-1",
    "title": "The Golden Crest Mansion",
    "price": 32500000,
    "priceFormatted": "$32,500,000",
    "location": "Palm Jumeirah, Dubai",
    "city": "Dubai",
    "country": "UAE",
    "bedrooms": 6,
    "bathrooms": 8,
    "area": "14,500 sq ft",
    "roi": "8.2%",
    "rentalYield": "6.8%",
    "appreciation": "+14.2% Y-o-Y",
    "demandIndex": "Ultra-High",
    "category": "Waterfront Villas",
    "description": "An architectural masterpiece nestled on the exclusive fronds of Palm Jumeirah. This ultra-luxury waterfront villa offers panoramic views of the Dubai Marina skyline and pristine private beach access. Complete with customized gold-plated finishes, custom Italian marble, a high-end chef's kitchen, private wellness spa, and an glass-bottomed infinity pool reflecting the golden rays of the Arabian Gulf.",
    "images": [
      "https://images.unsplash.com/photo-photo-1556911220-e15b29be8c86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1493663284031-b733aefaa853?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Infinity Pool",
      "Private Beach",
      "Smart Automation",
      "Wellness Spa",
      "Home Cinema",
      "Wine Cellar",
      "24/7 Security",
      "Private Jetty"
    ],
    "coordinates": {
      "lat": 25.1124,
      "lng": 55.139
    },
    "agentId": "agent-1",
    "highlights": [
      "Direct beach front access on Palm Jumeirah",
      "Automated floor-to-ceiling glass doors",
      "Custom indoor elevator and gold spa lounge",
      "Unrivaled sunset views of Dubai Marina skyline"
    ],
    "nearbyPlaces": [
      {
        "name": "Dubai International Airport",
        "type": "Airport",
        "distance": "28 mins"
      },
      {
        "name": "The Dubai Mall",
        "type": "Shopping",
        "distance": "18 mins"
      },
      {
        "name": "Nakheel Mall Palm Jumeirah",
        "type": "Shopping",
        "distance": "5 mins"
      },
      {
        "name": "Palm Jumeirah Beach",
        "type": "Beach",
        "distance": "1 min"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_1.png"
  },
  {
    "id": "prop-2",
    "title": "One Heights Sky Penthouse",
    "price": 18400000,
    "priceFormatted": "$18,400,000",
    "location": "Manhattan, New York",
    "city": "New York",
    "country": "USA",
    "bedrooms": 4,
    "bathrooms": 4.5,
    "area": "6,200 sq ft",
    "roi": "5.4%",
    "rentalYield": "4.2%",
    "appreciation": "+6.8% Y-o-Y",
    "demandIndex": "Stable",
    "category": "Penthouses",
    "description": "Floating above Manhattan, this duplex penthouse offers 360-degree views of Central Park, the Hudson River, and the iconic city skyline. Designed by award-winning architects, the home features double-height ceilings, a private wrap-around terrace, custom automated lighting, and bespoke minimalist furniture. Residents enjoy access to premium white-glove building services, swimming pools, and a private dining room.",
    "images": [
      "https://images.unsplash.com/photo-photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Central Park View",
      "Private Terrace",
      "Smart Automation",
      "Concierge Service",
      "Indoor Lap Pool",
      "Private Elevators",
      "State-of-the-Art Gym"
    ],
    "coordinates": {
      "lat": 40.7831,
      "lng": -73.9712
    },
    "agentId": "agent-3",
    "highlights": [
      "Duplex configuration with wrap-around terrace",
      "Private elevator lobby direct access",
      "Gourmet kitchen with Miele & Sub-Zero appliances",
      "Exclusive residential club and spa membership"
    ],
    "nearbyPlaces": [
      {
        "name": "John F. Kennedy Intl Airport",
        "type": "Airport",
        "distance": "45 mins"
      },
      {
        "name": "Central Park Parkside",
        "type": "Nature",
        "distance": "2 mins"
      },
      {
        "name": "Columbia Grammar School",
        "type": "School",
        "distance": "10 mins"
      },
      {
        "name": "Fifth Avenue Luxury Boutiques",
        "type": "Shopping",
        "distance": "5 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_2.png"
  },
  {
    "id": "prop-3",
    "title": "Belgravia Regency Villa",
    "price": 24500000,
    "priceFormatted": "£24,500,000",
    "location": "Belgravia, London",
    "city": "London",
    "country": "United Kingdom",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "8,900 sq ft",
    "roi": "6.1%",
    "rentalYield": "4.8%",
    "appreciation": "+8.9% Y-o-Y",
    "demandIndex": "High",
    "category": "Smart Homes",
    "description": "A meticulously restored Grade II listed Regency home located in the heart of Belgravia. Blending timeless historic facade with state-of-the-art modern home automation systems. The property boasts a subterranean wellness center, a private indoor hydrotherapy pool, structural glass skylights, a private landscaped courtyard, and full smart home integration control via custom touchpads or voice interface.",
    "images": [
      "https://images.unsplash.com/photo-photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1590283603385-fc7ffb09d422?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1616594039964-ae9021a400fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1617325247661-6a314b97d268?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1616530940355-351fabd9565b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1598928506311-c55dedf1a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Indoor Pool",
      "Bespoke Automation",
      "Landscaped Courtyard",
      "Subterranean Gym",
      "Wine Vault",
      "Historical Architecture"
    ],
    "coordinates": {
      "lat": 51.4983,
      "lng": -0.1507
    },
    "agentId": "agent-2",
    "highlights": [
      "Fully integrated Crestron home automation system",
      "Listed architectural features masterfully restored",
      "Custom indoor pool & private wellness retreat",
      "Gated private garden square access keys"
    ],
    "nearbyPlaces": [
      {
        "name": "Heathrow Airport",
        "type": "Airport",
        "distance": "35 mins"
      },
      {
        "name": "Harrods Department Store",
        "type": "Shopping",
        "distance": "8 mins"
      },
      {
        "name": "Hill House Prep School",
        "type": "School",
        "distance": "5 mins"
      },
      {
        "name": "Hyde Park Gates",
        "type": "Nature",
        "distance": "10 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_3.png"
  },
  {
    "id": "prop-4",
    "title": "Villa L'Horizon",
    "price": 45000000,
    "priceFormatted": "€45,000,000",
    "location": "Eze, French Riviera",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 7,
    "bathrooms": 9,
    "area": "16,000 sq ft",
    "roi": "7.5%",
    "rentalYield": "5.5%",
    "appreciation": "+11.3% Y-o-Y",
    "demandIndex": "Very High",
    "category": "Mansions",
    "description": "Sitting majestically on the cliffs of Eze, this modern palace commands stunning panoramas of the Mediterranean Sea. Floor-to-ceiling glass walls frame the vistas of Saint-Jean-Cap-Ferrat. Features include an outdoor heated infinity pool, private helipad, separate guest apartments, custom private cinema, and professional-grade security bunkers.",
    "images": [
      "https://images.unsplash.com/photo-photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1604709177225-2965640248c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1620626011761-99ccc3173d57?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1507652313519-d4e0b3433535?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Ocean View",
      "Private Helipad",
      "Infinity Pool",
      "Guest House",
      "Fitness Gym",
      "24/7 Security Patrol"
    ],
    "coordinates": {
      "lat": 43.7314,
      "lng": 7.3601
    },
    "agentId": "agent-4",
    "highlights": [
      "Spectacular cliffside sea views",
      "Approved private helicopter landing pad",
      "Infinity edge pool cascading into sea horizons",
      "10 minutes drive from Monaco Principality"
    ],
    "nearbyPlaces": [
      {
        "name": "Nice Cote d'Azur Airport",
        "type": "Airport",
        "distance": "25 mins"
      },
      {
        "name": "Monaco Heliport",
        "type": "Airport",
        "distance": "10 mins"
      },
      {
        "name": "Eze Village Medieval Center",
        "type": "Nature",
        "distance": "4 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_4.png"
  },
  {
    "id": "prop-5",
    "title": "Aurelia Smart Estate",
    "price": 15900000,
    "priceFormatted": "$15,900,000",
    "location": "Vaucluse, Sydney",
    "city": "Sydney",
    "country": "Australia",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "7,800 sq ft",
    "roi": "6.9%",
    "rentalYield": "5.1%",
    "appreciation": "+9.5% Y-o-Y",
    "demandIndex": "High",
    "category": "Smart Homes",
    "description": "An architectural marvel overlooking Sydney Harbour, Aurelia is a fully automated sanctuary. The residence features smart glass walls that adjust transparency based on sun position, automated climate control, integrated sound systems, a solar-battery grid system, and facial recognition entry gates.",
    "images": [
      "https://images.unsplash.com/photo-photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1502052572836-968632187123?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Harbour Views",
      "Smart Glass",
      "Facial Recognition Entry",
      "Solar Grid Battery",
      "Home Cinema",
      "Jetty Access"
    ],
    "coordinates": {
      "lat": -33.8568,
      "lng": 151.2721
    },
    "agentId": "agent-5",
    "highlights": [
      "Unobstructed views of Sydney Opera House and Harbour Bridge",
      "Self-sustaining green solar and rainwater energy system",
      "Smart-tinting smart glass windows for optimal temperature control",
      "Private deep-water boating mooring access"
    ],
    "nearbyPlaces": [
      {
        "name": "Sydney Kingsford Smith Airport",
        "type": "Airport",
        "distance": "30 mins"
      },
      {
        "name": "Kambala School for Girls",
        "type": "School",
        "distance": "4 mins"
      },
      {
        "name": "Vaucluse Yacht Club",
        "type": "Nature",
        "distance": "3 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_5.png"
  },
  {
    "id": "prop-6",
    "title": "Nirvana Private Island",
    "price": 85000000,
    "priceFormatted": "$85,000,000",
    "location": "Exuma Cays, Bahamas",
    "city": "Toronto",
    "country": "Bahamas",
    "bedrooms": 9,
    "bathrooms": 11,
    "area": "35,000 sq ft",
    "roi": "9.8%",
    "rentalYield": "7.5%",
    "appreciation": "+18.2% Y-o-Y",
    "demandIndex": "Extremely Scarce",
    "category": "Private Islands",
    "description": "Spanning 42 private acres of white sandy beaches and turquoise waters in the Exuma Cays. Nirvana is the ultimate ultra-exclusive sanctuary. It features a grand owner's villa, 5 luxury guest cottages, a private deep-water superyacht marina, private helipad, staff quarters, and full eco-friendly solar power generators.",
    "images": [
      "https://images.unsplash.com/photo-photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1512918728675-ed5a9ecde0d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1505576399279-565b52d467a8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Beaches",
      "Superyacht Marina",
      "Helipad",
      "Water Desalination Plant",
      "Solar Power Grid",
      "Bespoke Staff Services",
      "Coral Reef Snorkeling"
    ],
    "coordinates": {
      "lat": 24.1802,
      "lng": -76.4385
    },
    "agentId": "agent-6",
    "highlights": [
      "Completely private island estate package",
      "Deep water marina capable of accommodating 150ft vessels",
      "Private airstrip and helicopter landing license",
      "Self-sustaining eco infrastructures"
    ],
    "nearbyPlaces": [
      {
        "name": "Nassau Airport (transfer by plane)",
        "type": "Airport",
        "distance": "25 mins"
      },
      {
        "name": "Exuma Coral Sanctuary",
        "type": "Nature",
        "distance": "1 min"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_6.png"
  },
  {
    "id": "prop-7",
    "title": "Star Island Palms Mansion",
    "price": 48000000,
    "priceFormatted": "$48,000,000",
    "location": "Star Island, Miami",
    "city": "Miami",
    "country": "USA",
    "bedrooms": 7,
    "bathrooms": 9,
    "area": "18,500 sq ft",
    "roi": "7.2%",
    "rentalYield": "5.8%",
    "appreciation": "+12.4% Y-o-Y",
    "demandIndex": "High",
    "category": "Waterfront Villas",
    "description": "A breathtaking waterfront sanctuary on the guard-gated Star Island. This exceptional estate boasts 100 feet of prime Biscayne Bay frontage, a private superyacht dock, and custom floor-to-ceiling glass walls. The residence features a 2-story guest chateau, zero-edge pool, private home cinema, and state-of-the-art wellness pavilion.",
    "images": [
      "https://images.unsplash.com/photo-photo-1531971589569-0d9370b8075a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1501876725168-00c44b821f96?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Jetty",
      "Infinity Pool",
      "Smart Automation",
      "Wellness Spa",
      "Home Cinema",
      "24/7 Security",
      "Wine Cellar",
      "Guest House"
    ],
    "coordinates": {
      "lat": 25.7779,
      "lng": -80.1504
    },
    "agentId": "agent-7",
    "highlights": [
      "100ft of prime Biscayne Bay private shoreline",
      "Private superyacht dock with power hookups",
      "Detached 2-story smart guest house",
      "Automated outdoor dining and lounge setups"
    ],
    "nearbyPlaces": [
      {
        "name": "Miami International Airport",
        "type": "Airport",
        "distance": "15 mins"
      },
      {
        "name": "Miami Beach Marina",
        "type": "Beach",
        "distance": "5 mins"
      },
      {
        "name": "Bal Harbour Shops",
        "type": "Shopping",
        "distance": "12 mins"
      },
      {
        "name": "Biscayne Bay Reserve",
        "type": "Nature",
        "distance": "1 min"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_1.png"
  },
  {
    "id": "prop-8",
    "title": "The Obsidian Sky Penthouse",
    "price": 35000000,
    "priceFormatted": "$35,000,000",
    "location": "Marina Bay, Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "9,200 sq ft",
    "roi": "6.4%",
    "rentalYield": "4.9%",
    "appreciation": "+9.2% Y-o-Y",
    "demandIndex": "Very High",
    "category": "Penthouses",
    "description": "An architectural marvel floating above Marina Bay. This bespoke sky penthouse features a private rooftop plunge pool, glass-enclosed wraps, 6m double-height ceilings, and professional-grade security. Residents enjoy a private lobby, fully automated Crestron smart home setup, and access to premium personal chef concierge services.",
    "images": [
      "https://images.unsplash.com/photo-photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Pool",
      "Concierge Service",
      "Smart Automation",
      "Helipad",
      "Indoor Gym",
      "Sky Lounge",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 1.2829,
      "lng": 103.8587
    },
    "agentId": "agent-9",
    "highlights": [
      "Rooftop infinity plunge pool overlooking Marina Bay",
      "Direct private elevator access to primary suite",
      "Bespoke marble details imported from Italy",
      "24/7 personalized butler service registry"
    ],
    "nearbyPlaces": [
      {
        "name": "Changi Airport",
        "type": "Airport",
        "distance": "18 mins"
      },
      {
        "name": "Marina Bay Sands Shops",
        "type": "Shopping",
        "distance": "2 mins"
      },
      {
        "name": "Gardens by the Bay",
        "type": "Nature",
        "distance": "4 mins"
      },
      {
        "name": "Sentosa Beaches",
        "type": "Beach",
        "distance": "12 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_2.png"
  },
  {
    "id": "prop-9",
    "title": "Bel-Air Valley Chateau",
    "price": 65000000,
    "priceFormatted": "$65,000,000",
    "location": "Bel-Air, Los Angeles",
    "city": "Los Angeles",
    "country": "USA",
    "bedrooms": 8,
    "bathrooms": 11,
    "area": "26,000 sq ft",
    "roi": "8.1%",
    "rentalYield": "6.2%",
    "appreciation": "+15.1% Y-o-Y",
    "demandIndex": "High",
    "category": "Mansions",
    "description": "Nestled in the prestigious hills of Bel-Air, this majestic chateau blends timeless neoclassical architecture with ultra-modern smart living. Built from French limestone, the mansion boasts sweeping canyons views, massive cascading lawns, a 12-seat private theater, personal wellness spa, security control hub, and a professional tennis court.",
    "images": [
      "https://images.unsplash.com/photo-photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1490644565108-72b2254d3826?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1479839672674-a419822e7d70?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Infinity Pool",
      "Home Cinema",
      "Wellness Spa",
      "Tennis Court",
      "Gated Security",
      "Wine Cellar",
      "Smart Automation",
      "Bespoke Gardens"
    ],
    "coordinates": {
      "lat": 34.0837,
      "lng": -118.4482
    },
    "agentId": "agent-3",
    "highlights": [
      "Sweeping panoramas of Los Angeles and Bel-Air canyons",
      "12-seat custom acoustical Dolby cinema rooms",
      "Limestone motor court for 15 collectors' cars",
      "Fully integrated indoor-outdoor security gates"
    ],
    "nearbyPlaces": [
      {
        "name": "LAX International Airport",
        "type": "Airport",
        "distance": "25 mins"
      },
      {
        "name": "Rodeo Drive Luxury Avenue",
        "type": "Shopping",
        "distance": "10 mins"
      },
      {
        "name": "Santa Monica Beach",
        "type": "Beach",
        "distance": "18 mins"
      },
      {
        "name": "Bel-Air Country Club Park",
        "type": "Nature",
        "distance": "2 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_3.png"
  },
  {
    "id": "prop-10",
    "title": "Sentosa Yachting Villa",
    "price": 27500000,
    "priceFormatted": "$27,500,000",
    "location": "Sentosa Cove, Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "bedrooms": 6,
    "bathrooms": 7,
    "area": "9,800 sq ft",
    "roi": "7.0%",
    "rentalYield": "5.5%",
    "appreciation": "+10.8% Y-o-Y",
    "demandIndex": "High",
    "category": "Waterfront Villas",
    "description": "An absolute prime waterfront villa situated along the exclusive waterways of Sentosa Cove. Designed for the yachting enthusiast, this residence features a private deep-water berth, custom infinity swimming pool, glass lift, automated smart glass paneling, and an expansive timber deck for waterfront entertaining.",
    "images": [
      "https://images.unsplash.com/photo-photo-1483097365279-e8aaa361413f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1464938050520-43179262111d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753086-00f1806b7d15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600596542815-ffad4c153913?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Jetty",
      "Infinity Pool",
      "Smart Automation",
      "Glass Elevator",
      "Wine Vault",
      "24/7 Patrols",
      "Scenic Terrace"
    ],
    "coordinates": {
      "lat": 1.2464,
      "lng": 103.8427
    },
    "agentId": "agent-14",
    "highlights": [
      "Private deep-water yacht berth",
      "Double-height waterfront reception halls",
      "Fully integrated Crestron home controls",
      "Bespoke rooftop entertaining decks"
    ],
    "nearbyPlaces": [
      {
        "name": "Changi International Airport",
        "type": "Airport",
        "distance": "22 mins"
      },
      {
        "name": "VivoCity Mall",
        "type": "Shopping",
        "distance": "8 mins"
      },
      {
        "name": "Tanjong Beach Club",
        "type": "Beach",
        "distance": "2 mins"
      },
      {
        "name": "Sentosa Golf Course",
        "type": "Nature",
        "distance": "3 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_4.png"
  },
  {
    "id": "prop-11",
    "title": "St. Moritz Peak Chalet",
    "price": 39000000,
    "priceFormatted": "CHF 39,000,000",
    "location": "St. Moritz, Swiss Alps",
    "city": "Versailles",
    "country": "Europe",
    "bedrooms": 6,
    "bathrooms": 8,
    "area": "11,500 sq ft",
    "roi": "5.8%",
    "rentalYield": "4.5%",
    "appreciation": "+8.2% Y-o-Y",
    "demandIndex": "Very Scarce",
    "category": "Mansions",
    "description": "An ultra-exclusive ski-in, ski-out chateau nestled on the snow-covered slopes of St. Moritz. Blending rustic alpine charm with high-end luxury, this chalet features a private indoor swimming pool, spa relaxation chambers, double-height stone fireplaces, private helipad rights, and floor-to-ceiling glass looking out at the Swiss Alps.",
    "images": [
      "https://images.unsplash.com/photo-photo-1600585154526-99081e7d23f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600607687644-c6895b774c86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600585222812-70104f326555?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753151-512117568128?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753371-d645e3427210?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600585223380-4965876007ec?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Indoor Pool",
      "Wellness Spa",
      "Ski Lounge",
      "Private Helipad",
      "Home Cinema",
      "Wine Cellar",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 46.4908,
      "lng": 9.8355
    },
    "agentId": "agent-8",
    "highlights": [
      "Direct ski-in, ski-out slope access",
      "Indoor heated pool and hammam spa suite",
      "Triple-height solid oak ceiling vaulting",
      "Private helipad landing permission"
    ],
    "nearbyPlaces": [
      {
        "name": "Samedan Airport",
        "type": "Airport",
        "distance": "10 mins"
      },
      {
        "name": "Via Serlas Luxury Boutiques",
        "type": "Shopping",
        "distance": "4 mins"
      },
      {
        "name": "Lake St. Moritz Trail",
        "type": "Nature",
        "distance": "2 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_5.png"
  },
  {
    "id": "prop-12",
    "title": "Versailles Imperial Chateau",
    "price": 82000000,
    "priceFormatted": "€82,000,000",
    "location": "Versailles, France",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 10,
    "bathrooms": 12,
    "area": "34,000 sq ft",
    "roi": "9.2%",
    "rentalYield": "7.0%",
    "appreciation": "+16.5% Y-o-Y",
    "demandIndex": "Extremely Scarce",
    "category": "Mansions",
    "description": "A sprawling imperial chateau in Versailles, beautifully restored to historical perfection and updated with full smart home technology. Set within 20 acres of manicured formal gardens, the estate features gold-leaf interiors, an indoor olympic-size lap pool, private squash courts, an security bunker, and a secure gated motor court.",
    "images": [
      "https://images.unsplash.com/photo-photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1493809842364-711750718d7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1536376072261-d8c7d5635f78?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Olympic Pool",
      "Bespoke Gardens",
      "Private Helipad",
      "Wine Cellar",
      "Squash Courts",
      "Security Bunker",
      "Crestron Automation",
      "Home Cinema"
    ],
    "coordinates": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "agentId": "agent-4",
    "highlights": [
      "20 acres of private formal French gardens",
      "Olympic-sized indoor marble swimming pool",
      "Gilded interior moldings and historic murals",
      "State-of-the-art secure security bunker room"
    ],
    "nearbyPlaces": [
      {
        "name": "Paris Charles de Gaulle Airport",
        "type": "Airport",
        "distance": "40 mins"
      },
      {
        "name": "Palace of Versailles Gates",
        "type": "Nature",
        "distance": "3 mins"
      },
      {
        "name": "Avenue Montaigne Shops",
        "type": "Shopping",
        "distance": "20 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_6.png"
  },
  {
    "id": "prop-13",
    "title": "Kensington Palace Gate Mansion",
    "price": 95000000,
    "priceFormatted": "£95,000,000",
    "location": "Kensington, London",
    "city": "London",
    "country": "United Kingdom",
    "bedrooms": 9,
    "bathrooms": 11,
    "area": "22,500 sq ft",
    "roi": "5.5%",
    "rentalYield": "4.0%",
    "appreciation": "+7.5% Y-o-Y",
    "demandIndex": "Extremely Scarce",
    "category": "Mansions",
    "description": "An imposing, double-fronted red-brick Victorian mansion directly bordering Kensington Palace Gardens. This prestigious residence features a subterranean leisure complex, containing an indoor pool, spa facilities, gym, cinema, security operations room, secure underground garage for 6 vehicles, and a private lift serving all levels.",
    "images": [
      "https://images.unsplash.com/photo-photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1499916078039-922301f050b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Subterranean Pool",
      "Home Cinema",
      "Private Lift",
      "Underground Garage",
      "Crestron Automation",
      "24/7 Security",
      "Gym",
      "Spa"
    ],
    "coordinates": {
      "lat": 51.5033,
      "lng": -0.1883
    },
    "agentId": "agent-13",
    "highlights": [
      "Prestigious location directly bordering Palace Gardens",
      "Subterranean wellness center with pool and spa",
      "Secure underground garage with hydraulic car lift",
      "High-spec secure panic room and security grid"
    ],
    "nearbyPlaces": [
      {
        "name": "Heathrow Airport",
        "type": "Airport",
        "distance": "30 mins"
      },
      {
        "name": "Kensington High Street Shops",
        "type": "Shopping",
        "distance": "4 mins"
      },
      {
        "name": "Hyde Park Gardens",
        "type": "Nature",
        "distance": "2 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_1.png"
  },
  {
    "id": "prop-14",
    "title": "Malibu Glass Shoreline",
    "price": 39500000,
    "priceFormatted": "$39,500,000",
    "location": "Carbon Beach, Malibu",
    "city": "New York",
    "country": "USA",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "9,200 sq ft",
    "roi": "7.4%",
    "rentalYield": "5.6%",
    "appreciation": "+11.2% Y-o-Y",
    "demandIndex": "Very High",
    "category": "Waterfront Villas",
    "description": "An ultra-modern architectural masterpiece located on Carbon Beach in Malibu. This structural glass residence provides endless views of the Pacific Ocean. Features include an outdoor heated oceanfront lap pool, a private deck with direct sandy beach access, a glass-enclosed master suite, automated climate control, and a gourmet chef's kitchen.",
    "images": [
      "https://images.unsplash.com/photo-photo-1464667490074-67258079541a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1444723121867-7a541cacace2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1485083269755-a7b559a43588?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1494522858159-c257c79361a4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Infinity Pool",
      "Ocean View",
      "Private Beach",
      "Smart Automation",
      "Wine Cellar",
      "Home Cinema",
      "24/7 Patrols"
    ],
    "coordinates": {
      "lat": 34.0322,
      "lng": -118.6797
    },
    "agentId": "agent-7",
    "highlights": [
      "Prime Carbon Beach private sandy shoreline frontage",
      "Automated glass walls that open directly to ocean winds",
      "Custom heated lap pool suspended over the beach",
      "Top-tier smart-tinting glass panels installed throughout"
    ],
    "nearbyPlaces": [
      {
        "name": "LAX International Airport",
        "type": "Airport",
        "distance": "28 mins"
      },
      {
        "name": "Santa Monica Shopping Promenade",
        "type": "Shopping",
        "distance": "12 mins"
      },
      {
        "name": "Malibu Beach Lagoon",
        "type": "Beach",
        "distance": "1 min"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_2.png"
  },
  {
    "id": "prop-15",
    "title": "Shibuya Sky Gardens Duplex",
    "price": 26000000,
    "priceFormatted": "$26,000,000",
    "location": "Shibuya, Tokyo",
    "city": "Sydney",
    "country": "Japan",
    "bedrooms": 4,
    "bathrooms": 5,
    "area": "6,800 sq ft",
    "roi": "6.2%",
    "rentalYield": "4.8%",
    "appreciation": "+8.5% Y-o-Y",
    "demandIndex": "High",
    "category": "Penthouses",
    "description": "Perched above Shibuya, this duplex sky suite presents 360-degree views of the Tokyo skyline and Mt. Fuji. The penthouse boasts custom interior Zen rock gardens, an outdoor hinoki wood onsen hot tub, minimalist white marble floors, automated air purification grids, and premium security.",
    "images": [
      "https://images.unsplash.com/photo-photo-1514565174-5f8a77d56637?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1616047006789-b7af5afb8d20?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1616486701797-0f33f0d18d4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1567016432736-6956f0e863e7?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Onsen Hot Tub",
      "Zen Gardens",
      "Smart Automation",
      "Sky Lounge",
      "Indoor Gym",
      "24/7 Security",
      "Wine Cellar"
    ],
    "coordinates": {
      "lat": 35.658,
      "lng": 139.7016
    },
    "agentId": "agent-9",
    "highlights": [
      "Outdoor traditional Hinoki wood onsen hot tub",
      "Minimalist Japanese interior layout design",
      "Breathtaking views of Tokyo Tower and Mt. Fuji",
      "Advanced air filter and water purification grids"
    ],
    "nearbyPlaces": [
      {
        "name": "Haneda Airport",
        "type": "Airport",
        "distance": "20 mins"
      },
      {
        "name": "Shibuya Crossing Central",
        "type": "Shopping",
        "distance": "5 mins"
      },
      {
        "name": "Yoyogi National Park",
        "type": "Nature",
        "distance": "8 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_3.png"
  },
  {
    "id": "prop-16",
    "title": "Avenue Montaigne Penthouse",
    "price": 31500000,
    "priceFormatted": "€31,500,000",
    "location": "Champs-Élysées, Paris",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 4,
    "bathrooms": 5,
    "area": "7,500 sq ft",
    "roi": "6.9%",
    "rentalYield": "5.3%",
    "appreciation": "+9.8% Y-o-Y",
    "demandIndex": "High",
    "category": "Penthouses",
    "description": "An elegant duplex penthouse situated on the ultra-prestigious Avenue Montaigne. Designed by renowned decorators, this home offers direct views of the Eiffel Tower from its private wrap-around terrace. Features include high plaster moldings, Baccarat crystal chandeliers, custom Italian marble baths, and private lift access.",
    "images": [
      "https://images.unsplash.com/photo-photo-1583847268964-b28dc8f51e92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1592595896616-c37168812679?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1572331165226-590bd77511c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1533619239233-62804bc7a61d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1540541338287-41df7be2431b?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Eiffel Tower View",
      "Private Terrace",
      "Crystal Chandeliers",
      "Private Lift",
      "Crestron Controls",
      "24/7 Security",
      "Wine Vault"
    ],
    "coordinates": {
      "lat": 48.8667,
      "lng": 2.3025
    },
    "agentId": "agent-12",
    "highlights": [
      "Unobstructed primary views of the Eiffel Tower",
      "Private wrap-around stone balcony terrace",
      "Original 19th-century ceiling plaster molding",
      "Bespoke Baccarat crystal light installations"
    ],
    "nearbyPlaces": [
      {
        "name": "Paris Orly Airport",
        "type": "Airport",
        "distance": "22 mins"
      },
      {
        "name": "Golden Triangle Luxury Boutiques",
        "type": "Shopping",
        "distance": "1 min"
      },
      {
        "name": "Seine River Walkways",
        "type": "Nature",
        "distance": "3 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_4.png"
  },
  {
    "id": "prop-17",
    "title": "Point Piper Glass Sanctuary",
    "price": 42000000,
    "priceFormatted": "$42,000,000",
    "location": "Point Piper, Sydney",
    "city": "Sydney",
    "country": "Australia",
    "bedrooms": 6,
    "bathrooms": 7,
    "area": "11,200 sq ft",
    "roi": "7.4%",
    "rentalYield": "5.6%",
    "appreciation": "+11.2% Y-o-Y",
    "demandIndex": "High",
    "category": "Smart Homes",
    "description": "Hovering over the sparkling waters of Sydney Harbour, this smart-estate is a masterclass in modern sustainability. The property utilizes self-tinting glass walls to manage solar heat, automated rain filtration, a solar battery grid, voice-controlled home automation, a private deep-water dock, and heated infinity pool.",
    "images": [
      "https://images.unsplash.com/photo-photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1430026939961-a32da8690987?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1515405295579-87b4009772d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1517479148762-c58554284144?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Jetty",
      "Harbour View",
      "Smart Glass",
      "Solar Grid Battery",
      "Infinity Pool",
      "Home Cinema",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": -33.8688,
      "lng": 151.2488
    },
    "agentId": "agent-5",
    "highlights": [
      "Unobstructed views of Sydney Opera House and Harbour Bridge",
      "Fully off-grid capable solar panel roof grid",
      "Smart-tinting electrochromic glass panel windows",
      "Private deep-water boating jetty dock access"
    ],
    "nearbyPlaces": [
      {
        "name": "Sydney Kingsford Smith Airport",
        "type": "Airport",
        "distance": "25 mins"
      },
      {
        "name": "Rose Bay Marina",
        "type": "Nature",
        "distance": "4 mins"
      },
      {
        "name": "Kambala School for Girls",
        "type": "School",
        "distance": "5 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_5.png"
  },
  {
    "id": "prop-18",
    "title": "The Bridle Path Mansion",
    "price": 22500000,
    "priceFormatted": "$22,500,000",
    "location": "The Bridle Path, Toronto",
    "city": "Toronto",
    "country": "Canada",
    "bedrooms": 8,
    "bathrooms": 10,
    "area": "19,000 sq ft",
    "roi": "6.0%",
    "rentalYield": "4.5%",
    "appreciation": "+6.4% Y-o-Y",
    "demandIndex": "Stable",
    "category": "Mansions",
    "description": "A grand neoclassical limestone estate in Toronto's most prestigious enclave. Built to absolute commercial standards, this home features massive gated gates, a custom indoor cathedral pool, a 2,000-bottle wine vault, wood-paneled libraries, custom smart systems, and extensive private staff quarters.",
    "images": [
      "https://images.unsplash.com/photo-photo-1556912173-3d706393e772?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600585204487-35a06900f64c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753371-4171052f6b86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600574672975-d86f91754044?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600585222812-70b13576084a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1565538810643-b57314706346?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Indoor Pool",
      "Gated Security",
      "Wine Vault",
      "Home Library",
      "Automated Security",
      "Staff Quarters",
      "Indoor Gym"
    ],
    "coordinates": {
      "lat": 43.7314,
      "lng": -79.3758
    },
    "agentId": "agent-10",
    "highlights": [
      "Grand neoclassical limestone facade structure",
      "Indoor heated pool room with cathedral glass dome",
      "Custom-built 2,000-bottle secure wine vaults",
      "Gated iron gates with complete security station"
    ],
    "nearbyPlaces": [
      {
        "name": "Pearson International Airport",
        "type": "Airport",
        "distance": "28 mins"
      },
      {
        "name": "Bayview Village Mall",
        "type": "Shopping",
        "distance": "6 mins"
      },
      {
        "name": "Toronto French School",
        "type": "School",
        "distance": "5 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_6.png"
  },
  {
    "id": "prop-19",
    "title": "Southampton Oceanfront Estate",
    "price": 55000000,
    "priceFormatted": "$55,000,000",
    "location": "Meadow Lane, Southampton",
    "city": "New York",
    "country": "USA",
    "bedrooms": 8,
    "bathrooms": 10,
    "area": "16,500 sq ft",
    "roi": "8.3%",
    "rentalYield": "6.5%",
    "appreciation": "+13.5% Y-o-Y",
    "demandIndex": "High",
    "category": "Waterfront Villas",
    "description": "A sprawling classic Hampton-style shingled estate situated on Meadow Lane. Boasting direct private frontage on the Atlantic Ocean, the home features a heated oceanfront pool, private clay tennis court, detached guest cottages, modern automated controls, and security setups.",
    "images": [
      "https://images.unsplash.com/photo-photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600566753065-562e15457b07?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1595526114337-142207b7189d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600585154340-be6161a56a09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1597211684565-d002eec89e92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1589939705384-518596590f05?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Ocean Front",
      "Tennis Court",
      "Heated Pool",
      "Guest Cottages",
      "Crestron Automation",
      "Wine Cellar",
      "24/7 Security Patrols"
    ],
    "coordinates": {
      "lat": 40.8842,
      "lng": -72.3897
    },
    "agentId": "agent-3",
    "highlights": [
      "Direct private access to white sandy beaches",
      "Private outdoor clay tennis court facilities",
      "Detached self-contained guest cottages",
      "Fully integrated multi-zone security cameras"
    ],
    "nearbyPlaces": [
      {
        "name": "JFK International Airport",
        "type": "Airport",
        "distance": "90 mins"
      },
      {
        "name": "Southampton Village Shopping",
        "type": "Shopping",
        "distance": "5 mins"
      },
      {
        "name": "Shinnecock Hills Golf Club",
        "type": "Nature",
        "distance": "8 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_1.png"
  },
  {
    "id": "prop-20",
    "title": "Monte Carlo Horizon Penthouse",
    "price": 72000000,
    "priceFormatted": "€72,000,000",
    "location": "Larvotto, Monte Carlo",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "11,000 sq ft",
    "roi": "9.5%",
    "rentalYield": "7.4%",
    "appreciation": "+16.2% Y-o-Y",
    "demandIndex": "Scarce",
    "category": "Penthouses",
    "description": "An ultra-premium duplex penthouse located in Monte Carlo. Flooded with natural light through full structural glass walls, this home has a private pool deck, automated security shutters, high-spec smart home automation, and an indoor gym.",
    "images": [
      "https://images.unsplash.com/photo-photo-1600607688969-a5d5a755d491?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1597211684521-125026932a37?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1556912172-45b7abe867e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1620626011761-99ccc3199c0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1552321554-63309a4a7540?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Ocean View",
      "Private Pool",
      "Automated Shutters",
      "Smart Automation",
      "Indoor Gym",
      "Sky Lounge",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 43.7384,
      "lng": 7.4246
    },
    "agentId": "agent-8",
    "highlights": [
      "Spectacular 360-degree Mediterranean viewpoints",
      "Private rooftop pool with glass enclosure panels",
      "Automated security shutters and glass protection",
      "Integrated home gym with Technogym setups"
    ],
    "nearbyPlaces": [
      {
        "name": "Nice Cote d'Azur Airport",
        "type": "Airport",
        "distance": "28 mins"
      },
      {
        "name": "Casino de Monte-Carlo Square",
        "type": "Shopping",
        "distance": "3 mins"
      },
      {
        "name": "Larvotto Luxury Beach",
        "type": "Beach",
        "distance": "1 min"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_2.png"
  },
  {
    "id": "prop-21",
    "title": "Saint-Tropez Azure Cove",
    "price": 38000000,
    "priceFormatted": "€38,000,000",
    "location": "Tahiti Beach, Saint-Tropez",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 6,
    "bathrooms": 7,
    "area": "9,500 sq ft",
    "roi": "8.0%",
    "rentalYield": "6.1%",
    "appreciation": "+12.1% Y-o-Y",
    "demandIndex": "High",
    "category": "Waterfront Villas",
    "description": "A modern architectural masterpiece featuring private access to a secluded Saint-Tropez cove. Designed with wide glass walls, the villa boasts a heated infinity edge pool, private helipad landing license, and full smart home integration.",
    "images": [
      "https://images.unsplash.com/photo-photo-1584622781564-1d987c7fa3d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1540555700478-4be6f9814421?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1604709177695-0b89fdffe3b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1616628188289-4054a863481b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1596701859665-d41f0f42345e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1554232682-b9ef9c025000?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Cove",
      "Infinity Pool",
      "Helipad Access",
      "Smart Automation",
      "24/7 Security",
      "Wine Vault",
      "Guest Suite"
    ],
    "coordinates": {
      "lat": 43.2689,
      "lng": 6.6372
    },
    "agentId": "agent-11",
    "highlights": [
      "Direct access to private sand cove beaches",
      "Infinity edge pool cascading into sea horizons",
      "Authorized private helipad landing pads",
      "Fully integrated indoor-outdoor smart automation"
    ],
    "nearbyPlaces": [
      {
        "name": "Toulon-Hyeres Airport",
        "type": "Airport",
        "distance": "45 mins"
      },
      {
        "name": "Place des Lices Market Center",
        "type": "Shopping",
        "distance": "8 mins"
      },
      {
        "name": "Tahiti Beach Club",
        "type": "Beach",
        "distance": "1 min"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_3.png"
  },
  {
    "id": "prop-22",
    "title": "Emirates Hills Crown Mansion",
    "price": 45000000,
    "priceFormatted": "AED 165,000,000",
    "location": "Emirates Hills, Dubai",
    "city": "Dubai",
    "country": "UAE",
    "bedrooms": 7,
    "bathrooms": 9,
    "area": "22,000 sq ft",
    "roi": "8.6%",
    "rentalYield": "6.9%",
    "appreciation": "+15.5% Y-o-Y",
    "demandIndex": "High",
    "category": "Mansions",
    "description": "An exceptional, newly built villa overlooking the lush fairways of the Montgomerie Golf Course. Boasting custom Italian marble finishes, this home features an indoor lap pool, a private home cinema, health spa, gym, and full Crestron smart home integration.",
    "images": [
      "https://images.unsplash.com/photo-photo-1590077467207-a1a355602d28?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1580610447913-56b539a37119?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1531971589569-0d9370b86a5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1582582972776-80521e1022bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1590487988256-9ed221338668?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Indoor Pool",
      "Golf Views",
      "Home Cinema",
      "Wellness Spa",
      "Gym",
      "Crestron Integration",
      "Wine Cellar",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 25.0657,
      "lng": 55.1689
    },
    "agentId": "agent-6",
    "highlights": [
      "Commanding views of Montgomerie Golf Course",
      "Indoor heated lap pool and custom Turkish hammam",
      "Full custom Italian marble flooring tiles",
      "24/7 private gated security patrol guards"
    ],
    "nearbyPlaces": [
      {
        "name": "Dubai International Airport",
        "type": "Airport",
        "distance": "25 mins"
      },
      {
        "name": "Marina Mall Shopping Center",
        "type": "Shopping",
        "distance": "8 mins"
      },
      {
        "name": "JBR Beach Coastline",
        "type": "Beach",
        "distance": "10 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_4.png"
  },
  {
    "id": "prop-23",
    "title": "Key Biscayne Smart Glasshouse",
    "price": 18500000,
    "priceFormatted": "$18,500,000",
    "location": "Key Biscayne, Miami",
    "city": "Miami",
    "country": "USA",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "7,900 sq ft",
    "roi": "7.0%",
    "rentalYield": "5.5%",
    "appreciation": "+10.2% Y-o-Y",
    "demandIndex": "High",
    "category": "Smart Homes",
    "description": "A stunning architectural marvel featuring self-shading windows, integrated solar grid, geothermal climate controls, voice-controlled security automation, and private yacht dock access.",
    "images": [
      "https://images.unsplash.com/photo-photo-1591083654060-64478330541d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1606170634629-657736f32e98?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1594492842426-368599436531?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1617104519842-88241416e788?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1506535715017-b248a3955673?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1615874619472-832168393525?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Smart Glass",
      "Private Jetty",
      "Solar Battery Grid",
      "Geothermal HVAC",
      "Infinity Pool",
      "24/7 Security",
      "Wine Vault"
    ],
    "coordinates": {
      "lat": 25.6984,
      "lng": -80.1628
    },
    "agentId": "agent-7",
    "highlights": [
      "Self-shading electrochromic glass panel windows",
      "Tesla solar roof tiles and Powerwall backups",
      "Geothermal floor heating and cooling matrices",
      "Private deep-water yacht slip docking dock"
    ],
    "nearbyPlaces": [
      {
        "name": "Miami International Airport",
        "type": "Airport",
        "distance": "20 mins"
      },
      {
        "name": "Key Biscayne Shopping Arcade",
        "type": "Shopping",
        "distance": "4 mins"
      },
      {
        "name": "Bill Baggs Beach Reserve",
        "type": "Beach",
        "distance": "2 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_5.png"
  },
  {
    "id": "prop-24",
    "title": "Burj Vista Duplex Tower",
    "price": 21000000,
    "priceFormatted": "$21,000,000",
    "location": "Downtown, Dubai",
    "city": "Dubai",
    "country": "UAE",
    "bedrooms": 4,
    "bathrooms": 5,
    "area": "8,100 sq ft",
    "roi": "8.9%",
    "rentalYield": "7.0%",
    "appreciation": "+12.8% Y-o-Y",
    "demandIndex": "High",
    "category": "Commercial Towers",
    "description": "An elevated duplex suite located on the top floors of a signature tower. Offering views of the Burj Khalifa, the suite has integrated smart security, private pool deck, and butler concierge registry.",
    "images": [
      "https://images.unsplash.com/photo-photo-1597070104690-337583a48e8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1519947486515-468b8e05785a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1567468258601-5256e2978f8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1578683010236-d716f9a3f467?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Burj Khalifa View",
      "Private Pool",
      "Smart Automation",
      "Concierge Service",
      "Sky Gym",
      "Wine Cellar",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 25.1972,
      "lng": 55.2744
    },
    "agentId": "agent-1",
    "highlights": [
      "Direct front views of Burj Khalifa and fountains",
      "Private outdoor infinity plunge pool platform",
      "Integrated smart security and voice interface control",
      "Direct indoor connection pathways to Dubai Mall"
    ],
    "nearbyPlaces": [
      {
        "name": "Dubai International Airport",
        "type": "Airport",
        "distance": "15 mins"
      },
      {
        "name": "The Dubai Mall Shops",
        "type": "Shopping",
        "distance": "1 min"
      },
      {
        "name": "Burj Khalifa Park",
        "type": "Nature",
        "distance": "1 min"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_6.png"
  },
  {
    "id": "prop-25",
    "title": "Exuma Lagoon Sanctuary",
    "price": 68000000,
    "priceFormatted": "$68,000,000",
    "location": "Exuma Cays, Bahamas",
    "city": "Toronto",
    "country": "Bahamas",
    "bedrooms": 8,
    "bathrooms": 10,
    "area": "28,000 sq ft",
    "roi": "9.3%",
    "rentalYield": "7.1%",
    "appreciation": "+17.5% Y-o-Y",
    "demandIndex": "Scarce",
    "category": "Private Islands",
    "description": "A private lagoon sanctuary in the Bahamas, featuring deep-water dock, helicopter landing pad, self-sustaining energy and water grids, private security grids, and personal butler registry.",
    "images": [
      "https://images.unsplash.com/photo-photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1577073235654-e6924d5b2724?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1484122296866-068fb2739353?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1493663684033-075f9227c17d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1513581107007-28564f33d454?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1522708237072-00366627f428?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Beaches",
      "Helipad",
      "Deep Water Dock",
      "Desalination Plant",
      "Solar Power Grid",
      "Staff Services",
      "Coral Reef Snorkeling"
    ],
    "coordinates": {
      "lat": 24.1802,
      "lng": -76.4385
    },
    "agentId": "agent-6",
    "highlights": [
      "Complete private lagoon ecosystem package",
      "Deep water dock accommodating superyachts up to 180ft",
      "Private airstrip and helipad landing license rights",
      "Fully self-sustaining water and energy infrastructures"
    ],
    "nearbyPlaces": [
      {
        "name": "Nassau Airport (transfer by plane)",
        "type": "Airport",
        "distance": "25 mins"
      },
      {
        "name": "Exuma Coral Reef Sanctuary",
        "type": "Nature",
        "distance": "1 min"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_1.png"
  },
  {
    "id": "prop-26",
    "title": "Cap d'Antibes Coastal Haven",
    "price": 41500000,
    "priceFormatted": "€41,500,000",
    "location": "Cap d'Antibes, France",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 6,
    "bathrooms": 7,
    "area": "10,500 sq ft",
    "roi": "7.8%",
    "rentalYield": "5.9%",
    "appreciation": "+11.0% Y-o-Y",
    "demandIndex": "High",
    "category": "Waterfront Villas",
    "description": "A beautiful classic stone villa completely modernized with smart amenities, private beach access, heated infinity pool, and professional security grids.",
    "images": [
      "https://images.unsplash.com/photo-photo-1505691936695-38b3400d319e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1503174971379-379796e62557?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1499916078505-b003a0133284?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1586023411022-c75c341f237f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1501780203080-d621f37e1932?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1507093534947-66a9d9051515?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Beach",
      "Heated Pool",
      "Smart Automation",
      "Crestron Controls",
      "Wine Cellar",
      "Gated Security",
      "Guest Suite"
    ],
    "coordinates": {
      "lat": 43.5583,
      "lng": 7.125
    },
    "agentId": "agent-11",
    "highlights": [
      "Direct private access to Cap d'Antibes shoreline",
      "Heated stone infinity edge pool cascading views",
      "Fully restored local stone masonry architecture",
      "High-spec automated home security surveillance grids"
    ],
    "nearbyPlaces": [
      {
        "name": "Nice Cote d'Azur Airport",
        "type": "Airport",
        "distance": "22 mins"
      },
      {
        "name": "Antibes Shopping Promenade",
        "type": "Shopping",
        "distance": "5 mins"
      },
      {
        "name": "Cap d'Antibes Coastal Walk",
        "type": "Nature",
        "distance": "1 min"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_2.png"
  },
  {
    "id": "prop-27",
    "title": "The Skycrest Residence",
    "price": 12800000,
    "priceFormatted": "$12,800,000",
    "location": "Marina Bay, Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "bedrooms": 3,
    "bathrooms": 3.5,
    "area": "3,800 sq ft",
    "roi": "6.2%",
    "rentalYield": "4.8%",
    "appreciation": "+8.5% Y-o-Y",
    "demandIndex": "High",
    "category": "Apartments",
    "description": "A state-of-the-art apartment perched on the high floors of Marina Bay. Features floor-to-ceiling smart glass paneling, fully automated layouts, a private deck, and access to premium shared amenities.",
    "images": [
      "https://images.unsplash.com/photo-photo-1524275038038-f94d0752467d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1523217585474-0672e3678370?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1518780664673-5f0707c0b05b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-151291774880-9492161b3693?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1502005240210-82b9b3ca6210?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1470770417237-77983637e15e?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Concierge Service",
      "Smart Glass",
      "Smart Automation",
      "Shared Infinity Pool",
      "Sky Lounge",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 1.2845,
      "lng": 103.861
    },
    "agentId": "agent-5",
    "highlights": [
      "Unobstructed views of Marina Bay",
      "Fully integrated voice and tablet home controls",
      "Direct access to high-speed private lifts"
    ],
    "nearbyPlaces": [
      {
        "name": "Changi Airport",
        "type": "Airport",
        "distance": "17 mins"
      },
      {
        "name": "Marina Bay Sands Shops",
        "type": "Shopping",
        "distance": "3 mins"
      },
      {
        "name": "Gardens by the Bay",
        "type": "Nature",
        "distance": "5 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_3.png"
  },
  {
    "id": "prop-28",
    "title": "One Kensington Flat",
    "price": 950000,
    "priceFormatted": "£9,500,000",
    "location": "Kensington, London",
    "city": "London",
    "country": "United Kingdom",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": "3,100 sq ft",
    "roi": "5.8%",
    "rentalYield": "4.2%",
    "appreciation": "+7.0% Y-o-Y",
    "demandIndex": "Stable",
    "category": "Apartments",
    "description": "An elegant lateral apartment in Kensington, beautifully blending classic brick Victorian structure with high-spec modern minimalist interiors, automated lighting, and bespoke smart systems.",
    "images": [
      "https://images.unsplash.com/photo-photo-1527580665039-3a3237190d65?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1554995207166-512140134440?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1556910609363-2395d8204b12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1480044243167-2d2c9495f874?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1504343243936-398335f33333?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1516483307716-24e85b328373?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Concierge Service",
      "Smart Automation",
      "Underground Parking",
      "Private Lift",
      "Wine Vault",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 51.5012,
      "lng": -0.1915
    },
    "agentId": "agent-13",
    "highlights": [
      "Bespoke marble details imported from Italy",
      "Original restored Victorian ceiling details",
      "Located adjacent to Kensington Palace Gardens"
    ],
    "nearbyPlaces": [
      {
        "name": "Heathrow Airport",
        "type": "Airport",
        "distance": "32 mins"
      },
      {
        "name": "Kensington High Street Shops",
        "type": "Shopping",
        "distance": "5 mins"
      },
      {
        "name": "Hyde Park Gardens",
        "type": "Nature",
        "distance": "3 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_4.png"
  },
  {
    "id": "prop-29",
    "title": "Shibuya Skyloft Apartment",
    "price": 8900000,
    "priceFormatted": "$8,900,000",
    "location": "Shibuya, Tokyo",
    "city": "Sydney",
    "country": "Japan",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "2,400 sq ft",
    "roi": "6.0%",
    "rentalYield": "4.5%",
    "appreciation": "+8.0% Y-o-Y",
    "demandIndex": "High",
    "category": "Apartments",
    "description": "A premium modern duplex loft apartment in the heart of Shibuya. Featuring Zen indoor gardens, an outdoor hinoki wood tub, automated air purification grids, and premium home automation.",
    "images": [
      "https://images.unsplash.com/photo-photo-1449844908074-122e37452d3a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1500382017968-b53d68d028f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1461780162546-34447608404a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1513161451076-2e21e7d235c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1494438681283-e02919566236?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1512327420371-5517e57c8d92?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Onsen Hot Tub",
      "Zen Gardens",
      "Smart Automation",
      "24/7 Security",
      "Wine Vault",
      "Indoor Gym"
    ],
    "coordinates": {
      "lat": 35.6595,
      "lng": 139.7025
    },
    "agentId": "agent-9",
    "highlights": [
      "Traditional Hinoki wood hot tub on the deck",
      "Beautiful panoramic views of the Tokyo skyline",
      "Integrated smart climate and air filter grids"
    ],
    "nearbyPlaces": [
      {
        "name": "Haneda Airport",
        "type": "Airport",
        "distance": "21 mins"
      },
      {
        "name": "Shibuya Crossing Central",
        "type": "Shopping",
        "distance": "4 mins"
      },
      {
        "name": "Yoyogi National Park",
        "type": "Nature",
        "distance": "7 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_5.png"
  },
  {
    "id": "prop-30",
    "title": "The Avenue Montaigne Suite",
    "price": 7800000,
    "priceFormatted": "€7,800,000",
    "location": "Champs-Élysées, Paris",
    "city": "Paris",
    "country": "Europe",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": "2,900 sq ft",
    "roi": "6.5%",
    "rentalYield": "5.0%",
    "appreciation": "+9.0% Y-o-Y",
    "demandIndex": "High",
    "category": "Apartments",
    "description": "A beautifully decorated, high-spec modern apartment situated along Avenue Montaigne. Offering stunning views of the Eiffel Tower, private balcony, Crestron smart automation, and private lift access.",
    "images": [
      "https://images.unsplash.com/photo-photo-1503376738390-f75a871a33c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1469022563428-aa04fef9f5a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Eiffel Tower View",
      "Private Balcony",
      "Private Lift",
      "Crestron Controls",
      "Wine Vault",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 48.8655,
      "lng": 2.301
    },
    "agentId": "agent-12",
    "highlights": [
      "Stunning sunset views of the Eiffel Tower",
      "Elegant original plaster moldings",
      "Imported crystal chandeliers in reception halls"
    ],
    "nearbyPlaces": [
      {
        "name": "Paris Orly Airport",
        "type": "Airport",
        "distance": "24 mins"
      },
      {
        "name": "Golden Triangle Luxury Boutiques",
        "type": "Shopping",
        "distance": "1 min"
      },
      {
        "name": "Seine River Walkways",
        "type": "Nature",
        "distance": "4 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_6.png"
  },
  {
    "id": "prop-31",
    "title": "Tribeca Loft Apartment",
    "price": 11500000,
    "priceFormatted": "$11,500,000",
    "location": "Tribeca, New York",
    "city": "New York",
    "country": "USA",
    "bedrooms": 3,
    "bathrooms": 3.5,
    "area": "3,600 sq ft",
    "roi": "5.6%",
    "rentalYield": "4.4%",
    "appreciation": "+7.2% Y-o-Y",
    "demandIndex": "Stable",
    "category": "Apartments",
    "description": "A massive, light-filled Tribeca loft apartment featuring exposed brick walls, steel support columns, automated lighting grids, Miele kitchen appliances, and private lift access.",
    "images": [
      "https://images.unsplash.com/photo-photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185127-6a2806647f81?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560184897-ae7563004931?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185009-dd77e8e1e1a8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185007-c93d17a3a92b?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Private Lift",
      "Smart Automation",
      "Concierge Service",
      "Indoor Lap Pool",
      "Gym",
      "Wine Cellar",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 40.7185,
      "lng": -74.009
    },
    "agentId": "agent-10",
    "highlights": [
      "Exposed structural steel and custom brick details",
      "Double-height main ceilings",
      "Fully automated multizone sound systems"
    ],
    "nearbyPlaces": [
      {
        "name": "John F. Kennedy Intl Airport",
        "type": "Airport",
        "distance": "42 mins"
      },
      {
        "name": "Hudson River Park Walkway",
        "type": "Nature",
        "distance": "3 mins"
      },
      {
        "name": "SoHo Luxury Shops",
        "type": "Shopping",
        "distance": "5 mins"
      }
    ],
    "featured": false,
    "floorPlanImage": "/images/floor_plan_1.png"
  },
  {
    "id": "prop-32",
    "title": "Downtown Burj Boulevard Suite",
    "price": 6500000,
    "priceFormatted": "$6,500,000",
    "location": "Downtown, Dubai",
    "city": "Dubai",
    "country": "UAE",
    "bedrooms": 2,
    "bathrooms": 2.5,
    "area": "2,100 sq ft",
    "roi": "8.5%",
    "rentalYield": "6.9%",
    "appreciation": "+12.0% Y-o-Y",
    "demandIndex": "High",
    "category": "Apartments",
    "description": "An exceptional apartment located on a high floor of a premier Downtown tower. Offering clear views of the Burj Khalifa, custom layouts, private pool access, and professional butler registry.",
    "images": [
      "https://images.unsplash.com/photo-photo-1560184897-502a475f7a0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185893-bc434773c800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185007-1d89d4fb9795?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1560185007-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    "virtualTourUrl": "#virtual-tour",
    "videoUrl": "#video",
    "amenities": [
      "Burj Khalifa View",
      "Shared Pool",
      "Smart Automation",
      "Concierge Service",
      "Wine Vault",
      "Sky Lounge",
      "24/7 Security"
    ],
    "coordinates": {
      "lat": 25.1985,
      "lng": 55.276
    },
    "agentId": "agent-1",
    "highlights": [
      "Direct frontal views of the Burj Khalifa",
      "Fully integrated smart voice control systems",
      "Direct indoor connection pathways to Dubai Mall"
    ],
    "nearbyPlaces": [
      {
        "name": "Dubai International Airport",
        "type": "Airport",
        "distance": "16 mins"
      },
      {
        "name": "The Dubai Mall Shops",
        "type": "Shopping",
        "distance": "2 mins"
      },
      {
        "name": "Burj Khalifa Park",
        "type": "Nature",
        "distance": "2 mins"
      }
    ],
    "featured": true,
    "floorPlanImage": "/images/floor_plan_2.png"
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-1",
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    avgPriceSqft: "$1,450 / sq ft",
    annualGrowth: "+14.2%",
    marketActivity: "Ultra-High",
    investmentRating: "AAA",
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: "dest-2",
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    avgPriceSqft: "$2,850 / sq ft",
    annualGrowth: "+6.8%",
    marketActivity: "Stable",
    investmentRating: "AA+",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: "dest-3",
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    avgPriceSqft: "$2,200 / sq ft",
    annualGrowth: "+8.9%",
    marketActivity: "High",
    investmentRating: "AAA",
    coordinates: { lat: 51.5074, lng: -0.1278 }
  },
  {
    id: "dest-4",
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    avgPriceSqft: "$1,950 / sq ft",
    annualGrowth: "+7.2%",
    marketActivity: "Stable",
    investmentRating: "AA",
    coordinates: { lat: 48.8566, lng: 2.3522 }
  },
  {
    id: "dest-5",
    name: "Sydney",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
    avgPriceSqft: "$1,600 / sq ft",
    annualGrowth: "+9.5%",
    marketActivity: "High",
    investmentRating: "AA+",
    coordinates: { lat: -33.8688, lng: 151.2093 }
  },
  {
    id: "dest-6",
    name: "Toronto",
    image: "https://images.unsplash.com/photo-1507984211203-76701d7bb120?auto=format&fit=crop&w=600&q=80",
    avgPriceSqft: "$1,250 / sq ft",
    annualGrowth: "+5.4%",
    marketActivity: "Moderate",
    investmentRating: "AA",
    coordinates: { lat: 43.6532, lng: -79.3832 }
  }
];

export const ARTICLES: NewsArticle[] = [
  {
    id: "art-1",
    title: "Global Wealth Migration Patterns: The Rise of Dubai Real Estate",
    category: "Market Report",
    excerpt: "An in-depth analysis of how high-net-worth individuals are shifting portfolios toward premium off-plan villas in Palm Jumeirah and Downtown Dubai.",
    date: "May 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "art-2",
    title: "Inside the Ultra-High-Net-Worth Sustainable Smart Home Tech Trends",
    category: "Technology",
    excerpt: "Discover the latest automated home grids, smart glass insulation, and voice AI systems that represent standard features for next-generation estates.",
    date: "June 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "art-3",
    title: "Why Private Islands Remain the Ultimate Asset Class in 2026",
    category: "Investments",
    excerpt: "With supply at historic lows, the valuation of private islands in Central America and the South Pacific has outpaced global residential indices.",
    date: "June 05, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
  }
];
