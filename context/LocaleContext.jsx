"use client";
import { createContext, useContext } from "react";

const LocaleContext = createContext(null);

export function LocaleProvider({ children, dict, lang }) {
  return (
    <LocaleContext.Provider value={{ dict, lang }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
