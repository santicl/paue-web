document.querySelectorAll('.slide .row img').forEach(img => {
    console.log(img)
    img.onclick = () => {
        document.querySelector('.modal-popup').style.display = 'flex';
        document.querySelector('.container-img-popup img').src = img.getAttribute('src');
    }
});

document.querySelector('.btn-modal').onclick = () => {
    document.querySelector('.modal-popup').style.display = 'none';
}
