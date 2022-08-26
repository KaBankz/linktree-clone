const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-.5deg)' },
					'50%': { transform: 'rotate(.5deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle .25s ease-in-out infinite'
			}
		}
	},

	plugins: []
};

module.exports = config;
