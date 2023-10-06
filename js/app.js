window.addEventListener('load', function () {
	// Mobile navigation
	if (document.querySelector('.site-navigation')) {
		const nav = document.querySelector('.site-navigation');
		const menuTrigger = document.querySelector('.menu-trigger');
		const html = document.querySelector('html');
		menuTrigger.addEventListener('click', function () {
			nav.classList.toggle('swipe');
			html.classList.toggle('swipe');
		});
	}
});
