import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ImageIcon } from "lucide-react";

import type { PortfolioProject } from "../data/projects";

const cardClass = "border border-gray-300 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm";

type Props = {
  project: PortfolioProject;
  compact?: boolean;
};

export function ProjectTile({ project, compact }: Props) {
  const isCompact = Boolean(compact);

  return (
    <article
      className={`${cardClass} overflow-hidden flex flex-col h-full ${
        isCompact ? "hover:shadow-md" : "hover:shadow-xl"
      } transition-shadow`}
    >
      <div
        className={`relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-b border-gray-200 ${
          isCompact ? "aspect-[16/10]" : "aspect-video"
        }`}
      >
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? `${project.title} project image`}
            fill
            sizes={isCompact ? "(max-width: 1024px) 50vw, 33vw" : "(max-width: 1024px) 100vw, 33vw"}
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <ImageIcon className={isCompact ? "w-8 h-8" : "w-10 h-10"} aria-hidden />
            <span className="text-xs">Project image</span>
          </div>
        )}
        {project.tag ? (
          <span className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
            {project.tag}
          </span>
        ) : null}
      </div>
      <div className={`flex flex-col flex-1 ${isCompact ? "p-4" : "p-6"}`}>
        <h2
          className={`font-semibold text-gray-900 mb-2 ${
            isCompact ? "text-base" : "text-xl"
          }`}
        >
          {project.title}
        </h2>
        <p
          className={`text-gray-700 leading-relaxed flex-1 mb-3 ${
            isCompact ? "text-xs line-clamp-3" : "text-sm"
          }`}
        >
          {project.description}
        </p>
        {project.href && project.href !== "#" ? (
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 font-medium text-indigo-700 hover:text-indigo-900 transition ${
              isCompact ? "text-xs" : "text-sm"
            }`}
          >
            View project
            <ExternalLink className={isCompact ? "w-3.5 h-3.5" : "w-4 h-4"} aria-hidden />
          </Link>
        ) : (
          <span
            className={`text-gray-400 ${isCompact ? "text-xs" : "text-sm"}`}
          >
            Private repository
          </span>
        )}
      </div>
    </article>
  );
}
