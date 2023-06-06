/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				negro: '#1D1F25',
				gris: '#24759A',
				cafe: '#F59D1C',
			}
		},
	},
	plugins: [],
}
