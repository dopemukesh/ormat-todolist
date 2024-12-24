import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage for dark mode preference
        const darkModePreference = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkModePreference);
        document.body.classList.toggle('dark', darkModePreference);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark', !isDarkMode);

        // Save the preference to localStorage
        localStorage.setItem('darkMode', !isDarkMode);
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ?
                <div>
                    {/* sun Icon and this will show on dark mode  */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M5.636 18.364l-1.414 1.414M18.364 18.364l1.414 1.414M5.636 5.636l-1.414-1.414" />
                    </svg>

                </div>
                :
                <div>
                    {/* moon Icon and this will show on light mode  */}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-slate-500 stroke-gray-500'>
                        <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            }
        </button>
    );
};

export default ThemeToggle;
