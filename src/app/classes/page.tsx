import Link from "next/link";
import { Clock, Flame, Users, ArrowRight } from "lucide-react";

const classesList = [
  {
    name: "Iron Conditioning & HIIT",
    intensity: "High Intensity",
    duration: "45 Mins",
    trainer: "Ananya Roy",
    description:
      "A fast-paced circuit combining bodyweight resistance, kettlebells, and cardio bursts to maximize calorie burn.",
  },
  {
    name: "Power Lifting 101",
    intensity: "Moderate / Heavy",
    duration: "60 Mins",
    trainer: "Vikram Sharma",
    description:
      "Master proper form and safety techniques for essential compound lifts: squat, bench press, and deadlift.",
  },
  {
    name: "Hypertrophy & Core",
    intensity: "Moderate",
    duration: "60 Mins",
    trainer: "Rohan Kulkarni",
    description:
      "Targeted muscle building combined with core stability protocols to maximize strength and post-exercise recovery.",
  },
  {
    name: "Mobility & Athletic Recovery",
    intensity: "Low / Restorative",
    duration: "50 Mins",
    trainer: "Sneha Patel",
    description:
      "Focuses on joint mobility, myofascial release, dynamic stretching, and stress relief to keep you injury-free.",
  },
];

const schedule = [
  { time: "06:00 AM - 07:00 AM", mon: "Iron Conditioning", wed: "Iron Conditioning", fri: "Iron Conditioning" },
  { time: "08:00 AM - 09:00 AM", tue: "Power Lifting 101", thu: "Power Lifting 101", sat: "Power Lifting 101" },
  { time: "05:00 PM - 06:00 PM", mon: "Hypertrophy & Core", wed: "Hypertrophy & Core", fri: "Hypertrophy & Core" },
  { time: "07:00 PM - 08:00 PM", tue: "Mobility & Recovery", thu: "Mobility & Recovery", sat: "Mobility & Recovery" },
];

export default function ClassesPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          Group Fitness
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Class <span className="text-orange-500">Programs</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          High-energy group workouts led by expert coaches. Included with Pro and Elite VIP memberships.
        </p>
      </section>

      {/* FEATURED CLASSES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {classesList.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/50"
            >
              <div>
                <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-500">
                  {item.intensity}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.description}</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs text-gray-300 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Duration: {item.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-500 shrink-0" />
                  <span>Instructor: {item.trainer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMETABLE SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Weekly Class Schedule
          </h2>
          <p className="mt-3 text-gray-400">
            Reserve your spot up to 24 hours in advance.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="border-b border-white/10 bg-white/5 text-xs font-bold uppercase text-orange-500">
              <tr>
                <th className="px-6 py-4">Time Slot</th>
                <th className="px-6 py-4">Mon / Wed / Fri</th>
                <th className="px-6 py-4">Tue / Thu / Sat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 border-b border-white/10 bg-black/40">
              {schedule.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 font-bold text-white whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {row.mon}
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {row.tue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Ready To Reserve A Spot?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Join IronForge Gym today and get unlimited access to all group classes with our Pro Plan.
          </p>
          <div className="mt-8">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Get Pro Access</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
