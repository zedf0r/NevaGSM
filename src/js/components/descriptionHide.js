export function descriptionHide() {
    const descrtiptions = document.querySelectorAll('.product-description');

    descrtiptions.forEach(descrtiption => {
        const closeButton = descrtiption.querySelector('.product-information-head .information-circle');
        const descriptionClose = descrtiption.querySelector('.description');

        if (closeButton && descriptionClose) {
            closeButton.addEventListener('click', () => {
                descriptionClose.classList.toggle('description-hide')
            })
        }
        
    })
}