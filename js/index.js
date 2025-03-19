// Navbar Code
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const menuLinks = document.querySelectorAll("#side-menu nav a");

// Toggle the side menu
const toggleMenu = () => {
  if (sideMenu.classList.contains("-translate-x-full")) {
    sideMenu.classList.remove("-translate-x-full");
    sideMenu.classList.add("translate-x-0");
  } else {
    sideMenu.classList.remove("translate-x-0");
    sideMenu.classList.add("-translate-x-full");
  }
};

hamburger.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// code for automatic text display
var typed = new Typed(".text", {
  strings: ["Full Stack Developer", "MERN Stack Developer ", "Agriculture Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// code for read more button
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText");

readMoreBtn.addEventListener("click", () => {
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    readMoreBtn.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    readMoreBtn.textContent = "Read More";
  }
});

// code for carousel
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastContent = document.getElementById("toastContent");
  const toastMessage = document.getElementById("toastMessage");

  // Set the message
  toastMessage.textContent = message;

  // Set the class based on type
  toastContent.className = `toast-content ${type}`;

  // Show the toast
  toast.style.display = "block";

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

// code for contact form
emailjs.init('HMY0KmePKO1pXLorY');

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_mh5vbyc',
        'template_wv2ec0s',
        this
      )
      .then(
        function (response) {
          showToast("Message sent successfully!", "success");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          showToast("Failed to send message. Please try again.", "error");
        }
      );
  });
