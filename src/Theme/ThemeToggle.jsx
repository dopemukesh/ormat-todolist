import React from "react";
import { create } from "zustand";

// Create a global theme store
const useThemeStore = create((set) => ({
    theme: "dark", // Default theme
    setTheme: (newTheme) => set({ theme: newTheme }),
}));

const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore();

    // On initial load, read theme from localStorage and apply
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark
        setTheme(savedTheme);
        document.body.classList.toggle("dark", savedTheme === "dark");
    }, [setTheme]);

    // Theme toggle handler
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        // Apply theme class to body
        document.body.classList.toggle("dark", newTheme === "dark");

        // Update global state and persist to localStorage
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="z-50 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md text-white text-md w-11 h-11 overflow-hidden grid place-items-center rounded-xl"
        >
            {theme === "dark" ? (
                <div>
                    {/* Sun Icon (visible in dark mode) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
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
                </div>
            ) : (
                <div>
                    {/* Moon Icon (visible in light mode) */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-zinc-400 stroke-zinc-400"
                    >
                        <path
                            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </button>
    );
};

export default ThemeToggle;
