import Link from "next/link";
import { StaggerFadeIn } from "../../components/animations";

export const metadata = {
  title: "How to Order the Best Custom Cake in Bangalore | Ozee's Bakery",
  description: "Learn how to order custom celebration cakes in Bangalore from Ozee's. Explore theme cakes, 3D designs, flavors, and delivery options.",
  alternates: {
    canonical: "https://www.ozees.in/blog/custom-cakes-bangalore",
  },
};

export default function CustomCakesBangalore() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <Link href="/blog" className="text-[#E6C665] text-xs uppercase tracking-[0.2em] font-semibold hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6] mt-4">
            How to Order the Best Custom Cake in Bangalore
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            August 7, 2026 · 5 min read
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Bangalore is a city that celebrates every moment with cake. From birthdays and anniversaries to corporate events and baby showers, a custom cake makes the occasion unforgettable. At Ozee&apos;s, we specialize in handmade custom cakes in Bangalore that are as unique as your celebration.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Why Choose a Custom Cake?</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            A custom cake is more than dessert — it is the centerpiece of your celebration. Whether you want a 3D racing car cake, a butterfly garden theme, or an elegant anniversary fondant cake, a handmade custom cake lets you share your story through design, flavor, and detail.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Popular Custom Cake Themes in Bangalore</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>3D car and bike theme cakes</li>
            <li>Princess and fairy-themed birthday cakes</li>
            <li>Sports-themed cakes (cricket, football, basketball)</li>
            <li>Elegant anniversary and wedding fondant cakes</li>
            <li>Character and superhero themed cakes for kids</li>
            <li>Minimalist and modern geometric designs</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">How to Order</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Ordering a custom cake from Ozee&apos;s is simple. Message us on WhatsApp with your theme idea, preferred flavors, size, and pickup or delivery date in Bangalore. We will share a design preview, confirm the price, and start baking once you approve.
          </p>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Custom cakes require advance notice, so we recommend ordering at least 3-5 days before your event. For large or intricate designs, contact us even earlier to ensure availability.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Flavors and Dietary Options</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We offer a wide range of flavors including vanilla, chocolate, pineapple, mixed fruit, truffle, and Ferrero Rocher. Most of our custom cakes are available in both egg and eggless variants. Please confirm your preference when ordering.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.6}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Delivery and Pickup</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We deliver custom cakes across select areas in Bengaluru. Delivery charges depend on your location and will be confirmed before order confirmation. You can also collect your cake from our kitchen at the scheduled time.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.7}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Conclusion</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            If you are looking for the best custom cake in Bangalore, Ozee&apos;s combines artistic design with homemade taste. Every cake is handcrafted in small batches using premium ingredients, so your celebration tastes as special as it looks.
          </p>
          <div className="pt-6">
            <Link
              href={"/#menu"}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7DC8D] via-[#E6C665] to-[#D4AF37] text-[#0B0806] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-black transition-all shadow-xl shadow-[#E6C665]/25"
            >
              Explore Our Cakes
            </Link>
          </div>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
