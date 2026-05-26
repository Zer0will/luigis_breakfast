// Visit — practical info: address, map, hours, parking, phone.

import { Link } from "wouter";
import { MapPin, Phone, Clock, Car, Instagram, ChevronRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SEO from "@/components/SEO";
import { brand, getDirectionsUrl } from "@/data/brand";

export default function Visit() {
  return (
    <SiteLayout>
      <SEO
        title="Hours & Location | Luigi's American Breakfast — Redmond, WA"
        description="Visit Luigi's American Breakfast at 23515 NE Novelty Hill Rd, Redmond, WA 98053. Open daily 8 AM–3 PM. Free parking. Call (425) 616-5500."
        path="/visit"
        includeRestaurantSchema
        breadcrumbs={[{ name: "Hours & Location", path: "/visit" }]}
      />
      <section className="container pt-10 sm:pt-16 pb-10">
        <div className="font-hand text-2xl sm:text-3xl text-brick">Find us</div>
        <h1 className="mt-1 font-display text-[42px] sm:text-[56px] font-semibold text-ink leading-tight">
          Right off Novelty Hill Road.
        </h1>
        <p className="mt-4 text-charcoal/80 text-[17px] max-w-2xl leading-relaxed">
          Tucked into the Redmond Ridge plaza with plenty of free parking. Walk
          in any morning between 8 and 3 — no reservations needed.
        </p>
      </section>

      <section className="container pb-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-[20px] overflow-hidden shadow-xl border border-cream-deep aspect-[4/3] sm:aspect-[16/10] bg-cream-deep">
              <iframe
                title="Map to Luigi's American Breakfast"
                src={brand.mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-brick text-cream px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-tomato transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Block icon={MapPin} title="Address">
              <p className="text-[16px] text-charcoal leading-relaxed">
                {brand.address.line1}
                <br />
                {brand.address.city}, {brand.address.state} {brand.address.zip}
              </p>
            </Block>

            <Block icon={Clock} title="Hours">
              <ul className="space-y-1 text-[15px]">
                {brand.hours.days.map(d => (
                  <li key={d.day} className="flex justify-between">
                    <span className="text-charcoal/70">{d.day}</span>
                    <span className="text-ink font-medium">{d.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] text-charcoal/65 italic">
                Lunch menu starts at noon on weekends; available anytime
                weekdays.
              </p>
            </Block>

            <Block icon={Phone} title="Call ahead">
              <a
                href={brand.phoneHref}
                className="text-[18px] font-semibold text-brick"
              >
                {brand.phone}
              </a>
              <p className="mt-1 text-[13px] text-charcoal/70">
                For pickup, large parties, or just to say hi.
              </p>
            </Block>

            <Block icon={Car} title="Parking">
              <p className="text-[15px] text-charcoal leading-relaxed">
                Free parking out front and around the plaza. Stroller- and
                walker-friendly entrance.
              </p>
            </Block>

            <Block icon={Instagram} title="Follow along">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] font-semibold text-brick"
              >
                {brand.social.instagramHandle}
              </a>
              <p className="mt-1 text-[13px] text-charcoal/70">
                Daily specials, family stories, and very photogenic pancakes.
              </p>
            </Block>
          </div>
        </div>
      </section>

      {/* Internal link to About */}
      <section className="container pb-20">
        <div className="pt-6 border-t border-cream-deep text-center">
          <p className="text-[15px] text-charcoal/70">
            Want to know who's cooking?{" "}
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-brick font-semibold hover:text-tomato transition-colors"
            >
              Meet the family behind the kitchen{" "}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Clock;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-cream-deep rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-9 h-9 rounded-full bg-peach-soft text-brick flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </div>
        <h2 className="font-display text-[20px] font-semibold text-ink">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
