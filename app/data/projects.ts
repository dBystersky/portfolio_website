export type PortfolioProject = {
  title: string;
  description: string;
  href?: string;
  tag?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "gitgauge",
    description:
      "In a team, developed an educational tool to analyse Git repositories, specifically the contributions by contributors and to then determine an appropriate “scale” for a student’s grade. Stack: Tauri 2.0 Framework; Rust (Backend); Svelte/SvelteKit (Frontend); GitHub Actions (DevOps)",
    href: "https://monash-fit3170.github.io/2025W1-Commitment/",
    tag: "Team project",
  },
  {
    title: "[Project title]",
    description: "[Short description for this tile.]",
    href: "#",
    tag: "Web app",
  },
  {
    title: "[Project title]",
    description: "[Short description for this tile.]",
    href: "#",
    tag: "UI/UX concept",
  },
  {
    title: "[Project title]",
    description: "[Short description for this tile.]",
    href: "#",
    tag: "Data visualization",
  },
];
