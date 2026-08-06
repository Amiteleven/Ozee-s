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
            By accessing or ordering from Ozee&apos;s, you agree to be bound by the following terms and conditions.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">1. Orders and Payments</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            All orders are confirmed via WhatsApp. Prices are subject to change without notice. Full payment or advance (as communicated) is required before order confirmation.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">2. Customization and Approvals</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Custom cakes and theme orders require design approval before baking. Once approved, customization charges and timelines are non-refundable.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">3. Delivery</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Delivery is provided to the address provided by the customer. Ozee&apos;s is not liable for delays caused by traffic, weather, or incorrect address details.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">4. Cancellations</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Cancellations are subject to our Refund and Cancellation Policy. Customized items cannot be returned or resold once baking has started.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.6}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">5. Limitation of Liability</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Ozee&apos;s shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.7}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">6. Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For questions about these terms, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
