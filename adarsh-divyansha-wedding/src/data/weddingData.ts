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
    coupleImage: photo10, // Image 10 featured on top
    note: "Two Souls. One Promise • A Lifetime Together",
  },

  eventDetails: {
    tagline: "Two Souls. One Promise • A Lifetime Together",
    blessingText: "In the peaceful and sacred light of the Triratna",
    motto: "Atta Deep Bhava",
    weddingDateDisplay: "Saturday, 14 November 2026",
  },

  weddingDateISO: "2026-11-14T19:00:00",
  weddingDateDisplay: "Saturday, 14 November 2026",

  // Carousel & Browsable Gallery Sequence: 6, 7, 5, 4, 9, 8 (Excludes 10)
  photos: [
    photo6,
    photo7,
    photo5,
    photo4,
    photo9,
    photo8,
  ],

  galleryImages: [
    photo6,
    photo7,
    photo5,
    photo4,
    photo9,
    photo8,
  ],

  hero: {
    title: "#DIVYADARSHAN",
    subtitle: "Adarsh & Divyansha",
    date: "14 November 2026",
    image: photo10, // Image 10 featured on top
    locationName: "Deekshabhoomi Stupa & Torana Gateway",
    locationCity: "Nagpur, Maharashtra",
  },

  invitation: {
    heading: "Wedding Invitation",
    text: "In the peaceful and sacred light of the Triratna",
    greeting: "In the peaceful and sacred light of the Triratna",
    message: "We cordially invite you to celebrate with us.",
    familyNames: "The Tabhane & Bagde Family",
    groomParents: "Smt
      
