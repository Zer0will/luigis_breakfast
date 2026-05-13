// Menu — the most important page for landing regulars.
// Goal: replace the photographed laminated menu with something scannable in under 20 seconds.
// Strategy: tabbed top-level groups (Breakfast / Lunch / Kids / Drinks),
// sticky sub-section nav, dot-leader pricing, badged signatures.

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, MapPin, Sparkles } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { menu, allergenNote, type MenuSection, type MenuItem } from "@/data/menu";
import { brand, getDirectionsUrl } from "@/data/brand";

export default function MenuPage() {
  const [activeGroup, setActiveGroup] = useState(menu[0].id);
  const group = menu.find((g) => g.id === activeGroup) ?? menu[0];

  // Honor hash on first mount or when navigating
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const found = menu.find((g) =>
      g.sections.some((s) => s.id === hash)
    );
    if (found) {
      setActiveGroup(found.id);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="border-b border-cream-deep">
        <div className="container pt-10 sm:pt-16 pb-8 sm:pb-12">
          <div className="font-hand text-2xl sm:text-3xl text-brick">The menu</div>
          <h1 className="mt-1 font-display text-[42px] sm:text-[56px] font-semibold text-ink leading-tight">
            Everything we cook, in one place.
          </h1>
          <p className="mt-4 text-charcoal/75 text-[16px] sm:text-[17px] max-w-2xl leading-relaxed">
            Breakfast is served all day. Lunch starts at noon on weekends, anytime on weekdays. Tap a section, scan, and call ahead if you'd like — we'll have it on the table.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 bg-brick text-cream px-5 py-3 rounded-full text-[14px] font-semibold hover:bg-tomato transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to order
            </a>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cream-deep text-ink px-5 py-3 rounded-full text-[14px] font-semibold hover:bg-peach-soft transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Visit us
            </a>
          </div>
        </div>
      </section>

      {/* GROUP TABS */}
      <div className="sticky top-16 sm:top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-cream-deep">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3 -mx-1 px-1 scrollbar-hide">
            {menu.map((g) => {
              const active = g.id === activeGroup;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    setActiveGroup(g.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors ${
                    active
                      ? "bg-brick text-cream shadow-sm"
                      : "bg-cream-deep/70 text-charcoal hover:bg-peach-soft"
                  }`}
                >
                  {g.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION NAV PILLS */}
      <section className="container pt-8">
        <div className="flex flex-wrap gap-2">
          {group.sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-1.5 bg-cream-deep/60 text-charcoal hover:bg-peach-soft hover:text-brick px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
        <p className="mt-5 font-hand text-2xl text-brick">{group.tagline}</p>
      </section>

      {/* SECTIONS */}
      <section className="container pb-20 pt-4">
        <div className="space-y-14 sm:space-y-20">
          {group.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {/* Allergen note */}
        <div className="mt-16 p-5 sm:p-6 rounded-2xl bg-cream-deep/50 border border-cream-deep text-[13px] text-charcoal/75 leading-relaxed">
          <div className="font-semibold text-ink mb-1 text-[14px]">A note from the kitchen</div>
          {allergenNote}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-ink text-cream">
          <div>
            <div className="font-hand text-2xl text-peach">Hungry yet?</div>
            <div className="font-display text-[24px] sm:text-[28px] font-semibold leading-tight mt-1">
              Come see us at Redmond Ridge.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-peach text-ink px-5 py-3 rounded-full text-[14px] font-semibold"
            >
              <MapPin className="w-4 h-4" />
              Get directions
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-cream/85 px-3 py-3 hover:text-peach text-[14px]"
            >
              Our story <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Section({ section }: { section: MenuSection }) {
  return (
    <div id={section.id} className="scroll-mt-32">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px bg-brick/30 flex-1 max-w-[40px]" />
        <h2 className="font-display italic text-[28px] sm:text-[36px] font-semibold text-brick">
          {section.title}
        </h2>
        <div className="h-px bg-brick/30 flex-1" />
      </div>

      {section.blurb && (
        <p className="text-[15px] text-charcoal/85 leading-relaxed max-w-2xl">
          {section.blurb}
        </p>
      )}
      {section.note && (
        <p className="text-[13px] text-charcoal/60 italic leading-relaxed max-w-2xl mt-1">
          {section.note}
        </p>
      )}

      <div className="mt-7 space-y-9">
        {section.subsections.map((sub, i) => (
          <div key={i}>
            {sub.title && (
              <div className="font-display text-[18px] font-semibold text-ink mb-3 uppercase tracking-[0.08em] text-[14px]">
                {sub.title}
              </div>
            )}
            {sub.note && (
              <p className="text-[13px] text-charcoal/60 italic mb-3">{sub.note}</p>
            )}
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {sub.items.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="group">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[17px] sm:text-[18px] font-semibold text-ink shrink-0">
          {item.name}
        </span>
        {item.badge && <Badge kind={item.badge} />}
        <span className="dotleader flex-1 h-[1em]" aria-hidden />
        {item.price && (
          <span className="font-display text-[16px] sm:text-[17px] font-semibold text-brick tabular-nums whitespace-nowrap">
            {item.price}
          </span>
        )}
      </div>
      {item.description && (
        <p className="mt-1 text-[14px] text-charcoal/70 leading-relaxed pr-2 max-w-prose">
          {item.description}
        </p>
      )}
    </li>
  );
}

function Badge({ kind }: { kind: NonNullable<MenuItem["badge"]> }) {
  if (kind === "house-specialty") {
    return (
      <span className="inline-flex items-center gap-1 bg-brick/10 text-brick text-[10px] font-bold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded">
        <Sparkles className="w-3 h-3" />
        House
      </span>
    );
  }
  if (kind === "popular") {
    return (
      <span className="bg-peach text-ink text-[10px] font-bold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded">
        Popular
      </span>
    );
  }
  return (
    <span className="bg-forest/15 text-forest text-[10px] font-bold uppercase tracking-[0.12em] px-1.5 py-0.5 rounded">
      New
    </span>
  );
}
