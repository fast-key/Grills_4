const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const dekstopNav = document.querySelector(".desktopNav");
const itemOrderC = document.querySelector(".itemOrderC");
const itemOrder = document.querySelector(".itemOrder");
//   for  modal
const orderBtn = document.querySelector(".orderBtn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modalClose");

// Modal Button
const rightBtn1 = document.querySelector('.rightBtn1');
const leftBtn1 = document.querySelector('.leftBtn1');
// ====================
// const leftBtn = document.querySelector(".leftBtn");
// const rightBtn = document.querySelector(".rightBtn");
// const modalPhoto = document.querySelector(".modalPhoto");

// const rightBtnHide = document.querySelector('.rightBtnHide');
// const rightBtnHide2 = document.querySelector('.rightBtnHide2');
// ===============================================
menuIcon.addEventListener("click", function () {
  console.log("heelo");
  menuIcon.classList.add("hide");
  closeIcon.classList.add("show");
  // document.querySelector(".desktopNav").style.display = "block";
  itemOrder.classList.add("itemOrderC");
});
closeIcon.addEventListener("click", function () {
  closeIcon.classList.remove("show");
  menuIcon.classList.remove("hide");
  itemOrder.classList.remove("itemOrderC");
});
// ===============================================
// ===============================================

orderBtn.addEventListener("click", function () {
  orderBtn.classList.add("orderBtnHide");
  console.log("heelo");
  modal.classList.add("modalShow");
});
modalClose.addEventListener("click", function () {
  orderBtn.classList.remove("orderBtnHide");
  modal.classList.remove("modalShow");
});

// ==============================================
// MODAL ITEM
rightBtn1.addEventListener('click',function(){
  console.log('Hello');
  document.querySelector('.modalPhoto1').style.display="none";
  document.querySelector('.modalPhoto2').style.display="block";
  document.querySelector('.modalFont1').style.display="none";
  document.querySelector('.modalFont2').style.display="block";


  rightBtn1.addEventListener('click',function(){
    console.log('Hello');
    document.querySelector('.modalPhoto1').style.display="none";
    document.querySelector('.modalPhoto2').style.display="none";
    document.querySelector('.modalPhoto3').style.display="block";
    document.querySelector('.modalFont1').style.display="none";
    document.querySelector('.modalFont2').style.display="none";
    document.querySelector('.modalFont3').style.display="block";
  })

  leftBtn1.addEventListener('click',function(){
    document.querySelector('.modalPhoto1').style.display="none";
    document.querySelector('.modalPhoto2').style.display="block";
    document.querySelector('.modalPhoto3').style.display="none";
    document.querySelector('.modalFont1').style.display="none";
    document.querySelector('.modalFont2').style.display="block";
    document.querySelector('.modalFont3').style.display="none";

    leftBtn1.addEventListener('click',function(){
      document.querySelector('.modalPhoto1').style.display="block";
      document.querySelector('.modalPhoto2').style.display="none";
      document.querySelector('.modalPhoto3').style.display="none";
      document.querySelector('.modalFont1').style.display="block";
      document.querySelector('.modalFont2').style.display="none";
      document.querySelector('.modalFont3').style.display="none";
    })
  })
  

})






// ===============================================
// ===============================================
// ===============================================
// leftBtn.addEventListener("click", function () {
//   console.log("hello");

//   document.querySelector(".modalPhoto4Hide").style.display = "block";
//   document.querySelector(".modalPhoto").style.display = "none";
//   document.querySelector('.modalFont1').style.display="none";
//   document.querySelector('.modalFont4').style.display="block";
//   // document.querySelector(".modalPhoto1Hide").style.display = "none";
// });
// rightBtn.addEventListener("click", function () {
  
//   document.querySelector(".modalPhoto1Hide").style.display = "block";
//   document.querySelector('.modalPhoto').style.display="none";
  
// document.querySelector('.modalInsidebtn1Hide').style.display='block';
//   document.querySelector('.modalInsidebtn').style.display='none';

//   document.querySelector('.modalFont1').style.display="none";
//   document.querySelector('.modalFont2').style.display="block";
//   // ===================================================
  
//   // document.querySelector(".modalPhoto").style.display = "none";
//   // document.querySelector(".modalPhoto1Hide").style.display = "block";
// });
// rightBtnHide.addEventListener('click',function(){
//   console.log('hello');
//   document.querySelector(".modalPhoto1Hide").style.display = "none";
//   document.querySelector(".modalPhoto3Hide").style.display = "block";
//   document.querySelector('.modalFont2').style.display="none";
//   document.querySelector('.modalFont3').style.display="block";

//   document.querySelector('.modalInsidebtn1Hide').style.display='none';
//   document.querySelector('.modalInsidebtn2Hide').style.display='block';

// })
// rightBtnHide2.addEventListener('click',function(){
//   console.log('heeeello');
//   document.querySelector(".modalPhoto3Hide").style.display = "none";
//   document.querySelector(".modalPhoto4Hide").style.display = "block";
//   document.querySelector('.modalFont3').style.display="none";
//   document.querySelector('.modalFont4').style.display="block";
// })
