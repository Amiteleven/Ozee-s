"use client";

import { StaggerFadeIn } from "../components/animations";

export default function FoodAllergy() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Food Allergy Disclaimer
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            At Ozee&apos;s, we take food allergies seriously. While we follow strict kitchen practices, cross-contamination may occur.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Common Allergens</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Our products may contain or come into contact with the following allergens:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Wheat / Gluten</li>
            <li>Dairy / Milk</li>
            <li>Eggs</li>
            <li>Nuts (almonds, hazelnuts, walnuts, etc.)</li>
            <li>Soy</li>
            <li>Sesame</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Egg and Eggless Options</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We offer both egg and eggless variants. Please confirm your preference at the time of order. However, eggless products are prepared in the same kitchen as egg-containing products.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Customer Responsibility</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Customers with severe allergies should exercise caution. Always check product descriptions and inform us of allergies before ordering.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For allergy-related questions, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
