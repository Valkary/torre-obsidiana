/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				negro: '#040505',
				gris: '#E2DEDC',
				naranja: '#A3421D',
				blanco: "#FEFFFF",
			}
		},
	},
	plugins: [],
}
