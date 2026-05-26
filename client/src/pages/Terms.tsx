import SiteLayout from "@/components/SiteLayout";
import SEO from "@/components/SEO";
import { brand } from "@/data/brand";

export default function Terms() {
  return (
    <SiteLayout>
      <SEO
        title="Terms & Conditions | Luigi's American Breakfast — Redmond, WA"
        description="Terms and conditions for using the Luigi's American Breakfast website."
        path="/terms"
        breadcrumbs={[{ name: "Terms & Conditions", path: "/terms" }]}
      />

      <div className="container py-14 sm:py-20 max-w-3xl">
        <div className="font-hand text-2xl sm:text-3xl text-brick">The rules of the table</div>
        <h1 className="mt-1 font-display text-[38px] sm:text-[52px] font-semibold text-ink leading-[1.06]">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-[15px] text-charcoal/65">
          Last updated: May 2025
        </p>

        <div className="sunrise-strip my-10" />

        <ProseSection title="About this site">
          <p>
            This website is operated by {brand.name}, a restaurant located at{" "}
            {brand.address.full}. By using this site you agree to these terms.
            If you do not agree, please don't use the site — though we'd still
            love to see you in person.
          </p>
        </ProseSection>

        <ProseSection title="Use of this website">
          <p>
            This site is provided for informational purposes: to share our menu,
            hours, location, and a little of our family's story. You may browse
            and share links freely.
          </p>
          <p>
            You may not use this site for any unlawful purpose, to scrape or
            harvest content at scale, to impersonate Luigi's American Breakfast,
            or to transmit harmful or disruptive code.
          </p>
        </ProseSection>

        <ProseSection title="Accuracy of information">
          <p>
            We do our best to keep menu items, prices, and hours current, but
            things change — we add seasonal specials, update prices, and
            occasionally run short of an ingredient. The information on this
            site is provided in good faith but is not a binding contract.
            Always call us or come in to confirm details that matter to you.
          </p>
          <p>
            Current hours:{" "}
            <span className="font-medium text-ink">{brand.hours.long}</span>.
          </p>
        </ProseSection>

        <ProseSection title="Intellectual property">
          <p>
            All text, photos, logos, and design elements on this site are owned
            by or licensed to {brand.name}. You're welcome to share a link or
            screenshot for personal or non-commercial use. Please don't
            reproduce our content commercially without written permission.
          </p>
        </ProseSection>

        <ProseSection title="Third-party links">
          <p>
            This site links to Google Maps and our Instagram page. We are not
            responsible for the content or practices of those external services
            and encourage you to review their own terms and privacy policies.
          </p>
        </ProseSection>

        <ProseSection title="Disclaimer of warranties">
          <p>
            This website is provided "as is." We make no warranty that the site
            will be available at all times, error-free, or free of viruses.
            Your use of the site is at your own risk.
          </p>
        </ProseSection>

        <ProseSection title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, {brand.name} will not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of this website.
          </p>
        </ProseSection>

        <ProseSection title="Governing law">
          <p>
            These terms are governed by the laws of the State of Washington,
            without regard to conflict-of-law principles. Any disputes will be
            resolved in the courts of King County, Washington.
          </p>
        </ProseSection>

        <ProseSection title="Changes to these terms">
          <p>
            We may revise these terms at any time by updating this page. The
            "last updated" date above will reflect any changes. Continued use of
            the site after an update means you accept the revised terms.
          </p>
        </ProseSection>

        <ProseSection title="Contact">
          <p>
            Questions about these terms? Call us at{" "}
            <a href={brand.phoneHref} className="text-brick underline underline-offset-2">
              {brand.phone}
            </a>{" "}
            or come see us at {brand.address.full}. Open daily, 8 AM–3 PM.
          </p>
        </ProseSection>
      </div>
    </SiteLayout>
  );
}

function ProseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[22px] sm:text-[26px] font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[16px] text-charcoal/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
