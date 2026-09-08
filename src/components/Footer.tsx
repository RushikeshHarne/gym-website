import Link from "next/link";
import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Trainers", href: "/trainers" },
  { name: "Classes", href: "/classes" },
];

const usefulLinks = [
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-extrabold text-white"
            >
              <Dumbbell className="h-7 w-7" />
              <span>
                IRON<span className="text-orange-500">FORGE</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Build strength, improve your health, and become the strongest
              version of yourself with IronForge Gym.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Explore</h3>

            <ul className="space-y-3 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Contact Us</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span>
                  123 Fitness Street,
                  <br />
                  Pune, Maharashtra
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>hello@ironforgegym.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} IronForge Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
