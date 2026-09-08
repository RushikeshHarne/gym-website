import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Arjun Verma",
    plan: "Pro Member",
    rating: 5,
    review:
      "IronForge completely transformed my training routine. The coaches actually pay attention to your form, and the 24/7 access fits perfectly into my work schedule.",
  },
  {
    name: "Priya Sundaram",
    plan: "Elite VIP Member",
    rating: 5,
    review:
      "The personal coaching program here is unmatched. Vikram helped me add 25 kg to my deadlift while staying completely injury-free.",
  },
  {
    name: "Karan Patel",
    plan: "Basic Member",
    rating: 5,
    review:
      "Best heavy iron equipment in the city. The atmosphere is focused and disciplined—no ego, just solid work.",
  },
  {
    name: "Meera Joshi",
    plan: "Pro Member",
    rating: 5,
    review:
      "The recovery facilities are incredible. Cold showers and sauna access after a intense HIIT session are a total game changer.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          Success Stories
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Member <span className="text-orange-500">Reviews</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          Read what our athletes and members have to say about their journey at IronForge Gym.
        </p>
      </section>

      {/* REVIEWS GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-orange-500/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-white/10" />
                </div>

                <p className="mt-6 text-base italic leading-relaxed text-gray-300">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-xs font-medium text-orange-500">
                  {item.plan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Start Your Own Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Join the community today and claim your 1-day pass.
          </p>
          <div className="mt-8">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Join IronForge</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
