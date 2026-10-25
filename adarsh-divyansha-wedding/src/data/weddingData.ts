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
    coupleImage: "/Photos/And.jpg",
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
    "/Photos/6.jpg",
    "/Photos/7.jpg",
    "/Photos/5.jpg",
    "/Photos/4.jpg",
    "/Photos/9.jpg",
    "/Photos/8.jpg"
  ],

  galleryImages: [
    "/Photos/6.jpg",
    "/Photos/7.jpg",
    "/Photos/5.jpg",
    "/Photos/4.jpg",
    "/Photos/9.jpg",
    "/Photos/8.jpg"
  ],

  hero: {
    motto: "|| Atta Deep Bhava ||",
    blessing: "In the peaceful and sacred light of the Triratna,",
    invitationText: "We cordially invite your esteemed presence and blessings with family on the auspicious occasion of the wedding ceremony of",
    title: "#DIVYADARSHAN",
    date: "Saturday, 14 November 2026",
    image: "/Photos/And.jpg",
    locationName: "The Grand Jashan",
    locationCity: "Kamptee Road, Khairy, Nagpur"
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
    phone: "8087142596, 9922337877",
    label: "Contact Us",
    description: "We look forward to welcoming you with family and friends."
  },

  reminder: {
    text: "At 7:00 PM \nPlease join us on time to grace the auspicious occasion.",
    label: "Save the Date: 14 November 2026"
  },

  footer: {
    text: "Awaiting to Welcome You",
    family: "The Tabhane & Bagde Family",
    weddingDateDisplay: "Saturday, 14 November 2026"
  },

  instagram: {
    hashtag: "#DIVYADARSHAN",
    handle: "@adarsh_divyansha",
    title: "Instagram",
    text: "Tag your moments"
  },

  music: {
    track: "wedding-song.mp3",
    title: "Our Special Song",
    src: "wedding-song.mp3"
  },

  video: {
    url: "",
    youtubeEmbedUrl: "",
    title: "Our Story",
    thumbnail: "/Photos/6.jpg"
  }
};
