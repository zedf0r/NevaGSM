export function descriptionHide() {
    const descrtiptions = document.querySelectorAll('.product-description');

    descrtiptions.forEach(descrtiption => {
        const closeButton = descrtiption.querySelector('.product-information-head .information-circle');
        const descriptionClose = descrtiption.querySelector('.description');
        if (descriptionClose.classList.contains('description-hide')) {
            closeButton.lastElementChild.classList.add('svg-plus')
        }
        if (closeButton && descriptionClose) {
            closeButton.addEventListener('click', () => {
                descriptionClose.classList.toggle('description-hide')
                if (descriptionClose.classList.contains('description-hide')) {
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