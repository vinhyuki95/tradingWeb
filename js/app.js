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

// selector element (sử lý sự kiện khi click vào account)
const accountBox = document.querySelector(".account__box");
const headerAccount=document.querySelector(".header__account");
// create new element then add a class
const sideBarMenuContainer = document.createElement("div");
sideBarMenuContainer.classList.add("account-dropdown");   //bọc chứa content khi click vào tài khoản
headerAccount.appendChild(sideBarMenuContainer);

accountBox.onclick = function(){
  if(sideBarMenuContainer.classList.contains("active")){
    sideBarMenuContainer.classList.remove("active");
  }else{
    sideBarMenuContainer.classList.add("active");
  }
}

// tạo vòng lặp để chạy qua từng phần tử(cho nội dụng vào account-dropdown)
const arr= [["../../img/account/overview.png","Tổng quan"],["../../img/account/security.png", "Bảo mật"],["../../img/account/change-pin-code.png","Thay đổi mã pin"],["../../img/account/change-otp.png","Đổi phương thức OTP"],["../../img/account/ic_logout.png","Đăng xuất"]];
for(let i = 0; i<arr.length; i=i+1){
  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");
  sideBarMenuContainer.appendChild(menuItemContainer);

  const menuItemLogo= document.createElement("img");
  menuItemLogo.classList.add("menu-item-logo");
  menuItemLogo.src= arr[i][0];
  menuItemContainer.appendChild(menuItemLogo);

  const menuItemName = document.createElement("div");
  menuItemName.classList.add("menu-item-name");
  menuItemName.innerHTML = arr[i][1];
  menuItemContainer.appendChild(menuItemName);
}

// tạo slidebar khi click vào tài sản
//selector element onlick
// const headerWrap = document.querySelector(".header__wrap");
// const assetSelector = document.querySelector(".navbar__item .asset");
// const sidebarAssetContainer= document.createElement("div");
// sidebarAssetContainer.classList.add("sidebar-asset-container");
// headerWrap.appendChild(sidebarAssetContainer);
// console.log(headerWrap);

// assetSelector.onlick = function(){
//   if(sidebarAssetContainer.classList.contains("active")){
//     sidebarAssetContainer.classList.remove("active");
//   }else{
//     sidebarAssetContainer.classList.add("active");
//   }
// };