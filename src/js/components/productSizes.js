export function productSizeActive() {
    const memorySizes = document.querySelectorAll('.memory-sizes div');

    if (memorySizes) {
        memorySizes.forEach(size => {
            size.addEventListener('click', () => {
                memorySizes.forEach(s => {
                    s.classList.remove('active');
                })

                size.classList.add('active');
            })
        })
    }
}