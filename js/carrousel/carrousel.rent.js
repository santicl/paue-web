const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.carousel-item');
const typeBoatTitle = document.getElementById('title-boat');
const priceBoat = document.getElementById('boat-price');

let currentIndex = 1;

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
    item.style.order = '';
  });

  items[currentIndex].classList.add('current');
  items[currentIndex].style.order = '1';

  if (items[currentIndex].title === 'Catamarán') {
    typeBoatTitle.textContent = 'Catamarán';
    priceBoat.textContent = 'Desde $ 6.000.000';
  }

  if (items[currentIndex].title === 'Bote de vela') {
    typeBoatTitle.textContent = 'Bote de vela';
    priceBoat.textContent = 'Desde $ 8.000.000';
  }

  if (items[currentIndex].title === 'Bote normal') {
    typeBoatTitle.textContent = 'Lanchas rápidas';
    priceBoat.textContent = 'Desde $ 1.300.000';
  }

  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  items[prevIndex].style.order = '0';
  items[nextIndex].style.order = '2';
}