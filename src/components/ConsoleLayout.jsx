'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import AdminHeader from '@/parts/adminHeader';

// Create a theme context
const ThemeContext = createContext();

export default function ConsoleLayout({ children, sidebarComponent: SidebarComponent }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(savedMode ? savedMode === 'true' : systemDark);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
        {/* Sticky Header */}
        <div className="sticky top-0 z-50">
          <AdminHeader />
        </div>
        
        <div className="flex flex-1">
          <SidebarComponent isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
            {children && typeof children === 'function' ? children({ isCollapsed }) : children}
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

// Updated custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an AdminLayout');
  }
  return context;
}