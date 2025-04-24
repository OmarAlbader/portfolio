import Stack from "./Stack";

const Stacks = () => {
  return (
    <div className="animate pl-30">
      <div className="flex relative text-xl h-15 items-center mb-10">
        {/* <span className="animate-ping absolute w-5 h-5 bg-white rounded-br-full rounded-tl-full mx-5"></span>
          <span className="animate- absolute w-5 h-5 bg-white rounded-bl-full rounded-tr-full mx-5"></span> */}

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

        <span className="pl-5">MY STACK</span>
      </div>

      <Stack
        label="FRONTEND"
        items={[
          { name: "Javascript", image: "js.webp" },
          { name: "Typescript", image: "ts.webp" },
          { name: "React", image: "react.webp" },
          { name: "Redux", image: "redux.webp" },
          { name: "Tailwind CSS", image: "tailwind.webp" },
          { name: "SASS", image: "sass.webp" },
          { name: "Bootstrap", image: "bootstrap.svg" },
        ]}
      />

      <Stack
        label="BACKEND"
        items={[
          { name: "Node.js", image: "node-js.webp" },
          { name: "Express", image: "express.webp" },
        ]}
      />

      <Stack
        label="DATABASE"
        items={[
          { name: "MySQL", image: "mysql.svg" },
          { name: "SQLite", image: "sqlite.webp" },
          { name: "MongoDB", image: "mongodb.svg" },
        ]}
      />

      <Stack
        label="TOOLS"
        items={[
          { name: "Git", image: "git.webp" },
          { name: "Github", image: "github.webp" },
          { name: "Postman", image: "postman.webp" },
          { name: "Figma", image: "figma.webp" },
          { name: "Illustrator", image: "illustrator.webp" },
          { name: "Photoshop", image: "photoshop.webp" },
          { name: "Adobe XD", image: "adobexd.webp" },
        ]}
      />
    </div>
  );
};

export default Stacks;
