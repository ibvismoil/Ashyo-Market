"use client";
import { ContextType } from "@/types/ContextType";
import { createContext, FC, ReactNode, useState } from "react";

export const Context = createContext<ContextType>({
  showCategory: false,
  setShowCategory: () => {},
});

export const LangContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);

  return (
    <Context.Provider value={{ showCategory, setShowCategory }}>
      {children}
    </Context.Provider>
  );
};