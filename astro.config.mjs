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
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			sidebar: [
				{
					label: 'Агенты',
					autogenerate: { directory: 'agents' },
				},
				{
					label: 'Аналитика',
					autogenerate: { directory: 'analytics' },
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
