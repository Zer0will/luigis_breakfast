import { Helmet } from "react-helmet-async";

const SITE_URL = "https://luigisrestaurant.online";
const OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/90669572/HtxR8dXyWDp3zxy4Q9Xhd6/luigis_hero_breakfast_spread-NXJ993atFQYqcSU7dvhug2.webp";
const OG_IMAGE_ALT =
  "A spread of pancakes, eggs benedict, hash browns, and breakfast favorites at Luigi's American Breakfast in Redmond, WA";
const SITE_NAME = "Luigi's American Breakfast";

const restaurantSchema = {
  "@type": ["Restaurant", "LocalBusiness"],
  name: "Luigi's American Breakfast",
  description:
    "Family-run American breakfast and lunch spot in Redmond Ridge, WA. Swedish pancakes, Italian sausage scrambles, eggs benedict, and more. Open daily 8 AM–3 PM.",
  url: SITE_URL,
  telephone: "+14256165500",
  image: OG_IMAGE,
  priceRange: "$$",
  servesCuisine: ["American", "Breakfast"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "23515 NE Novelty Hill Rd",
    addressLocality: "Redmond",
    addressRegion: "WA",
    postalCode: "98053",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.674,
    longitude: -122.029,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  sameAs: ["https://instagram.com/luigis_breakfast"],
  hasMap:
    "https://www.google.com/maps?q=23515+NE+Novelty+Hill+Rd,+Redmond,+WA+98053",
  parking: "Free parking available",
  menu: "https://luigisrestaurant.online/menu",
  acceptsReservations: false,
};

interface SEOProps {
  title: string;
  description: string;
  path: string;
  includeRestaurantSchema?: boolean;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export default function SEO({
  title,
  description,
  path,
  includeRestaurantSchema = false,
  breadcrumbs,
}: SEOProps) {
  const canonical = `${SITE_URL}${path}`;

  const schemas: object[] = [];

  if (includeRestaurantSchema) {
    schemas.push(restaurantSchema);
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ...breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        })),
      ],
    });
  }

  const jsonLd =
    schemas.length > 0
      ? { "@context": "https://schema.org", "@graph": schemas }
      : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
