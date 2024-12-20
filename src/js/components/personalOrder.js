export function orderHide() {
    const accountOrders = document.querySelectorAll('.account-order');

    accountOrders.forEach(order => {
        const closeButton = order.querySelector('.order .information-circle');
        const orderClose = order.querySelector('.order-information');
        if (orderClose.classList.contains('order-hide')) {
            closeButton.lastElementChild.classList.add('svg-plus')
        }
        if (closeButton && orderClose) {
            closeButton.addEventListener('click', () => {
                orderClose.classList.toggle('order-hide')
                if (orderClose.classList.contains('order-hide')) {
                    closeButton.lastElementChild.classList.add('svg-plus')
                    closeButton.classList.add('information-circle-bg')
                } else {
                    closeButton.lastElementChild.classList.remove('svg-plus')
                    closeButton.classList.remove('information-circle-bg')
                }
                
            })
        }
        
    })
}

export function personalAccountButton() {
    const buttons = document.querySelectorAll('.account-button');
    const accountOrders = document.querySelector('.account-orders');
    const accountInformation = document.querySelector('.account-information')

    if (buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(item => {
                    item.classList.remove('account-button-active');
                })

                if (button.classList.contains('button-orders')) {
                    accountOrders.classList.remove('order-hide');
                } else {
                    accountOrders.classList.add('order-hide');
                }

                if (button.classList.contains('button-account')) {
                    accountInformation.classList.remove('order-hide');
                } else {
                    accountInformation.classList.add('order-hide');
                }
                button.classList.add('account-button-active');
            })
        })
    }
}