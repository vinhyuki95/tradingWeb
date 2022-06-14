
// selector element (sử lý sự kiện khi click vào account)
const accountBox = document.querySelector(".account__box");
const headerAccount=document.querySelector(".header__account");
// create new element then add a class
const sideBarMenuItemContainer = document.createElement("div");
sideBarMenuItemContainer.classList.add("account-dropdown");   //bọc chứa content khi click vào tài khoản
headerAccount.appendChild(sideBarMenuItemContainer);

accountBox.onclick = function(){
  if(sideBarMenuItemContainer.classList.contains("active")){
    sideBarMenuItemContainer.classList.remove("active");
  }else{
    sideBarMenuItemContainer.classList.add("active");
  }
}

// tạo vòng lặp để chạy qua từng phần tử(cho nội dụng vào account-dropdown)
const arr= [
  ["../../img/account/overview.png","Tổng quan"],
  ["../../img/account/security.png", "Bảo mật"],
  ["../../img/account/change-pin-code.png","Thay đổi mã pin"],
  ["../../img/account/change-otp.png","Đổi phương thức OTP"],
  ["../../img/account/ic_logout.png","Đăng xuất"]
];
for(let i = 0; i<arr.length; i=i+1){
  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("item-container");
  sideBarMenuItemContainer.appendChild(menuItemContainer);

  const menuItemLogo= document.createElement("img");
  menuItemLogo.classList.add("menu-item-logo");
  menuItemLogo.src= arr[i][0];
  menuItemContainer.appendChild(menuItemLogo);

  const menuItemName = document.createElement("div");
  menuItemName.classList.add("menu-item-name");
  menuItemName.innerHTML = arr[i][1];
  menuItemContainer.appendChild(menuItemName);
}

//xử lí sự kiện khi click tài sản
// selector element được click
const assetElement = document.querySelector(".asset");
const headerWrapElement = document.querySelector(".header__wrap");
const sidebarAssetContainer=document.createElement("div");
sidebarAssetContainer.classList.add("sidebar-asset-container");
headerWrapElement.appendChild(sidebarAssetContainer);
assetElement.onclick = function(){
  if(sidebarAssetContainer.classList.contains("active")){
    sidebarAssetContainer.classList.remove("active");
  }else{
    sidebarAssetContainer.classList.add("active");
  }
}

const arrSidebarAsset=[
  ["../../img/common-header/left-long.svg","Ẩn Menu"],
  [ 
    "../../img/common-header/total-assets.png",
    "Tổng tài sản",
    "../../img/common-header/drop-up.png",
    [
      "Tài khoản thông thường",
      "Tài khoản ký quỹ",
      "Tài khoản phát sinh",
    ]
  ]
];
for(let i=0; i<arrSidebarAsset.length; i=i+1){
  const menuItemContainer=document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");
  sidebarAssetContainer.appendChild(menuItemContainer);

  const itemLogo = document.createElement("img");
  itemLogo.classList.add("item-logo");
  itemLogo.src= arrSidebarAsset[i][0];
  menuItemContainer.appendChild(itemLogo);

  const itemNameAsset = document.createElement("div");
  itemNameAsset.classList.add("item-name");
  itemNameAsset.innerHTML= arrSidebarAsset[i][1];
  menuItemContainer.appendChild(itemNameAsset);

  if(arrSidebarAsset[i][2]!== undefined){
    const dropdownLogo = document.createElement("img");
    dropdownLogo.classList.add("dropdown-logo");
    dropdownLogo.src = arrSidebarAsset[i][2];
    menuItemContainer.appendChild(dropdownLogo);
    dropdownLogo.onclick = function(){
      
    }
  };
  
  
  if(arrSidebarAsset[i][3]!== undefined){
    const subContainer= document.createElement("div");
    subContainer.classList.add("sub-container");

    const subMenuItem1 =document.createElement("div");
    subMenuItem1.classList.add("sub-menu-item");
    subMenuItem1.innerHTML= arrSidebarAsset[i][3][0];
    subContainer.appendChild(subMenuItem1);

    const submenuItem2 =document.createElement("div");
    submenuItem2.classList.add("sub-menu-item");
    submenuItem2.innerHTML= arrSidebarAsset[i][3][1];
    subContainer.appendChild(submenuItem2);

    const submenuItem3 =document.createElement("div");
    submenuItem3.classList.add("sub-menu-item");
    submenuItem3.innerHTML= arrSidebarAsset[i][3][2];
    subContainer.appendChild(submenuItem3);
    
    menuItemContainer.appendChild(subContainer);

  }
  



};
//  const menuItemElement= document.querySelector(".menu-item-container:nth-child(2)");
//  menuItemElement.classList.add("menu-bottom");
//  console.log(menuItemElement);

//  const dropdownLogo = document.querySelector(".dropdown-logo");




















// click sổ lệnh
const headerWrap = document.querySelector(".header__wrap");
const orderBookElement = document.querySelector(".order-book");
const sidebarOrderBook = document.createElement("div");
 sidebarOrderBook.classList.add("sidebar-orderbook");
 headerWrap.appendChild(sidebarOrderBook);


 orderBookElement.onclick = function(){
  // sidebarOrderBook.classList.toggle("active");
  if(sidebarOrderBook.classList.contains("active")){
    sidebarOrderBook.classList.remove("active");
  } else{
    sidebarOrderBook.classList.add("active");
    console.log(sidebarOrderBook);
  }
 }