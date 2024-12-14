export function hideFavoriteInformation() {
	const favoriteButtons = document.querySelectorAll(".button-favorite")

	favoriteButtons.forEach((button) => {
		const salesInformation = button.closest(".information-sales").querySelector(".sales-information")

		if (salesInformation) {
			button.addEventListener("mouseenter", () => {
				salesInformation.classList.add("visability-hidden")
			})

			button.addEventListener("mouseleave", () => {
				salesInformation.classList.remove("visability-hidden")
			})
		}
	})
}
