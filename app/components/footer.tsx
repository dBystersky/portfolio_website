import Image from "next/image";

export default function WebsiteFooter() {
    return (
        <footer className="w-full px-8 py-3 bg-white shadow-md">
            <div className="flex flex-col items-center gap-4">
                <div className="flex gap-6">
                    <a
                        href="https://github.com/dBystersky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                    >
                        <Image
                            src="/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/darcy-bystersky-7a03272b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                    >
                        <Image
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>

                <div className="text-center text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Darcy Bystersky. All rights reserved.
                </div>

            </div>
        </footer>
    )
}