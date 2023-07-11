'use strict';
const menuTogglerOpen =
document.querySelector('.menu1');
const menuTogglerClose =
 document.querySelector('.menu2');
const navList =
document.querySelector('.nav-list');
const deem =
document.querySelector('.blur');

//For cart dropdown manipulation
const dropBox =
document.querySelector('.dropbox');
const cartButton =
document.querySelector('.drop');

//Variables for the image navigator
const product1Btn =
document.querySelector('.product-1');
const product2Btn =
  document.querySelector('.product-2');
  const product3Btn =
    document.querySelector('.product-3');
    const product4Btn =
      document.querySelector('.product-4');
const pro1Btn =
  document.querySelector('.pro1');
const pro2Btn =
  document.querySelector('.pro2');
const pro3Btn =
  document.querySelector('.pro3');
const pro4Btn =
  document.querySelector('.pro4');
const displayBig =
document.querySelector('.big');

// For quantity controls
const quantityInput =
document.querySelector('#quantity');
const reduceQuantity =
document.querySelector('.reduce');
const increaseQuantity =
document.querySelector('.increase');
let numberofGoods = 0;




menuTogglerOpen.addEventListener('click', function(event){
  event.preventDefault();
 if (navList.style.display === 'none') {
    navList.style.display = 'block';
    deem.classList.add('overlay');
    main.classList.add('light-bg');
    displayLight.classList.remove('light-bg');
    document.querySelector('.normal-display').style.opacity = '15%';
    displayLight.style.opacity = '20%';
  }else{
    navList.style.display = 'none';
    deem.classList.remove('overlay');
    main.classList.remove('light-bg');

    document.querySelector('.normal-display').style.opacity = '100%';
    displayLight.style.opacity = '100%';
  }
})

menuTogglerClose.addEventListener('click', function(event){
     event.preventDefault();
   if (navList.style.display === 'block') {
     navList.style.display = 'none';
     main.classList.remove('light-bg');
     displayLight.classList.remove('light-bg');
     document.querySelector('.normal-display').style.opacity = '100%';
     displayLight.style.opacity = '100%';

     deem.classList.remove('overlay');
   }else{
     navList.style.display = 'block';
     deem.classList.add('overlay');
     main.classList.add('light-bg');
     document.querySelector('.normal-display').style.opacity = '15%';
     displayLight.style.opacity = '20%';
   }
})

cartButton.addEventListener('click', function(){
  if (dropBox.style.display === 'none') {
    dropBox.style.display = 'block';
  } else {
    dropBox.style.display = 'none';
  }

});


//For the image navigator
//Creating a function to implement the dont repeat yourself principle
let changeDisplay = function(imagesrc){
  displayBig.innerHTML = imagesrc;
}

product1Btn.addEventListener('click', function(){
  changeDisplay(
    '<img src="image-product-1.jpg" alt="product-1">'
    );
})
product2Btn.addEventListener('click', function() {
  changeDisplay(
    '<img src="image-product-2.jpg" alt="product-2">'
  );
})
product3Btn.addEventListener('click', function() {
  changeDisplay(
    '<img src="image-product-3.jpg" alt="product-3">'
  );
})
product4Btn.addEventListener('click', function() {
  changeDisplay(
    '<img src="image-product-4.jpg" alt="product-4">'
  );
})
//For lightBox

let changeLightBoxDisplay = function(imagesrcCahnge) {
  lightEl.innerHTML = imagesrcCahnge;
}

pro1Btn.addEventListener('click', function() {
  changeLightBoxDisplay(
    '<img src="image-product-1.jpg" alt="product-1">'
  );
})
pro2Btn.addEventListener('click', function() {
  changeLightBoxDisplay(
    '<img src="image-product-2.jpg" alt="product-2">'
  );
})
pro3Btn.addEventListener('click', function() {
  changeLightBoxDisplay(
    '<img src="image-product-3.jpg" alt="product-3">'
  );
})
pro4Btn.addEventListener('click', function() {
  changeLightBoxDisplay(
    '<img src="image-product-4.jpg" alt="product-4">'
  );
})

//✅ Working Properly

//For the quantity adder buttons

increaseQuantity.addEventListener('click', function(){
  numberofGoods++
  quantityInput.value = numberofGoods;
})
reduceQuantity.addEventListener('click', function() {
  numberofGoods--
  quantityInput.value = quantityInput.value == 0 ? 0 :
  numberofGoods;
})


//For carousel
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
//const imageSlides = document.querySelector('.item');
let startImage = 1;
//For the light box
const displayLight =
  document.querySelector('.lightbox');
const main =
  document.querySelector('.main');
let lightEl =
  document.querySelector('.lightEl');
const closeLightBox =
  document.querySelector('.closeBox');


const plusDirection = function(){
  startImage ++
  startImage = startImage <= 4 ? startImage : 4;
  if(startImage <= 4){
    lightEl.innerHTML =
    `<img src = "image-product-${startImage}.jpg">`;
  }else if(startImage == 4){
    lightEl.innerHTML =
    '<img src = "image-product-4.jpg" alt = "product 4">';
  }
}

const minusDirection = function() {
  startImage--
  startImage = startImage <= 4 && startImage >= 2 ? startImage : 1;
  if (startImage <= 4 && startImage >= 2) {
    lightEl.innerHTML =
    `<img src = "image-product-${startImage}.jpg">`;
  }else if(startImage == 1){
    lightEl.innerHTML =
      '<img src = "image-product-1.jpg" alt = "product 1">';
  }
}

next.addEventListener('click', plusDirection);
prev.addEventListener('click', minusDirection);

displayBig.addEventListener('click', function(){
  displayLight.style.display = 'flex';
  displayLight.classList.add('moveup');
  lightEl.innerHTML = displayBig.innerHTML;
  main.classList.add('light-bg');
  document.querySelector('.normal-display').style.opacity = '15%';
})
closeLightBox.addEventListener('click', function(){
  displayLight.style.display = 'none';
  displayLight.classList.remove('moveup');
  displayBig.innerHTML = lightEl.innerHTML;
  main.classList.remove('light-bg');
  document.querySelector('.normal-display').style.opacity = '100%';
})


//To create new cart item on click of the add-to-cart button
const addToCart =
document.querySelector('.to-cart');
const checkOut =
document.getElementById('check');
const emptyCart =
document.querySelector('.empty');
const newItem =
document.querySelector('.goods');
const costPrice = 125;
let counterId = 0;



//Hiding the checkout button
checkOut.classList.add('hidden');

   addToCart.addEventListener('click', function() {
         emptyCart.classList.add('hidden');
         //Calculating total price
         let totalPrice =
           costPrice * Number(quantityInput.value);
         //to create item using the styling we created
         let itemGenerate =
           document.createElement('div');
         itemGenerate.id = 'goods';
         //image element
         const image =
           document.createElement('img');
         image.src = 'image-product-1.jpg';

         //Details Element
         const itemDetails =
           document.createElement('div');
         itemDetails.id = 'details';

         const productName =
           document.createElement('p');
         productName.textContent =
           'Fall Limited Edition Sneakers';

         const productPrice =
           document.createElement('p');
         productPrice.textContent =
           `${costPrice} × ${quantityInput.value}`;

         const span =
           document.createElement('span');
         span.textContent = "$ " + totalPrice;


         itemDetails.appendChild(productName);
         productPrice.appendChild(span);
         itemDetails.appendChild(productPrice);

         //delete element
         const deleteBtn =
           document.createElement('button');
          deleteBtn.id = 'delete';
         deleteBtn.textContent = '🗑️';
         itemGenerate.appendChild(image);
         itemGenerate.appendChild(itemDetails);
         itemGenerate.appendChild(deleteBtn);

         document.querySelector('.item-container').appendChild(itemGenerate);
         checkOut.classList.remove('hidden');

        //To add notifications on the on the cart icon when add to cart is clicked

        let notifications =
        document.createElement('p');
        notifications.id = 'newNotification';
        notifications.textContent = Number(quantityInput.value);
        
        document.querySelector('.drop').appendChild(notifications);
})
