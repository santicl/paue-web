const detailsList = document.querySelectorAll('.questions__container__question details');

detailsList.forEach((details) => {
    details.addEventListener('toggle', () => {
        const isOpen = details.getAttribute('open');
        if (isOpen) {
            details.removeAttribute('open');
        } else {
            detailsList.forEach((detail) => {
                if (detail !== details) {
                    detail.removeAttribute('open');
                }
            });
        }
    });
});