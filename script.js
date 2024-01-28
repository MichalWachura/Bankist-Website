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

// Tabbded Componnent
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav')

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

  // OLD WAY
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
  section1.scrollIntoView({behavior:'smooth'})
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


// ====================  Tabbed Component ====================

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab')

  //Guard clause
  if(!clicked) return

  // Remove active classes
  tabs.forEach(tab=> tab.classList.remove('operations__tab--active'))
  tabsContent.forEach(content=> content.classList.remove('operations__content--active'))

  // Active tab
  clicked.classList.add('operations__tab--active')

  // Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// ====================  MENU FADE ANIMATAION (196 PASSING ARGUMENTS TO EVENT HANDLERS) ====================

const handleHover = function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(element => {
      if(element !==link)
       element.style.opacity = this;
    })

    logo.style.opacity = this
  }
}

/*
nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5)
})

nav.addEventListener('mouseout',function(e){
  handleHover(e,1)
})
*/

// Passing 'argument' into handleHover
nav.addEventListener('mouseover',handleHover.bind(0.5))

nav.addEventListener('mouseout',handleHover.bind(1))
  
// ====================  STIKCY NAVIGATION ====================

/*
const initialCoords = section1.getBoundingClientRect()

window.addEventListener('scroll',function(e){
 

 if(window.scrollY > initialCoords.top){
  nav.classList.add('sticky')
 }
else{
  nav.classList.remove('sticky')
}
 
})
*/

// ====================  STIKCY NAVIGATION  using Observer API====================
/*
const observerCallback = function(entries,observer){
  entries.forEach(entry=>{
    console.log(entry)
  })

}

const observerOptions ={
  root:null,

  threshold: [0,0.2]

}

const obsever = new IntersectionObserver(observerCallback,observerOptions);

obsever.observe(section1);
*/

const navHeight = nav.getBoundingClientRect()

const stickyNav = function(entires){
  const [entry] = entires;
  console.log(entry)
  if(!entry.isIntersecting){
  nav.classList.add('sticky')
  }
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav,{
  root : null, // beacause entire viewport
  threshold : 0,
  rootMargin: `-${navHeight.height}px` // percentage and rems didnt works here
})
headerObserver.observe(header);


// Revaeling Sections

const revaelSection = function(entires,observer){
  const [entry] = entires;
  console.log(entry)
// Guard class
  if(!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revaelSection,{
  root:null,
  threshold:0.15
})

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

// 200 Lazy loading Images

const loadImg = function(entires,observer){
  const [entry] = entires;
  console.log(entires)
  if(!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}
const imgTargets = document.querySelectorAll('img[data-src]')
const imgObserver = new IntersectionObserver(loadImg,{

  root : null,
  threshold : 0,
  rootMargin:'200px',
})

imgTargets.forEach(img=> imgObserver.observe(img))