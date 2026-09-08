import Link from "next/link";
import { Dumbbell, ArrowRight } from "lucide-react";

const galleryItems = [
  { title: "Main Weight Room", category: "Equipment" },
  { title: "Powerlifting Racks", category: "Strength" },
  { title: "HIIT Studio Zone", category: "Classes" },
  { title: "Cardio Deck", category: "Endurance" },
  { title: "Sauna & Recovery", category: "Amenities" },
  { title: "Locker Rooms", category: "Amenities" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          Inside IronForge
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Facility <span className="text-orange-500">Gallery</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          Take a look at our training environment, high-end gear, and athlete spaces.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative flex h-64 items-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/50"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/20">
                <Dumbbell className="h-16 w-16 text-orange-500/30 transition group-hover:text-orange-500/60" />
              </div>

              <div className="relative z-10">
                <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-500">
                  {item.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-black p-10 text-center md:p-16">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Grab a day pass to experience training at IronForge firsthand.
          </p>
          <div className="mt-8">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              <span>Get Free Pass</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
