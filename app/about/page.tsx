import { ImageIcon, User } from "lucide-react";

import WebsiteHeader from "../components/header";
import WebsiteFooter from "../components/footer";

const pageShell =
  "min-h-screen from-indigo-50 via-white to-purple-50 py-12 px-4 bg-gradient-to-br text-black";

const cardClass = "border border-gray-300 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm";

export default function AboutPage() {
  return (
    <>
      <WebsiteHeader />

      <div className={pageShell}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 font-bold">About Me</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {/* Replace with a subtitle */}
              [A sentence that summarizes your story or professional angle.]
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start mb-10">
            {/* Portrait: add e.g. /public/portrait.jpg and next/image */}
            <div
              className={`${cardClass} flex aspect-square max-w-xs mx-auto lg:mx-0 w-full items-center justify-center p-6 text-center`}
            >
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <ImageIcon className="w-10 h-10" aria-hidden />
                <p className="text-sm">Portrait placeholder</p>
              </div>
            </div>

            <div className={`${cardClass} p-8 space-y-5`}>
              <div className="flex items-center gap-2 text-indigo-700 font-medium">
                <User className="w-5 h-5" aria-hidden />
                <span>My story</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {/* Main bio */}
                [Paragraph 1: who you are, where you are based, and what you care about
                professionally.]
              </p>
              <p className="text-gray-700 leading-relaxed">
                [Paragraph 2: path into your field, highlights, or what you are working
                toward now.]
              </p>
              <p className="text-gray-700 leading-relaxed">
                [Paragraph 3 (optional): hobbies, values, or how you like to collaborate.]
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${cardClass} p-8`}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills & tools</h2>
              <p className="text-gray-600 text-sm mb-4">
                {/* Intro line for this block */}
                [One line on how you use these in practice.]
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>[Skill or tool — e.g. TypeScript]</li>
                <li>[Skill or tool]</li>
                <li>[Skill or tool]</li>
                <li>[Add or remove list items as needed]</li>
              </ul>
            </div>

            <div className={`${cardClass} p-8`}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
              <p className="text-gray-600 text-sm mb-4">
                [Optional framing — e.g. “Selected roles and projects.”]
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <span className="font-medium text-gray-900">[Role / title]</span>
                  <span className="text-gray-500"> — [Org or context] · [dates]</span>
                  <p className="text-sm text-gray-600 mt-1">
                    [One line on what you did or learned.]
                  </p>
                </li>
                <li>
                  <span className="font-medium text-gray-900">[Role / title]</span>
                  <span className="text-gray-500"> — [Org or context] · [dates]</span>
                  <p className="text-sm text-gray-600 mt-1">[Short description.]</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Optional full-width image strip — swap for next/image when ready */}
          <div
            className={`${cardClass} mt-8 flex min-h-[200px] items-center justify-center p-8 text-center`}
          >
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <ImageIcon className="w-10 h-10" aria-hidden />
              <p className="text-sm">
                Wide image placeholder — workspace, banner, or extra photo
              </p>
            </div>
          </div>
        </div>
      </div>

      <WebsiteFooter />
    </>
  );
}
