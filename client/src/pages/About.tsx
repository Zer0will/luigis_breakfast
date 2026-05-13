// About — the family story page that helps locals decide they want to be regulars.

import { Link } from "wouter";
import { MapPin, Phone, ChevronRight, Heart, Wheat, Coffee } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { brand, images, getDirectionsUrl } from "@/data/brand";

export default function About() {
  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="container pt-10 sm:pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="font-hand text-2xl sm:text-3xl text-brick">The family behind the L</div>
            <h1 className="mt-1 font-display text-[42px] sm:text-[60px] font-semibold text-ink leading-[1.04]">
              We came to{" "}
              <span className="italic text-brick">Redmond Ridge</span>{" "}
              with a family recipe and a coffee pot.
            </h1>
            <p className="mt-6 text-[17px] sm:text-[18px] text-charcoal/85 leading-relaxed max-w-2xl">
              Luigi's American Breakfast is a small, family-run kitchen. The Italian sausage scramble comes from a grandmother who didn't measure anything. The Swedish pancakes come from a friend's recipe we promised we'd never change. Everything else comes from showing up every morning at 6 AM and caring about how it tastes when it lands on your table.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="polaroid tilt-r rounded-md">
              <img
                src={images.benedict}
                alt="Eggs benedict with hollandaise sauce"
                className="w-full h-[280px] sm:h-[360px] object-cover rounded-[3px]"
              />
              <div className="pt-3 px-1">
                <div className="font-hand text-2xl text-brick leading-tight">From our kitchen</div>
                <div className="text-[12px] text-charcoal/65 mt-0.5">A Saturday morning, last week.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-cream-deep/60 border-y border-cream-deep">
        <div className="container py-14 sm:py-20">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <Pillar
              icon={Wheat}
              title="Made in-house"
              body="Swedish pancake batter, country sausage gravy, corned beef hash, and chorizo — mixed and prepped in our kitchen, not shipped in a bag."
            />
            <Pillar
              icon={Heart}
              title="Family-run"
              body="You'll see the same faces when you come back. We learn names, we remember orders, and we'll sneak the kids an extra strawberry."
            />
            <Pillar
              icon={Coffee}
              title="Bottomless coffee"
              body="If your cup is empty, that's on us. Stay as long as you'd like — the booths weren't built to rush anyone."
            />
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="container py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img
              src={images.frenchToast}
              alt="French toast with fresh strawberries and Devonshire cream"
              className="w-full h-[360px] sm:h-[460px] object-cover rounded-[20px] shadow-xl"
            />
          </div>
          <div className="lg:col-span-6">
            <div className="font-hand text-3xl text-brick">A small promise</div>
            <h2 className="mt-1 font-display text-[34px] sm:text-[44px] font-semibold text-ink leading-tight">
              We're new here. We're listening.
            </h2>
            <p className="mt-5 text-[17px] text-charcoal/85 leading-relaxed">
              Luigi's just opened in Redmond Ridge. That means we're still learning the regulars, still tuning the menu, still figuring out the exact moment to flip the pancake. If something isn't right, please tell us — at the table or on a postcard left under your mug.
            </p>
            <p className="mt-4 text-[17px] text-charcoal/85 leading-relaxed">
              We'll make it right the same morning. And the next time you come in, we'll remember.
            </p>
            <blockquote className="mt-6 border-l-4 border-brick pl-5 italic font-display text-[20px] text-charcoal max-w-xl">
              "The breakfast burrito SLAPS. The omelette was massive. We'll be back."
              <footer className="mt-2 not-italic font-body text-[13px] text-charcoal/65">— A Redmond regular, on Yelp</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="rounded-[24px] bg-peach overflow-hidden relative">
          <div className="relative grid md:grid-cols-2 gap-6 p-8 sm:p-14">
            <div>
              <div className="font-hand text-3xl text-brick">Come hungry</div>
              <h2 className="mt-1 font-display text-[34px] sm:text-[44px] font-semibold text-ink leading-tight">
                Save us a seat at the table.
              </h2>
              <p className="mt-4 text-ink/80 text-[16px] leading-relaxed max-w-md">
                Walk in any morning between 8 and 3. Bring the family. Bring your laptop. Bring a friend who needs a good breakfast.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-brick text-cream px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-tomato transition-colors"
                >
                  See the menu <ChevronRight className="w-4 h-4" />
                </Link>
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink/90 text-cream px-6 py-3.5 rounded-full text-[15px] font-semibold"
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>
            <div className="flex md:justify-end">
              <div className="bg-cream rounded-2xl p-6 sm:p-7 shadow-lg max-w-sm w-full">
                <div className="font-display text-[15px] uppercase tracking-[0.16em] text-brick font-semibold">Visit</div>
                <p className="mt-2 text-[15px] text-charcoal leading-relaxed">
                  {brand.address.line1}<br />
                  {brand.address.city}, {brand.address.state} {brand.address.zip}
                </p>
                <a href={brand.phoneHref} className="mt-3 inline-flex items-center gap-2 text-brick font-semibold">
                  <Phone className="w-4 h-4" /> {brand.phone}
                </a>
                <div className="mt-4 pt-4 border-t border-cream-deep">
                  <div className="font-display text-[15px] uppercase tracking-[0.16em] text-brick font-semibold">Hours</div>
                  <p className="mt-2 text-[15px] text-charcoal">Daily, 8 AM – 3 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Pillar({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Heart;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="w-12 h-12 rounded-2xl bg-brick text-cream flex items-center justify-center shadow-sm">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 font-display text-[24px] font-semibold text-ink leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-[15px] text-charcoal/80 leading-relaxed">{body}</p>
    </div>
  );
}
