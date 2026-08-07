import Link from "next/link";
import { StaggerFadeIn } from "../components/animations";

export const metadata = {
  title: "Blog | Ozee's Bakery Bangalore",
  description: "Read the latest stories, guides, and tips from Ozee's homemade bakery in Bangalore. Learn about custom cakes, eggless bakery, and ordering guides.",
  alternates: {
    canonical: "https://www.ozees.in/blog",
  },
};

const posts = [
  {
    slug: "custom-cakes-bangalore",
    title: "How to Order the Best Custom Cake in Bangalore",
    excerpt: "From theme cakes to 3D sculpted designs, here is everything you need to know about ordering a custom celebration cake from Ozee's in Bangalore.",
    date: "2026-08-07",
    readTime: "5 min read",
  },
  {
    slug: "eggless-bakery-bangalore",
    title: "Best Eggless Bakery in Bangalore: Cupcakes, Cakes and Cookies",
    excerpt: "Looking for 100% eggless bakery near you in Bangalore? Discover Ozee's eggless cupcakes, teacakes, cookies, and celebration cakes.",
    date: "2026-08-06",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0B0806] text-[#F5EFE6] font-sans selection:bg-[#E6C665]/30">
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">
        <StaggerFadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5EFE6]">
            Ozee&apos;s Bakery Stories
          </h1>
          <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed">
            Tips, stories, and guides from our homemade bakery in Bangalore.
          </p>
        </StaggerFadeIn>

        <div className="grid gap-8">
          {posts.map((post, idx) => (
            <StaggerFadeIn key={post.slug} delay={idx * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-[#140F0C] rounded-3xl p-8 border border-[#2B2119] hover:border-[#E6C665]/60 transition-all group"
              >
                <span className="text-[#E6C665] text-xs uppercase tracking-[0.2em] font-semibold">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5EFE6] mt-3 group-hover:text-[#E6C665] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#C7B7A7] font-light text-base sm:text-lg leading-relaxed mt-3">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-[#E6C665] group-hover:translate-x-1 transition-transform">
                  Read More →
                </span>
              </Link>
            </StaggerFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
