export type WeddingFunction = {
  title: string;
  date: string;
  time: string;
  note: string;
};

export const weddingData = {
  weddingDateISO: "2026-11-14T19:00:00+05:30",
  weddingDateDisplay: "14 November 2026",
  hero: {
    eyebrow: "A celebration of love",
    scrollCue: "Scroll to explore",
    templeAsset: "/temple-mandap.png"
  },
  invitation: {
    blessing: "With the blessings of the divine and the love of our families",
    invite: "Invite",
    familyOne: "The family of Adarsh",
    familyTwo: "The family of Divyansha",
    line: "to join them in celebrating a union written in warmth, laughter and grace."
  },
  functions: [
    {
      title: "Haldi",
      date: "12 November 2026",
      time: "11:00 AM",
      note: "Sunlit rituals, marigolds and joyful colour."
    },
    {
      title: "Mehendi",
      date: "13 November 2026",
      time: "4:00 PM",
      note: "An evening of henna, music and old stories."
    },
    {
      title: "Wedding",
      date: "14 November 2026",
      time: "7:00 PM",
      note: "Sacred vows beneath the mandap, followed by dinner."
    }
  ] as WeddingFunction[],
  couple: {
    groom: "Adarsh",
    bride: "Divyansha",
    display: "Adarsh weds Divyansha",
    hashtag: "#DIVYADARSHAN",
    alternateHashtag: "#DIVYANlyADARSH",
    note: "Two lives, one home, and a lifetime of shared sunsets.",
    photos: [
      "/couple/couple-1.jpg",
      "/couple/couple-2.jpg",
      "/couple/couple-3.jpg"
    ]
  },
  instagram: {
    title: "Celebrate with us",
    text: "Share your favourite frames, little moments and dance-floor memories.",
    handle: "#DIVYADARSHAN"
  },
  video: {
    title: "Our story, before the vows",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  venue: {
    name: "Wedding Venue",
    address: "Add venue name and full address in weddingData.ts",
    mapsUrl: "https://maps.google.com"
  },
  contact: {
    label: "Family contact",
    phone: "+91 00000 00000"
  },
  reminder: {
    label: "A gentle reminder",
    text: "Please arrive a little early so we can begin the ceremony together."
  },
  music: {
    src: "/music/wedding-theme.mp3",
    title: "Wedding Theme"
  },
  footer: {
    text: "With love, Adarsh & Divyansha"
  }
} as const;