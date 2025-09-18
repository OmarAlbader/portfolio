import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  snowflakeColor: string;
  borderRadius: string;
  animationSpeed: string;
  snowEnabled: boolean;
  rainbowSnow: boolean;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setSnowflakeColor: (color: string) => void;
  setBorderRadius: (radius: string) => void;
  setAnimationSpeed: (speed: string) => void;
  setSnowEnabled: (enabled: boolean) => void;
  setRainbowSnow: (enabled: boolean) => void;
}

// Default theme values
const defaultThemeValues = {
  primaryColor: "#f0b100",
  secondaryColor: "#dddddd",
  snowflakeColor: "#dddddd",
  borderRadius: "0.5",
  animationSpeed: "normal",
  snowEnabled: true,
  rainbowSnow: false,
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  ...defaultThemeValues,
  setPrimaryColor: () => {},
  setSecondaryColor: () => {},
  setSnowflakeColor: () => {},
  setBorderRadius: () => {},
  setAnimationSpeed: () => {},
  setSnowEnabled: () => {},
  setRainbowSnow: () => {},
});

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState(
    defaultThemeValues.primaryColor
  );
  const [secondaryColor, setSecondaryColor] = useState(
    defaultThemeValues.secondaryColor
  );
  const [snowflakeColor, setSnowflakeColor] = useState(
    defaultThemeValues.snowflakeColor
  );
  const [borderRadius, setBorderRadius] = useState(
    defaultThemeValues.borderRadius
  );
  const [animationSpeed, setAnimationSpeed] = useState(
    defaultThemeValues.animationSpeed
  );
  const [snowEnabled, setSnowEnabled] = useState(
    defaultThemeValues.snowEnabled
  );
  const [rainbowSnow, setRainbowSnow] = useState(
    defaultThemeValues.rainbowSnow
  );

  // Apply theme changes to CSS variables and classes
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty(
      "--secondary-color",
      secondaryColor
    );
    document.documentElement.style.setProperty(
      "--snowflake-color",
      snowflakeColor
    );
    document.documentElement.style.setProperty(
      "--border-radius",
      `${borderRadius}rem`
    );
    document.documentElement.style.setProperty(
      "--rainbow-snow",
      rainbowSnow ? "1" : "0"
    );

    // Apply animation speed classes
    document.documentElement.classList.remove(
      "animation-slow",
      "animation-normal",
      "animation-fast"
    );
    document.documentElement.classList.add(`animation-${animationSpeed}`);
  }, [
    primaryColor,
    secondaryColor,
    snowflakeColor,
    borderRadius,
    animationSpeed,
    rainbowSnow,
  ]);

  return (
    <ThemeContext.Provider
      value={{
        primaryColor,
        secondaryColor,
        snowflakeColor,
        borderRadius,
        animationSpeed,
        snowEnabled,
        rainbowSnow,
        setPrimaryColor,
        setSecondaryColor,
        setSnowflakeColor,
        setBorderRadius,
        setAnimationSpeed,
        setSnowEnabled,
        setRainbowSnow,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
