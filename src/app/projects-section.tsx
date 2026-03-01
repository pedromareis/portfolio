import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card-v2";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export const ProjectsSection = ({ color }: { color: string }) => {
  return (
    <section
      id="projects"
      className="relative p-20 font-gt-standard text-sm gap-4 flex flex-col"
      style={{
        color: "white",
        backgroundColor: color,
      }}
      // className="m-20 rounder-md p-20 font-gt-standard text-sm gap-4 flex flex-col border-[1px] border-grey rounded-3xl"
    >
      <div className="z-10">
        <h1 className="text-xl font-bold">Projects.</h1>

        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 mx-auto mt-6">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-20 h-full"
        style={{
          margin: "0px 0px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </section>
  );
};
