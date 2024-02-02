document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const options = document.querySelectorAll(".option");
  const slider = document.querySelector(".slider");
  const articles = document.querySelectorAll("article");
  const navLinks = document.querySelectorAll(".option");
  const aside = document.getElementById("aside");
  const listNews = document.querySelector(".list-news");
  const footer = document.querySelector("footer");

  const asideTopPosition = aside.offsetTop;
  const footerTopPosition = footer.offsetTop;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + 80;
    const windowWidth = window.innerWidth;

    //   masukin bg-color ke header pas di scroll
    if (scrollPosition > 70) {
      header.classList.add("scrolled");
      options.forEach((option) => {
        option.style.color = "black";
      });
    } else {
      header.classList.remove("scrolled");
      options.forEach((option) => {
        option.style.color = "var(--secondary-color)";
      });
    }

    // fungsi sederhana garis bawah navbar

    articles.forEach((article, index) => {
      const articleTop = article.offsetTop - 100;
      const articleBottom = articleTop + article.offsetHeight;

      if (scrollPosition >= articleTop && scrollPosition < articleBottom) {
        navLinks.forEach((link) => link.classList.remove("option-active"));
        navLinks[index].classList.add("option-active");
      } else if (scrollPosition < 300) {
        navLinks.forEach((link) => link.classList.remove("option-active"));
      }
    });

    // membuat aside fixed saat scroll melebihi posisinya
    if (windowWidth > 768) {
      if (scrollPosition > asideTopPosition) {
        aside.style.position = "fixed";
        aside.style.top = "20px";
        aside.style.width = "19.5vw";
        aside.style.right = "10vw";
        aside.style.height = "85vh";
        listNews.style.height = "73vh";
        listNews.style.overflow = "scroll";
      } else if (scrollPosition > footerTopPosition) {
        aside.style.position = "absolute";
        aside.style.top = "0";
      } else {
        aside.style.position = "static";
      }
    } else {
      aside.style.position = "static";
    }
  });

  //   animasi slider sederhana
  let currentIndex = 0;

  function showSlide(index) {
    const translateValue = -index * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000);
});

// buat buka tutup hamburger menu
const menu = document.querySelector(".container-hamburger-menu");
const opsis = document.querySelectorAll(".opsi");

function showMenu() {
  menu.style.right = "0";
}

function closeMenu() {
  menu.style.right = "-100%";
}

opsis.forEach((opsi) => {
  opsi.addEventListener("click", closeMenu);
});
