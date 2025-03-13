import { useEffect, useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Stacks from "./components/Stacks/Stacks";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";

function App() {
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
        // threshold: 0.5,
        rootMargin: "-100px",
      }
    );

    const allAnimatedElements = document.querySelectorAll(".animate");
    allAnimatedElements.forEach((element) => observer.observe(element));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="space-y-60">
      <Aside email="omaratheer233@gmail.com" />

      {/* Menu //TODO Continue Menu */}
      <div
        className={`fixed top-0 ${
          showMenu
            ? "rounded-none right-0"
            : "-right-[25%] rounded-[75%] duration-300"
        } bg-gray-500 w-1/4 h-screen transition-all duration-500 ease-in-out z-10`}
      />

      <div
        className="fixed right-10 top-7 h-fit group my-0 z-10"
        onClick={() => setShowMenu((prev: boolean) => !prev)}
      >
        <div className="w-8 h-[3px] rounded-full bg-white duration-300 group-hover:-rotate-30 group-hover:w-5 group-hover:-translate-x-2 group-hover:translate-y-[0.15rem]"></div>
        <div className="mt-3 w-8 h-[3px] rounded-full bg-white duration-300 group-hover:rotate-30 group-hover:w-5  group-hover:-translate-x-2 group-hover:-translate-y-[0.15rem]"></div>
      </div>

      {/* Main */}
      <div className="animate">
        <Main
          dev="FRONT DEVELOPER"
          name="Omar"
          NumofExp="2"
          NumofProjects="10"
        />
      </div>

      {/* description */}
      <div className="animate text-7xl px-35 font-extralight roboto-flex leading-16">
        I believe in a user centered design approach, ensuring that every
        project I work on is tailored to meet the specific needs of its users.
      </div>

      {/* Who Am I? */}
      <p className="animate px-30 font-light mb-3 tracking-wider">Who Am I?</p>
      <hr className="animate my-0 mx-30 border-white/25" />

      <div className="animate flex justify-between px-30 py-10">
        <div className="text-5xl font-normal text-nowrap">
          Hi, I'm <span className="font-medium">OMAR</span>.
        </div>
        <div className="text-lg font-lighter mr-0 px-48 space-y-4 mb-20">
          <p className="animate delay-100">
            I'm a frontend web developer dedicated to turning ideas into
            creative solutions. I specialize in creating seamless and intuitive
            user experiences.
          </p>

          <p className="animate delay-150 ">
            My approach focuses on creating scalable, high-performing solutions
            tailored to both user needs and business objectives. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            experiences that not only engage users but also drive tangible
            results.
          </p>
        </div>
      </div>

      {/* Stacks */}
      <Stacks />

      {/* Experience */}
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

      {/* Selected Projects */}
      <Projects
        projects={[
          {
            name: "Tawasol",
            tags: ["React", "Redux", "React i18n"],
            img: "../public/images/illustrator.webp",
          },
          {
            name: "Notaty",
            tags: ["HTML", "CSS & SCSS", "Javascript"],
            img: "../public/images/photoshop.webp",
          },
          {
            name: "Tenzies Game",
            tags: ["React.js", "Tailwind CSS"],
            img: "../public/images/adobexd.webp",
          },
        ]}
      />

      <Footer email="omaratheer233@gmail.com" name="Omar Albader" />
    </div>
  );
}

export default App;
