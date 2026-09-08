import Link from "next/link";
import { CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    description: "Ideal for casual lifters looking for standard facility access.",
    popular: false,
    features: [
      "Access to gym floor & free weights",
      "Standard operating hours (6 AM - 10 PM)",
      "Free locker usage",
      "1 Complementary trainer assessment",
      "Water station access",
    ],
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    description: "Our most popular tier for dedicated athletes needing full access.",
    popular: true,
    features: [
      "24/7 Unlimited facility access",
      "Access to all group fitness classes",
      "Monthly body composition analysis",
      "Steam & Sauna room access",
      "1 Guest pass per month",
      "10% discount on gym merchandise",
    ],
  },
  {
    name: "Elite VIP",
    price: "₹4,999",
    period: "/month",
    description: "Maximum support with 1-on-1 personal coaching included.",
    popular: false,
    features: [
      "Everything included in Pro Plan",
      "4 Personal training sessions / month",
      "Custom nutrition & workout program",
      "Priority group class reservation",
      "Dedicated VIP locker room",
      "Unlimited guest passes",
    ],
  },
];

const faqs = [
  {
    question: "Are there any hidden joining or registration fees?",
    answer:
      "No. All prices listed are transparent. There are no hidden sign-up fees or annual maintenance charges.",
  },
  {
    question: "Can I freeze or pause my membership?",
    answer:
      "Yes! Pro and Elite VIP members can freeze their membership for up to 30 days per year at no extra cost.",
  },
  {
    question: "Do you offer a free trial before joining?",
    answer:
      "Absolultely. You can sign up for a free 1-day pass to try out our equipment and facilities before committing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, all major credit/debit cards, net banking, and auto-debit subscriptions.",
  },
];

export default function MembershipPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          Flexible Pricing
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Choose Your <span className="text-orange-500">Membership</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          No long-term lock-in contracts. Upgrade, downgrade, or cancel anytime.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl border p-8 ${
                plan.popular
                  ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/10"
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
                  <span className="text-5xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">{plan.period}</span>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    What's Included:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className={`mt-8 w-full rounded-full py-3.5 text-center font-bold transition ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Contact our support team or drop by the front desk for a guided tour of the facility.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
