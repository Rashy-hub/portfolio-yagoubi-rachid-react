// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Montserrat', 'sans-serif'],
                heading: ['Roboto Slab', 'serif'],
                title: ['Anta', 'cursive'],
                large: ['Madimi One', 'cursive'],
            },
            backgroundImage: {
                'header-bg':
                    'linear-gradient(141deg, #145f9dcb 0, #145f9dc6 21%, #06091ac3 52%)',
            },
            colors: {
                'nav-text-color': '#fff',
                'nav-hover-text-color': '#ffeb7a',
                'header-bg-secondary-color': '#2ecc71',
            },
            backdropBlur: {
                lg: '8px',
            },
            textShadow: {
                'text-shadow': '2px 2px 4px #567fd7',
            },
            animation: {
                cursor: 'cursor 1s infinite alternate',
                mywords: 'mywords 9s infinite',
                typing: 'typing 3s steps(30) 1s forwards',
            },
            keyframes: {
                cursor: {
                    '0%': { borderLeft: '2px solid white' },
                    '100%': { borderLeft: '2px solid black' },
                },
                mywords: {
                    '0%, 33%': { content: "'a JavaScript FullStack dev'" },
                    '34%, 66%': { content: "'an Electronic Engineer'" },
                    '67%, 100%': { content: "'a Content Writer'" },
                },
                typing: {
                    '0%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': {
                        width: '0',
                    },
                    '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {
                        width: '100%',
                    },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
