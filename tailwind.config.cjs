/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
	"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
    extend: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
        },
    },
	colors: {
		'green-500': '#00B37E',
		'bg_primary': '#121214',
		'bg_secondary': '#202024',

		'primary_text_color': '#C4C4CC',
		'secondary_text_color': '#8D8D99',
		'title_text_color': '#E1E1E6',

        'white': '#fff',
        'gray-100': '#e1e1e6',
        'gray-300': '#c4c4cc',
        'gray-400': '#8d8d99',
        'gray-600': '#323238',
        'gray-700': '#29292e',

	},
  },
  plugins: [],
}
