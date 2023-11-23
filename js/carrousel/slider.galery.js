document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
  
    let currentSlide = 0;
  
    // Función para mostrar el slide actual
    const showSlide = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[currentSlide].style.display = "flex";
  
      // Mostrar todas las imágenes en dispositivos de escritorio
      if (window.innerWidth > 590) {
        const images = slides[currentSlide].querySelectorAll(".row img");
        images.forEach((image) => {
          image.style.display = "block";
        });
      } else {
        const images = slides[currentSlide].querySelectorAll(".row img");
        images.forEach((image) => {
          image.style.display = "none";
        });
  
        for (let i = 0; i < 2; i++) {
          if (images[i]) {
            images[i].style.display = "block";
          }
        }
      }
    };
  
    // Mostrar el primer slide al cargar la página
    showSlide();
  
    // Mostrar el siguiente slide al hacer clic en la flecha derecha
    nextButton.addEventListener("click", () => {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide();
    });
  
    // Mostrar el slide anterior al hacer clic en la flecha izquierda
    prevButton.addEventListener("click", () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide();
    });
  
    // Revisar si se cambió el tamaño de la ventana y volver a mostrar los slides
    window.addEventListener("resize", showSlide);
  });
  