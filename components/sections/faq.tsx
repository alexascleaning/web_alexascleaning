import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What cleaning services do you offer in Philadelphia?",
    answer: "Alexas Cleaning Services provides a comprehensive range of professional cleaning solutions in Philadelphia, including residential house cleaning, commercial office cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleanup. Our team is trained to handle spaces of all sizes with meticulous attention to detail."
  },

  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you do not need to be home. Many of our Philadelphia clients provide us with a key or entry code. All our staff undergo rigorous background checks and vetting, so you can trust us to care for your home or office while you're away."
  },
  {
    question: "What areas of Philadelphia do you serve?",
    answer: "We serve the entire Philadelphia area, including Center City, South Philly, North Philly, West Philly, Northeast Philly, Fishtown, Northern Liberties, and surrounding neighborhoods like Manayunk and Chestnut Hill."
  },
  {
    question: "What is included in a deep cleaning service?",
    answer: "Our deep cleaning service in Philadelphia goes beyond the surface. It includes cleaning behind appliances, scrubbing baseboards, interior window cleaning, deep sanitization of bathrooms and kitchens, and removing years of accumulated dust and grime in hard-to-reach areas."
  },
  {
    question: "How do I get a free cleaning quote?",
    answer: "You can easily get a free, no-obligation quote by clicking any of the 'Get a Free Quote' buttons on our website or by calling us directly. We provide transparent pricing based on the size of your space and the type of cleaning required."
  }
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-primary">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Everything you need to know about our professional cleaning services in Philadelphia.
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* FAQ Schema for AI/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
