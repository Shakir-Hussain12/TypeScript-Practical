import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<string | undefined>(undefined);

export function ThemeProvider({ children }: {children: React.ReactNode}) {
    return <ThemeContext.Provider value="Hello">
        {children}
    </ThemeContext.Provider>
} 
