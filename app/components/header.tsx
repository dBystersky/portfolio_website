import React from "react";

export default function WebsiteHeader() {
    return (
        <header className="w-full px-8 py-4 bg-white shadow-md">

            { /* Left */}
            <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold semi-bold text-black">Darcy Bystersky</h1>
            </div>

            { /* Centre */}
            <nav className="hidden md:flex gap-6 justify-between items-center text-black font-medium">
                <a href="#" className="hover:text-gray-600 hover:outline transition">Home</a>
                <a href="#" className="hover:text-gray-600 hover:outline transition">About Me</a>
                <a href="#" className="hover:text-gray-600 hover:outline transition">Portfolio</a>
                <a href="#" className="hover:text-gray-600 hover:outline transition">Contact</a>
            </nav>

        </header>
    )
}