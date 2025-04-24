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
  const { snowflakeColor, rainbowSnow } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Create snowflakes
    const createSnowflakes = () => {
      // Clean up previous snowflakes
      snowflakes.current.forEach((flake) => {
        if (flake.tween) flake.tween.kill();
        if (flake.element.parentNode) {
          flake.element.parentNode.removeChild(flake.element);
        }
      });

      snowflakes.current = [];

      const count = Math.min(100, Math.floor(window.innerWidth / 20)); // Responsive
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < count; i++) {
        // Create element
        const element = document.createElement("div");
        element.className = "snowflake";

        // Random properties
        const size = Math.random() * 4 + 1;
        const x = Math.random() * width;
        const y = Math.random() * height * -1;
        const speed = Math.random() * 1 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        const hue = Math.floor(Math.random() * 360); // For rainbow mode

        // Set initial styles
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

        // Add to DOM
        container.appendChild(element);

        // Create snowflake object
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

        // Animate with GSAP
        const duration = 10 + Math.random() * 20; // Between 10-30 seconds to fall

        // Create animation
        snowflake.tween = gsap.to(element, {
          y: height + 100, // Move past bottom of screen
          x: `+=${Math.sin(Math.random() * 50) * 100}`, // Random horizontal drift
          ease: "none",
          duration,
          repeat: -1,
          onRepeat: () => {
            // Reset position at top when repeating
            gsap.set(element, {
              x: Math.random() * width,
              y: -10,
            });
          },
        });

        // Add subtle rotation and color changes for rainbow mode
        if (rainbowSnow) {
          // Color cycling animation for rainbow effect
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

        // Add rotation for all snowflakes
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

    // Handle window resize
    const handleResize = () => {
      createSnowflakes();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      snowflakes.current.forEach((flake) => {
        if (flake.tween) flake.tween.kill();
      });
    };
  }, [snowflakeColor, rainbowSnow]); // Recreate snowflakes when color or rainbow mode changes

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default SnowEffect;
