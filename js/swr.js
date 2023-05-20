// ServiceWorker登録：https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('js/sw.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch(function(err) {
		console.log('ServiceWorker registration failed: ', err);
	});
}