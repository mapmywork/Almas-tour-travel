export const businessInfo = {
  name: "ALMAS TOUR & TRAVEL",
  phone1: "+91 7866886008",
  phone1Raw: "917866886008",
  phone2: "+91 9531954006",
  phone2Raw: "919531954006",
  email: "umarf007860@gmail.com",
  address: "Kanyapuram, Near GMS School, P/O Wimberlygunj, South Andaman, 744206",
  workingHours: "24/7 Available"
};

export const packages = [
  {
    id: 1,
    title: "Family Package",
    duration: "5 Nights / 6 Days",
    description: "Perfect family vacations with comfortable stays, kid-friendly activities, and easy transportation.",
    image: "https://images.unsplash.com/photo-1540544660406-6aee9dacfa5f?auto=format&fit=crop&q=80&w=1000",
    features: ["Family Resort", "All Meals", "Guided Tours", "Airport Transfers"],
    popular: true
  },
  {
    id: 2,
    title: "Honeymoon Package",
    duration: "4 Nights / 5 Days",
    description: "Romantic island escape featuring luxury beachfront resorts and candlelit beach dinners.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1000",
    features: ["Luxury Suite", "Candlelit Dinner", "Private Transfer", "Photoshoot"],
    popular: true
  },
  {
    id: 3,
    title: "Adventure Package",
    duration: "6 Nights / 7 Days",
    description: "Thrilling water sports, scuba diving, and deep exploration of untouched islands.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000",
    features: ["Scuba Diving", "Trekking", "Jet Skiing", "Expert Guides"]
  },
  {
    id: 4,
    title: "Group Package",
    duration: "3 Nights / 4 Days",
    description: "Affordable and fun group travel plans tailored for friends and corporate teams.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=1000",
    features: ["Group Transport", "Hostel/Hotel", "BBQ Nights", "Group Discounts"]
  },
  {
    id: 5,
    title: "Customized Package",
    duration: "Flexible",
    description: "Personalized itineraries built completely around your preferences and budget.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1000",
    features: ["Tailor Made", "Choose Hotels", "Select Activities", "Personal Advisor"]
  }
];

export const destinations = [
  {
    id: "port-blair",
    title: "Port Blair",
    description: "Historic attractions and beautiful beaches. The gateway to the Andaman Islands.",
    image: "https://images.unsplash.com/photo-1620216174629-450ebf9a7df6?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "havelock",
    title: "Havelock Island",
    description: "World famous Radhanagar Beach, crystal clear waters, and amazing scuba diving.",
    image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cb15f9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "neil",
    title: "Neil Island",
    description: "Relaxing tropical island experience with beautiful natural rock formations.",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "ross",
    title: "Ross Island",
    description: "Historical sightseeing and friendly deer wandering freely among ruins.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "baratang",
    title: "Baratang Island",
    description: "Dense mangrove forests, mud volcanoes, and ancient limestone caves.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "north-bay",
    title: "North Bay Island",
    description: "The ultimate destination for water sports, sea walking, and snorkeling.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=1000"
  }
];

export const fleet = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    type: "SUV / Family",
    seats: 7,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
    description: "Premium comfort for large families exploring the islands."
  },
  {
    id: 2,
    name: "Maruti Suzuki Ertiga",
    type: "MUV / Group",
    seats: 7,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000",
    description: "Economical and spacious for group sightseeing."
  },
  {
    id: 3,
    name: "Mahindra XUV700",
    type: "Luxury SUV",
    seats: 7,
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1000",
    description: "High-end luxury travel experience across the islands."
  },
  {
    id: 4,
    name: "Maruti Suzuki Swift Dzire",
    type: "Sedan / Couples",
    seats: 4,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1000",
    description: "Perfect for couples or small families."
  }
];

// Placeholder for 30+ images
export const galleryImages = Array.from({ length: 12 }).map((_, i) => {
  const images = [
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540544660406-6aee9dacfa5f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1589136777351-fdc9c9cb15f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800",
  ];
  return images[i % images.length];
});

export const testimonials = [
  {
    id: 1,
    name: "Vikram Singh",
    role: "Family Vacation",
    content: "ALMAS TOUR & TRAVEL organized our complete 6-day Andaman trip. The Innova provided was extremely clean and the driver was very knowledgeable about local spots.",
    rating: 5
  },
  {
    id: 2,
    name: "Neha & Rahul",
    role: "Honeymoon Couple",
    content: "Our honeymoon package was flawless. From the airport pickup to the Havelock ferry transfers, everything was perfectly timed. Thank you for a memorable trip!",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Jones",
    role: "Solo Traveler",
    content: "Felt very safe and well-guided throughout my trip. The customized itinerary they built for me covered all the hidden gems of Port Blair and Neil Island.",
    rating: 5
  }
];
