interface IProps {
  title: string;
  exps: { company: string; title: string; date: string }[];
}

const Experiences = ({ exps, title }: IProps) => {
  return (
    <>
      {exps.length ? (
        <div className="px-30 ">
          <div className="animate flex relative text-xl h-15 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-component text-primary"
            >
              <path
                id="componentR"
                d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
              />
              <path
                id="componentL"
                d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
              />
              <path
                id="componentB"
                d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
              />
              <path
                id="componentT"
                d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
              />
            </svg>

            <span className="pl-5">
              {title.toUpperCase() ?? "MY EXPERIENCE"}
            </span>
          </div>

          <ul className="flex flex-col pl-5 relative text-4xl anton ">
            {exps.map((exp, index) => (
              <li
                className="animate inline-flex flex-col gap-x-5 my-10"
                key={index}
              >
                <small className="text-xl roboto-flex text-white/50">
                  {exp.company}
                </small>

                <span className="py-5">{exp.title}</span>

                <small className="text-xl roboto-flex text-white/50">
                  {exp.date}
                </small>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Experiences;
