/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],

	theme: {
		extend: {
			colors: {
				primary: withOpacityValue("--primary-color"),
				secondary: withOpacityValue("--secondary-color"),
				tertiary: {
					DEFAULT: withOpacityValue("--tertiary-color-dark"),
					light: withOpacityValue("--tertiary-color-light"),
				},
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeOutDown: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(20px)' },
				}
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.2s ease-out forwards',
				'fade-out-down': 'fadeOutDown 0.1s ease-in forwards',
			}
		},
	},

	plugins: [
		plugin(({addVariant}) => addVariant('light', '.light &'))
	],
};
