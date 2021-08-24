const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{tsx,ts}', './public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			minHeight: {
				128: '32rem',
				144: '32rem'
			},
			minWidth: {
				25: '10rem'
			},
			colors: {
				orange: colors.orange,
				purple: colors.purple
			}
		},
		fontFamily: {
			display: ['Grandstander'],
			body: ['Grandstander']
		}
	}
};
