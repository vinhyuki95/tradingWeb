
// sự kiện khi click vào tài khoản
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

//sự kiện khi click tài sản
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

  // if(arrSidebarAsset[i][2]!== undefined){
  //   const dropdownLogo = document.createElement("img");
  //   dropdownLogo.classList.add("dropdown-logo");
  //   dropdownLogo.src = arrSidebarAsset[i][2];
  //   menuItemContainer.appendChild(dropdownLogo);
  // };
  
  if(arrSidebarAsset[i][3]!== undefined && arrSidebarAsset[i][2]!== undefined){
    const dropdownLogo = document.createElement("img");
    dropdownLogo.classList.add("dropdown-logo");
    dropdownLogo.src = arrSidebarAsset[i][2];
    menuItemContainer.appendChild(dropdownLogo);

    const subContainer= document.createElement("div");
    subContainer.classList.add("sub-container");
    menuItemContainer.onclick = function(){ 
      subContainer.classList.toggle("active");
      dropdownLogo.classList.toggle("onclick");
    }

    const subMenuItem1 =document.createElement("div");
    subMenuItem1.classList.add("sub-menu-item");
    subMenuItem1.innerHTML= arrSidebarAsset[i][3][0];
    console.log(subMenuItem1);

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
    const itemLogoOnclick = document.querySelector(".menu-item-container:last-child .dropdown-logo");
    itemLogoOnclick.onclick = function(){
    subContainer.classList.toggle("active");
    }
  };
 }

// click sổ lệnh
// selector element được click và tạo element để sidebar
const headerWrap = document.querySelector(".header__wrap");
const orderBookElement = document.querySelector(".order-book");
const sidebarOrderBook = document.createElement("div");
 sidebarOrderBook.classList.add("sidebar-orderbook");
 headerWrap.appendChild(sidebarOrderBook);

// khi click vào sổ lệnh sidebarOrderBook sẽ đc avtive;
//  orderBookElement.onclick = function(){
//   sidebarOrderBook.classList.toggle("active");
//  }

const arrOderBook = [
    ["../../img/common-header/left-long.svg","Ẩn Menu"],
    [
     "../../img/common-header/base-command.png",
     "Lệnh CK cơ sở",
     "../../img/common-header/drop-up.png",
      [
        "Lệnh Chờ ",
        "Lịch sử đặt lệnh",
        "Lịch sử giao dịch",
        "Lệnh điều kiện"
      ]
    ],
    ["../../img/common-header/derivative-order.png",
     "Lệnh phái sinh",
     "../../img/common-header/drop-up.png",
      [
        "Vị thế mở",
        "Vị thế đóng",
        "Lịch sử đặt lệnh"
      ]
    ],
    ["../../img/common-header/loan-history.png",
    "Lịch sử vay",
    "../../img/common-header/drop-up.png",
      [
        "Hợp đồng vay đang mở",
        "Lịch sử trả nợ",
        "Lịch sử vay"
      ]
    ]
    ];
 
for(let i = 0; i<arrOderBook.length; i=i+1){
  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("orderBook__container");
  sidebarOrderBook.appendChild(menuItemContainer);

  const itemLogo = document.createElement("img");
  itemLogo.classList.add("orderBook-logo");
  itemLogo.src= arrOderBook[i][0];
  menuItemContainer.appendChild(itemLogo);

  const itemName = document.createElement("div");
  itemName.classList.add("orderBook-name");
  itemName.innerHTML=arrOderBook[i][1];
  menuItemContainer.appendChild(itemName);

  // 2 hành động này liên quan tới nhau nên phải xảy ra cùng nhau
  if(arrOderBook[i][3] !== undefined && arrOderBook[i][2] !== undefined){
    const dropdownLogo=document.createElement("img");
    dropdownLogo.classList.add("dropdown-orderBook-logo");
    dropdownLogo.src=arrOderBook[i][2];
    menuItemContainer.appendChild(dropdownLogo);

    const subMenuContainer = document.createElement("div");
    subMenuContainer.classList.add("submenu__container");
    menuItemContainer.appendChild(subMenuContainer);

    //onclick dropdownLogo
    menuItemContainer.onclick = function(){
      subMenuContainer.classList.toggle("active");
      dropdownLogo.classList.toggle("click");
    }

    const subMenuItem1 = document.createElement("div");
     subMenuItem1.classList.add("submenu-item");
     subMenuItem1.innerHTML = arrOderBook[i][3][0];
     subMenuContainer.appendChild(subMenuItem1);

    const subMenuItem2 = document.createElement("div");
    subMenuItem2.classList.add("submenu-item")
    subMenuItem2.innerHTML=arrOderBook[i][3][1];
    subMenuContainer.appendChild(subMenuItem2);

    const subMenuItem3 = document.createElement("div");
    subMenuItem3.classList.add("submenu-item")
    subMenuItem3.innerHTML = arrOderBook[i][3][2];
    subMenuContainer.appendChild(subMenuItem3);

    if(arrOderBook[i][3][3] !== undefined){
      const subMenuItem4 = document.createElement("div");
      subMenuItem4.classList.add("submenu-item")
      subMenuItem4.innerHTML = arrOderBook[i][3][3];
      subMenuContainer.appendChild(subMenuItem4);
    };
  } 
};


//click icon mũi tên turnoff sidebar
const turnOffSidebarAsset = document.querySelector(".menu-item-container:first-child img");
turnOffSidebarAsset.onclick = function(){
  sidebarAssetContainer.classList.remove("active");
  console.log(sidebarAssetContainer);
}
const turnOffSidebarOrderBook= document.querySelector(".orderBook__container:first-child img");
turnOffSidebarOrderBook.onclick = function(){
  sidebarOrderBook.classList.add("active");
}



// //onclick dropdowm-toggle submenu-container
// const itemLogoClick = document.querySelectorAll(".dropdown-orderBook-logo");
// const subMenuContainer = document.querySelector(".submenu__container");
// for(let i=0; i<itemLogoClick.length; i=i+1){
//   const dropdownLogo = itemLogoClick[i];
//   dropdownLogo.onclick = function(){
//   subMenuContainer.classList.toggle("active");   
//   console.log(dropdownLogo);
//   };
// }