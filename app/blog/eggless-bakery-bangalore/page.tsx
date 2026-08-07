import Link from "next/link";
import { StaggerFadeIn } from "../../components/animations";

export const metadata = {
  title: "Best Eggless Bakery in Bangalore | Ozee's Cupcakes, Cakes, Cookies",
  description: "Discover Ozee's eggless bakery in Bangalore. Fresh homemade eggless cupcakes, cakes, cookies, cheesecakes, and celebration cakes.",
  alternates: {
    canonical: "https://www.ozees.in/blog/eggless-bakery-bangalore",
  },
};

export default function EgglessBakeryBangalore() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <Link href="/blog" className="text-[#E6C665] text-xs uppercase tracking-[0.2em] font-semibold hover:underline">
            ← Back to Blog
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6] mt-4">
            Best Eggless Bakery in Bangalore: Cupcakes, Cakes and Cookies
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            August 6, 2026 · 4 min read
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Finding a truly delicious eggless bakery in Bangalore can be a challenge. Many bakeries offer eggless options, but few match the taste and texture of fresh homemade treats. At Ozee&apos;s, we believe eggless baking should never mean compromising on flavor.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Our Eggless Promise</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Every eggless cupcake, teacake, cookie, and cheesecake at Ozee&apos;s is made with the same care and premium ingredients as our egg-based products. From fluffy Berry Crown Cupcakes to rich Biscoff Bliss Cheesecake, our eggless range is crafted to satisfy any sweet tooth.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Popular Eggless Products</h2>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Berry Crown Cupcakes — fluffy sponge with fresh berries and whipped icing</li>
            <li>Swirl Collection — chocolate, vanilla, and red velvet cupcakes</li>
            <li>Choco Chip Bliss — golden French-style butter cookies</li>
            <li>Biscoff Bliss Cheesecake — creamy cheesecake on a Lotus Biscoff crust</li>
            <li>Blue Velvet Yogurt — silky cultured yogurt with blueberry compote</li>
            <li>Custom Celebration Cakes — available in eggless variants</li>
          </ul>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Why Ozee&apos;s Stands Out</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            As a homemade bakery in Bangalore, Ozee&apos;s uses pure ingredients and small-batch methods. Our eggless products are prepared with the same dedication as our regular range, ensuring consistent taste, soft texture, and fresh aroma in every bite.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Ordering Eggless Bakery Online</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Ordering eggless bakery in Bangalore is easy. Browse our menu, select your favorite treats, and send us a WhatsApp message with your name, phone number, order details, and delivery or pickup address. We confirm availability and share payment details to complete your order.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.6}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">Conclusion</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            If you are searching for the best eggless bakery in Bangalore, Ozee&apos;s offers a wide range of freshly baked cupcakes, cakes, cookies, and more. Taste the difference of homemade eggless baking — order via WhatsApp today.
          </p>
          <div className="pt-6">
            <Link
              href={"/#menu"}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7DC8D] via-[#E6C665] to-[#D4AF37] text-[#0B0806] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-black transition-all shadow-xl shadow-[#E6C665]/25"
            >
              Explore Eggless Menu
            </Link>
          </div>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
