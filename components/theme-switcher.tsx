// components/ThemeSwitcher.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Palette, RotateCcw, Save, Eye } from "lucide-react";
import { ThemeColors, useTheme } from "@/context/ThemeContext";

export function ThemeSwitcher() {
  const {
    currentTheme,
    themes,
    setTheme,
    updateCustomColor,
    createCustomTheme,
    resetToDefault,
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showColorPickers, setShowColorPickers] = useState(false);
  const [previewColors, setPreviewColors] = useState<Partial<ThemeColors>>({});
  const [customThemeName, setCustomThemeName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);

  const colorLabels: Record<keyof ThemeColors, string> = {
    background: "Background",
    backgroundMuted: "BackgroundMuted",
    foreground: "Foreground",
    primary: "Primary",
    secondary: "Secondary",
    text: "Text",
  };

  const handleColorChange = (colorKey: keyof ThemeColors, color: string) => {
    setPreviewColors((prev) => ({ ...prev, [colorKey]: color }));
    updateCustomColor(colorKey, color);
  };

  const applyPreview = () => {
    Object.entries(previewColors).forEach(([key, color]) => {
      if (color) {
        updateCustomColor(key as keyof ThemeColors, color);
      }
    });
    setPreviewColors({});
  };

  return (
    <div className="relative">
      {/* Theme Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm"
        style={{
          backgroundColor: "white",
          borderColor: currentTheme.colors.foreground,
          color: "black",
        }}
      >
        <Palette className="w-4 h-4" />
        <span className="text-sm font-medium text-black">{currentTheme.name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform text-black ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
            style={{
              backgroundColor: "white",
              borderColor: currentTheme.colors.foreground,
            }}
          >
            {/* Header */}
            <div
              className="p-4 border-b border-gray-100"
              style={{ borderColor: currentTheme.colors.foreground }}
            >
              <h3
                className="font-semibold text-lg"
                style={{ color: "black"}}
              >
                Theme Settings
              </h3>
              <p
                className="text-sm opacity-70"
                style={{ color: "black" }}
              >
                Choose a preset or customize colors
              </p>
            </div>

            {/* Preset Themes */}
            <div
              className="p-4 border-b border-gray-100"
              style={{ borderColor: currentTheme.colors.foreground }}
            >
              <h4
                className="font-medium mb-3 text-sm uppercase tracking-wide"
                style={{ color: "black" }}
              >
                Preset Themes
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setTheme(theme.id)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 hover:scale-105 ${
                      currentTheme.id === theme.id ? "ring-2 ring-offset-1" : ""
                    }`}
                    style={{
                      backgroundColor: "white",
                      borderColor: "black",
                      color: "black",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                      />
                      <span className="text-sm font-medium">{theme.name}</span>
                    </div>
                    
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Controls */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4
                  className="font-medium text-sm uppercase tracking-wide"
                  style={{ color: "black" }}
                >
                  Custom Colors
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowColorPickers(!showColorPickers)}
                    className="px-3 py-1 text-xs rounded-full border transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: showColorPickers
                        ? currentTheme.colors.primary
                        : "transparent",
                      borderColor: currentTheme.colors.primary,
                      color: showColorPickers
                        ? currentTheme.colors.background
                        : currentTheme.colors.primary,
                    }}
                  >
                    <Eye className="w-3 h-3 inline mr-1" />
                    {showColorPickers ? "Hide" : "Show"}
                  </button>
                  <button
                    onClick={resetToDefault}
                    className="px-3 py-1 text-xs rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all duration-200"
                  >
                    <RotateCcw className="w-3 h-3 inline mr-1" />
                    Reset
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showColorPickers && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    {Object.entries(colorLabels).map(([key, label]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <label
                          className="text-sm font-medium"
                          style={{ color: "black" }}
                        >
                          {label}
                        </label>
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-lg border-2 border-white shadow-sm"
                            style={{
                              backgroundColor:
                                previewColors[key as keyof ThemeColors] ||
                                currentTheme.colors[key as keyof ThemeColors],
                            }}
                          />
                          <input
                            type="color"
                            value={
                              previewColors[key as keyof ThemeColors] ||
                              currentTheme.colors[key as keyof ThemeColors]
                            }
                            onChange={(e) =>
                              handleColorChange(
                                key as keyof ThemeColors,
                                e.target.value
                              )
                            }
                            className="w-12 h-8 rounded border-none cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}

                    
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
