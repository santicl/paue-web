document.getElementById('btn-rent-boat-booking').addEventListener('click', () => {
    const containerBoats = document.getElementById('container-type-boats');
    const inputDate = document.getElementById('dateInput').value;
    const inputPersons = document.getElementById('inputNumPersons').value;

    const formData = new FormData();
    formData.append('dateValue', inputDate);
    formData.append('personsValue', inputPersons);

    fetch('sendForm/form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});