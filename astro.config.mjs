// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
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
