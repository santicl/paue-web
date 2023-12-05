const closeModal = () => {
    document.getElementById('modal-rent-boat__content').style.display = 'flex';
    document.getElementById('modal-rent-boat-back').classList.remove('open-modal');
    document.getElementById('modal-rent-boat__content').classList.remove('open-modal');
    document.getElementById('modal-rent-boat__content').style.display = 'none';
}

const openModal = () => {
    document.getElementById('modal-rent-boat-back').classList.add('open-modal');
    document.getElementById('modal-rent-boat__content').classList.add('open-modal');
    document.getElementById('modal-rent-boat__content').style.display = 'flex';
}


const loadListenersForm = () => {

    openModal();

    document.getElementById('close-modal-rent').addEventListener('click', () => {
        closeModal();
    });

    document.getElementById('form-rent').addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const containerBoats = document.getElementById('container-type-boats');
        const inputDate = document.getElementById('dateInput').value;
        const inputPersons = document.getElementById('inputNumPersons').value;
        const boat = containerBoats.querySelector('.current').title;

        console.log(email, phone, inputDate, inputPersons, boat);
        fetch('http://localhost/web-paue/sendForm/form.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                phone: phone,
                email: email,
                inputDate: inputDate,
                inputPersons: inputPersons,
                boat: boat
            }),
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Hubo un problema al enviar los datos.');
            })
            .then(data => {
                console.log(data);
                closeModal();
            })
            .catch(error => {
                console.error(error.message);
            });
    });
}

document.getElementById('btn-rent-boat-booking').addEventListener('click', () => {
    loadListenersForm();
});