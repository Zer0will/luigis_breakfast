// Brand constants for Luigi's American Breakfast
// Keeping these in one place makes future updates (phone, address, hours) trivial.

export const brand = {
  name: "Luigi's American Breakfast",
  shortName: "Luigi's",
  tagline: "The Best Breakfast in Town",
  address: {
    line1: "23515 NE Novelty Hill Rd",
    city: "Redmond",
    state: "WA",
    zip: "98053",
    full: "23515 NE Novelty Hill Rd, Redmond, WA 98053",
  },
  // NOTE: Phone is a placeholder — replace with actual number when known.
  phone: "(425) 616-5500",
  phoneHref: "tel:+14256165500",
  hours: {
    short: "Open Daily 8 AM – 3 PM",
    long: "Monday – Sunday, 8:00 AM – 3:00 PM",
    days: [
      { day: "Monday", hours: "8:00 AM – 3:00 PM" },
      { day: "Tuesday", hours: "8:00 AM – 3:00 PM" },
      { day: "Wednesday", hours: "8:00 AM – 3:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 3:00 PM" },
      { day: "Friday", hours: "8:00 AM – 3:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 3:00 PM" },
      { day: "Sunday", hours: "8:00 AM – 3:00 PM" },
    ],
  },
  social: {
    instagram: "https://instagram.com/luigis_breakfast",
    instagramHandle: "@luigis_breakfast",
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=23515+NE+Novelty+Hill+Rd%2C+Redmond%2C+WA+98053",
  mapEmbedUrl:
    "https://www.google.com/maps?q=23515+NE+Novelty+Hill+Rd,+Redmond,+WA+98053&output=embed",
};

const appleDirectionsUrl =
  "https://maps.apple.com/?daddr=23515+NE+Novelty+Hill+Rd,+Redmond,+WA+98053";

export function getDirectionsUrl(): string {
  if (typeof navigator === "undefined") return brand.directionsUrl;
  return /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)
    ? appleDirectionsUrl
    : brand.directionsUrl;
}

// Hero / food imagery (generated, persistent CDN URLs)
export const images = {
  heroSpread:
    "https://d2xsxph8kpxj0f.cloudfront.net/90669572/HtxR8dXyWDp3zxy4Q9Xhd6/luigis_hero_breakfast_spread-NXJ993atFQYqcSU7dvhug2.webp",
  burrito:
    "https://d2xsxph8kpxj0f.cloudfront.net/90669572/HtxR8dXyWDp3zxy4Q9Xhd6/luigis_breakfast_burrito-UaX3cQBVKnsaqa8JPh8icG.webp",
  frenchToast:
    "https://d2xsxph8kpxj0f.cloudfront.net/90669572/HtxR8dXyWDp3zxy4Q9Xhd6/luigis_french_toast-5rrCiGe2eLBohAdoBUmWRq.webp",
  benedict:
    "https://d2xsxph8kpxj0f.cloudfront.net/90669572/HtxR8dXyWDp3zxy4Q9Xhd6/luigis_eggs_benedict-YrpXVv3tuBpziSknUmd6DP.webp",
};

// Curated "what people order" picks shown on the home page
export const signatureDishes = [
  {
    name: "Swedish Pancakes",
    blurb:
      "Our house specialty. A treasured family recipe with fresh Devonshire cream & jam.",
    image: images.frenchToast,
    tilt: "tilt-l" as const,
    href: "/menu#swedish",
    badge: "House specialty",
  },
  {
    name: "Breakfast Burrito",
    blurb:
      "Carne asada or homemade chorizo, scrambled eggs, peppers, and red potatoes in a griddled flour tortilla.",
    image: images.burrito,
    tilt: "tilt-r" as const,
    href: "/menu#favorites",
    badge: "Neighborhood favorite",
  },
  {
    name: "Italian Lover's Scramble",
    blurb:
      "Sweet Italian sausage, spinach, onions, mushrooms & parmesan. The Luigi family lineage on a plate.",
    image: images.heroSpread,
    tilt: "tilt-l" as const,
    href: "/menu#scrambles",
    badge: "From the family",
  },
];
