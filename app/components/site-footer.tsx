"use client";

import { motion } from "framer-motion";
import { StaggerFadeIn } from "./animations";

export default function SiteFooter() {
  return (
    <footer className="bg-[#050403] text-[#F5EFE6] py-16 border-t border-[#211811]">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
        
        <StaggerFadeIn>
          <motion.div
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 rounded-full border-2 border-[#E6C665] bg-gradient-to-br from-[#F7DC8D] via-[#E6C665] to-[#C49B28] text-[#0B0806] font-serif text-3xl font-black shadow-xl shadow-[#E6C665]/40 flex items-center justify-center mb-1.5"
            >
              O
            </motion.div>
            <span className="font-serif text-4xl font-black tracking-[0.22em] bg-gradient-to-r from-[#FFF0B3] via-[#E6C665] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-lg">
              OZEE&apos;S
            </span>
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#E6C665] font-bold mt-1">
              Crafted with Love • Made Like Home
            </span>
          </motion.div>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#8A7A6C]">
            <a href="/privacy-policy" className="hover:text-[#E6C665] transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-[#E6C665] transition-colors">Terms and Condition</a>
            <a href="/refund-return-cancellation" className="hover:text-[#E6C665] transition-colors">Refund, Return and Cancellation</a>
            <a href="/food-allergy" className="hover:text-[#E6C665] transition-colors">Food Alergy</a>
            <a href="/shipping-and-delivery" className="hover:text-[#E6C665] transition-colors">Shipping and Delivery</a>
          </div>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2} yOffset={20}>
          <div className="pt-8 border-t border-[#211811] text-xs text-[#8A7A6C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Ozee&apos;s Pâtisserie. All rights reserved.</p>
            <p>WhatsApp: +91 99009 51492 | www.ozees.in</p>
          </div>
        </StaggerFadeIn>

      </div>
    </footer>
  );
}
