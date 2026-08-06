"use client";

import { motion } from "framer-motion";
import { StaggerFadeIn } from "../components/animations";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Privacy Policy
          </h1>
          <p className="text-[#E6C665] text-sm uppercase tracking-[0.2em] font-semibold">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.1}>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Welcome to &ldquo;Ozee&apos;s&rdquo; (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit www.ozees.in or place an order with us.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.2}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">1. Information We Collect</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We may collect the following information when you contact us or place an order:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address (if provided)</li>
            <li>Delivery or pickup address</li>
            <li>Order details and preferences</li>
            <li>Messages or enquiries you send us</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We do not intentionally collect sensitive personal information.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.3}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">2. How We Use Your Information</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Your information is used only to:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Process and confirm your orders</li>
            <li>Communicate regarding your order</li>
            <li>Respond to enquiries</li>
            <li>Arrange delivery or pickup</li>
            <li>Improve our products and customer service</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We will never sell your personal information.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.4}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">3. Payment Information</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            If online payments are offered, transactions are processed securely through trusted third-party payment providers.
          </p>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Ozee&apos;s does not store your debit or credit card details.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.5}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">4. Cookies</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Our website may use cookies to improve your browsing experience and understand website usage.
          </p>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            You may disable cookies through your browser settings if you prefer.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.6}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">5. Third-Party Services</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Our website may include (now or in future) links or integrations with services such as:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Google Maps</li>
            <li>Google Analytics</li>
            <li>Payment Gateway providers</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            These services have their own privacy policies, and we encourage you to review them.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.7}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">6. Data Security</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure.
          </p>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            However, no online platform can guarantee complete security.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.8}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">7. Your Rights</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            You may request to:
          </p>
          <ul className="list-disc list-inside text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your information (unless we are required to retain it for legal or business purposes)</li>
          </ul>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            To make a request, please contact us.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={0.9}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">8. Children&apos;s Privacy</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Our website is intended for general audiences. We do not knowingly collect personal information from children under the age required by applicable law without appropriate consent.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={1.0}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">9. Changes to This Policy</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            We may update this Privacy Policy from time to time. Any updates will be published on this page with the revised effective date.
          </p>
        </StaggerFadeIn>

        <StaggerFadeIn delay={1.1}>
          <h2 className="font-serif text-2xl font-bold text-[#F5EFE6]">10. Contact Us</h2>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            If you have any questions regarding this Privacy Policy, please contact us:
          </p>
          <div className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed space-y-2">
            <p><strong className="text-[#F5EFE6]">Ozee&apos;s</strong></p>
            <p>Website: www.ozees.in</p>
            <p>Phone: <strong className="text-[#F5EFE6]">+91 99009 51492</strong></p>
            <p>Email: <a href="mailto:hello@ozees.in" className="text-[#E6C665] hover:underline">hello@ozees.in</a></p>
          </div>
        </StaggerFadeIn>
      </div>
    </div>
  );
}
