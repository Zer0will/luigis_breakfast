// Home — the high-conversion landing page for Luigi's.
// Goal: in 3 seconds, a local should know WHAT this is, WHERE it is, WHEN it's open,
// and feel a warm pull to come in this weekend.

import { Link } from "wouter";
import {
  Clock,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Utensils,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SEO from "@/components/SEO";
import { brand, images, signatureDishes, getDirectionsUrl } from "@/data/brand";

export default function Home() {
  return (
    <SiteLayout>
      <SEO
        title="Breakfast Restaurant in Redmond, WA | Luigi's"
        description="Family-run breakfast restaurant in Redmond Ridge, WA. House-made Swedish pancakes, Italian scrambles & eggs benedict. Walk in daily, 8 AM–3 PM."
        path="/"
        includeRestaurantSchema
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container pt-8 sm:pt-14 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 fade-up">
              <div className="inline-flex items-center gap-2 bg-peach-soft text-brick px-3 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-[0.16em]">
                <span className="inline-block w-1.5 h-1.5 bg-brick rounded-full" />
                Now open in Redmond Ridge
              </div>

              <h1 className="mt-5 font-display text-[44px] sm:text-[64px] lg:text-[72px] leading-[1.02] text-ink font-semibold">
                <span className="italic text-brick">Breakfast</span> in Redmond
                Ridge worth getting up for.
              </h1>

              <p className="mt-5 text-[17px] sm:text-[19px] text-charcoal/80 leading-relaxed max-w-xl">
                Luigi's is a family-run breakfast restaurant in Redmond Ridge,
                WA — serving scratch-made Swedish pancakes, Italian sausage
                scrambles, eggs benedict, and steak-and-eggs the way a Saturday
                morning should taste. Walk in any day between 8 and 3, and
                we'll have the coffee on.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-brick text-cream px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-tomato transition-colors shadow-sm"
                >
                  <Utensils className="w-4 h-4" />
                  See the menu
                </Link>
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-cream-deep text-ink px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-peach-soft transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get directions
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-7 text-[14px]">
                <div className="flex items-center gap-2 text-charcoal">
                  <Clock className="w-4 h-4 text-brick" />
                  <span className="font-semibold text-ink">Open daily</span>
                  <span className="text-charcoal/70">8 AM – 3 PM</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal">
                  <MapPin className="w-4 h-4 text-brick" />
                  <span className="font-semibold text-ink">Redmond Ridge</span>
                  <span className="text-charcoal/70">Novelty Hill Rd</span>
                </div>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2 text-charcoal hover:text-brick"
                >
                  <Phone className="w-4 h-4 text-brick" />
                  <span className="font-semibold text-ink">{brand.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative fade-up fade-up-d1">
              {/* Hero image with frame */}
              <div className="relative">
                <div className="absolute -inset-4 bg-peach-soft rounded-[28px] -rotate-2 -z-10" />
                <div className="absolute -inset-2 bg-cream-deep rounded-[24px] rotate-1 -z-10" />
                <img
                  src={images.heroSpread}
                  alt="Breakfast spread at Luigi's in Redmond Ridge, WA — pancakes, omelette, hash browns, and biscuits and gravy"
                  className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover rounded-[20px] shadow-xl"
                />

                {/* Steaming chef-hat badge */}
                <div className="absolute -bottom-6 left-4 sm:left-8 bg-cream rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-cream-deep">
                  <div className="relative">
                    <span className="absolute -top-3 left-2 w-0.5 h-3 bg-charcoal/40 wisp rounded-full" />
                    <span className="absolute -top-4 left-4 w-0.5 h-4 bg-charcoal/30 wisp wisp-2 rounded-full" />
                    <span className="absolute -top-3 left-6 w-0.5 h-3 bg-charcoal/40 wisp wisp-3 rounded-full" />
                    <span className="text-2xl">☕</span>
                  </div>
                  <div className="leading-tight">
                    <div className="font-hand text-xl text-brick -mb-0.5">
                      Coffee's on
                    </div>
                    <div className="text-[12px] text-charcoal/60">
                      Bottomless refills
                    </div>
                  </div>
                </div>

                {/* "Just opened" tag */}
                <div className="hidden sm:block absolute -top-3 -right-3 bg-brick text-cream font-display italic text-[15px] px-4 py-2 rounded-full shadow-lg rotate-6">
                  Just opened!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-cream-deep/60 border-y border-cream-deep">
        <div className="container py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <Stat
            icon={Clock}
            title="All-day breakfast"
            sub="Served 8 to 3, every day"
          />
          <Stat
            icon={Utensils}
            title="Made in-house"
            sub="Swedish pancake batter, sausage gravy, corned beef hash"
          />
          <Stat
            icon={Star}
            title="Family-run"
            sub="The Luigi family welcomes you"
          />
          <Stat
            icon={MapPin}
            title="Easy parking"
            sub="Right off Novelty Hill Rd"
          />
        </div>
      </section>

      {/* WHAT PEOPLE ORDER */}
      <section className="container py-16 sm:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="font-hand text-3xl text-brick">
              What people order
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] font-semibold text-ink leading-tight max-w-2xl">
              What Redmond Regulars Order First
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1 text-brick font-semibold text-[15px] hover:gap-2 transition-all"
          >
            Browse the full menu <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10">
          {signatureDishes.map((dish, i) => (
            <Link
              key={dish.name}
              href={dish.href}
              className={`polaroid rounded-md ${dish.tilt} block`}
              style={{ animationDelay: `${120 * (i + 1)}ms` }}
            >
              <div className="relative overflow-hidden rounded-[3px]">
                <img
                  src={dish.image}
                  alt={dish.altText}
                  className="w-full h-[260px] sm:h-[280px] object-cover"
                />
                <span className="absolute top-3 left-3 bg-brick text-cream text-[11px] uppercase tracking-[0.12em] font-semibold px-2.5 py-1 rounded-full">
                  {dish.badge}
                </span>
              </div>
              <div className="pt-4 px-1">
                <div className="font-display italic text-[22px] text-ink leading-tight">
                  {dish.name}
                </div>
                <p className="mt-1.5 text-[14px] text-charcoal/75 leading-relaxed">
                  {dish.blurb}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SUNRISE DIVIDER */}
      <div className="sunrise-strip" />

      {/* FAMILY STORY */}
      <section className="bg-cream-deep/50">
        <div className="container py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <img
                  src={images.benedict}
                  alt="Eggs benedict with hollandaise sauce at Luigi's family breakfast restaurant in Redmond Ridge, WA"
                  className="w-full h-[360px] sm:h-[440px] object-cover rounded-[20px] shadow-xl"
                />
                <div className="absolute -bottom-5 -right-5 bg-peach text-ink rounded-2xl px-5 py-3 shadow-lg max-w-[200px]">
                  <div className="font-hand text-xl leading-tight">
                    "The breakfast burrito SLAPS."
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] mt-1 opacity-70">
                    — A Redmond regular
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="font-hand text-3xl text-brick">Our story</div>
              <h2 className="mt-1 font-display text-[34px] sm:text-[46px] font-semibold text-ink leading-tight">
                A Family Breakfast Restaurant With Italian Roots
              </h2>
              <p className="mt-5 text-[17px] text-charcoal/80 leading-relaxed">
                Luigi's is a family-friendly breakfast operation in Redmond
                Ridge, and the menu reads like a family table: Swedish pancakes
                from a treasured recipe, Italian sausage scrambled with spinach
                and parmesan, fresh corned beef hash made in-house every week,
                and steak from our own butcher shop. We opened here to be the
                place you bring your parents on Saturday and your kids on
                Sunday.
              </p>
              <p className="mt-4 text-[17px] text-charcoal/80 leading-relaxed">
                We're still new here. If something's not right, tell us — we'll
                fix it on the spot, and probably hand you a cinnamon roll on
                your way out.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-1 text-brick font-semibold text-[15px] hover:gap-2 transition-all"
              >
                Read the family story <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT CARD */}
      <section className="container py-16 sm:py-24">
        <div className="rounded-[24px] bg-ink text-cream overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, var(--peach) 0%, transparent 40%), radial-gradient(circle at 85% 80%, var(--brick) 0%, transparent 45%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 sm:p-14">
            <div>
              <div className="font-hand text-3xl text-peach">Come see us</div>
              <h2 className="mt-1 font-display text-[34px] sm:text-[44px] font-semibold text-cream leading-tight">
                Find Us in Redmond Ridge — Open Daily, 8 AM to 3 PM
              </h2>
              <p className="mt-4 text-cream/70 text-[16px] leading-relaxed max-w-md">
                Walk-ins welcome. Plenty of parking. Come for breakfast or
                weekend brunch — big enough for the whole family, small enough
                that we'll learn your usual.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-peach text-ink px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-cream transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get directions
                </a>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 bg-cream/10 text-cream border border-cream/30 px-6 py-3.5 rounded-full text-[15px] font-semibold hover:bg-cream/15 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {brand.phone}
                </a>
              </div>
            </div>
            <div className="text-[15px]">
              <div className="text-[12px] uppercase tracking-[0.18em] text-peach font-semibold mb-3">
                Hours
              </div>
              <ul className="space-y-1.5 mb-6">
                {brand.hours.days.map(d => (
                  <li key={d.day} className="flex justify-between max-w-sm">
                    <span className="text-cream/65">{d.day}</span>
                    <span className="text-cream">{d.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[12px] uppercase tracking-[0.18em] text-peach font-semibold mb-2">
                Find us
              </div>
              <p className="text-cream/85">
                {brand.address.line1}
                <br />
                {brand.address.city}, {brand.address.state} {brand.address.zip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({
  icon: Icon,
  title,
  sub,
}: {
  icon: typeof Clock;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3 justify-center sm:justify-start">
      <div className="shrink-0 w-9 h-9 rounded-full bg-cream flex items-center justify-center border border-cream-deep">
        <Icon className="w-4 h-4 text-brick" />
      </div>
      <div className="text-left">
        <div className="font-semibold text-ink text-[15px] leading-tight">
          {title}
        </div>
        <div className="text-charcoal/65 text-[13px] mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
