"use client";

import Image from "next/image";
import { useState } from "react";

function DietaryBadge({ type }: { type: "veg" | "egg" | "both" }) {
  if (type === "both") {
    return (
      <span className="inline-flex items-center gap-1 bg-amber-950/80 border border-amber-500/40 px-2.5 py-1 rounded-full text-[10px] text-amber-200 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
        <span>Egg & Eggless</span>
      </span>
    );
  }
  if (type === "veg") {
    return (
      <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full text-[10px] text-emerald-300 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span>100% Eggless</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 bg-rose-950/80 border border-rose-500/40 px-2.5 py-1 rounded-full text-[10px] text-rose-300 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
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
  images?: string[];
  category: string;
  flavors?: string[];
  tag?: string;
}

function ProductCard({ item, wa }: { item: Product; wa: (name?: string) => string }) {
  const [currentImg, setCurrentImg] = useState(item.img);
  const allImages = item.images && item.images.length > 0 ? item.images : [item.img];

  return (
    <div className="bg-[#140F0C] rounded-3xl overflow-hidden border border-[#2B2119] shadow-lg hover:shadow-2xl hover:shadow-[#E6C665]/10 hover:border-[#E6C665]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
      {/* 1. HEADING ABOVE PICS (Dark Theme) */}
      <div className="p-6 pb-4 border-b border-[#241A13] bg-[#1A140F]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F5EFE6] leading-snug group-hover:text-[#E6C665] transition-colors">{item.name}</h3>
            <span className="text-[10px] text-[#E6C665] font-semibold uppercase tracking-wider block mt-0.5">{item.category}</span>
          </div>
          <DietaryBadge type={item.diet} />
        </div>
      </div>

      {/* 2. PICS BELOW HEADING */}
      <div className="relative aspect-[4/3] bg-[#0A0705] overflow-hidden">
        <Image
          src={currentImg}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-[#E6C665] text-[#0B0806] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md z-10">
            {item.tag}
          </span>
        )}
      </div>

      {/* Multiple Image Gallery Selector */}
      {allImages.length > 1 && (
        <div className="flex gap-2 px-4 py-2.5 bg-[#18110D] border-b border-[#291F17] items-center">
          <span className="text-[9px] uppercase tracking-wider text-[#E6C665] font-bold mr-1">Views:</span>
          {allImages.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImg(imgUrl)}
              className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                currentImg === imgUrl ? "border-[#E6C665] scale-105 shadow-md ring-2 ring-[#E6C665]/30" : "border-[#33261C] opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={imgUrl} alt={`${item.name} photo ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* 3. DETAILS & ORDER BUTTON BELOW PICS */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs text-[#D6C7B8] font-light leading-relaxed">{item.desc}</p>

          {item.flavors && item.flavors.length > 0 && (
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E6C665] block mb-1.5">
                Flavors / Varieties:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.flavors.map((flv) => (
                  <span
                    key={flv}
                    className="bg-[#241B14] text-[#E5D6C5] border border-[#3D2F23] text-[10px] px-2.5 py-1 rounded-full font-medium"
                  >
                    {flv}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-[#241A13] mt-2">
          <span className="text-[10px] text-[#E6C665] font-semibold uppercase tracking-wider">
            {item.diet === "both" ? "Egg & Eggless Options" : item.diet === "veg" ? "100% Eggless" : "Contains Egg"}
          </span>
          <a
            href={wa(item.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-[#E6C665] hover:bg-[#D4AF37] text-[#0B0806] font-bold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all shadow-md shadow-[#E6C665]/20 hover:scale-105"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
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
    // 1. CUPCAKES
    {
      id: "cup-1",
      name: "Berry Crown Cupcakes",
      desc: "Fluffy sponge cupcakes topped with rich whipped icing, fresh berries, and seasonal fruits.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (23).jpeg",
      images: [
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (23).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (24).jpeg"
      ],
      category: "Cupcakes",
      flavors: ["Strawberry", "Blueberry", "Seasonal Fruits"],
      tag: "Bestseller"
    },
    {
      id: "cup-2",
      name: "Swirl Collection",
      desc: "Our signature trio of luxury piped cupcakes in rich dark chocolate, vanilla snowdrop, and red velvet.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (2).jpeg",
      images: [
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (2).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (26).jpeg"
      ],
      category: "Cupcakes",
      flavors: ["Midnight Swirl (Rich Chocolate)", "Sweet Snowdrop (Vanilla)", "Vibrant Ruby (Red Velvet)"]
    },

    // 2. TEACAKES
    {
      id: "tea-1",
      name: "Midnight Loaf",
      desc: "Decadent dark chocolate loaf cake decorated with delicate white edible flower accents and candied citrus peel.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (13).jpeg",
      images: [
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (13).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (10).jpeg"
      ],
      category: "Teacakes"
    },
    {
      id: "tea-2",
      name: "Hazelnut Heaven",
      desc: "Rich cocoa loaf bar coated in a silky milk chocolate glaze and topped with roasted whole hazelnuts.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (14).jpeg",
      images: [
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (14).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.08 PM (2).jpeg"
      ],
      category: "Teacakes",
      tag: "Chef's Special"
    },
    {
      id: "tea-3",
      name: "Midnight Drip",
      desc: "Moist chocolate tea loaf cake finished with a glossy chocolate drip glaze and dried berry bits.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (15).jpeg",
      category: "Teacakes"
    },
    {
      id: "tea-4",
      name: "Golden Crumble (Coco Banana)",
      desc: "Warm banana bread studded with dark chocolate chunks and topped with golden butter crumble.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (16).jpeg",
      category: "Teacakes"
    },
    {
      id: "tea-5",
      name: "Marble Loaf",
      desc: "Classic swirled vanilla bean and rich dark chocolate marble cake baked into a golden loaf.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (17).jpeg",
      category: "Teacakes"
    },
    {
      id: "tea-6",
      name: "Cloud Roll (Swiss Roll)",
      desc: "Ultra-soft, pillowy sponge cake roll swirled with light cream filling in five signature flavors.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (12).jpeg",
      category: "Teacakes",
      flavors: ["Cloud Roll", "Midnight Roll", "Fruity Roll", "Citrus Roll", "Mocha Roll"]
    },

    // 3. COOKIES
    {
      id: "cook-1",
      name: "Choco Chip Bliss",
      desc: "Golden baked French-style butter cookies packed with rich dark chocolate chips.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (27).jpeg",
      category: "Cookies",
      tag: "Popular"
    },
    {
      id: "cook-2",
      name: "Checker Charm",
      desc: "Handcrafted duo-tone cocoa and vanilla checkerboard butter cookies.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.08 PM (2).jpeg",
      category: "Cookies"
    },
    {
      id: "cook-3",
      name: "Jammy Drops",
      desc: "Delicate thumbprint butter cookies filled with sweet fruit jam centers.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (8).jpeg",
      category: "Cookies"
    },
    {
      id: "cook-4",
      name: "Golden Butter Bliss",
      desc: "Melt-in-your-mouth classic golden French butter cookies baked to perfection.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-21 at 7.33.01 PM (21).jpeg",
      category: "Cookies"
    },

    // 4. ARTISANS CHEESECAKES & DESSERT JARS
    {
      id: "ch-1",
      name: "Biscoff Bliss Cheesecake",
      desc: "Creamy cheesecake on a Lotus Biscoff biscuit crust, topped with warm Biscoff spread and crushed cookie crumble.",
      diet: "veg",
      img: "/images (7).jpg",
      category: "Artisan Cheesecakes & Dessert Jars",
      tag: "Signature"
    },
    {
      id: "ch-2",
      name: "Oreo Obsession",
      desc: "Decadent cookie cheesecake bar layered with rich dark chocolate glaze and Oreo biscuit halves.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (9).jpeg",
      category: "Artisan Cheesecakes & Dessert Jars"
    },
    {
      id: "ch-3",
      name: "Mango Majesty",
      desc: "Tropical cheesecake slab with smooth Alphonso mango glaze and fresh mint-garnished mango slice fans.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-25 at 12.10.34 PM.jpeg",
      category: "Artisan Cheesecakes & Dessert Jars",
      tag: "Seasonal"
    },
    {
      id: "ch-4",
      name: "Berry Bliss Dessert Jar",
      desc: "Indulgent layered glass jar with butter biscuit crust, vanilla cheesecake cream, and fresh wild berry compote.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (3).jpeg",
      category: "Artisan Cheesecakes & Dessert Jars"
    },

    // 5. DONUTS
    {
      id: "don-1",
      name: "Frosted Midnight",
      desc: "Soft yeast donut dipped in rich dark chocolate icing and decorated with golden sprinkles.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (5).jpeg",
      category: "Donuts"
    },
    {
      id: "don-2",
      name: "Cinnamon Sugar",
      desc: "Soft brioche donut tossed in fragrant cinnamon sugar for a warm, comforting finish.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (6).jpeg",
      category: "Donuts"
    },
    {
      id: "don-3",
      name: "Classic Glazed Donut",
      desc: "Timeless ring donut with a light, glossy vanilla bean glaze.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-25 at 12.41.15 PM.jpeg",
      category: "Donuts"
    },
    {
      id: "don-4",
      name: "Caramel Crumble",
      desc: "Golden donut drizzled with warm salted caramel glaze and topped with crunchy crumble.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (7).jpeg",
      category: "Donuts"
    },
    {
      id: "don-5",
      name: "Midnight Oreo",
      desc: "Dark chocolate glazed donut topped generously with crushed Oreo cookies.",
      diet: "egg",
      img: "/WhatsApp Image 2026-07-25 at 12.43.37 PM.jpeg",
      category: "Donuts"
    },

    // 6. CREAMY YOGURTS
    {
      id: "yog-1",
      name: "Blue Velvet",
      desc: "Silky cultured yogurt layered with sweet blueberry compote swirl on a biscuit crumble base.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (22).jpeg",
      category: "Creamy Yogurts",
      tag: "Fresh & Healthy"
    },
    {
      id: "yog-2",
      name: "Berry Blossom",
      desc: "Rich cultured yogurt blended with fresh strawberry puree, served with whole ripe strawberries.",
      diet: "veg",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (21).jpeg",
      category: "Creamy Yogurts"
    },

    // 7. CELEBRATION CAKES
    {
      id: "cake-1",
      name: "Custom Celebration & Theme Cakes",
      desc: "Bespoke handcrafted cakes tailored for birthdays and anniversaries with custom theme sculpting and artistic buttercream.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (18).jpeg",
      images: [
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (18).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (19).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (21).jpeg",
        "/WhatsApp Image 2026-07-31 at 5.08.53 PM (1).jpeg",
        "/WhatsApp Image 2026-07-31 at 4.55.09 PM (25).jpeg"
      ],
      category: "Celebration Cakes",
      flavors: [
        "Plain Sweet Vanilla",
        "Chocolate",
        "Pineapple",
        "Mixed Fruits",
        "Customized Cream / Buttercream",
        "Fondant Celebration",
        "Ferrero Rocher",
        "Chocolate Truffle",
        "Black Forest"
      ],
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
      name: "Butterfly Garden Cake",
      desc: "Artistic butterfly-shaped cake piped with pastel buttercreams and edible sugar pearls.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (21).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-4",
      name: "Ojus Cricket Player Cake",
      desc: "Personalized sports birthday cake featuring handcrafted edible player figurine and cricket match detailing.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 5.08.53 PM (1).jpeg",
      category: "Celebration Cakes"
    },
    {
      id: "cake-5",
      name: "Ferrero Rocher & Chocolate Truffle Gateau",
      desc: "Layered Belgian chocolate cake decorated with hazelnut crunch, chocolate drip, and cocoa dust.",
      diet: "both",
      img: "/WhatsApp Image 2026-07-31 at 4.55.09 PM (25).jpeg",
      category: "Celebration Cakes"
    }
  ];

  const categories = [
    "All",
    "Cupcakes",
    "Teacakes",
    "Cookies",
    "Artisan Cheesecakes & Dessert Jars",
    "Donuts",
    "Creamy Yogurts",
    "Celebration Cakes"
  ];

  const filteredProducts = activeCategory === "All"
    ? catalog
    : catalog.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">

      {/* Top Banner */}
      <div className="bg-[#050403] text-[#E6C665] text-[11px] uppercase tracking-[0.25em] font-medium py-2.5 px-4 text-center border-b border-[#211811]">
        <span>✦ Handcrafted Small-Batch Bakery • Made Fresh Like Home • Order via WhatsApp: +91 99009 51492 ✦</span>
      </div>

      {/* Luxury Sticky Header (Dark Obsidian Glass) */}
      <header className="sticky top-0 z-50 bg-[#0B0806]/90 backdrop-blur-xl border-b border-[#261D16] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase text-[#D6C7B8]">
            <a href="#about" className="hover:text-[#E6C665] transition-colors relative py-1 group">
              Our Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="hover:text-[#E6C665] transition-colors relative py-1 group">
              Bake Collection
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#ordering" className="hover:text-[#E6C665] transition-colors relative py-1 group">
              Ordering Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full border border-[#E6C665] flex items-center justify-center font-serif text-xl font-bold text-[#F5EFE6] group-hover:bg-[#E6C665] group-hover:text-[#0B0806] transition-all duration-300 shadow-md">
              O
            </div>
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#F5EFE6] -mt-0.5">OZEE&apos;S</span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#E6C665] font-semibold -mt-1">Pâtisserie & Artisanal Bakes</span>
          </a>

          <div className="flex items-center gap-4">
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>WhatsApp Order</span>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Showcase Section (Luxury Dark Gradient) */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#261D16] bg-gradient-to-b from-[#090705] via-[#0F0B08] to-[#15100B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-[#1D150E] border border-[#3B2B1D] px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E6C665] animate-pulse"></span>
              <span className="text-[#E6C665] text-xs font-semibold uppercase tracking-[0.25em]">Artisanal Homemade Bakery</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5EFE6] leading-[1.08] tracking-tight">
              Crafted with Love.<br />
              <span className="italic font-normal text-[#E6C665]">Made Like Home.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#C7B7A7] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to <span className="font-semibold text-[#F5EFE6]">Ozee&apos;s</span>. Every cupcake, teacake, cookie, cheesecake, donut, and creamy yogurt is handcrafted in small batches using pure, premium ingredients.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="bg-[#E6C665] hover:bg-[#D4AF37] text-[#0B0806] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl shadow-[#E6C665]/15 hover:scale-105"
              >
                Explore Menu Collection
              </a>
              <a
                href={wa("Custom Celebration Cake")}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#E6C665] text-[#F5EFE6] hover:bg-[#E6C665] hover:text-[#0B0806] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all"
              >
                Custom Cake Enquiry
              </a>
            </div>

            <div className="pt-8 border-t border-[#261D16] flex items-center justify-center lg:justify-start gap-8 text-xs text-[#A89889]">
              <div>
                <span className="block font-bold text-[#F5EFE6] text-sm">100% Small Batch</span>
                <span>Handcrafted Fresh</span>
              </div>
              <div className="h-8 w-px bg-[#261D16]"></div>
              <div>
                <span className="block font-bold text-[#F5EFE6] text-sm">Egg & Eggless</span>
                <span>Custom Options</span>
              </div>
              <div className="h-8 w-px bg-[#261D16]"></div>
              <div>
                <span className="block font-bold text-[#F5EFE6] text-sm">Direct Delivery</span>
                <span>Doorstep Pickup</span>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#241A13] group">
                <Image
                  src="/WhatsApp Image 2026-07-31 at 4.55.09 PM (23).jpeg"
                  alt="Berry Crown Cupcakes Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs font-semibold">Berry Crown Cupcakes</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-[#241A13] group">
                <Image
                  src="/WhatsApp Image 2026-07-31 at 4.55.09 PM (14).jpeg"
                  alt="Hazelnut Heaven Teacake"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-[#241A13] group">
                <Image
                  src="/images (7).jpg"
                  alt="Biscoff Bliss Cheesecake Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#241A13] group">
                <Image
                  src="/WhatsApp Image 2026-07-31 at 4.55.09 PM (22).jpeg"
                  alt="Blue Velvet Creamy Yogurt Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Story / About Us Section */}
      <section id="about" className="py-24 bg-[#110D09] border-b border-[#261D16]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#E6C665]/50"></span>
            <span className="text-[#E6C665] text-xs uppercase tracking-[0.3em] font-semibold">The Heart Behind Ozee&apos;s</span>
            <span className="h-px w-10 bg-[#E6C665]/50"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Our Story & Passion
          </h2>

          <div className="space-y-6 text-[#C7B7A7] text-base sm:text-lg font-light leading-relaxed">
            <p>
              It all began with our little boy, lovingly called <span className="font-serif italic text-[#E6C665] font-semibold">&quot;Ozee.&quot;</span> His laughter, curiosity, and the simple joy he found in homemade treats became the spark behind a dream that slowly grew into <span className="font-semibold text-[#F5EFE6]">Ozee&apos;s</span>.
            </p>
            <p>
              As a mother, I discovered that the happiest moments in life are often the simplest — watching a cake rise in the oven, decorating cupcakes together, or sharing sweet treats around the table with family and friends. Those moments taught me that baking is more than recipes; it is a way of expressing love, creating memories, and bringing people together.
            </p>
            <div className="py-4">
              <p className="font-serif text-2xl text-[#E6C665] italic font-semibold">
                &ldquo;Then Ozee&apos;s came into being from that simple and true belief!!&rdquo;
              </p>
            </div>
            <p>
              Inspired by the <span className="font-semibold text-[#F5EFE6]">Trident</span> in our logo — a symbol of strength, balance, and unwavering commitment — we craft every treat with equal devotion to purity, creativity, and care. At Ozee&apos;s, we don&apos;t just bake desserts; we create meaningful moments, one handcrafted bite at a time.
            </p>
          </div>

          <div className="pt-6">
            <div className="relative aspect-[16/8] max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2B2119]">
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
      <section id="menu" className="py-24 bg-[#0B0806] border-b border-[#261D16]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[#E6C665] text-xs uppercase tracking-[0.3em] font-semibold">Handcrafted Catalogue</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
              Our Artisanal Bake Collection
            </h2>
            <p className="text-[#C7B7A7] font-light text-base sm:text-lg">
              Explore our fresh small-batch cupcakes, teacakes, cookies, cheesecakes, donuts, yogurts, and custom celebration cakes.
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
                    ? "bg-[#E6C665] text-[#0B0806] font-bold shadow-lg shadow-[#E6C665]/25 scale-105"
                    : "bg-[#18110D] border border-[#2B2018] text-[#C7B7A7] hover:border-[#E6C665] hover:text-[#E6C665]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} wa={wa} />
            ))}
          </div>

        </div>
      </section>

      {/* Custom Cake Showcase Banner */}
      <section className="py-20 bg-[#16100B] text-[#F5EFE6] border-b border-[#261D16]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          
          <span className="text-[#E6C665] text-xs uppercase tracking-[0.3em] font-semibold">Bespoke Celebrations</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Have a Custom Theme in Mind?</h2>
          <p className="text-[#D6C7B8] font-light text-base sm:text-lg max-w-2xl mx-auto">
            From cricket pitch cakes to 3D cars, butterfly gardens, and elegant anniversary cakes — we turn your celebration ideas into edible art.
          </p>

          <div className="pt-4">
            <a
              href={wa("Custom Celebration Cake")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-9 py-4 rounded-full font-bold shadow-xl shadow-[#25D366]/20 hover:scale-105 transition-transform text-xs uppercase tracking-widest"
            >
              <span>Discuss Custom Cake on WhatsApp (+91 99009 51492)</span>
            </a>
          </div>

        </div>
      </section>

      {/* Ordering Process & Timelines */}
      <section id="ordering" className="py-24 bg-[#110D09] border-b border-[#261D16]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            <div className="lg:col-span-7 bg-[#18110D] p-8 sm:p-12 rounded-3xl border border-[#2B2018] shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[#E6C665] text-xs uppercase tracking-[0.3em] font-semibold">Simple & Direct</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5EFE6] mt-2 mb-6">How to Order from Ozee&apos;s</h2>

                <div className="space-y-4 text-sm text-[#C7B7A7]">
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#E6C665] text-[#0B0806] text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                    <p><strong className="text-[#F5EFE6]">Browse & Select:</strong> Choose your favorite treats from our menu categories.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#E6C665] text-[#0B0806] text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                    <p><strong className="text-[#F5EFE6]">Share Requirements:</strong> Send us product name, desired flavor, quantity, egg/eggless preference, and pickup date via WhatsApp.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#E6C665] text-[#0B0806] text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                    <p><strong className="text-[#F5EFE6]">Order Confirmation:</strong> We confirm availability and share payment details.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#E6C665] text-[#0B0806] text-xs flex items-center justify-center shrink-0 font-bold">4</span>
                    <p><strong className="text-[#F5EFE6]">Fresh Small-Batch Baking:</strong> Your order is handcrafted fresh for your celebration day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080604] text-[#F5EFE6] p-8 sm:p-12 rounded-3xl border border-[#2B2018] flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[#E6C665] text-xs uppercase tracking-[0.3em] font-semibold">Advance Notice</span>
                <h3 className="font-serif text-3xl font-bold text-[#F5EFE6] mt-2 mb-6">Order Timelines</h3>
                <div className="space-y-4 text-sm text-[#C7B7A7]">
                  <p>• <strong className="text-[#E6C665]">Cupcakes, Cookies & Donuts:</strong> 24 – 36 hours notice</p>
                  <p>• <strong className="text-[#E6C665]">Teacakes & Creamy Yogurts:</strong> 24 – 48 hours notice</p>
                  <p>• <strong className="text-[#E6C665]">Cheesecakes & Dessert Jars:</strong> 48 – 72 hours notice</p>
                  <p>• <strong className="text-[#E6C665]">Custom Theme & Celebration Cakes:</strong> Contact in advance</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#261D16] text-center">
                <a
                  href={wa()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg transition-all"
                >
                  Order via WhatsApp (+91 99009 51492)
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050403] text-[#F5EFE6] py-16 border-t border-[#211811]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-[#E6C665] flex items-center justify-center font-serif text-2xl font-bold mb-2 text-[#E6C665]">
              O
            </div>
            <span className="font-serif text-3xl font-bold tracking-[0.2em] text-[#F5EFE6]">OZEE&apos;S</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#E6C665] font-semibold mt-1">Crafted with Love • Made Like Home</span>
          </div>

          <div className="pt-8 border-t border-[#211811] text-xs text-[#8A7A6C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Ozee&apos;s Pâtisserie. All rights reserved.</p>
            <p>WhatsApp: +91 99009 51492 | www.ozees.in</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

