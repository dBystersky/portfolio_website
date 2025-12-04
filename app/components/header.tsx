import Link from "next/link";

export default function WebsiteHeader() {
    return (
        <header className="w-full bg-black shadow-md sticky top-0 z-50 opacity-80">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Left / Logo */}
                <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-gray-200 tracking-tight hover:text-white transition">
                        <Link href="/">Darcy Bystersky</Link>
                    </h1>
                </div>
                
                { /* Nav */}
                <nav className="hidden md:flex gap-6 justify-between items-center text-gray-300 font-medium"> 
                    <Link href="/" className="hover:text-white hover:outline transition">Home</Link>
                    <Link href="/about" className="hover:text-white hover:outline transition">About Me</Link>
                    <Link href="/portfolio" className="hover:text-white hover:outline transition">Portfolio</Link>
                    <Link href="/contact" className="hover:text-white hover:outline transition">Contact</Link>
                </nav>

            </div>

        </header>
    )
}