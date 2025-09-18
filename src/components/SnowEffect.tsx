import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";

interface Snowflake {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  tween: gsap.core.Tween | null;
  hue?: number;
}

const SnowEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const snowflakes = useRef<Snowflake[]>([]);
  const resizeTimerRef = useRef<number | null>(null);
  const { snowflakeColor, rainbowSnow } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const createSnowflakes = () => {
      snowflakes.current.forEach((flake) => {
        if (flake.tween) flake.tween.kill();
        if (flake.element.parentNode) {
          flake.element.parentNode.removeChild(flake.element);
        }
      });

      snowflakes.current = [];

      const count = Math.min(100, Math.floor(window.innerWidth / 20));
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < count; i++) {
        const element = document.createElement("div");
        element.className = "snowflake";

        const size = Math.random() * 4 + 1;
        const x = Math.random() * width;
        const y = Math.random() * height * -1;
        const speed = Math.random() * 1 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        const hue = Math.floor(Math.random() * 360);

        const flakeColor = rainbowSnow
          ? `hsla(${hue}, 100%, 70%, ${opacity})`
          : snowflakeColor;

        gsap.set(element, {
          width: size,
          height: size,
          borderRadius: "50%",
          x,
          y,
          opacity,
          backgroundColor: flakeColor,
          boxShadow: `0 0 ${size}px rgba(255, 255, 255, 0.7)`,
        });

        container.appendChild(element);

        const snowflake: Snowflake = {
          element,
          x,
          y,
          size,
          speed,
          opacity,
          tween: null,
          hue: rainbowSnow ? hue : undefined,
        };

        const duration = 10 + Math.random() * 20;

        snowflake.tween = gsap.to(element, {
          y: height + 100,
          x: `+=${Math.sin(Math.random() * 50) * 100}`,
          ease: "none",
          duration,
          repeat: -1,
          onRepeat: () => {
            gsap.set(element, {
              x: Math.random() * width,
              y: -10,
            });
          },
        });

        if (rainbowSnow) {
          gsap.to(element, {
            backgroundColor: function () {
              return `hsla(${(hue + 180) % 360}, 100%, 70%, ${opacity})`;
            },
            duration: 3 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        gsap.to(element, {
          rotation: Math.random() * 360,
          duration: 3 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        snowflakes.current.push(snowflake);
      }
    };

    createSnowflakes();

    const handleResize = () => {
      if (resizeTimerRef.current !== null) {
        window.clearTimeout(resizeTimerRef.current);
      }

      resizeTimerRef.current = window.setTimeout(() => {
        createSnowflakes();
        resizeTimerRef.current = null;
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (resizeTimerRef.current !== null) {
        window.clearTimeout(resizeTimerRef.current);
      }

      snowflakes.current.forEach((flake) => {
        if (flake.tween) flake.tween.kill();
      });
    };
  }, [snowflakeColor, rainbowSnow]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default SnowEffect;
