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

// User-approved AI illustrative imagery, served from checked-in assets.
export const images = {
  heroSpread:
    "/images/breakfast-spread.webp",
  burrito:
    "/images/breakfast-burrito.webp",
  swedishPancakes:
    "/images/swedish-pancakes.webp",
  benedict:
    "/images/eggs-benedict.webp",
};

// Curated "what people order" picks shown on the home page
export const signatureDishes = [
  {
    name: "Swedish Pancakes",
    altText:
      "Illustrative image of thin pancakes with cream and berry topping",
    blurb:
      "Our house specialty. A treasured family recipe with fresh Devonshire cream & jam.",
    image: images.swedishPancakes,
    tilt: "tilt-l" as const,
    href: "/menu#swedish",
    badge: "House specialty",
  },
  {
    name: "Breakfast Burrito",
    altText:
      "Illustrative image of a breakfast burrito cut in half",
    blurb:
      "Carne asada or homemade chorizo, scrambled eggs, peppers, and red potatoes in a griddled flour tortilla.",
    image: images.burrito,
    tilt: "tilt-r" as const,
    href: "/menu#favorites",
    badge: "Neighborhood favorite",
  },
  {
    name: "Eggs Benedict",
    altText:
      "Illustrative image of eggs benedict with breakfast potatoes",
    blurb:
      "Two soft-poached eggs on an English muffin with hollandaise and your choice of breakfast side.",
    image: images.benedict,
    tilt: "tilt-l" as const,
    href: "/menu#benedicts",
    badge: "Brunch classic",
  },
];
