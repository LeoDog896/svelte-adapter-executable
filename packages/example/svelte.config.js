import adapter, { platforms } from 'svelte-adapter-executable/bun'
import { sveltePreprocess  } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter({
			targets: platforms
		})
	}
};

export default config;
