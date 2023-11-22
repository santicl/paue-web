const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 1; // Índice de la imagen central (la segunda imagen) al inicio

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  handleSlideTransition();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  handleSlideTransition();
});

function handleSlideTransition() {
  items.forEach(item => {
    item.classList.remove('current');
    item.style.order = ''; // Restablece el orden para evitar problemas de visualización
  });

  items[currentIndex].classList.add('current');
  items[currentIndex].style.order = '1'; // Coloca la imagen central al final

  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  items[prevIndex].style.order = '0'; // Coloca la imagen izquierda antes de la central
  items[nextIndex].style.order = '2'; // Coloca la imagen derecha después de la central
}