'use strict';

//navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

//nav toggle
const navToggleFunc = function(){
    nav.classList.toggle('active');
    navToggleBtn.classList.toggle('active');

}

// shopping cart toggle
const cartToggleFunc = function() { shoppingCart.classList.toggle('active') }

//add event on nav toggle btn
navToggleBtn.addEventListener('click', function(){
    //si el carrito tiene la clase activa se removera
    if(shoppingCart.classList.contains('active')) cartToggleFunc();

    navToggleFunc();
});

cartToggleBtn.addEventListener('click',function(){
    //si la barra de navegacion tiene la clase activa se removera
    if(nav.classList.contains('active')) navToggleFunc();
    cartToggleFunc();
});

//add event on all nav-link
for (let i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click',navToggleFunc);
}