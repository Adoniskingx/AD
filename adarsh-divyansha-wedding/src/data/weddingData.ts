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
    note: "Two Souls. One Promise • A Lifetime Together",
  },

  eventDetails: {
    tagline: "Two Souls. One Promise • A Lifetime Together",
    blessingText: "In the peaceful and sacred light of the Triratna",
    motto: "Atta Deep Bhava",
    weddingDateDisplay: "Saturday, 14 November 2026",
  },

  weddingDateISO: "2026
    
