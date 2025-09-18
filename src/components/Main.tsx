interface IProps {
  NumofExp: string;
  dev: string;
  name: string;
  desc?: string;
  skills?: string[];
  NumofProjects: string;
}

const Main = ({
  NumofExp = "0",
  dev = "[DEV]",
  name = "[NAME]",
  desc,
  skills,
  NumofProjects,
}: IProps) => {
  return (
    <>
      <div className="flex items-center justify-between pl-30 px-10 h-screen">
        <div className="space-y-5 flex flex-col ">
          <div className="text-6xl font-bold anton tracking-wide text-primary ">
            {dev.split(" ")[0].toUpperCase()}
            <div className="text-secondary pl-5 animate-pulse">
              {dev
                .split(" ")[1]
                .toUpperCase()
                .split("")
                .map((letter, index) => (
                  <span key={index.toString()}>{letter}</span>
                ))}
            </div>
          </div>

          <p className="w-1/2 text-xl roboto-flex">
            Hi! I'm <span className="font-bold">{name}</span>
            {desc
              ? desc
              : `. A creative
            Frontend Developer experienced in building high-performance,
            scalable, and responsive web solutions.`}
          </p>

          <a href="mailto:omaratheer233@gmail.com" className="w-fit btn-hover">
            <span className="text-hover">HIRE ME</span>
          </a>
        </div>

        <div className="mt-50 space-y-5">
          <div className="flex flex-col items-end text-lg font-medium tracking-wide text-secondary text-nowrap">
            <span className="text-primary opacity-80 font-bold anton text-4xl">
              {NumofExp}+
            </span>
            Years of Experience
          </div>

          {skills && (
            <ul className="text-nowrap text-xl space-y-5 text-end mt-10">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:absolute before:-right-8 before:top-2.5 relative"
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}

          {NumofProjects && (
            <div className="flex flex-col items-end text-lg font-medium text-secondary tracking-wide text-nowrap my-10">
              <span className="text-primary opacity-80 font-bold anton text-4xl">
                {NumofProjects}+
              </span>
              Completed Projects
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
