import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `
						$breakpoint-tablet: 768px;
					`
			}
		},
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
