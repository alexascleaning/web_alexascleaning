import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  
  const metaTitle = post.seo?.metaTitle || `${post.title} | Alexas Cleaning Services`;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  const canonicalUrl = post.seo?.canonicalUrl || `https://alexascleaningservices.com/blog/${slug}`;
  const imageUrl = `https://alexascleaningservices.com${post.image}`;
  
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo?.keywords?.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Alexas Cleaning Services',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm mb-12 pb-8 border-b border-slate-200">
           <div className="flex items-center gap-2">
             <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
               {post.author.name.charAt(0)}
             </div>
             <div>
               <p className="font-semibold text-slate-900 leading-none">{post.author.name}</p>
               <p className="text-xs text-slate-500">{post.author.role}</p>
             </div>
           </div>
           <div className="flex items-center gap-2">
             <Calendar className="h-4 w-4" />
             {formatDate(post.date)}
           </div>
           <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">
             {post.category}
           </div>
           <div className="text-xs text-slate-400 ml-auto">
             {post.readingTime} read
           </div>
        </div>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "image": [post.image],
                "datePublished": post.date,
                "author": [{
                  "@type": "Person",
                  "name": post.author.name,
                  "jobTitle": post.author.role
                }],
                "description": post.excerpt,
                "articleSection": post.category,
                "articleBody": post.content?.replace(/<[^>]+>/g, '') // Basic strip HTML for body snippet
              },
              ...(post.faqSchema ? [{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": post.faqSchema.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }] : [])
            ])
          }}
        />
        
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-md">
           <Image
             src={post.image}
             alt={post.imageAlt || post.title}
             fill
             priority
             className="object-cover"
             sizes="(max-width: 1024px) 100vw, 1024px"
           />
        </div>

        <div className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-slate-800
          prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-slate-700
          prose-p:mb-6 prose-p:leading-relaxed prose-p:text-slate-600
          prose-ul:my-8 prose-ul:space-y-3
          prose-ol:my-8 prose-ol:space-y-3
          prose-li:text-slate-600 prose-li:leading-relaxed
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-em:text-slate-700
          prose-code:text-primary prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          [&_h2]:scroll-mt-20 [&_h3]:scroll-mt-20 [&_h4]:scroll-mt-20">

          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <>
              <p>
                Maintaining a clean environment is crucial for both mental clarity and physical health. Whether you are in a cozy apartment in Old City or a townhouse in Fishtown, keeping dust and grime at bay can be a challenge with a busy schedule.
              </p>
              <h3>1. Declutter First</h3>
              <p>
                Before you even pick up a broom, make sure you clear the clutter. It makes the actual cleaning process much faster and more efficient.
              </p>
              <h3>2. Top to Bottom</h3>
              <p>
                Always clean from the highest point in the room down to the floor. This ensures that dust falls onto surfaces you haven't cleaned yet.
              </p>
              <h3>3. Use the Right Tools</h3>
              <p>
                Microfiber cloths are your best friend. They trap dust rather than spreading it around.
              </p>
              <p className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-primary italic">
                "We treat every home like it's our own, paying attention to details others miss."
              </p>
              <p className="mt-8">
                If you find yourself overwhelmed, remember that Alexas Cleaning Services is just a call away. We can handle the deep cleaning so you can focus on what matters most.
              </p>
            </>
          )}
        </div>

        {/* Internal Linking Section */}
        {(post.relatedServices || post.relatedPosts) && (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
            
            {post.relatedServices && post.relatedServices.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Our Services</h3>
                <div className="flex flex-wrap gap-3">
                  {post.relatedServices.map((serviceLink: string) => {
                     // Since serviceLink is a path like "/services/residential-cleaning", 
                     // we should probably extract a readable name or just use the link.
                     // For now, let's format the link text from the slug.
                     // Extract the last part of the path
                     const serviceName = serviceLink.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || "Service";
                     return (
                      <Link key={serviceLink} href={serviceLink}>
                        <Button variant="outline" className="rounded-full">
                          {serviceName}
                        </Button>
                      </Link>
                     );
                  })}
                </div>
              </div>
            )}

            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Read Next</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {post.relatedPosts.map((relatedSlug: string) => {
                    const relatedPost = BLOG_POSTS.find(p => p.slug === relatedSlug);
                    if (!relatedPost) return null;
                    return (
                      <Link key={relatedSlug} href={`/blog/${relatedSlug}`} className="group block p-4 border rounded-lg hover:border-primary transition-colors">
                        <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
