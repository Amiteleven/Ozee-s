"use client";

import { StaggerFadeIn } from "../components/animations";

export default function ShippingAndDelivery() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Shipping and Delivery
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delivery Areas</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We currently deliver to select local areas. Delivery availability will be confirmed at the time of order via WhatsApp.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delivery Timelines</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Standard delivery is within 2-4 hours of order confirmation, subject to availability and location. Custom cakes require advance notice as per the timelines communicated during ordering.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delivery Charges</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Delivery charges vary by location and order value. Charges, if any, will be communicated before order confirmation.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Pickup</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Pickup address and timing will be shared upon order confirmation. Please collect orders within 24 hours of the scheduled pickup time.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delays</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            While we strive to deliver on time, delays may occur due to traffic, weather, or unforeseen circumstances. We will notify you of any significant delays.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.6}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For delivery queries, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
