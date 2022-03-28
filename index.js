'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const bids = document.querySelector('.display');
const sections = document.querySelectorAll('.section');
const reload = document.querySelector('.reload');

bids.textContent = '⬅ Enter Budget Here';



let yourBid = 0;
let discount = 0;

const bid = function(prices){

    if(prices <= 10){
        // discount = 0;
        yourBid = prices;
        console.log(yourBid,"No discount");
    }

    if(prices > 10 && prices <= 100){
      discount = 0.8;
      yourBid = prices * discount;
    }


    if(prices > 100 && prices <= 200){
        discount = 0.875;
        yourBid = prices * discount;
    }

    if(prices > 200){
      discount = 0.88;
      yourBid = prices * discount;
    }


  
  const  html = ` <h3 class="display">$ <b class="price">${Math.ceil(Math.round(yourBid))}.00</b></h3>`;
 
  
  bids.insertAdjacentHTML('beforeend',html);
  console.log(yourBid);
  
};

button.addEventListener('click',function(e){
  e.preventDefault;
  
  console.log('clicked');
  // bids.style.opacity = "1";
  bids.textContent = ' ';
  
  const price = +input.value;
  
  console.log(typeof price);
  
  
  if(!price || price <= 0) return;
  
  bid(price);   
  
  console.log(price);
  // document.querySelector('.result').style.paddingLeft = '14rem';
  
});

reload.addEventListener('click',function(){

  bids.textContent = '⬅ Enter Budget Here';
  input.value = '';
});


