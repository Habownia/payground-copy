if ('serviceWorker' in navigator)
	navigator.serviceWorker.register('/payground-copy/dev-sw.js?dev-sw', {
		scope: '/payground-copy/',
	});
