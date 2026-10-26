import React, { createContext, useContext, useState, useEffect } from 'react';

const UiModeContext = createContext();

export function UiModeProvider({ children }) {
  // Default to 'minimal' as requested by the user
  const [uiMode, setUiMode] = useState(() => {
    return localStorage.getItem('ellebee_ui_mode') || 'minimal';
  });

  useEffect(() => {
    localStorage.setItem('ellebee_ui_mode', uiMode);
    if (uiMode === 'minimal') {
      document.documentElement.classList.add('mode-minimal');
      document.documentElement.classList.remove('mode-luxe');
    } else {
      document.documentElement.classList.add('mode-luxe');
      document.documentElement.classList.remove('mode-minimal');
    }
  }, [uiMode]);

  const toggleUiMode = () => {
    setUiMode((prev) => (prev === 'minimal' ? 'luxe' : 'minimal'));
  };

  return (
    <UiModeContext.Provider value={{ uiMode, setUiMode, toggleUiMode, isMinimal: uiMode === 'minimal' }}>
      {children}
    </UiModeContext.Provider>
  );
}

export function useUiMode() {
  const context = useContext(UiModeContext);
  if (!context) {
    throw new Error('useUiMode must be used within a UiModeProvider');
  }
  return context;
}
