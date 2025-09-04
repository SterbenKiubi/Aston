import React from "react";
import { useTheme } from "../../../shared/lib/theme/ThemeContext";

const ThemeSwitcher = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button className="theme-switcher" onClick={toggleTheme}>
            {isDark ? 'Темная тема' : 'Светлая тема'}
        </button>
    )
}

export default ThemeSwitcher;