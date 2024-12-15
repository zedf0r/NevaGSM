import { isWebp } from "./components/webp.js"
import { hideFavoriteInformation } from "./components/sales_hide.js"
import { filtresHide, filterActive } from "./components/catalogs.js"
import { productSizeActive } from "./components/product.js"
import { productButtonCount} from "./components/productButton.js"
import { descriptionHide } from "./components/descriptionHide.js"
import { initializeSalesSwiper } from "./components/initializeSaleSwiper.js"

document.addEventListener("DOMContentLoaded", function () {
	const headerSwiper = document.querySelector("#header-swiper")
	const offerSwiper = document.querySelector("#offer-swiper")
	const salesSwiper = document.querySelector("#sales-swiper")
	const categoriesSwiper = document.querySelector("#categories-swiper");
	const productSwiper = document.querySelector("#product-swiper");
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
				390: {
					slidesPerView: 1,
				}
			}
		})
	}
	if (salesSwiper) {
		const saleSwiper = new Swiper("#sales-swiper", {
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
		})
		const products = document.querySelectorAll(".sales-slide")

		if (products.length > 0) {
			products.forEach((product) => {
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
	}

	if (categoriesSwiper) {
		const categorySwiper = new Swiper("#categories-swiper", {
			breakpoints: {
				350: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				450: {
					slidesPerView: 5,
					spaceBetween: 20
				},
				550: {
					slidesPerView: 6,
					spaceBetween: 20
				},
				600: {
					slidesPerView: 7,
					spaceBetween: 20
				},
				780: {
					slidesPerView: 8,
					spaceBetween: 20
				},
				860: {
					slidesPerView: 8,
					spaceBetween: 20
				},
				990: {
					slidesPerView: 9,
					spaceBetween: 20
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

	if (productSwiper) {
		const productSlider = new Swiper("#product-swiper", {
			loop: true,
			slidesPerView: 1,

			navigation: {
				nextEl: ".product-button-next",
				prevEl: ".product-button-prev",
			},
		})
	}


	isWebp();
	hideFavoriteInformation();
	filtresHide();
	filterActive();
	productSizeActive();
	productButtonCount();
	descriptionHide();
	initializeSalesSwiper("#sales-swiper-1");
	initializeSalesSwiper("#sales-swiper-2");
})
