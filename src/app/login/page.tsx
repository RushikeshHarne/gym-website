"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    if (isSignUp) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      setLoading(false);

      if (error) {
        setStatus({ type: "error", text: error.message });
      } else {
        if (data.user) {
          localStorage.setItem("user_email", data.user.email || "");
        }
        setStatus({
          type: "success",
          text: "Account created! Check your email for confirmation or try logging in.",
        });
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      setLoading(false);

      if (error) {
        setStatus({ type: "error", text: error.message });
      } else {
        if (data.user) {
          localStorage.setItem("user_email", data.user.email || "");
          localStorage.setItem("user_id", data.user.id || "");
        }
        setStatus({ type: "success", text: "Signed in successfully! Redirecting..." });
        setTimeout(() => {
          window.location.href = "/";
        }, 1200);
      }
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-150px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-extrabold text-white">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span>
              IRON<span className="text-orange-500">FORGE</span>
            </span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white">
            {isSignUp ? "Create Account" : "Member Portal"}
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            {isSignUp
              ? "Sign up to join IronForge and manage your pass"
              : "Sign in to manage your pass and class bookings"}
          </p>
        </div>

        {status && (
          <div
            className={`mt-6 flex items-center gap-3 rounded-xl p-4 text-sm font-medium ${
              status.type === "success"
                ? "border border-green-500/30 bg-green-500/10 text-green-400"
                : "border border-red-500/30 bg-red-500/10 text-red-400"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 shrink-0" />
            )}
            <span>{status.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-400">
              Email Address
            </label>
            <div className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rush@gmail.com"
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-400">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:opacity-50"
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            <span>{loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}</span>
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setStatus(null);
            }}
            className="font-semibold text-orange-500 hover:underline"
          >
            {isSignUp ? "Sign In" : "Join IronForge"}
          </button>
        </div>
      </div>
    </div>
  );
}
