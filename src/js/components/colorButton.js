export function colorButtons() {
    const buttons = document.querySelectorAll(".card-colors .color")

    if (buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(item => {
                    item.classList.remove('active')
                })

                button.classList.add('active')
            })
        })
    }
}