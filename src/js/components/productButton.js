export function productButtonCount() {
    const productButton = document.querySelector('.cart-button');
    const svgButton = document.querySelector('.cart-button .button-cart-svg svg')
    const productButtonText = document.querySelector('.cart-button span');
    const productButtonPrev = document.querySelector('.cart-button .cart-button-prev')
    const productButtonNext = document.querySelector('.cart-button .cart-button-next')

    let isActive = false;
    if (productButton) {
        productButton.addEventListener('click', (event) => {
            if (event.target.closest('.cart-button-prev') || event.target.closest('.cart-button-next')) {
                return;
            }
    
            if (isActive) {
                return;
            }
            productButton.classList.add('cart-button_active')
            svgButton.classList.add('svg-hide')
            productButtonText.textContent = 1;
            productButtonPrev.classList.remove('cart-button-hide');
            productButtonNext.classList.remove('cart-button-hide');
            isActive = true;
        })
    
        productButtonPrev.addEventListener('click', (event) => {
            event.stopPropagation();
            if (Number(productButtonText.textContent) > 1) {
                productButtonText.textContent -= 1;
            } else {
                productButtonPrev.classList.add('cart-button-hide');
                productButtonNext.classList.add('cart-button-hide');
                productButtonText.textContent = "в корзину";
                svgButton.classList.remove('svg-hide')
                productButton.classList.remove('cart-button_active')
                isActive = false;
            }
        })
    
        productButtonNext.addEventListener('click', (event) => {
            event.stopPropagation();
            let currentCount = Number(productButtonText.textContent);
            productButtonText.textContent = currentCount + 1;
        });
    }
}