// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'IH.Docs',
			sidebar: [
				{
					label: 'Агенты',
					autogenerate: { directory: 'agents' },
				},
			],
			head: [{
				tag: 'meta',
				attrs: {
					name: 'robots',
					content: 'noindex, nofollow',
				},
			}],
		}),
	],
	build: {
		assetsPrefix: '/help/dev',
	},
	site: 'https://info-hit.ru',
	base: '/help/dev/',
	trailingSlash: 'always',
});
