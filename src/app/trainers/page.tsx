import Link from "next/link";
import { Dumbbell, Award, Flame, ArrowRight } from "lucide-react";

const trainers = [
  {
    name: "Vikram Sharma",
    role: "Head Strength Coach",
    experience: "10+ Years Experience",
    specialties: ["Powerlifting", "Hypertrophy", "Olympic Weightlifting"],
    certifications: ["NSCA-CSCS", "ACE Certified Master Trainer"],
    bio: "Specializes in heavy strength training and building bulletproof athletic foundations.",
  },
  {
    name: "Ananya Roy",
    role: "Functional & HIIT Specialist",
    experience: "7+ Years Experience",
    specialties: ["Functional Fitness", "Kettlebell Training", "Fat Loss"],
    certifications: ["CrossFit Level 2", "NASM CPT"],
    bio: "Focuses on high-intensity metabolic conditioning, agility, and sustainable fat loss.",
  },
  {
    name: "Rohan Kulkarni",
    role: "Bodybuilding & Conditioning",
    experience: "8+ Years Experience",
    specialties: ["Muscle Building", "Prep Coaching", "Symmetry & Posture"],
    certifications: ["ISSAPersonal Trainer", "Precision Nutrition L1"],
    bio: "Expert in physique transformation, hypertrophy protocols, and tailored contest prep.",
  },
  {
    name: "Sneha Patel",
    role: "Mobility & Recovery Coach",
    experience: "6+ Years Experience",
    specialties: ["Rehab & Prehab", "Flexibility", "Core Stability"],
    certifications: ["RYT 500 Yoga", "FMS Certified"],
    bio: "Dedicated to movement quality, injury prevention, joint longevity, and active recovery.",
  },
];

export default function TrainersPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          Expert Guidance
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Meet Our <span className="text-orange-500">Coaches</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          Certified professionals committed to taking your strength, technique, and mindset to the next level.
        </p>
      </section>

      {/* TRAINERS GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/50"
            >
              <div>
                {/* Placeholder Avatar Box */}
                <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-white/10 text-orange-500">
                  <Dumbbell className="h-16 w-16 opacity-60" />
                </div>

                <div className="mt-6">
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                    {trainer.experience}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-sm font-medium text-orange-500">
                    {trainer.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">{trainer.bio}</p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Specialties
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {trainer.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-gray-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Award className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>{trainer.certifications.join(" • ")}</span>
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
            Want 1-on-1 Personal Training?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Book a complimentary session with one of our master trainers to review your technique and set your training blueprint.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
