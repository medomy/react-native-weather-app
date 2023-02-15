import React, { createContext } from "react";

export const IsDarkContext = createContext<{ isDark: boolean, setIsDark: React.Dispatch<React.SetStateAction<boolean>> } | null>(null);