
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
