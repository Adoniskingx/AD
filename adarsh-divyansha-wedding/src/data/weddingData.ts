export interface FunctionEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink: string;
}

export interface ThingToKnow {
  title: string;
  description: string;
  iconName: string;
}

export const weddingData = {
  couple: {
    groom: "Adarsh",
    bride: "Divyansha",
    groomParents: "Smt. Vandana & Shri Anil Tabhane",
    brideParents: "Late Smt. Sangita & Shri Sanjay Bagde",
    hashtag: "#DIVYADARSHAN",
    // Main couple image pointing to public/Photos/
    coupleImage: "/Photos/1 (1).jpg",
  },
  
  eventDetails: {
    tagline: "Two Souls. One Promise • A Lifetime Together",
    blessingText: "In the peaceful and sacred light of the Triratna",
    motto: "Atta Deep Bhava",
  },

  // Gallery array using exact image filenames from your GitHub repo
  galleryImages: [
    "/Photos/1 (1).jpg",
    "/Photos/1 (2).jpg",
    "/Photos/1 (3).jpg",
    "/Photos/1 (4).jpg",
    "/Photos/1 (5).jpg",
  ],

  functions: [
    {
      title: "Haldi Ceremony",
      date: "Friday, 13 November 2026",
      time: "7:00 PM Onwards",
      venue: "Residence",
      address: "Plot No 9, Rathi Layout, Layout No 2, Godhani Road, Nagpur 440030",
      mapLink: "https://maps.google.com/?q=Plot+No+9+Rathi+Layout+Godhani+Road+Nagpur",
    },
    {
      title: "Wedding Ceremony & Rituals",
      date: "Saturday, 14 November 2026",
      time: "7:00 PM Onwards",
      venue: "The Grand Jashan",
      address: "Kamptee Road, Khairy, Nagpur 440029",
      mapLink: "https://maps.google.com/?q=The+Grand+Jashan+Kamptee+Road+Khairy+Nagpur",
    },
  ] as FunctionEvent[],

  thingsToKnow: [
    {
      title: "Venue & Parking",
      description: "Ample parking space available at both venues with valet assistance.",
      iconName: "MapPin",
    },
    {
      title: "Dress Code",
      description: "Traditional / Ethnic wear for both events.",
      iconName: "Sparkles",
    },
    {
      title: "Photography",
      description: "Tag your photos with #DIVYADARSHAN on Instagram!",
      iconName: "Camera",
    },
  ] as ThingToKnow[],
};
