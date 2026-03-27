import Link from "next/link";
import { ArrowRight, ImageIcon, LayoutGrid, Mail, Sparkles, User } from "lucide-react";

import WebsiteHeader from "./components/header";
import WebsiteFooter from "./components/footer";
import { ProjectTile } from "./components/project-tile";
import { portfolioProjects } from "./data/projects";

const pageShell =
  "min-h-screen from-indigo-50 via-white to-purple-50 py-12 px-4 bg-gradient-to-br text-black";

const cardClass = "border border-gray-300 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm";

const showcaseCount = 3;
const showcaseProjects = portfolioProjects.slice(0, showcaseCount);

export default function Home() {
  return (
    <>
      <WebsiteHeader />

      <div className={pageShell}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 font-bold">Welcome</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {/* Replace with your one-line introduction */}
              [Add a short tagline about who you are and what you do.]
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center mb-10">
            {/* Hero image: put a file in public/ (e.g. public/hero.jpg) and use next/image here */}
            <div
              className={`${cardClass} flex aspect-[4/3] items-center justify-center p-4 text-center sm:p-6 w-full max-w-[min(100%,280px)] sm:max-w-md mx-auto lg:mx-0 lg:max-w-none`}
            >
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <ImageIcon className="w-12 h-12" aria-hidden />
                <p className="text-sm">
                  Image placeholder — add your photo or hero image
                </p>
              </div>
            </div>

            <div className={`${cardClass} p-8 space-y-4`}>
              <div className="flex items-center gap-2 text-indigo-700 font-medium">
                <Sparkles className="w-5 h-5" aria-hidden />
                <span>Introduction</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {/* Replace with a few sentences about yourself */}
                [Write a brief welcome paragraph: your focus, what visitors will find
                here, and what you are excited about.]
              </p>
              <p className="text-gray-700 leading-relaxed">
                {/* Optional second paragraph */}
                [Optional: another short paragraph — background, current role, or
                interests.]
              </p>
            </div>
          </div>

          <section className="max-w-5xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-indigo-700 font-medium mb-1">
                  <LayoutGrid className="w-5 h-5" aria-hidden />
                  <span>Featured work</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Recent projects</h2>
                <p className="text-gray-600 text-sm mt-1 max-w-xl">
                  A few highlights! See the full list on the portfolio page.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 shrink-0 text-sm font-medium text-indigo-700 hover:text-indigo-900 transition"
              >
                View all projects
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {showcaseProjects.map((project, i) => (
                <ProjectTile key={`showcase-${project.title}-${i}`} project={project} compact />
              ))}
            </div>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/about"
              className={`${cardClass} p-8 flex flex-col h-full hover:shadow-xl transition-shadow group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
            >
              <div className="flex items-center gap-2 text-indigo-700 font-medium mb-3">
                <User className="w-5 h-5 shrink-0" aria-hidden />
                <span>About me</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Background & story</h2>
              <p className="text-gray-700 leading-relaxed flex-1 mb-6">
                {/* Optional teaser — replace with your copy */}
                [Short line on what visitors will learn on your about page.]
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 group-hover:text-indigo-900 transition">
                Go to about
                <ArrowRight className="w-4 h-4" aria-hidden />
              </span>
            </Link>

            <Link
              href="/contact"
              className={`${cardClass} p-8 flex flex-col h-full hover:shadow-xl transition-shadow group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
            >
              <div className="flex items-center gap-2 text-indigo-700 font-medium mb-3">
                <Mail className="w-5 h-5 shrink-0" aria-hidden />
                <span>Contact</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Get in touch</h2>
              <p className="text-gray-700 leading-relaxed flex-1 mb-6">
                [Short line inviting questions, collaborations, or opportunities.]
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 group-hover:text-indigo-900 transition">
                Go to contact
                <ArrowRight className="w-4 h-4" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <WebsiteFooter />
    </>
  );
}
