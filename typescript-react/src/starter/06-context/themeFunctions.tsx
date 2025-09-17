import { useContext } from "react";
import { type Theme, ThemeContext } from "./context";

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