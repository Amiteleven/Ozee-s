"use client";

export default function ProductJsonLd({ products }: { products: Array<{
  name: string;
  description: string;
  category: string;
  diet: string;
  image: string;
}> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category,
        image: `https://www.ozees.in${product.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Ozee's Pâtisserie",
          },
        },
        additionalProperty: product.diet === "both"
          ? {
              "@type": "PropertyValue",
              name: "Dietary Options",
              value: "Egg and Eggless",
            }
          : product.diet === "veg"
          ? {
              "@type": "PropertyValue",
              name: "Dietary Options",
              value: "100% Eggless",
            }
          : {
              "@type": "PropertyValue",
              name: "Dietary Options",
              value: "Contains Egg",
            },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
