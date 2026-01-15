import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Lyandra retacco",
    location: "Philadelphia Resident",
    text: "I have been using this company for over 10 years. They do a great job.",
    rating: 5,
  },
  {
    name: "Brian Kolins",
    location: "Regular Client",
    text: "Ive been using alexa for 18 months. She is amazing and i highly recommend... just dont take my time slot ;)",
    rating: 5,
  },
  {
    name: "Michael Stutman",
    location: "Philadelphia homeowner",
    text: "Everybody has been wonderful to work with. They leave my house incredibly clean and organized. They're a pleasure to work with.",
    rating: 5,
  },
  {
    name: "Valerie Renda",
    location: "Monthly Service Client",
    text: "Amazing! Always flexible with timing as we get this service once a month. They are thorough and do a great job! I highly recommend them to anyone looking for a regular house cleaning service.",
    rating: 5,
  },
  {
    name: "Adam Chesnick",
    location: "Satisfied Customer",
    text: "The service was well, They were reliable, and the service was good. Good communication.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-slate-600 md:text-lg">
            Don't just take our word for it - read our <strong>verified 5-star Google reviews</strong> from happy clients across Philadelphia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="flex flex-col p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex mb-4 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-slate-700 italic mb-6">"{testimonial.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
