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
    image: "https://www.andamantravelogues.in/images/pack1.jpg",
    features: ["Family Resort", "All Meals", "Guided Tours", "Airport Transfers"],
    popular: true
  },
  {
    id: 2,
    title: "Honeymoon Package",
    duration: "4 Nights / 5 Days",
    description: "Romantic island escape featuring luxury beachfront resorts and candlelit beach dinners.",
    image: "https://www.andamantravelogues.in/images/pack2.jpg",
    features: ["Luxury Suite", "Candlelit Dinner", "Private Transfer", "Photoshoot"],
    popular: true
  },
  {
    id: 3,
    title: "Adventure Package",
    duration: "6 Nights / 7 Days",
    description: "Thrilling water sports, scuba diving, and deep exploration of untouched islands.",
    image: "https://www.andamantravelogues.in/images/pack3.jpg",
    features: ["Scuba Diving", "Trekking", "Jet Skiing", "Expert Guides"]
  },
  {
    id: 4,
    title: "Group Package",
    duration: "3 Nights / 4 Days",
    description: "Affordable and fun group travel plans tailored for friends and corporate teams.",
    image: "https://www.andamantravelogues.in/images/pack4.jpg",
    features: ["Group Transport", "Hostel/Hotel", "BBQ Nights", "Group Discounts"]
  },
  {
    id: 5,
    title: "Customized Package",
    duration: "Flexible",
    description: "Personalized itineraries built completely around your preferences and budget.",
    image: "https://www.andamantravelogues.in/images/pack5.jpg",
    features: ["Tailor Made", "Choose Hotels", "Select Activities", "Personal Advisor"]
  }
];

export const destinations = [
  {
    id: "port-blair",
    title: "Port Blair",
    description: "Historic attractions and beautiful beaches. The gateway to the Andaman Islands.",
    image: "https://www.andamantravelogues.in/images/1.jpg"
  },
  {
    id: "havelock",
    title: "Havelock Island",
    description: "World famous Radhanagar Beach, crystal clear waters, and amazing scuba diving.",
    image: "https://www.andamantravelogues.in/images/ho1.jpg"
  },
  {
    id: "neil",
    title: "Neil Island",
    description: "Relaxing tropical island experience with beautiful natural rock formations.",
    image: "https://www.andamantravelogues.in/images/ho3.jpg"
  },
  {
    id: "ross",
    title: "Ross Island",
    description: "Historical sightseeing and friendly deer wandering freely among ruins.",
    image: "https://www.andamantravelogues.in/images/ho4.jpg"
  },
  {
    id: "baratang",
    title: "Baratang Island",
    description: "Dense mangrove forests, mud volcanoes, and ancient limestone caves.",
    image: "https://www.andamantravelogues.in/images/pack6.jpg"
  },
  {
    id: "north-bay",
    title: "North Bay Island",
    description: "The ultimate destination for water sports, sea walking, and snorkeling.",
    image: "https://www.andamantravelogues.in/images/pack7.jpg"
  }
];

export const fleet = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    type: "SUV / Family",
    seats: 7,
    image: "https://www.andamantravelogues.in/images/pack9.jpg",
    description: "Premium comfort for large families exploring the islands."
  },
  {
    id: 2,
    name: "Maruti Suzuki Ertiga",
    type: "MUV / Group",
    seats: 7,
    image: "https://www.andamantravelogues.in/images/Kalimpong.jpg",
    description: "Economical and spacious for group sightseeing."
  },
  {
    id: 3,
    name: "Mahindra XUV700",
    type: "Luxury SUV",
    seats: 7,
    image: "https://www.andamantravelogues.in/images/darjeeling.jpg",
    description: "High-end luxury travel experience across the islands."
  },
  {
    id: 4,
    name: "Maruti Suzuki Swift Dzire",
    type: "Sedan / Couples",
    seats: 4,
    image: "https://www.andamantravelogues.in/images/gangtok.jpg",
    description: "Perfect for couples or small families."
  }
];

// Placeholder for 30+ images
export const galleryImages = Array.from({ length: 12 }).map((_, i) => {
  const images = [
    "https://www.andamantravelogues.in/images/1.jpg",
    "https://www.andamantravelogues.in/images/ho1.jpg",
    "https://www.andamantravelogues.in/images/pack1.jpg",
    "https://www.andamantravelogues.in/images/pack2.jpg",
    "https://www.andamantravelogues.in/images/pack3.jpg",
    "https://www.andamantravelogues.in/images/pack4.jpg",
    "https://www.andamantravelogues.in/images/pack5.jpg",
    "https://www.andamantravelogues.in/images/ho3.jpg",
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
