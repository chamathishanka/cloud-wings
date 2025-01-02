/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				customMaroon: '#8e2157',
				customBlack: '#150c15',
				customGrey: '#6e6e6e',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
