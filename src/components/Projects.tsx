import { useEffect } from "react";

interface IProps {
  title?: string;
  projects: IProject[];
}

interface IProject {
  name: string;
  tags?: string[];
  img?: string;
}

const Projects = ({ title = "selected projects", projects }: IProps) => {
  const handleMouseMove = (e: React.MouseEvent) => {
    const targetY = e.clientY - e.currentTarget.getBoundingClientRect().top;
    const projectHeight = 180;
    const imgHeight = 240;

    if (!e.currentTarget.classList.contains("projects")) return;

    projects.forEach((_, index) => {
      const projItem = document.getElementById(`proj-item${index + 1}`);
      if (!projItem) return;

      projItem.style.transition =
        "transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s";
      projItem.style.transform = `translate3d(0, ${
        targetY - imgHeight / 2
      }px, 0)`;

      const projectStart = index * projectHeight + 120;
      const projectEnd = (index + 1) * projectHeight + 120;

      if (targetY > projectStart && targetY <= projectEnd) {
        projItem.style.opacity = "1";
      } else {
        projItem.style.opacity = "0";
      }

      const targetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const elementWidth = e.currentTarget.getBoundingClientRect().width;

      if (targetX < 40 || targetX > 1100) {
        projItem.style.opacity = "0";
      }

      const paddingY = 40; // (my-10) = 40px, 20px top and 20px bottom
      if (
        targetY < 150 ||
        targetY > projects.length * projectHeight + 120 - (paddingY - 10)
      ) {
        projItem.style.opacity = "0";
        console.log(targetY);
      }
    });
  };

  useEffect(() => {
    const projects = document.querySelector(".projects");
    if (projects) {
      projects.addEventListener("mousemove", handleMouseMove);
      // window.addEventListener("mousemove", handleBodyMouseMove);
    }
  }, []);

  return (
    <>
      {projects.length ? (
        <div className="animate px-30">
          <p className="px-10 absolute pt-20 text-2xl">{title.toUpperCase()}</p>

          <div className="py-30 px-10 projects">
            <div className="relative text-6xl anton group">
              <div>
                {projects.map((project, index) => (
                  <img
                    src={project.img}
                    alt={`${project.name} project`}
                    id={`proj-item${index + 1}`}
                    className="w-50 h-60 m-0 text-lg z-50 pointer-events-none absolute opacity-0 -top-30 left-[40%]"
                  />
                ))}
              </div>
              {projects.map((project, index) => (
                <>
                  <div
                    key={index}
                    className="group-hover:opacity-30 hover:!opacity-100 duration-500"
                  >
                    <a className="inline-flex gap-x-5 my-10" key={index + 1}>
                      <span className="text-2xl">#{index + 1}</span>
                      <div>
                        <span className="">
                          <span className="">{project.name}</span>
                        </span>

                        <small className="text-sm font-extralight pt-5 flex items-center roboto-flex">
                          {project.tags?.map((tag, index) => (
                            <div key={index}>
                              {tag}
                              {project.tags &&
                                index !== project.tags.length - 1 && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 mx-2" />
                                )}
                            </div>
                          ))}
                        </small>
                      </div>
                    </a>
                  </div>
                  {index !== projects.length - 1 && (
                    <hr className="border-white/25 mb-0" />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Projects;
