import Link from "next/link";
import { ShieldCheck, Target, Users, Flame, Award, ArrowRight } from "lucide-react";

const stats = [
  { label: "Active Members", value: "2,500+" },
  { label: "Expert Trainers", value: "15+" },
  { label: "Fitness Classes / Wk", value: "40+" },
  { label: "Years of Excellence", value: "8+" },
];

const values = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "We design custom fitness roadmaps tailored specifically to your body type and performance objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description:
      "From elite hammer-strength machines to modern recovery facilities, we offer only top-tier amenities.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description:
      "Whether you are lifting for the first time or competing professionally, our environment fosters growth.",
  },
  {
    icon: Flame,
    title: "Constant Progression",
    description:
      "We emphasize continuous improvement through science-backed routines and performance tracking.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          About IronForge Gym
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Forging Champions, <br />
          <span className="text-orange-500">Transforming Lives</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base text-gray-400 md:text-lg">
          Founded in 2018, IronForge Gym was created to eliminate soft workouts and vague promises.
          We provide a high-energy environment built on sweat, discipline, and verifiable results.
        </p>
      </section>

      {/* STATS SECTION */}
      <section className="border-y border-white/10 bg-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-orange-500 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Core Principles
          </h2>
          <p className="mt-3 text-gray-400">
            The foundation behind every training program at IronForge.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val) => (
            <div
              key={val.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/50"
            >
              <val.icon className="h-10 w-10 text-orange-500" />
              <h3 className="mt-4 text-xl font-bold text-white">{val.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Ready To Write Your Success Story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Visit our facility today or sign up for a pass to experience the IronForge standard.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Explore Memberships</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
