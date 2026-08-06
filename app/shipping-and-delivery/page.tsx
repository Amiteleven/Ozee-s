"use client";

import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { StaggerFadeIn } from "../components/animations";

export default function ShippingAndDelivery() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Shipping and Delivery Policy
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            At Ozee&apos;s, every order is freshly prepared after confirmation.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Order Timelines</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            As mentioned in our catalog:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Cupcakes, Cookies, Donuts and Teacakes: 24 - 36 hours</li>
            <li>Cheesecakes and Yogurts: 48 - 72 hours</li>
            <li>Celebration Cakes: Advance booking recommended</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delivery</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Delivery is available in select areas of Bengaluru.</li>
            <li>Delivery charges depend on the location.</li>
            <li>Customers will receive an estimated delivery window during order confirmation.</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Pickup</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Customers may also collect their orders from the pickup location at the agreed date and time.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For delivery queries, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
      <SiteFooter />
    </div>
  );
}
