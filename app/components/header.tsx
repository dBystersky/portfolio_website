"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function WebsiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black shadow-md sticky top-0 z-50 opacity-80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left / Logo */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-200 tracking-tight hover:text-white transition">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Darcy Bystersky
            </Link>
          </h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 justify-between items-center text-gray-300 font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white hover:outline transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
        >
          {isMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen ? (
        <nav className="md:hidden border-t border-white/10 px-6 pb-4 pt-3 text-gray-200">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-white/10 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}