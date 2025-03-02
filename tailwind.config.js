tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
            },
            boxShadow: {
                'black':'3px 3px 0 #000',
                'white':'3px 3px 0 #fff',
            }
        }
    },
    variants: {
        extend: {
            boxShadow: ['hover'], // Enable hover variants for boxShadow
        }
    },

    darkMode: 'selector'
};
