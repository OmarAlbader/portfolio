import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StackItem {
  name: string;
  image: string;
}

interface IProps {
  label: string;
  items: StackItem[];
}

const Stack = ({ label, items }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Ensure refs are available
    if (!containerRef.current || !titleRef.current || !listRef.current) return;

    // Container animation with sequential properties (stagger-like effect)
    const containerTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // Create a multi-step animation for the container to simulate stagger
    containerTl.fromTo(containerRef.current, {}, { stagger: 1 });

    // Title animation timeline - similar to view timeline behavior
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "top 70%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    titleTl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    );

    // List items animation
    const listTl = gsap.timeline({
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    const listItems = listRef.current.querySelectorAll("li");
    listTl.fromTo(
      listItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
      }
    );

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [items]); // Re-run if items change

  return (
    <div
      ref={containerRef}
      className="flex justify-between mb-10 rounded-lg p-6"
    >
      <div ref={titleRef} className="font-bold text-5xl anton">
        {label}
      </div>

      <div className="w-2/3">
        <ul
          ref={listRef}
          className="flex flex-wrap space-x-15 justify-center space-y-10 text-xl"
        >
          {items.map((item, index) => (
            <li id={index.toString()} key={index} className="flex h-fit gap-5">
              <img
                src={`/images/icons/${item.image}`}
                alt={`${item.image.split(".")[0]} logo`}
                className={`${
                  item.name === "Tailwind CSS" ? "h-6" : "h-10"
                } w-auto`}
              />
              <span className="self-center">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stack;
