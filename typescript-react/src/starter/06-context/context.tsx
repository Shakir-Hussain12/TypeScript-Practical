import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<string | undefined>(undefined);

export function ThemeProvider({ children }: {children: React.ReactNode}) {
    return (
        <ThemeContext.Provider value="Hello">
            {children} 
        </ThemeContext.Provider>
    )
} 

export const useTheme = () => {
    const currTheme = useContext(ThemeContext);

    if (currTheme === undefined) {
        throw new Error("No Theme Defined");
    }

    console.log(currTheme);
}