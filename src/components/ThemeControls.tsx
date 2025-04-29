import { useTheme } from "../context/ThemeContext";
import { useState, useDeferredValue, useEffect } from "react";

const defaultTheme = {
  primaryColor: "#f0b100",
  secondaryColor: "#dddddd",
  snowflakeColor: "#dddddd",
  borderRadius: "0.5",
  animationSpeed: "normal",
  snowEnabled: true,
  rainbowSnow: false,
};

const ThemeControls = () => {
  const {
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
  } = useTheme();

  const [localPrimaryColor, setLocalPrimaryColor] = useState(primaryColor);
  const [localSecondaryColor, setLocalSecondaryColor] =
    useState(secondaryColor);
  const [localSnowflakeColor, setLocalSnowflakeColor] =
    useState(snowflakeColor);

  const deferredPrimaryColor = useDeferredValue(localPrimaryColor);
  const deferredSecondaryColor = useDeferredValue(localSecondaryColor);
  const deferredSnowflakeColor = useDeferredValue(localSnowflakeColor);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPrimaryColor(deferredPrimaryColor);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [deferredPrimaryColor, setPrimaryColor]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSecondaryColor(deferredSecondaryColor);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [deferredSecondaryColor, setSecondaryColor]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSnowflakeColor(deferredSnowflakeColor);
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [deferredSnowflakeColor, setSnowflakeColor]);

  useEffect(() => {
    setLocalPrimaryColor(primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    setLocalSecondaryColor(secondaryColor);
  }, [secondaryColor]);

  useEffect(() => {
    setLocalSnowflakeColor(snowflakeColor);
  }, [snowflakeColor]);

  return (
    <div className="h-full p-10">
      <h3 className="text-xl font-bold mb-6">Customize Theme</h3>

      <div className="space-y-6">
        {/* Primary Color */}
        <div>
          <div className="block text-sm font-medium mb-2">Primary Color</div>
          <div className="flex flex-wrap gap-2">
            <div
              className="relative overflow-hidden rounded-xl border-2 w-10 h-10"
              style={{ backgroundColor: localPrimaryColor }}
            >
              <input
                type="color"
                name="primaryColor"
                className="absolute -top-2 -left-2 cursor-pointer w-20 h-20"
                value={deferredPrimaryColor}
                onChange={(e) => setLocalPrimaryColor(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Secondary Color */}
        <div>
          <div className="block text-sm font-medium mb-2">Secondary Color</div>
          <div className="flex flex-wrap gap-2">
            <div
              className="relative overflow-hidden rounded-xl border-2 w-10 h-10"
              style={{ backgroundColor: localSecondaryColor }}
            >
              <input
                type="color"
                name="secondaryColor"
                className="absolute -top-2 -left-2 cursor-pointer w-20 h-20"
                value={localSecondaryColor}
                onChange={(e) => setLocalSecondaryColor(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Snow Toggle */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="toggle-snow"
            className="text-sm font-medium cursor-pointer"
          >
            Enable Snow Effect
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="toggle-snow"
              className="sr-only peer"
              checked={snowEnabled}
              onChange={(e) => setSnowEnabled(e.target.checked)}
            />
            <div
              className={`w-11 h-6 rounded-full peer-focus:ring-2 peer-focus:ring-primary/50 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:border-gray-300 after:border after:rounded-full 
                          after:h-5 after:w-5 after:transition-all
                          ${
                            snowEnabled
                              ? "bg-primary after:translate-x-full after:border-white"
                              : "bg-gray-600 after:translate-x-0"
                          }`}
            ></div>
          </label>
        </div>

        {snowEnabled && (
          <div>
            <div className="block text-sm font-medium mb-2">
              Snowflakes Color
            </div>
            <div className="flex flex-wrap gap-2">
              <div
                className="relative overflow-hidden rounded-xl border-2 w-10 h-10"
                style={{ backgroundColor: localSnowflakeColor }}
              >
                <input
                  type="color"
                  name="snowflakeColor"
                  className="absolute -top-2 -left-2 cursor-pointer w-20 h-20"
                  value={localSnowflakeColor}
                  onChange={(e) => setLocalSnowflakeColor(e.target.value)}
                  disabled={rainbowSnow}
                />
              </div>
              <div className="ml-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rainbowSnow"
                  checked={rainbowSnow}
                  onChange={(e) => setRainbowSnow(e.target.checked)}
                />
                <label htmlFor="rainbowSnow" className="text-sm">
                  Rainbow Mode
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Border Radius */}
        <div>
          <div className="block text-sm font-medium mb-2">Border Radius</div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={parseFloat(borderRadius)}
              onChange={(e) => setBorderRadius(e.target.value)}
              className="w-full"
            />
            <div
              className="w-10 h-10 bg-primary"
              style={{ borderRadius: `${borderRadius}rem` }}
            />
          </div>
        </div>

        {/* Animation Speed */}
        <div>
          <div className="block text-sm font-medium mb-2">Animation Speed</div>
          <select
            value={animationSpeed}
            id="animation-speed"
            onChange={(e) => setAnimationSpeed(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3"
          >
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => {
            setPrimaryColor(defaultTheme.primaryColor);
            setSecondaryColor(defaultTheme.secondaryColor);
            setSnowflakeColor(defaultTheme.snowflakeColor);
            setBorderRadius(defaultTheme.borderRadius);
            setAnimationSpeed(defaultTheme.animationSpeed);
            setSnowEnabled(defaultTheme.snowEnabled);
            setRainbowSnow(defaultTheme.rainbowSnow);
          }}
          className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default ThemeControls;
