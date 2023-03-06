/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens:
            {
                'smaller-mobile': '280px',
                // => @media (min-width: 280px) { ... }
                'mobile-s': '320px',
                // => @media (min-width: 320px) { ... }
                'old-mobile': '360px',
                // => @media (min-width: 360px) { ... }
                'samsung-phones': '384px',
                // => @media (min-width: 384px) { ... }
                'nexus-mobiles': '395px',
                // => @media (min-width: 395px) { ... }
                'media-screen440': '440px',
                // => @media (min-width: 440px) { ... }
                'media-screen536': '536px',
                // => @media (min-width: 536px) { ... }

                'sm': '640px',
                // => @media (min-width: 640px) { ... }


                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
        extend: {},
    },
    plugins: [],
}