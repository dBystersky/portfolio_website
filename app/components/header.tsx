import Link from "next/link";

export default function WebsiteHeader() {
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50 ">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Left / Logo */}
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight hover:text-gray-600 transition">
                        <Link href="/">Darcy Bystersky</Link>
                    </h1>
                </div>
                
                { /* Nav */}
                <nav className="hidden md:flex gap-6 justify-between items-center text-black font-medium"> 
                    <Link href="/" className="hover:text-gray-600 hover:outline transition">Home</Link>
                    <Link href="/about" className="hover:text-gray-600 hover:outline transition">About Me</Link>
                    <Link href="/portfolio" className="hover:text-gray-600 hover:outline transition">Portfolio</Link>
                    <Link href="/contact" className="hover:text-gray-600 hover:outline transition">Contact</Link>
                </nav>

            </div>

        </header>
    )
}