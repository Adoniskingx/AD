export interface FunctionEvent {
  id?: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink?: string;
  mapUrl?: string;
  description?: string;
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
    coupleImage: "/Photos/And.webp",
    note: "Two Souls. One Promise • A Lifetime Together"
  },

  eventDetails: {
    tagline: "Two Souls. One Promise • A Lifetime Together",
    blessingText: "In the peaceful and sacred light of the Triratna,",
    motto: "|| Atta Deep Bhava ||",
    weddingDateDisplay: "Saturday, 14 November 2026"
  },

  weddingDateISO: "2026-11-14T19:00:00",
  weddingDateDisplay: "Saturday, 14 November 2026",

  photos: [
    "/Photos/6.webp",
    "/Photos/7.webp",
    "/Photos/5.webp",
    "/Photos/4.webp",
    "/Photos/9.webp",
    "/Photos/8.webp"
  ],

  galleryImages: [
    "/Photos/6.webp",
    "/Photos/7.webp",
    "/Photos/5.webp",
    "/Photos/4.webp",
    "/Photos/9.webp",
    "/Photos/8.webp"
  ],

  hero: {
    motto: "|| Atta Deep Bhava ||",
    blessing: "In the peaceful and sacred light of the Triratna,",
    invitationText: "We cordially invite your esteemed presence and blessings with family on the auspicious occasion of the wedding ceremony of",
    title: "#DIVYADARSHAN",
    date: "Saturday, 14 November 2026",
    image: "/Photos/And.webp",
    locationName: "The Grand Jashan",
    locationCity: "Kamptee Road, Khairy, Nagpur",
    groomParents: "Smt. Vandana & Shri Anil Tabhane",
    brideParents: "Late Smt. Sangita & Shri Sanjay Bagde"
  },

  functions: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      date: "Friday, 13 November 2026",
      time: "7:00 PM Onwards",
      venue: "Residence",
      address: "Plot No 9, Rathi Layout, Layout No 2, Godhani Road, Nagpur 440030",
      description: "Haldi Ceremony & Rituals",
      mapLink: "https://maps.google.com/?q=Plot+No+9+Rathi+Layout+Godhani+Road+Nagpur",
      mapUrl: "https://maps.google.com/?q=Plot+No+9+Rathi+Layout+Godhani+Road+Nagpur"
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "Saturday, 14 November 2026",
      time: "7:00 PM Onwards",
      venue: "The Grand Jashan",
      address: "Kamptee Road, Khairy, Nagpur 440029",
      description: "Wedding Ceremony & Reception",
      mapLink: "https://maps.google.com/?q=The+Grand+Jashan+Kamptee+Road+Khairy+Nagpur",
      mapUrl: "https://maps.google.com/?q=The+Grand+Jashan+Kamptee+Road+Khairy+Nagpur"
    }
  ] as FunctionEvent[],

  thingsToKnow: [
    {
      title: "Venue & Parking",
      description: "Ample parking space available at both venues with valet assistance.",
      iconName: "MapPin"
    },
    {
      title: "Dress Code",
      description: "Traditional / Ethnic wear for both events.",
      iconName: "Sparkles"
    },
    {
      title: "Photography",
      description: "Tag your photos with #DIVYADARSHAN on Instagram!",
      iconName: "Camera"
    }
  ] as ThingToKnow[],

  venue: {
    name: "The Grand Jashan",
    address: "Kamptee Road, Khairy, Nagpur 440029",
    label: "Venue Details"
  },

  contact: {
    name: "Tabhane & Bagde Family",
    phone: "80
      
