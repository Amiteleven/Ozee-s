"use client";

import { StaggerFadeIn } from "../components/animations";

export default function RefundReturnCancellation() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Refund, Returns and Cancellation
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Because all products are freshly made to order, cancellations and refunds are limited.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Cancellation</h2>
          <h3 className="font-serif text-xl font-bold text-[#F5EFE6] mt-4">Standard Orders</h3>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Orders may be cancelled up to 24 hours before the scheduled preparation begins. Any advance paid may be adjusted or refunded at Ozee&apos;s discretion.
          </p>
          <h3 className="font-serif text-xl font-bold text-[#F5EFE6] mt-4">Celebration and Customized Cakes</h3>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Customized cakes require significant preparation and planning. Once preparation has started, cancellation requests cannot be accommodated.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Refunds</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Refunds will be considered only if:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Ozee&apos;s is unable to fulfil the order.</li>
            <li>An incorrect product was delivered.</li>
            <li>The product was significantly damaged during delivery.</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Refunds, where applicable, will be processed within 5–7 business days.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Returns</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Since all products are perishable food items:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Returns are not accepted.</li>
            <li>Exchanges are not available.</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            If there is an issue with your order, please contact us within 2 hours of delivery or pickup with photographs, and we will review the matter promptly.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For refund requests, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
