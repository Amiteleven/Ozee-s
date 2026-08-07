import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ozees.in"),
  title: {
    default: "Ozee's | Crafted with Love, Made like Home - Homemade Bakery in Bangalore",
    template: "%s | Ozee's Bakery Bangalore",
  },
  description: "Ozee's is a homemade bakery in Bangalore offering handcrafted cupcakes, teacakes, cookies, cheesecakes, donuts, creamy yogurts, and custom celebration cakes. Egg & eggless options available. Order via WhatsApp.",
  keywords: ["bakery Bangalore", "homemade bakery", "custom cakes Bangalore", "cupcakes Bangalore", "teacakes", "cookies", "cheesecakes", "donuts", "eggless bakery", "birthday cakes Bangalore", "theme cakes", "Ozee's bakery"],
  authors: [{ name: "Ozee's Pâtisserie" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ozees.in",
    siteName: "Ozee's Pâtisserie",
    title: "Ozee's | Crafted with Love, Made like Home",
    description: "Handcrafted homemade bakery in Bangalore. Custom celebration cakes, cupcakes, cookies, and more. Egg & eggless options available.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Ozee's Bakery Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozee's | Crafted with Love, Made like Home",
    description: "Handcrafted homemade bakery in Bangalore. Custom celebration cakes, cupcakes, cookies, and more.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.ozees.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Ozee's Pâtisserie",
    description: "Homemade bakery in Bangalore offering handcrafted cupcakes, teacakes, cookies, cheesecakes, donuts, creamy yogurts, and custom celebration cakes.",
    url: "https://www.ozees.in",
    telephone: "+919900951492",
    email: "hello@ozees.in",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.ozees.in",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Custom Celebration Cakes",
          description: "Bespoke handcrafted cakes tailored for birthdays and anniversaries with custom theme sculpting and artistic buttercream.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cupcakes",
          description: "Fluffy sponge cupcakes topped with rich whipped icing, fresh berries, and seasonal fruits.",
        },
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I order from Ozee's bakery in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can order via WhatsApp by clicking the WhatsApp Order button or by sending us a message with your name, phone number, order details, flavor preferences, and pickup/delivery address.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver custom celebration cakes in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we deliver custom celebration cakes across select areas in Bengaluru. Delivery charges depend on location and will be confirmed before order confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "How much notice do I need to give for a custom cake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom theme and celebration cakes require advance notice. Contact us via WhatsApp to check availability and timelines. Standard cupcakes, cookies, and donuts need 24-36 hours notice.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer eggless cakes and cupcakes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer both egg and eggless options for most of our products. Please confirm your preference at the time of order. Note that eggless products are prepared in the same kitchen as egg-containing products.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0806] text-[#F5EFE6] font-sans">{children}</body>
    </html>
  );
}
