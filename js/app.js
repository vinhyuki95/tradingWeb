var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  breakpoints: {
    1496: {
      slidesPerView: 4.5,
    },
    
  },
});

const logo = document.querySelector(".logo");
const menuBox = document.querySelector(".menu__box");
const turnOffMenu = document.querySelector(".fa-solid.fa-xmark ");
const navHide = document.querySelector(".navHide");
logo.onclick = function(){
  if(menuBox.classList.contains("active")){
    menuBox.classList.remove("active");
  } else{
    menuBox.classList.add("active");
  }
}
turnOffMenu.onclick = function(){
  menuBox.classList.remove("active");
}
menuBox.appendChild(navHide);
 

