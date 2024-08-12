let slideIndex = 0;

showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slides .slide");
  let pointers = document.querySelectorAll(".indicator .circle");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  pointers.forEach((pointer) => pointer.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  pointers[slideIndex].classList.add("active");
}
