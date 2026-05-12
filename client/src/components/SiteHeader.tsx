// SiteHeader — sticky cream navigation bar with the logo, primary links, and a "Call" CTA.

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/data/brand";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Family" },
  { href: "/visit", label: "Visit" },
];

export default function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={44} />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-[17px] sm:text-[19px] font-semibold text-ink">
              Luigi's
            </div>
            <div className="font-display italic text-[11px] sm:text-[12px] text-brick -mt-0.5 tracking-wide">
              American Breakfast
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? location === "/"
                : location.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[15px] font-medium rounded-md transition-colors ${
                  active
                    ? "text-brick"
                    : "text-charcoal hover:text-brick"
                }`}
              >
                {item.label}
                {active && (
                  <span className="block h-[2px] bg-brick mt-0.5 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 bg-brick text-cream px-4 py-2.5 rounded-full text-[14px] font-semibold hover:bg-tomato transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-deep text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-cream-deep bg-cream/98 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? location === "/"
                  : location.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 rounded-lg text-[17px] font-medium ${
                    active
                      ? "bg-peach-soft text-brick"
                      : "text-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={brand.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brick text-cream px-4 py-3 rounded-full text-[15px] font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call {brand.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
