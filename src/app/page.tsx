import Link from "next/link";
import {
  Dumbbell,
  Users,
  Clock,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "Train with top-tier free weights, machines, and high-performance cardio gear.",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    description:
      "Certified trainers dedicated to tailoring workouts around your exact goals.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description:
      "Workout whenever it fits your schedule with round-the-clock facility access.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Structured programs built to ensure measurable strength and conditioning gains.",
  },
];

const plansPreview = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    description: "Perfect for casual gym-goers looking for full gym access.",
    features: [
      "Access during standard hours",
      "Free locker access",
      "1 Complementary trainer consultation",
    ],
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    popular: true,
    description: "Best for committed individuals needing full 24/7 access & perks.",
    features: [
      "24/7 Unlimited gym access",
      "All group fitness classes included",
      "Monthly personal body composition scan",
      "Sauna & recovery room access",
    ],
  },
  {
    name: "Elite VIP",
    price: "₹4,999",
    period: "/month",
    description: "Designed for high performers seeking 1-on-1 dedicated training.",
    features: [
      "Everything in Pro Plan",
      "4 Personal training sessions/mo",
      "Custom nutrition & workout strategy",
      "Priority class reservation",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
            Welcome to IronForge Gym
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
            Build Body <br />
            <span className="text-orange-500">Strongest Muscle</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
            Unleash your potential with professional coaching, premium gear,
            and a community built on discipline and results.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="w-full rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
            >
              Start Free Trial
            </Link>
            <Link
              href="/classes"
              className="w-full rounded-full border border-white/20 px-8 py-3.5 font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              View Class Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Train With Us?
          </h2>
          <p className="mt-3 text-gray-400">
            Everything you need to reach your peak physical performance.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/50"
            >
              <item.icon className="h-10 w-10 text-orange-500" />
              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Membership Plans
          </h2>
          <p className="mt-3 text-gray-400">
            Flexible options designed to match your goals and routine.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plansPreview.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-8 ${
                plan.popular
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/membership"
                className={`mt-8 w-full rounded-full py-3 text-center font-semibold transition ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-black uppercase text-white sm:text-5xl">
            Ready To Transform Your Body?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Join IronForge Gym today and get your first week free. No commitment required.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
