import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const production = process.env.NODE_ENV === 'production';

const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['@carbon/charts']
	},
	ssr: {
		noExternal: [production && '@carbon/charts'].filter(Boolean)
	}
};

export default config;
