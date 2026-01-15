import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cleaning Tips & Advice | Alexas Cleaning Services Blog",
  description: "Read our latest articles on home cleaning, maintenance tips, and industry news from Alexas Cleaning Services Philadelphia.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
       <section className="bg-slate-50 py-12 md:py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Cleaning Tips & Insights</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Expert advice to keep your home or office looking its best between professional cleans.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
              <div key={post.slug} className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden group relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                    <span>{post.category}</span>
                    <span className="text-slate-400">{post.readingTime}</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-3">{formatDate(post.date)} • {post.author.name}</div>
                  <Link href={`/blog/${post.slug}`} className="block mb-2">
                    <h2 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 h-auto font-semibold">Read Article →</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
