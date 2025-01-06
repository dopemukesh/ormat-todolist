import React from 'react'

export const Logo = () => {
    return (
        <div className='w-14 h-14 bg-white dark:bg-gray-950 overflow-hidden rounded-full'>
            <svg viewBox="0 0 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2000" height="2000" rx="1000" fill="url(#paint0_linear_33_38)" />
                <path d="M992.346 495.768C994.653 488.22 1005.34 488.22 1007.65 495.768L1147.59 953.615C1147.95 954.777 1148.56 955.844 1149.39 956.733L1475.93 1306.85C1481.31 1312.62 1475.97 1321.88 1468.27 1320.1L1001.8 1212.37C1000.61 1212.1 999.381 1212.1 998.196 1212.37L531.718 1320.1C524.027 1321.88 518.684 1312.62 524.068 1306.85L850.602 956.733C851.432 955.844 852.047 954.777 852.403 953.615L992.346 495.768Z" fill="white" />
                <defs>
                    <linearGradient id="paint0_linear_33_38" x1="1000" y1="241.667" x2="1000" y2="2000" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#343945" />
                        <stop offset="1" stopColor="#151923" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}