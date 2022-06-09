var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  breakpoints: {
    1496: {
      slidesPerView: 4.5,
    },
    
  },
});

const menuHide = document.querySelector(".logo");
const tabBox = document.querySelector(".tabBox");
const navHide= document.querySelector(".navHide");
const closeTab = document.querySelector(".fa-solid.fa-xmark");

menuHide.onclick = function(){
if(tabBox.classList.contains("active")){
  tabBox.classList.remove("active");
}else{
  tabBox.classList.add("active");
}
};
tabBox.appendChild(navHide);