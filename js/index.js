const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const menuLinks = document.querySelectorAll('#side-menu nav a'); // Select all menu links

// Toggle the side menu
const toggleMenu = () => {
  if (sideMenu.classList.contains('-translate-x-full')) {
    sideMenu.classList.remove('-translate-x-full');
    sideMenu.classList.add('translate-x-0');
  } else {
    sideMenu.classList.remove('translate-x-0');
    sideMenu.classList.add('-translate-x-full');
  }
};

// Open or close the side menu when hamburger is clicked
hamburger.addEventListener('click', toggleMenu);

// Close the side menu when any menu link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});


var typed = new Typed(".text", {
    strings : ["Frontend Developer","Backend Developer ", "Agriculture Engineer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop :  true,

})


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000, // Change slides every 3 seconds
    disableOnInteraction: false, // Keeps autoplay active even after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 1 }, // Small screens
    768: { slidesPerView: 2 }, // Medium screens
    1024: { slidesPerView: 3 }, // Large screens
  },
});