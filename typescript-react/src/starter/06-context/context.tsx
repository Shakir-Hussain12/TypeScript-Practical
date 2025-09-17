import { createContext, useContext, useState } from "react";

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

export const useTheme = () => {
    const currTheme = useContext(ThemeContext);

    if (currTheme === undefined) {
        throw new Error("No Theme Defined");
    }

    return currTheme;
}

export const changeTheme = (theme: Theme) => {
    const body = document.body;
    body.style.backgroundColor = theme === 'Dark' ? '#333' : '#FFF';
    body.style.color = theme === 'Dark' ? '#FFF' : '#000';
}