import photo4 from '../assets/photos/4.jpg';
import photo5 from '../assets/photos/5.jpg';
import photo6 from '../assets/photos/6.jpg';
import photo7 from '../assets/photos/7.jpg';
import photo8 from '../assets/photos/8.jpg';
import photo9 from '../assets/photos/9.jpg';
import photo10 from '../assets/photos/10.jpg';

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
    coupleImage: photo10,
    note: "Two Souls. One Promise.\nA Lifetime Together" // Using \n forces a clean new line
  },

  eventDetails: {
    tagline: "Two Souls. One Promise.\nA Lifetime Together", // Using \n forces a clean new line
    blessingText: "In the peaceful and sacred light of the Triratna",
    motto: "Atta Deep Bhava",
    weddingDateDisplay: "Saturday, 14 November 2026"
  },

  weddingDateISO: "2026-11-14T19:00:00",
  weddingDateDisplay: "Saturday, 14 November 2026",

  photos: [
    photo6,
    photo7,
    photo5,
    photo4,
    photo9,
    photo8
  ],

  galleryImages: [
    photo6,
    photo7,
    photo5,
    photo4,
    photo9,
    photo8
  ],

  hero: {
    title: "#DIVYADARSHAN",
    subtitle: "Adarsh & Divyansha",
    date: "14 November 2026",
    image: photo10,
    locationName: "The Grand Jashan",
    locationCity: "Kamptee Road, Khairy, Nagpur"
  },

  invitation: {
    heading: "Wedding Invitation",
    text: "In the peaceful and sacred light of the Triratna",
    greeting: "In the peaceful and sacred light of the Triratna",
    message: "We cordially invite you to celebrate with us.",
    familyNames: "The Tabhane & Bagde Family",
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
    family: "Tabhane Family, Relatives & Friends",
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
    thumbnail: photo6
  }
};
