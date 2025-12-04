import React from "react";
import Link from "next/link";

export default function WebsiteHeader() {
    return (
        <header className="w-full px-8 py-4 bg-white shadow-md sticky top-0 z-50 ">

            { /* Left */}
            <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold semi-bold text-black">Darcy Bystersky</h1>
            </div>

            { /* Centre */}
            <nav className="hidden md:flex gap-6 justify-between items-center text-black font-medium">
                <Link href="/" className="hover:text-gray-600 hover:outline transition">Home</Link>
                <Link href="/about" className="hover:text-gray-600 hover:outline transition">About Me</Link>
                <Link href="/portfolio" className="hover:text-gray-600 hover:outline transition">Portfolio</Link>
                <Link href="/contact" className="hover:text-gray-600 hover:outline transition">Contact</Link>
            </nav>

        </header>
    )
}