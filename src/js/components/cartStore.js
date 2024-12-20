export function cartOrderChange() {
    const buttonToOrder = document.querySelector('.button-to-order');
    if (buttonToOrder) {
        buttonToOrder.addEventListener('click', () => {
            const cart = document.querySelector('.cart-process-item');
            const order = document.querySelector('.cart-order');
            const cartText = document.querySelector('.cart-text')
            const orderText = document.querySelector('.cart-order-text')

            cart.classList.add('cart-hidden');
            order.classList.remove('cart-hidden');
            cartText.classList.remove('active');
            orderText.classList.add('active');
        })
    }
}

export function cartButtonCount() {
    const cartButton = document.querySelector('.product-button');

    if (cartButton) {
        const minus = document.querySelector('.product-button-minus');
        const plus = document.querySelector('.product-button-plus');
        const count = document.querySelector('.product-button-count');

        minus.addEventListener('click', () => {
            if (Number(count.textContent) > 1) {
                count.textContent -= 1;
            } else {
                count.textContent = 1;
            }
        })
        plus.addEventListener('click', () => {
            let currentCount = Number(count.textContent);
            count.textContent = currentCount + 1;
        })
    }
}

export function deleteCart() {
    const deleteCarts = document.querySelectorAll('.product-delete');

    if (deleteCarts) {
        deleteCarts.forEach(deleteCart => {
            deleteCart.addEventListener('click', () => {
                const carts = document.querySelectorAll('.item-info')

                const cartToDelete = deleteCart.closest('.item-info');

                if (cartToDelete) {
                    cartToDelete.remove();
                }
            })
        })
    }
}