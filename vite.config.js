import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/payground-copy/',
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
			manifest: {
				name: 'Payground',
				short_name: 'PGround',
				description: 'Copy of payground.com',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'assets/pwa-192x192.fdbee05f.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.c2d4bc3b.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.c2d4bc3b.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
