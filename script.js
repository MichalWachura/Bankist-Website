'use strict';



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
const allButtons = document.getElementsByTagName('button')

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
// Page navigation ( SMOOTH NAVIGATION)

//document.querySelectorAll('.nav__link').forEach(function//(el){
//  el.addEventListener('click',function(e){
//    e.preventDefault();
//    const id = this.getAttribute('href');
//    console.log(id)
//    document.querySelector(id).scrollIntoView//({behavior:'smooth'})
//  })
//});

// 1. Add event listner to common parent element
// 2. Determinate what element originated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
 // Matching Strategy
  if(e.target.classList.contains('nav__link')){
    
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})
  


// button scorlling
btnScrollTo.addEventListener('click',function(e){

  section1.scrollIntoView({behavior:'smooth'})
  //const s1cords = section1.getBoundingClientRect();
  //console.log(s1cords)
  //console.log(e.target.getBoundingClientRect())
  //console.log('Current scroll(X/Y',window.pageXOffset,window.pageYOffset)

  // scrolling
  //window.scrollTo(s1cords.left +window.pageXOffset,
  //s1cords.top+pageYOffset
  //);
  
  //window.scrollTo({
  //  left:s1cords.left + window.pageXOffset,
  //  top:s1cords.top+ window.pageYOffset,
  //  behavior:'smooth'
  //});

  

})
/*
// ==================== 189 Events and event Heandlesrs ====================

const h1 = document.querySelector('h1');


const alertH1 = function(e){
  alert('addEventListener : Great! You are reading a heading :)');
  
};

h1.addEventListener('mouseenter',alertH1)

setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000)

//h1.onmouseenter = function(e){
  //alert('addEventListener : Great! You are reading a heading :)')
//};




// rgb  255,255,255
const randomInt = (min,max) =>Math.floor(Math.random()*(max-min+1)+min)

const randomColor = ()=> `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor()
  console.log('LINK',e.target,e.currentTarget)
  console.log(e.currentTarget === this)

  // Stop propagation
  //e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor()
  console.log('CONTAINER',e.target,e.currentTarget)
  
  
})
document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor = randomColor()
  console.log('NAV',e.target,e.currentTarget)
 
})



/ creating and inserting elemnts
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='We use cookies for improved functionality.<button class="btn btn--close-cookies">Got it !</button>';
header.append(message)
//header.append(message.cloneNode(true))
//header.before(message);
//header.after(message);

// Delete elemtns
document.querySelector('.btn--close-cookies').addEventListener('click',function(){
  //message.remove();
  message.parentElement.removeChild(message)
});
*/













/*
// Styles

message.style.backgroundColor='#37383d'
message.style.width='120%'

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary','orangered')

// Atributtes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)

console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

console.log(logo.src)
console.log(logo.getAttribute('src'))

const link = document.querySelector('.nav__link--btn')
console.log(link.href);
console.log(link.getAttribute('href'))

// Data attributtes

console.log(logo.dataset.vesrionNumber)

// Classes 

logo.classList.add('c','j')
logo.classList.remove('c','j')
logo.classList.toggle('c','j')
logo.classList.contains('c','j')

// Dont use it!! (overwrite!)
logo.className='jonas'


const h1 = document.querySelector('h1')

// going downwards : child

console.log(h1.querySelectorAll('.highlight'))
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

// going upwards : parent

console.log(h1.parentNode)
console.log(h1.parentElement)

h1.closest('.header').style.background = ' var(--gradient-secondary)'

h1.closest('h1').style.background = ' var(--gradient-primary)'

// going sideways : siblings

console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
  if(el !== h1){
    el.style.transform = 'scale(0.5)'
  }
})
*/