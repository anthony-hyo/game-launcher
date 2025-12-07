/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				tertiary: {
					DEFAULT: 'var(--tertiary-color-dark)',
					light: 'var(--tertiary-color-light)',
				},
			},
		},
	},
	plugins: [
		plugin(function({ addVariant }) {
			addVariant('dark', '.dark &');
		})
	],
};
