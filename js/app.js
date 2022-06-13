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
 

// // tạo vòng lặp để chạy qua từng phần tử(cho nội dụng vào account-dropdown)
// const arr= [["../../img/account/overview.png","Tổng quan"],["../../img/account/security.png", "Bảo mật"],["../../img/account/change-pin-code.png","Thay đổi mã pin"],["../../img/account/change-otp.png","Đổi phương thức OTP"],["../../img/account/ic_logout.png","Đăng xuất"]];
// for(let i = 0; i<arr.length; i=i+1){
//   const menuItemContainer = document.createElement("div");
//   menuItemContainer.classList.add("menu-item-container");
//   sideBarMenuContainer.appendChild(menuItemContainer);

//   const menuItemLogo= document.createElement("img");
//   menuItemLogo.classList.add("menu-item-logo");
//   menuItemLogo.src= arr[i][0];
//   menuItemContainer.appendChild(menuItemLogo);

//   const menuItemName = document.createElement("div");
//   menuItemName.classList.add("menu-item-name");
//   menuItemName.innerHTML = arr[i][1];
//   menuItemContainer.appendChild(menuItemName);
// }

