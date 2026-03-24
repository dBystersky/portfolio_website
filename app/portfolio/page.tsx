import WebsiteHeader from "../components/header";
import WebsiteFooter from "../components/footer";
import { ProjectTile } from "../components/project-tile";
import { portfolioProjects } from "../data/projects";

const pageShell =
  "min-h-screen from-indigo-50 via-white to-purple-50 py-12 px-4 bg-gradient-to-br text-black";

export default function PortfolioPage() {
  return (
    <>
      <WebsiteHeader />

      <div className={pageShell}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 font-bold">Portfolio</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {/* Page intro */}
              [Describe the kind of work you showcase here — products, experiments,
              client work, etc.]
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, i) => (
              <ProjectTile key={`${project.title}-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <WebsiteFooter />
    </>
  );
}
