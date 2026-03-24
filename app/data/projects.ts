export type PortfolioProject = {
  title: string;
  description: string;
  href?: string;
  tag?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "gitgauge",
    description:
      "A team-built educational analytics tool that examines Git repositories to evaluate contributor activity and support grading decisions. Built with Tauri 2.0, Rust, Svelte/SvelteKit, and GitHub Actions.",
    href: "https://monash-fit3170.github.io/2025W1-Commitment/",
    tag: "Web app",
    imageSrc: "/gitgauge.png",
    imageAlt: "gitgauge project preview",
  },
  {
    title: "This Portfolio Website",
    description:
      "A responsive personal portfolio built with Next.js and Tailwind CSS to showcase projects, background, and contact details. Includes reusable project tiles, a featured-projects homepage section, and structured placeholder areas for images and personal content.",
    href: "https://github.com/dBystersky/portfolio_website",
    tag: "Website",
    imageSrc: "/github.svg",
    imageAlt: "Portfolio website repository preview",
  },
  {
    title: "[Project title]",
    description: "[Short description for this tile.]",
    href: "#",
    tag: "Placeholder",
  },
  {
    title: "[Project title]",
    description: "[Short description for this tile.]",
    href: "#",
    tag: "Placeholder",
  },
];
