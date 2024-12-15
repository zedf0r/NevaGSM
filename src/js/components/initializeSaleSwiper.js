export function initializeSalesSwiper(swiperId) {
	const products = document.querySelectorAll(`${swiperId} .sales-slide`);

	if (products.length > 0) {
		products.forEach((product) => {
			const productSlider = product.querySelector(".product-slider");
			if (productSlider) {
				const slides = productSlider.querySelectorAll(".swiper-slide");
				if (slides.length > 0) {
					const hoverTriggersContainer = productSlider.querySelector(".hover-triggers");
					const imgSwiper = new Swiper(productSlider, {
						slidesPerView: 1,
						spaceBetween: 10,
						scrollbar: {
							el: ".product-slider .swiper-scrollbar",
						}
					});

					slides.forEach((slide, index) => {
						const hoverTrigger = document.createElement("div");
						hoverTrigger.classList.add("hover-trigger");
						hoverTrigger.dataset.index = index;
						hoverTriggersContainer.appendChild(hoverTrigger);

						hoverTrigger.addEventListener("mouseenter", () => {
							imgSwiper.slideTo(index, 300);
						});

						hoverTrigger.addEventListener("mouseleave", () => {
							imgSwiper.slideTo(0, 300);
						});
					});

				}
			}
		});
	}
}

