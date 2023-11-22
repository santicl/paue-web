const Slider = () => {
    const containerCarrousel = document.getElementById('carrousel');
    const images = containerCarrousel.querySelectorAll('.header-carrousel__item');
    const totalImages = images.length;
    let counter = 0;

    const effectTitle = (childNodes) => {
        childNodes.forEach((child, i) => {
            
        })
    }

    const showImage = (index) => {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add('fade-in');
                console.log(image.childNodes)
            } else {
                image.classList.remove('fade-in');
            }
        });
    };

    const nextSlide = () => {
        showImage(counter);
        counter = (counter + 1) % totalImages;
        setTimeout(nextSlide, 5000);
    };

    showImage(counter);
    setTimeout(nextSlide, 5000);
};

window.onload = Slider;

window.addEventListener('resize', function() {
    console.log('change-img')
    if (window.innerWidth <= 600) {
        document.getElementById('img-ultimate-img').style.display = 'none';

        document.getElementById('ultimate').classList.add('ultimate-img');
    } else {
        document.getElementById('img-ultimate-img').style.display = 'block';

        document.getElementById('ultimate').classList.remove('ultimate-img');
    }
});

window.addEventListener('load', function() {
    console.log('change-img')
    if (window.innerWidth <= 600) {
        document.getElementById('img-ultimate-img').style.display = 'none';

        document.getElementById('ultimate').classList.add('ultimate-img');
    } else {
        document.getElementById('img-ultimate-img').style.display = 'block';

        document.getElementById('ultimate').classList.remove('ultimate-img');
    }
});