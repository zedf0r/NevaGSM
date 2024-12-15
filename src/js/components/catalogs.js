export function filtresHide() {
    const filters = document.querySelectorAll(".filters");

    filters.forEach(filter => {
        const filterHide = filter.lastElementChild;
        const filterText = filter.firstElementChild;
        const filtetArrow = filterText.lastElementChild;
        if (filterHide && filterHide.classList.contains('filter')) {
            filterText.addEventListener('click', () => {
                filterHide.classList.toggle('filtres-hide');
                filtetArrow.classList.toggle('arrow-top')
            })
        }
        
    })
}

export function filterActive() {
    const filters = document.querySelectorAll(".filters");

    filters.forEach(filter => {
        const filterActive = filter.lastElementChild;

        if (filterActive && filterActive.classList.contains('filter-active')) {
            const filterDivs = filterActive.querySelectorAll('div');

            filterDivs.forEach(div => {
                div.addEventListener('click', () => {
                    div.classList.toggle('active')
                })
            })
        }
    })
}