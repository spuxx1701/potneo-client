import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';

export default defineConfig(({ mode }) => {
	const plugins = [sveltekit()];
	// if (mode === 'development') {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	plugins.push(nodeLoaderPlugin() as any);
	// }

	return {
		plugins,
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}']
		}
	};
});
