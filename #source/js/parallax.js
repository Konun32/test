window.onload = function () {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const mony1 = document.querySelector('.main-block__mony1');
		const stones = document.querySelector('.main-block__stones');

		const forMony1 = 30;
		const forStones = 20;

		const speed = 0.05;

		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			mony1.style.cssText = `transform: translate(${positionX / forMony1}%, ${positionY / forMony1}%);`;
			stones.style.cssText = `transform: translate(${positionX / forStones}%, ${positionY / forStones}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener('mousemove', function (e) {

			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});
	}
}