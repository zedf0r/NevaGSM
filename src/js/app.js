import { isWebp } from "./components/webp.js"
import { hideFavoriteInformation } from "./components/sales_hide.js"
import { filtresHide, filterActive } from "./components/catalogs.js"
import { productSizeActive } from "./components/productSizes.js"
import { productButtonCount} from "./components/productButton.js"
import { descriptionHide } from "./components/descriptionHide.js"
import { initializeSalesSwiper } from "./components/initializeSaleSwiper.js"
import { colorButtons } from "./components/colorButton.js"
import { salesButton } from "./components/salesButton.js"

document.addEventListener("DOMContentLoaded", function () {
	const headerSwiper = document.querySelector("#header-swiper")
	const offerSwiper = document.querySelector("#offer-swiper")
	const categoriesSwiper = document.querySelector("#categories-swiper");
	const productSwiper = document.querySelector("#product-swiper");
	const productSwiperImage = document.querySelector("#mySwiper");
	const salesSwiper = document.querySelector(".sales-swiper")
	if (headerSwiper) {
		const headSwiper = new Swiper("#header-swiper", {
			loop: true,
			// Navigation arrows
			navigation: {
				nextEl: ".special-button-next",
				prevEl: ".special-button-prev",
			},
		})
	}
	if (offerSwiper) {
		const sectionSwiper = new Swiper("#offer-swiper", {
			slidesPerView: 3,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				760: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			}
		})
	}

	if (categoriesSwiper) {
		const categorySwiper = new Swiper("#categories-swiper", {
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				350: {
					slidesPerView: 4,
				},
				450: {
					slidesPerView: 5,
				},
				550: {
					slidesPerView: 6,
				},
				600: {
					slidesPerView: 7,
				},
				780: {
					slidesPerView: 8,
				},
				860: {
					slidesPerView: 8,
				},
				990: {
					slidesPerView: 9,
				},
				
				
			}
		})

	}

	const catalogSwiper = document.querySelectorAll(".catalog-slides");

	if (catalogSwiper.length > 0) {

		catalogSwiper.forEach((product) => {
			const productSlider = product.querySelector(".product-slider");
			if (productSlider) {
				const slides = productSlider.querySelectorAll(".swiper-slide")
				if (slides.length > 0) {
					const hoverTriggersContainer = productSlider.querySelector(".hover-triggers")
					const imgSwiper = new Swiper(productSlider, {
						slidesPerView: 1,
						spaceBetween: 10,
						scrollbar: {
							el: ".product-slider .swiper-scrollbar",
						}
					})

					slides.forEach((slide, index) => {
						const hoverTrigger = document.createElement("div")
						hoverTrigger.classList.add("hover-trigger")
						hoverTrigger.dataset.index = index
						hoverTriggersContainer.appendChild(hoverTrigger)

						hoverTrigger.addEventListener("mouseenter", () => {
							imgSwiper.slideTo(index, 300)
						})

						hoverTrigger.addEventListener("mouseleave", () => {
							imgSwiper.slideTo(0, 300)
						})
					})
				}
			}
		})
	}

	if (productSwiperImage) {
		const swiperImage = new Swiper("#mySwiper", {
			spaceBetween: 10,
			slidesPerView: 4,
			watchSlidesProgress: true,
		})

		if (productSwiper) {
			const productSlider = new Swiper("#product-swiper", {
				loop: true,
				slidesPerView: 1,
	
				navigation: {
					nextEl: ".product-button-next",
					prevEl: ".product-button-prev",
				},
				thumbs: {
					swiper: swiperImage,
				}
			})
		}
	}

	if (salesSwiper) {
		const saleSwiper = new Swiper(".sales-swiper", {
			spaceBetween: 20,
			breakpoints: {
				390: {
					slidesPerView: 1,
				},
				770: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
				1700: {
					slidesPerView: 3.3,
				}
			}
		});
	}


	isWebp();
	hideFavoriteInformation();
	filtresHide();
	filterActive();
	productSizeActive();
	productButtonCount();
	descriptionHide();
	colorButtons();
	salesButton();
	const productSwiper1 = new initializeSalesSwiper("#sales-swiper-1");
	const productSwiper2 = new initializeSalesSwiper("#sales-swiper-2");
	const productSwiper3 = new initializeSalesSwiper("#sales-swiper-3");
})
