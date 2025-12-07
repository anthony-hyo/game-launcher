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
		},
	},

	plugins: [
		plugin(({addVariant}) => addVariant('light', '.light &'))
	],
};
