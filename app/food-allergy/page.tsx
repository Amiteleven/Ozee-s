import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { StaggerFadeIn } from "../components/animations";

export const metadata = {
  title: "Food Allergy Disclaimer | Ozee's Bakery Bangalore",
  description: "Important food allergy information for Ozee's bakery products. Learn about common allergens in our homemade cakes, cupcakes, cookies, and baked goods.",
  alternates: {
    canonical: "https://www.ozees.in/food-allergy",
  },
};

export default function FoodAllergy() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <SiteHeader />
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
            Our products may contain or come into contact with:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Milk</li>
            <li>Eggs</li>
            <li>Wheat (Gluten)</li>
            <li>Soy</li>
            <li>Tree Nuts</li>
            <li>Peanuts</li>
            <li>Sesame</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Although we take reasonable precautions, all products are prepared in the same kitchen. We cannot guarantee an allergen-free environment.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Customers with any allergies are requested to contact us for placing order after understanding the ingredients.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Contact</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            For allergy-related questions, contact us at <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a> or <strong className="text-[#F5EFE6]">+91 99009 51492</strong>.
          </p>
        </StaggerFadeIn>
      </div>
      <SiteFooter />
    </div>
  );
}
