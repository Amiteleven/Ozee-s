"use client";

import { StaggerFadeIn } from "../components/animations";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Terms and Conditions
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Welcome to Ozee&apos;s. By placing an order through our website, WhatsApp, Instagram, or any other platform, you agree to the following terms and conditions.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Orders</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>All products are freshly handcrafted and made to order.</li>
            <li>Orders are confirmed only after payment of the required advance.</li>
            <li>Customized orders are accepted based on availability and sufficient notice.</li>
            <li>Product images are for reference. While we strive to match the design, slight variations may occur as each item is handmade.</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Pricing</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Prices are subject to change without prior notice.</li>
            <li>Applicable delivery charges, if any, will be communicated before order confirmation.</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Payments</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We accept:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>UPI</li>
            <li>Bank Transfer</li>
            <li>Other payment methods as communicated at the time of ordering.</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Orders are confirmed only after receipt of the advance payment.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delivery and Pickup</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Customers are requested to verify their order at the time of delivery or pickup.</li>
            <li>Ozee&apos;s is not responsible for damage caused due to improper handling after delivery or pickup.</li>
            <li>Delivery timings may vary due to weather, traffic, or unforeseen circumstances.</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.6}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Product Availability</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>As we bake in small batches, certain products may occasionally be unavailable.</li>
            <li>We reserve the right to substitute ingredients with equivalent premium alternatives if necessary.</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.7}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Intellectual Property</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            All photographs, designs, logos, and content on this website are the property of Ozee&apos;s and may not be copied or used without written permission.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.8}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For questions about these terms, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
