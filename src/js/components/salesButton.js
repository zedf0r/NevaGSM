export function salesButton() {
    const salesButtons = document.querySelectorAll('.sales-buttons');

    if(salesButtons) {
        salesButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();
            })
        })
    }
}