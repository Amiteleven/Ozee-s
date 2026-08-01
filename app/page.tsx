"use client";

import Image from "next/image";
import { useState } from "react";

function DietaryBadge({ type }: { type: "veg" | "egg" | "both" }) {
  if (type === "both") {
    return (
      <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-[10px] text-amber-900 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
        <span>Egg & Eggless</span>
      </span>
    );
  }
  if (type === "veg") {
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] text-emerald-800 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
        <span>Eggless</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full text-[10px] text-rose-800 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
      <span>Contains Egg</span>
    </span>
  );
}

interface Product {
  id: string;
  name: string;
  desc: string;
  diet: "veg" | "egg" | "both";
  img: string;
  category: string;
  tag?: string;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const phone = "919900951492";
  const wa = (item?: string) => {
    const text = item
      ? encodeURIComponent(`Hi Ozee's! I would like to place an order for "${item}".`)
      : encodeURIComponent("Hi Ozee's! I would like to place an order from your menu.");
    return `https://wa.me/${phone}?text=${text}`;
  };

  const catalog: Product[] = [
    // CUPCAKES
    {
      id: "cup-1",
      name: "Strawberry Chocolate Cupcakes",
      desc: "Moist dark chocolate sponge topped with velvety chocolate buttercream swirls and fresh whole strawberries.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (23).jpeg",
      category: "Cupcakes",
      tag: "Bestseller"
    },
    {
      id: "cup-2",
      name: "Strawberry Choc Close-Up",
      desc: "Rich chocolate cupcake finished with silky chocolate piping and fresh seasonal strawberry.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (24).jpeg",
      category: "Cupcakes"
    },
    {
      id: "cup-3",
      name: "Vanilla Whisper Cupcake",
      desc: "Golden vanilla bean cake crowned with delicate whipped frosting and rainbow sugar pearls.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (2).jpeg",
      category: "Cupcakes"
    },
    {
      id: "cup-4",
      name: "Strawberry Bloom Cupcake",
      desc: "Fluffy vanilla sponge topped with strawberry cream piping and fresh berries.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-22 at 10.52.01 AM (1).jpeg",
      category: "Cupcakes"
    },
    {
      id: "cup-5",
      name: "Crimson Velvet Cupcake",
      desc: "Authentic red velvet cake finished with rich cream cheese frosting swirl.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-22 at 10.55.42 AM (4).jpeg",
      category: "Cupcakes"
    },

    // TARTS & DESSERTS
    {
      id: "tart-1",
      name: "Fresh Strawberry Tart",
      desc: "Crisp butter pastry shell filled with silky crème pâtissière and arranged with fresh strawberry fans.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-22 at 10.52.01 AM.jpeg",
      category: "Tarts & Desserts",
      tag: "Seasonal"
    },
    {
      id: "tart-2",
      name: "Fresh Fruit Tart",
      desc: "Butter tart shell loaded with seasonal berries and tropical fruits with a apricot glaze finish.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-22 at 10.52.01 AM (2).jpeg",
      category: "Tarts & Desserts"
    },
    {
      id: "tart-3",
      name: "Rose & Lychee Tart",
      desc: "Aromatic pastry shell with fresh lychee halves decorated with edible organic rose petals.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (4).jpeg",
      category: "Tarts & Desserts"
    },
    {
      id: "tart-4",
      name: "Lotus Biscoff Tart",
      desc: "Signature Biscoff cookie crust filled with smooth Biscoff cream spread and crunchy cookie crumble.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (5).jpeg",
      category: "Tarts & Desserts",
      tag: "Signature"
    },
    {
      id: "tart-5",
      name: "Cream Dessert Cup",
      desc: "Indulgent individual glass cup layer with berry compote, whipped cream, and biscuit crumble.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (3).jpeg",
      category: "Tarts & Desserts"
    },
    {
      id: "tart-6",
      name: "Orange Blossom Yogurt Cake",
      desc: "Light yogurt cake infused with citrus blossom essence and garnished with candied orange slices.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (1).jpeg",
      category: "Tarts & Desserts"
    },

    // COOKIES & GIFTING
    {
      id: "cook-1",
      name: "Classic Butter Cookies Box",
      desc: "Melt-in-your-mouth French style butter cookies presented in an artisan transparent gift box.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-21 at 7.33.01 PM (21).jpeg",
      category: "Cookies & Gifting",
      tag: "Gift Favorite"
    },
    {
      id: "cook-2",
      name: "Assorted Butter Cookies Box",
      desc: "Hand-piped decorative butter cookies in chocolate, vanilla, and almond flavors in a luxury box.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-22 at 10.51.15 AM.jpeg",
      category: "Cookies & Gifting"
    },
    {
      id: "cook-3",
      name: "Assorted Cookies Platter",
      desc: "Curated selection of gourmet artisan cookies — an elegant sweet gift for any occasion.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-22 at 10.55.42 AM.jpeg",
      category: "Cookies & Gifting"
    },
    {
      id: "cook-4",
      name: "Artisan Cookie Selection Box",
      desc: "Handcrafted cookie assortment thoughtfully arranged in a ribboned presentation gift box.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-22 at 10.55.42 AM (1).jpeg",
      category: "Cookies & Gifting"
    },
    {
      id: "cook-5",
      name: "Artisan Cookie Tin",
      desc: "Deluxe multi-variety artisan cookies in a classic gold tin — perfect for corporate and holiday gifting.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-22 at 10.55.42 AM (3).jpeg",
      category: "Cookies & Gifting"
    },

    // DOUGHNUTS
    {
      id: "don-1",
      name: "Chocolate Sprinkle Doughnut",
      desc: "Airy yeast doughnut coated in Belgian dark chocolate glaze with rainbow sprinkles.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (5).jpeg",
      category: "Doughnuts"
    },
    {
      id: "don-2",
      name: "Classic Sugar Ring Doughnut",
      desc: "Pillowy soft brioche doughnut rolled in organic cane sugar — timeless simplicity.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (6).jpeg",
      category: "Doughnuts"
    },
    {
      id: "don-3",
      name: "Glazed Ring Doughnut",
      desc: "Classic ring doughnut with a glossy, light vanilla bean glaze.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-25 at 12.41.15 PM.jpeg",
      category: "Doughnuts"
    },
    {
      id: "don-4",
      name: "Assorted Doughnut Box",
      desc: "Box of 6 handcrafted glazed, dusted, and filled doughnuts for sharing.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-25 at 12.43.37 PM.jpeg",
      category: "Doughnuts"
    },

    // CHEESECAKES
    {
      id: "ch-1",
      name: "Biscoff Cheesecake",
      desc: "Creamy baked cheesecake on a Biscoff biscuit crust, finished with warm caramel-Biscoff spread.",
      diet: "veg",
      img: "/images (7).jpg",
      category: "Cheesecakes",
      tag: "Must Try"
    },
    {
      id: "ch-2",
      name: "Mango Majesty Cheesecake",
      desc: "Tropical cheesecake with smooth fresh Alphonso mango compote topping and mango slice fans.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-25 at 12.10.34 PM.jpeg",
      category: "Cheesecakes"
    },
    {
      id: "ch-3",
      name: "Classic Vanilla Bean Cheesecake",
      desc: "Rich New York style cheesecake infused with Madagascan vanilla bean on a buttery graham crust.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-25 at 12.31.14 PM.jpeg",
      category: "Cheesecakes"
    },
    {
      id: "ch-4",
      name: "Berry Swirl Cheesecake",
      desc: "Creamy vanilla cheesecake ribboned with fresh wild berry compote swirl.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-25 at 12.32.41 PM.jpeg",
      category: "Cheesecakes"
    },

    // LOAVES & CROISSANTS
    {
      id: "loaf-1",
      name: "Chocolate Drizzle Loaf",
      desc: "Rich dark chocolate loaf finished with a glossy chocolate drip and fresh berry accents.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM.jpeg",
      category: "Loaves & Croissants"
    },
    {
      id: "loaf-2",
      name: "Chocolate Hazelnut Marble Bars",
      desc: "Swirled marble cake coated in smooth milk chocolate and roasted whole hazelnuts.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.08 PM (2).jpeg",
      category: "Loaves & Croissants"
    },
    {
      id: "loaf-3",
      name: "Artisan Butter Croissants",
      desc: "French style golden croissants with honeycomb interior structure and flaky buttery crust.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (7).jpeg",
      category: "Loaves & Croissants"
    },
    {
      id: "loaf-4",
      name: "Vanilla Swiss Roll",
      desc: "Soft sponge cake roll swirled with light vanilla bean cream filling.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (12).jpeg",
      category: "Loaves & Croissants"
    },
    {
      id: "loaf-5",
      name: "Chocolate Chunk Banana Bread",
      desc: "Moist banana bread studded with dark chocolate chunks and caramelized banana top.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (16).jpeg",
      category: "Loaves & Croissants"
    },

    // CELEBRATION CAKES
    {
      id: "cake-1",
      name: "Samar's Cricket Pitch Cake",
      desc: "Bespoke celebration cake featuring handcrafted fondant cricket bat, ball, wickets, and green pitch.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (18).jpeg",
      category: "Celebration Cakes",
      tag: "Custom Bespoke"
    },
    {
      id: "cake-2",
      name: "3D Racing Red Car Cake",
      desc: "Sculpted 3D car cake finished with detailed fondant bodywork, edible wheels and personalized plate.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (19).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-3",
      name: "Ice Cream Carnival Cake",
      desc: "Playful celebration cake topped with upside-down waffle cones overflowing with colourful frosting.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (20).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-4",
      name: "Butterfly Garden Cake",
      desc: "Artistic butterfly-shaped cake piped with pastel buttercreams and edible sugar pearls.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (21).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-5",
      name: "Ojus Cricket Player Cake",
      desc: "Personalized sports birthday cake featuring handcrafted edible player figurine and cricket match detailing.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 5.08.53 PM (1).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-6",
      name: "Racing Celebration Cake",
      desc: "Chequered racing flag pattern celebration cake with vibrant blue piping and gold birthday topper.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.08 PM (1).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-7",
      name: "Triple Chocolate Layer Cake",
      desc: "Layered Belgian chocolate cake decorated with wafer rolls, chocolate drip, and cocoa dust.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (25).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-8",
      name: "Mango Bliss Cake",
      desc: "Fresh mango sponge layered with Alphonso puree cream and topped with fresh mango rosettes.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (28).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-9",
      name: "Red Velvet Heart Cake",
      desc: "Elegant heart-shaped red velvet cake with glossy crimson mirror glaze and silver pearls.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 5.08.53 PM.jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-10",
      name: "Golden 50th Anniversary Cake",
      desc: "Luxurious white velvet cake adorned with gold leaf, edible pearls, and custom anniversary topper.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 5.08.51 PM.jpeg",
      category: "Celebration Cakes"
    }
  ];

  const categories = [
    "All",
    "Cupcakes",
    "Tarts & Desserts",
    "Cookies & Gifting",
    "Doughnuts",
    "Cheesecakes",
    "Loaves & Croissants",
    "Celebration Cakes"
  ];

  const filteredProducts = activeCategory === "All"
    ? catalog
    : catalog.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1412] font-sans selection:bg-[#D4AF37]/30">

      {/* Top Banner */}
      <div className="bg-[#18110D] text-[#D4AF37] text-[11px] uppercase tracking-[0.25em] font-medium py-2.5 px-4 text-center border-b border-[#2C1F18]">
        <span>✦ Handcrafted Small-Batch Bakery • Made Fresh Like Home • Order via WhatsApp: +91 99009 51492 ✦</span>
      </div>

      {/* Luxury Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#EBE3D5] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase text-[#4A3B32]">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors relative py-1 group">
              Our Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="hover:text-[#D4AF37] transition-colors relative py-1 group">
              Bake Collection
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#ordering" className="hover:text-[#D4AF37] transition-colors relative py-1 group">
              Ordering Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center font-serif text-xl font-bold text-[#1A1412] group-hover:bg-[#1A1412] group-hover:text-[#D4AF37] transition-all duration-300 shadow-sm">
              O
            </div>
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#1A1412] -mt-0.5">OZEE&apos;S</span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold -mt-1">Pâtisserie & Artisanal Bakes</span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>WhatsApp Order</span>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Showcase Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#EBE3D5] bg-gradient-to-b from-[#FFFDF9] via-[#FDFBF7] to-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-[#F4ECDC] border border-[#E5D7BF] px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[#8C6D23] text-xs font-semibold uppercase tracking-[0.25em]">Artisanal Homemade Bakery</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1412] leading-[1.08] tracking-tight">
              Crafted with Love.<br />
              <span className="italic font-normal text-[#B88E28]">Made Like Home.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#59483D] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to <span className="font-semibold text-[#1A1412]">Ozee&apos;s</span>. Every cake, cookie, cheesecake, and pastry is handcrafted in small batches using pure, premium ingredients — bringing together Parisian pâtisserie craftsmanship and the heartwarming comfort of home.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="bg-[#1A1412] hover:bg-[#362720] text-[#FFFDF9] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl hover:shadow-2xl"
              >
                Explore Bake Collection
              </a>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D4AF37] text-[#1A1412] hover:bg-[#D4AF37] hover:text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all"
              >
                Custom Cake Enquiry
              </a>
            </div>

            <div className="pt-8 border-t border-[#EBE3D5] flex items-center justify-center lg:justify-start gap-8 text-xs text-[#736053]">
              <div>
                <span className="block font-bold text-[#1A1412] text-sm">100% Small Batch</span>
                <span>Handcrafted Fresh</span>
              </div>
              <div className="h-8 w-px bg-[#EBE3D5]"></div>
              <div>
                <span className="block font-bold text-[#1A1412] text-sm">Egg & Eggless</span>
                <span>Custom Options</span>
              </div>
              <div className="h-8 w-px bg-[#EBE3D5]"></div>
              <div>
                <span className="block font-bold text-[#1A1412] text-sm">Direct Delivery</span>
                <span>Doorstep Pickup</span>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/WhatsApp Image 2026-07-31 at 4.55.09 PM (10).jpeg"
                  alt="Fresh Fruit Cream Gateau Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs font-semibold">Artisanal Cakes</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <Image
                  src="/WhatsApp Image 2026-07-31 at 4.55.09 PM (11).jpeg"
                  alt="Black Forest Gateau"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <Image
                  src="/WhatsApp Image 2026-07-25 at 12.33.14 PM.jpeg"
                  alt="Caramel Drizzle Cheesecake Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <Image
                  src="/WhatsApp Image 2026-07-25 at 12.33.49 PM.jpeg"
                  alt="Chocolate Cheesecake Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Story / About Us Section */}
      <section id="about" className="py-24 bg-[#F5EFE4] border-b border-[#EBE3D5]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]"></span>
            <span className="text-[#8C6D23] text-xs uppercase tracking-[0.3em] font-semibold">The Heart Behind Ozee&apos;s</span>
            <span className="h-px w-10 bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1412]">
            Our Story & Passion
          </h2>

          <div className="space-y-6 text-[#59483D] text-base sm:text-lg font-light leading-relaxed">
            <p>
              It all began with our little boy, lovingly called <span className="font-serif italic text-[#1A1412] font-semibold">&quot;Ozee.&quot;</span> His laughter, curiosity, and the simple joy he found in homemade treats became the spark behind a dream that slowly grew into <span className="font-semibold text-[#1A1412]">Ozee&apos;s</span>.
            </p>
            <p>
              As a mother, I discovered that the happiest moments in life are often the simplest — watching a cake rise in the oven, decorating cupcakes together, or sharing sweet treats around the table with family and friends. Those moments taught me that baking is more than recipes; it is a way of expressing love, creating memories, and bringing people together.
            </p>
            <div className="py-4">
              <p className="font-serif text-2xl text-[#8C6D23] italic font-semibold">
                &ldquo;Then Ozee&apos;s came into being from that simple and true belief!!&rdquo;
              </p>
            </div>
            <p>
              Inspired by the <span className="font-semibold text-[#1A1412]">Trident</span> in our logo — a symbol of strength, balance, and unwavering commitment — we craft every treat with equal devotion to purity, creativity, and care. At Ozee&apos;s, we don&apos;t just bake desserts; we create meaningful moments, one handcrafted bite at a time.
            </p>
          </div>

          <div className="pt-6">
            <div className="relative aspect-[16/8] max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/WhatsApp Image 2026-07-31 at 5.04.43 PM (2).jpeg"
                alt="Ozee's Custom Cake Portfolio Showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Catalog Section */}
      <section id="menu" className="py-24 border-b border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[#8C6D23] text-xs uppercase tracking-[0.3em] font-semibold">Handcrafted Catalogue</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1412]">
              Our Artisanal Bake Collection
            </h2>
            <p className="text-[#59483D] font-light text-base sm:text-lg">
              Explore our small-batch cakes, pastries, tarts, cookies, cheesecakes, and custom theme bakes.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1A1412] text-[#FFFDF9] shadow-lg scale-105"
                    : "bg-[#F4ECDC]/70 hover:bg-[#EBE3D5] text-[#59483D]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EBE3D5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-[#F7F2E8] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-[#D4AF37] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md">
                        {item.tag}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-[#1A1412]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-xl font-bold text-[#1A1412] leading-snug">{item.name}</h3>
                      <DietaryBadge type={item.diet} />
                    </div>
                    <p className="text-xs text-[#59483D] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F5EFE4] mt-4">
                  <span className="text-[10px] text-[#8C6D23] font-semibold uppercase tracking-wider">
                    {item.diet === "both" ? "Egg & Eggless Options" : item.diet === "veg" ? "100% Eggless" : "Contains Egg"}
                  </span>
                  <a
                    href={wa(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[#1A1412] hover:bg-[#D4AF37] text-white hover:text-[#1A1412] px-6 py-2.5 rounded-full uppercase tracking-wider font-semibold transition-all shadow-md"
                  >
                    Order
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Custom Cake Showcase Banner */}
      <section className="py-20 bg-[#1A1412] text-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">Bespoke Celebrations</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Have a Custom Theme in Mind?</h2>
          <p className="text-[#D4C4B7] font-light text-base sm:text-lg max-w-2xl mx-auto">
            From cricket pitch cakes to 3D cars, butterfly gardens, and elegant anniversary cakes — we turn your celebration ideas into edible art.
          </p>

          <div className="pt-4">
            <a
              href={wa("Custom Celebration Cake")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-9 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform text-xs uppercase tracking-widest"
            >
              <span>Discuss Custom Cake on WhatsApp (+91 99009 51492)</span>
            </a>
          </div>

        </div>
      </section>

      {/* Ordering Process & Timelines */}
      <section id="ordering" className="py-24 bg-[#F5EFE4] border-b border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#EBE3D5] shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[#8C6D23] text-xs uppercase tracking-[0.3em] font-semibold">Simple & Direct</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1412] mt-2 mb-6">How to Order from Ozee&apos;s</h2>

                <div className="space-y-4 text-sm text-[#59483D]">
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#1A1412] text-[#D4AF37] text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                    <p><strong className="text-[#1A1412]">Browse & Select:</strong> Choose your favorite treats from our menu.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#1A1412] text-[#D4AF37] text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                    <p><strong className="text-[#1A1412]">Share Requirements:</strong> Send us product name, quantity, egg/eggless preference, and pickup date via WhatsApp.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#1A1412] text-[#D4AF37] text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                    <p><strong className="text-[#1A1412]">Order Confirmation:</strong> We confirm availability and share payment details.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#1A1412] text-[#D4AF37] text-xs flex items-center justify-center shrink-0 font-bold">4</span>
                    <p><strong className="text-[#1A1412]">Fresh Small-Batch Baking:</strong> Your order is handcrafted fresh for your celebration day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#18110D] text-[#FFFDF9] p-8 sm:p-12 rounded-3xl border border-[#2C1F18] flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">Advance Notice</span>
                <h3 className="font-serif text-3xl font-bold text-[#FFFDF9] mt-2 mb-6">Order Timelines</h3>
                <div className="space-y-4 text-sm text-[#E5D7BF]">
                  <p>• <strong>Cupcakes, Cookies & Donuts:</strong> 24 – 36 hours notice</p>
                  <p>• <strong>Cheesecakes & Tarts:</strong> 48 – 72 hours notice</p>
                  <p>• <strong>Custom Theme & Celebration Cakes:</strong> Contact in advance</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#362720] text-center">
                <a
                  href={wa()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-full text-xs uppercase tracking-widest font-semibold shadow-lg transition-all"
                >
                  Order via WhatsApp (+91 99009 51492)
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#100B08] text-[#FFFDF9] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center font-serif text-2xl font-bold mb-2 text-[#D4AF37]">
              O
            </div>
            <span className="font-serif text-3xl font-bold tracking-[0.2em] text-[#FFFDF9]">OZEE&apos;S</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mt-1">Crafted with Love • Made Like Home</span>
          </div>

          <div className="pt-8 border-t border-[#2C1F18] text-xs text-[#9E8C80] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Ozee&apos;s Pâtisserie. All rights reserved.</p>
            <p>WhatsApp: +91 99009 51492 | www.ozees.in</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
