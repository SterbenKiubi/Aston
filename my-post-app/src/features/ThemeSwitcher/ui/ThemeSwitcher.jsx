import React from "react";
import { useTheme } from "../../../shared/lib/theme/ThemeContext";

export const ThemeSwitcher = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button className="theme-switcher" onClick={toggleTheme}>
            {isDark ? 'Светлая тема' : 'Темная тема'}
        </button>
    )
};