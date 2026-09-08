"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    const { error } = await supabase
      .from("contact_submissions")
      .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

    setLoading(false);

    if (error) {
      setStatus({ type: "error", text: "Failed to submit message. Please try again." });
    } else {
      setStatus({ type: "success", text: "Message sent successfully! We will get back to you shortly." });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex flex-col gap-20 py-12">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 md:text-sm">
          Get In Touch
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
          Contact <span className="text-orange-500">IronForge</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:text-lg">
          Have questions about memberships or training programs? Send us a message or visit our facility.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* INFO & LOCATION */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Facility Information</h2>
              <p className="mt-2 text-sm text-gray-400">
                Stop by during front desk hours for a guided tour or consultation.
              </p>

              <div className="mt-8 space-y-6 text-sm text-gray-300">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-bold text-white">Address</h3>
                    <p className="mt-1 text-gray-400">123 Fitness Street, Pune, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-bold text-white">Phone</h3>
                    <p className="mt-1 text-gray-400">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <p className="mt-1 text-gray-400">hello@ironforgegym.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 shrink-0 text-orange-500" />
                  <div>
                    <h3 className="font-bold text-white">Front Desk Hours</h3>
                    <p className="mt-1 text-gray-400">Mon - Sat: 6:00 AM – 10:00 PM</p>
                    <p className="text-gray-400">Sunday: 8:00 AM – 6:00 PM</p>
                    <p className="mt-1 text-xs font-semibold text-orange-500">(24/7 Access for Pro & VIP members)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">Send Us A Message</h2>

            {status && (
              <div
                className={`mt-4 flex items-center gap-3 rounded-xl p-4 text-sm font-medium ${
                  status.type === "success"
                    ? "border border-green-500/30 bg-green-500/10 text-green-400"
                    : "border border-red-500/30 bg-red-500/10 text-red-400"
                }`}
              >
                {status.type === "success" ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
                <span>{status.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-400">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:opacity-50"
              >
                {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
