import { useEffect, useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Stacks from "./components/Stacks/Stacks";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import SnowEffect from "./components/SnowEffect";
import ThemeControls from "./components/ThemeControls";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { snowEnabled } = useTheme();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");

            observer.unobserve(entry.target);
            return;
          }
          entry.target.classList.remove("in-view");
        });
      },
      {
        rootMargin: "-100px",
      }
    );

    const allAnimatedElements = document.querySelectorAll(".animate");
    allAnimatedElements.forEach((element) => observer.observe(element));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {snowEnabled && <SnowEffect />}

      <div className="fixed inset-0 -z-1 bg-gradient-to-b from-black/80 to-[rgba(25,25,30,0.8)] to-125%" />

      <div className="content-wrapper space-y-60">
        <Aside email="omaratheer233@gmail.com" />

        <>
          <div
            id="menu-backdrop"
            className={`fixed w-full h-full bg-black z-5 transition-opacity duration-100 ${
              showMenu ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setShowMenu(false)}
          />

          <div
            className={`fixed top-0 ${
              showMenu
                ? "rounded-none right-0 "
                : "-right-1/3 rounded-[50%] duration-300"
            } bg-[rgba(30,30,30)] w-1/3 h-screen backdrop-brightness-50 transition-all duration-500 ease-out z-10 overflow-hidden`}
          >
            <div className="h-full">
              <ThemeControls />
            </div>
          </div>
        </>

        <div
          className="fixed right-10 top-7 h-10 cursor-pointer flex flex-col items-center justify-center group my-0 z-10 w-12"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <div
            className={`${
              showMenu
                ? "  -rotate-42 w-6"
                : "w-8 group-hover:-rotate-23 group-hover:w-5"
            } origin-top-right h-[3px] rounded-full bg-white duration-300`}
          ></div>
          <div
            className={`${
              showMenu
                ? " rotate-42 w-6"
                : "w-8 group-hover:rotate-23 group-hover:w-5"
            } origin-bottom-right mt-3  h-[3px] rounded-full bg-white duration-300`}
          ></div>
        </div>

        <div className="animate">
          <Main
            dev="FRONT DEVELOPER"
            name="Omar"
            NumofExp="2"
            NumofProjects="10"
          />
        </div>

        <div className="animate text-7xl px-35 font-extralight roboto-flex leading-16">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </div>

        <p className="animate px-30 font-light mb-3 tracking-wider text-primary">
          Who Am I?
        </p>
        <hr className="animate my-0 mx-30 border-white/25" />

        <div className="animate flex justify-between px-30 py-10">
          <div className="text-5xl font-normal text-nowrap">
            Hi, I'm <span className="font-medium">OMAR</span>.
          </div>
          <div className="text-lg font-lighter mr-0 px-48 space-y-4 mb-20">
            <p className="animate delay-100">
              I'm a frontend web developer dedicated to turning ideas into
              creative solutions. I specialize in creating seamless and
              intuitive user experiences.
            </p>

            <p className="animate delay-150 ">
              My approach focuses on creating scalable, high-performing
              solutions tailored to both user needs and business objectives. By
              prioritizing performance, accessibility, and responsiveness, I
              strive to deliver experiences that not only engage users but also
              drive tangible results.
            </p>
          </div>
        </div>

        <Stacks />

        <Experiences
          exps={[
            {
              company: "Strativ AB",
              title: "Frontend Developer",
              date: "2024 - Present",
            },
            {
              company: "Experion Technologies",
              title: "Software Engineer",
              date: "2021 - 2024",
            },
            {
              company: "Strativ AB",
              title: "Backend Developer",
              date: "2019 - 2021",
            },
            {
              company: "Experion Technologies",
              title: "AI Engineer",
              date: "2017 - 2019",
            },
          ]}
        />

        <Projects
          projects={[
            {
              name: "Tawasol",
              tags: ["React", "Redux", "React i18n"],
              img: "/images/illustrator.webp",
              url: "https://github.com/OmarAlbader/tawasol-client",
            },
            {
              name: "Notaty",
              tags: ["HTML", "CSS & SCSS", "Javascript"],
              img: "/images/photoshop.webp",
              url: "https://github.com/OmarAlbader/Notaty",
            },
            {
              name: "Tenzies Game",
              tags: ["React.js", "Tailwind CSS"],
              img: "/images/adobexd.webp",
              url: "https://github.com/OmarAlbader/Tenzies-Game",
            },
          ]}
        />

        <Footer email="omaratheer233@gmail.com" name="Omar Albader" />
      </div>
    </>
  );
}

export default App;
