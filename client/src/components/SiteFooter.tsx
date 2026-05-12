// SiteFooter — neighborhood-style footer with hours, address, and a sticky mobile action bar.

import { Link } from "wouter";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/data/brand";

export default function SiteFooter() {
  return (
    <>
      <footer className="mt-20 sm:mt-28 bg-ink text-cream/90 relative overflow-hidden">
        <div className="sunrise-strip absolute top-0 left-0 right-0" />
        <div className="container py-14 sm:py-20">
          <div className="grid gap-10 sm:gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <Logo size={56} />
                <div>
                  <div className="font-display text-2xl text-cream">Luigi's</div>
                  <div className="font-display italic text-[13px] text-peach -mt-1">
                    American Breakfast
                  </div>
                </div>
              </div>
              <p className="font-hand text-2xl text-peach leading-tight max-w-sm">
                Good food. Good coffee. A whole lot of butter.
              </p>
              <p className="mt-4 text-[15px] text-cream/70 max-w-md leading-relaxed">
                A family-run breakfast & lunch spot tucked into the Redmond Ridge plaza. Stop in for Swedish pancakes, an Italian sausage scramble, or a steak and eggs. Save room for a cinnamon roll.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="text-[12px] uppercase tracking-[0.18em] text-peach font-semibold mb-3">
                Find us
              </div>
              <a
                href={brand.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-peach transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-1 text-peach shrink-0" />
                <span className="text-[15px] leading-relaxed">
                  {brand.address.line1}
                  <br />
                  {brand.address.city}, {brand.address.state} {brand.address.zip}
                </span>
              </a>
              <a
                href={brand.phoneHref}
                className="mt-4 flex items-center gap-2 text-[15px] hover:text-peach transition-colors"
              >
                <Phone className="w-4 h-4 text-peach" />
                {brand.phone}
              </a>
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-2 text-[15px] hover:text-peach transition-colors"
              >
                <Instagram className="w-4 h-4 text-peach" />
                {brand.social.instagramHandle}
              </a>
            </div>

            <div className="md:col-span-4">
              <div className="text-[12px] uppercase tracking-[0.18em] text-peach font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Hours
              </div>
              <ul className="space-y-1.5 text-[15px]">
                {brand.hours.days.map((d) => (
                  <li key={d.day} className="flex justify-between gap-3 max-w-xs">
                    <span className="text-cream/70">{d.day}</span>
                    <span className="text-cream">{d.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[13px] text-cream/55">
            <div>© {new Date().getFullYear()} Luigi's American Breakfast. Made with butter in Redmond, WA.</div>
            <div className="flex gap-4">
              <Link href="/menu" className="hover:text-peach">Menu</Link>
              <Link href="/about" className="hover:text-peach">Our Family</Link>
              <Link href="/visit" className="hover:text-peach">Visit</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-3">
        <div className="flex gap-2 bg-ink/95 backdrop-blur-md shadow-2xl rounded-full p-1.5">
          <a
            href={brand.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 bg-brick text-cream py-3 rounded-full font-semibold text-[15px]"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a
            href={brand.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-peach text-ink py-3 rounded-full font-semibold text-[15px]"
          >
            <MapPin className="w-4 h-4" />
            Directions
          </a>
        </div>
      </div>
      {/* Spacer so the sticky bar doesn't cover footer content on mobile */}
      <div className="md:hidden h-20" aria-hidden />
    </>
  );
}
