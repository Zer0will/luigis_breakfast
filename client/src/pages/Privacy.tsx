import SiteLayout from "@/components/SiteLayout";
import SEO from "@/components/SEO";
import { brand } from "@/data/brand";

export default function Privacy() {
  return (
    <SiteLayout>
      <SEO
        title="Privacy Policy | Luigi's American Breakfast — Redmond, WA"
        description="Privacy policy for Luigi's American Breakfast. We keep it simple — we don't collect more than we need and we never sell your information."
        path="/privacy"
        breadcrumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
      />

      <div className="container py-14 sm:py-20 max-w-3xl">
        <div className="font-hand text-2xl sm:text-3xl text-brick">The fine print</div>
        <h1 className="mt-1 font-display text-[38px] sm:text-[52px] font-semibold text-ink leading-[1.06]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[15px] text-charcoal/65">
          Last updated: May 2025
        </p>

        <div className="sunrise-strip my-10" />

        <ProseSection title="Who we are">
          <p>
            {brand.name} is a family-run breakfast and lunch restaurant located
            at {brand.address.full}. This website is a marketing site — there is
            no account system, no checkout, and no stored customer records.
          </p>
          <p>
            If you have questions about this policy, reach us by phone at{" "}
            <a href={brand.phoneHref} className="text-brick underline underline-offset-2">
              {brand.phone}
            </a>{" "}
            or stop by the restaurant.
          </p>
        </ProseSection>

        <ProseSection title="Information we collect">
          <p>
            This website does not have user accounts, contact forms, or any
            mechanism that asks you to submit personal information.
          </p>
          <p>
            Like most websites, our hosting provider may automatically log
            standard technical data when you visit — including your IP address,
            browser type, referring URL, and the pages you view. This data is
            used solely for diagnosing technical issues and understanding general
            traffic patterns. It is not linked to any individual and is not sold
            to third parties.
          </p>
        </ProseSection>

        <ProseSection title="Cookies and analytics">
          <p>
            We may use basic analytics (such as visitor counts) to understand
            how people find and use our site. Any analytics tool we use is
            configured to anonymize IP addresses and not to build individual
            user profiles.
          </p>
          <p>
            We do not use advertising cookies, retargeting pixels, or any
            third-party tracking that follows you across other websites.
          </p>
        </ProseSection>

        <ProseSection title="Third-party services">
          <p>
            This site embeds a Google Maps iframe on our Visit page to help you
            find us. Google's own privacy policy governs any data collected
            through that embed.
          </p>
          <p>
            Links to our Instagram page are governed by Meta's privacy policy.
            We do not receive any personal data from those platforms as a result
            of your visit here.
          </p>
        </ProseSection>

        <ProseSection title="Children's privacy">
          <p>
            This website is not directed at children under 13 and does not
            knowingly collect personal information from children.
          </p>
        </ProseSection>

        <ProseSection title="Changes to this policy">
          <p>
            We may update this policy if the site changes meaningfully. The
            "last updated" date at the top of this page will reflect any
            revision. Continued use of the site after a change constitutes
            acceptance of the updated policy.
          </p>
        </ProseSection>

        <ProseSection title="Contact">
          <p>
            Questions? Call us at{" "}
            <a href={brand.phoneHref} className="text-brick underline underline-offset-2">
              {brand.phone}
            </a>{" "}
            or visit us at {brand.address.full}. We're open daily, 8 AM–3 PM.
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
