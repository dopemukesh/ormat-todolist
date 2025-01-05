import React, { useEffect } from "react";
import { create } from "zustand";

// Create a global theme store with initial state from localStorage
const useThemeStore = create((set) => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    return {
        theme: savedTheme,
        setTheme: (newTheme) => {
            localStorage.setItem("theme", newTheme);
            set({ theme: newTheme });
        },
    };
});

const ThemeToggle = ({ onClick: parentClickHandler }) => {
    const { theme, setTheme } = useThemeStore();

    // Synchronize body class with theme
    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);

    // Toggle theme handler
    const toggleTheme = (event) => {
        event.stopPropagation(); // Stop propagation to parent elements
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={(e) => {
                toggleTheme(e);
                if (parentClickHandler) parentClickHandler(e); // Optionally handle parent click
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="z-50 bg-white dark:bg-gray-950 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md text-white text-md w-8 h-8 grid place-items-center rounded-xl"
        >
            {theme === "dark" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M5.636 18.364l-1.414 1.414M18.364 18.364l1.414 1.414M5.636 5.636l-1.414-1.414"
                    />
                </svg>
            ) : (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-gray-400 stroke-gray-400"
                >
                    <path
                        d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
