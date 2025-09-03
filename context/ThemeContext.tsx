// contexts/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ThemeColors {
  background: string;
  backgroundMuted: string;
  foreground: string;
  primary: string;
  secondary: string;
  text: string;
  
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
}

const defaultThemes: Theme[] = [
  {
    id: 'default',
    name: 'Default',
    colors: {
      background: '#ffffff',
      foreground: '#0d1b2a',
      primary: '#0d1b2a',
      secondary: '#d4af37',
      text: '#fff',
      backgroundMuted: "#eae7dc"
    }
  },
  {
    id: 'dark',
    name: 'Dark',
    colors: {
      background: '#0f172a',
      foreground: '#fff',
      primary: '#4d6075',
      secondary: '#fbbf24',
      text: '#f8fafc',
      backgroundMuted: "#434535"
    }
  },
  {
    id: 'forest',
    name: 'Green',
    colors: {
      background: '#F5F5F0',
      foreground: '#000',
      primary: '#0F3D3E',
      secondary: '#A3B18A',
      text: '#fff',
      backgroundMuted: "#eae7dc"
    }
  },
  {
    id: 'sunset',
    name: 'Burgundy',
    colors: {
      background: '#F4E1D2',
      foreground: '#000',
      primary: '#4A1C40',
      secondary: '#C5A46D',
      text: '#fff',
      backgroundMuted: "#eae7dc"
    }
  },
  {
    id: 'purple',
    name: 'Charcoal',
    colors: {
      background: '#F8F8F8',
      foreground: '#4B4B4B',
      primary: '#1C1C1C',
      secondary: '#7A8BA3',
      text: '#fff',
      backgroundMuted: "#eae7dc"
    }
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    colors: {
      background: '#f0f9ff',
      foreground: '#000',
      primary: '#0c4a6e',
      secondary: '#06b6d4',
      text: '#fff',
      backgroundMuted: "#eae7dc"
    }
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  setTheme: (themeId: string) => void;
  updateCustomColor: (colorKey: keyof ThemeColors, color: string) => void;
  createCustomTheme: (name: string, colors: ThemeColors) => void;
  resetToDefault: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themes, setThemes] = useState<Theme[]>(defaultThemes);
  const [currentThemeId, setCurrentThemeId] = useState('default');
  const [customTheme, setCustomTheme] = useState<Theme | null>(null);

  // Get current theme (custom theme takes priority)
  const currentTheme = customTheme || themes.find(t => t.id === currentThemeId) || themes[0];

  // Apply CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const colors = currentTheme.colors;
    
    root.style.setProperty('--theme-background', colors.background);
    root.style.setProperty('--theme-foreground', colors.foreground);
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-text', colors.text);
  }, [currentTheme]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    const savedCustomTheme = localStorage.getItem('customTheme');
    
    if (savedCustomTheme) {
      try {
        setCustomTheme(JSON.parse(savedCustomTheme));
      } catch (error) {
        console.error('Error loading custom theme:', error);
      }
    } else if (savedTheme) {
      setCurrentThemeId(savedTheme);
    }
  }, []);

  // Save theme to localStorage
  const saveTheme = (themeId: string, customTheme?: Theme | null) => {
    localStorage.setItem('selectedTheme', themeId);
    if (customTheme) {
      localStorage.setItem('customTheme', JSON.stringify(customTheme));
    } else {
      localStorage.removeItem('customTheme');
    }
  };

  const setTheme = (themeId: string) => {
    setCurrentThemeId(themeId);
    setCustomTheme(null);
    saveTheme(themeId, null);
  };

  const updateCustomColor = (colorKey: keyof ThemeColors, color: string) => {
    const baseTheme = themes.find(t => t.id === currentThemeId) || themes[0];
    const newCustomTheme: Theme = {
      id: 'custom',
      name: 'Custom Theme',
      colors: {
        ...baseTheme.colors,
        ...(customTheme?.colors || {}),
        [colorKey]: color
      }
    };
    setCustomTheme(newCustomTheme);
    saveTheme('custom', newCustomTheme);
  };

  const createCustomTheme = (name: string, colors: ThemeColors) => {
    const newTheme: Theme = {
      id: `custom-${Date.now()}`,
      name,
      colors
    };
    setThemes(prev => [...prev, newTheme]);
    setCurrentThemeId(newTheme.id);
    setCustomTheme(null);
    saveTheme(newTheme.id, null);
  };

  const resetToDefault = () => {
    setCurrentThemeId('default');
    setCustomTheme(null);
    saveTheme('default', null);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      themes,
      setTheme,
      updateCustomColor,
      createCustomTheme,
      resetToDefault
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
