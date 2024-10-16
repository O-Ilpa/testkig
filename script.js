
let toggleBar = document.querySelector(".toggleBar");
let navBar = document.querySelector(".navBar");
let overLay = document.querySelector("#overlay");
let topBar = document.querySelector("header .toggleBar span:nth-child(1)");
let middleBar = document.querySelector("header .toggleBar span:nth-child(2)");
let bottomBar = document.querySelector("header .toggleBar span:nth-child(3)");
let govContainer = document.querySelector(".governates  .swiper-wrapper");
toggleBar.addEventListener("click", function () {
  navBar.classList.toggle("close");
  overLay.classList.toggle("display");
});

navBar.addEventListener("click", function () {
  navBar.classList.toggle("close");
  overLay.classList.toggle("display");
  topBar.classList.toggle("downRotate");
  middleBar.classList.toggle("dissapp");
  bottomBar.classList.toggle("upRotate");
});

overLay.addEventListener("click", function () {
  navBar.classList.toggle("close");
  overLay.classList.toggle("display");
  topBar.classList.toggle("downRotate");
  middleBar.classList.toggle("dissapp");
  bottomBar.classList.toggle("upRotate");
});

toggleBar.addEventListener("click", function () {
  topBar.classList.toggle("downRotate");
  middleBar.classList.toggle("dissapp");
  bottomBar.classList.toggle("upRotate");
});

function addGovernates(name, bgimg) {
  let govBox = document.createElement("a");
  govBox.classList.add("box","swiper-slide")
  govBox.style.cssText = `background-image: url(./images/${bgimg});`
  govBox.innerHTML = ` 
    <div>
      <div class="text">
      <h3>${name}</h3>
      <p>learn more</p>
      </div>
    </div>`;
  govContainer.appendChild(govBox);
}

addGovernates("Alexandria",  "alx.webp");
addGovernates("Cairo",  "cairo.webp");
addGovernates("Behira",  "beh.webp");
addGovernates("Sohag",  "soh.webp");
addGovernates("Hurghada", "hur.webp");
addGovernates("Aswan",  "asw.webp");
addGovernates("Assuit",  "asy.webp");
addGovernates("Beni Suef",  "ben.webp");
addGovernates("Dakahlia",  "dakah.webp");
addGovernates("Damietta",  "dam.webp");
addGovernates("fayoum",  "fay.webp");
addGovernates("Gharbia",  "ghar.webp");
addGovernates("Giza",  "giz.webp");
addGovernates("Ismailia",  "ism.webp");
addGovernates("Kafr El-Sheikh",  "kaf.webp");
  
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,  // Show only one slide at a time
  spaceBetween: 20,  // Space between slides
  loop: true,        // Ensure it loops back correctly
  grabCursor: true,  // Show grabbing cursor on hover

  pagination: {
    el: ".swiper-pagination",
    clickable: true,  // Allow clicking pagination bullets
    dynamicBullets: true,  // Use dynamic bullets
  },
  navigation: {
    nextEl: ".swiper-button-next",  // Next button selector
    prevEl: ".swiper-button-prev",  // Previous button selector
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    }
  }
});

