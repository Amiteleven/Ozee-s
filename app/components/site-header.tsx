"use client";

import Link from "next/link";

const phone = "919900951492";
const wa = (item?: string) => {
  const text = item
    ? encodeURIComponent(`Hi Ozee's! I would like to place an order for "${item}".`)
    : encodeURIComponent("Hi Ozee's! I would like to place an order from your menu.");
  return `https://wa.me/${phone}?text=${text}`;
};

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0806]/90 backdrop-blur-xl border-b border-[#261D16] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo (Vibrant Metallic Golden) */}
        <Link href="/" className="flex flex-col items-center group transition-transform hover:scale-105">
          <div className="w-11 h-11 rounded-full border-2 border-[#E6C665] bg-gradient-to-br from-[#F7DC8D] via-[#E6C665] to-[#C49B28] text-[#0B0806] font-serif text-2xl font-black shadow-lg shadow-[#E6C665]/30 flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
            O
          </div>
          <span className="font-serif text-2xl font-black tracking-[0.22em] bg-gradient-to-r from-[#FFF0B3] via-[#E6C665] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md -mt-0.5">
            OZEE&apos;S
          </span>
          <span className="text-[8px] uppercase tracking-[0.38em] text-[#E6C665] font-bold -mt-1">
            Pâtisserie & Artisanal Bakes
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase text-[#D6C7B8]">
          <Link href="/#about" className="hover:text-[#E6C665] transition-colors relative py-1 group">
            Our Story
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#menu" className="hover:text-[#E6C665] transition-colors relative py-1 group">
            Bake Collection
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/blog" className="hover:text-[#E6C665] transition-colors relative py-1 group">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#ordering" className="hover:text-[#E6C665] transition-colors relative py-1 group">
            Ordering Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C665] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

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
  );
}
