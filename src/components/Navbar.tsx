"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Trainers", href: "/trainers" },
  { name: "Classes", href: "/classes" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Dumbbell className="h-7 w-7" />
          <span>IRON<span className="text-orange-500">FORGE</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="rounded-full border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/membership"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 transition hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-3 pt-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 rounded-full border border-orange-500 px-4 py-2 text-center font-semibold text-orange-500"
              >
                Login
              </Link>

              <Link
                href="/membership"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 rounded-full bg-orange-500 px-4 py-2 text-center font-semibold text-white"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
