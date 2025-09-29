function toggleHamburger(element) {
	element.classList.toggle("change");
}
document.addEventListener('DOMContentLoaded', function () {
	const faqButtons = document.querySelectorAll('.faq-question');
	faqButtons.forEach(button => {
		button.addEventListener('click', function () {
			faqButtons.forEach(otherButton => {
				if (otherButton !== this) {
					otherButton.classList.remove('active');
					const otherPanel = otherButton.nextElementSibling;
					otherPanel.style.maxHeight = null;
				}
			});
			this.classList.toggle('active');
			const panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + 'px';
			}
		});
	});
});
document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.navbar-custom');
	const backToTopBtn = document.getElementById('backToTop');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			navbar.style.background = 'rgba(18, 18, 18, 0.98)';
		} else {
			navbar.style.background = 'rgba(18, 18, 18, 0.95)';
		}
		if (window.scrollY > 300) {
			backToTopBtn.classList.add('show');
		} else {
			backToTopBtn.classList.remove('show');
		}
	});
	backToTopBtn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
});