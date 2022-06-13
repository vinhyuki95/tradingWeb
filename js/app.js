//swiper chart-box
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  breakpoints: {
    1496: {
      slidesPerView: 4.5,
    },  
  },
});

//Selector element(xử lý sự kiện khi click vào menu ở màn hình 990px)
const menuHide = document.querySelector(".logo");
const tabBox = document.querySelector(".tabBox");
const navHide= document.querySelector(".navHide");
const closeTab = document.querySelector(".fa-solid.fa-xmark");

//click menu-icon ở màn hình 990px show sidebar
menuHide.onclick = function(){
if(tabBox.classList.contains("active")){
  tabBox.classList.remove("active");
}else{
  tabBox.classList.add("active");
}
};
tabBox.appendChild(navHide);

// selector deepzoom
const deepzoomLogo = document.querySelector(".deepzoom");
const chartWrap = document.querySelectorAll(".chart__wrap");

deepzoomLogo.onclick = function(){
  for(let i=0; i<chartWrap.length; i=i+1){
    const chartElement = chartWrap[i];
    if(chartElement.classList.contains("state1")){
      chartElement.classList.remove("state1");
     
    }
      else if(chartElement.classList.contains("state2")){
        chartElement.classList.remove("state2");
     
      } else{

      } 
    }
  }
 