import { createContext, useState } from "react";

type Theme = 'Dark' | 'Light';

type ThemeContextType = {
    Theme: Theme;
    setTheme: (theme: Theme) => void;
}

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = 'Light' }: ThemeProviderProps) {
    const [Theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={{ Theme, setTheme }}>
            {children} 
        </ThemeContext.Provider>
    )
}

export {ThemeContext, type Theme};