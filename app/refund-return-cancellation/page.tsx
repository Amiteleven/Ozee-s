"use client";

import { StaggerFadeIn } from "../components/animations";

export default function RefundReturnCancellation() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Refund, Return and Cancellation
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Cancellations</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Orders may be cancelled up to 24 hours before the scheduled pickup or delivery time for a full refund. Cancellations within 24 hours are non-refundable.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Customized Orders</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Personalized and custom-themed cakes cannot be returned, exchanged, or refunded once baking has started, as they are made to order and cannot be resold.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Refunds</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Refunds will be processed within 7-10 business days back to the original payment method. If payment was made via WhatsApp/UPI, refunds will be initiated to the same account details provided.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Quality Issues</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            If you receive a damaged or incorrect order, please contact us within 24 hours with photos. We will review and offer a replacement or partial/ full refund at our discretion.
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
