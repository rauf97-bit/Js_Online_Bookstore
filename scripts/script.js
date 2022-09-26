// Selectors
const searchBtn = document.querySelector('#search-btn')
const searchBox = document.querySelector('.search-box')
const navbar = document.querySelector('.navbar')
const loginBtn = document.querySelector('#login-btn')
const signinForm = document.querySelector('.signin');
// Toggle Search box on smaller screen
window.onload = () =>{
  // hideNavbar()
}

searchBtn.addEventListener('click', ()=>{
  searchBox.classList.toggle('active')
})
loginBtn.addEventListener('click', ()=>{
  signinForm.classList.toggle('active')
})
document.querySelector('#close-login-btn').onclick = () =>{
  signinForm.classList.remove('active')
}
const hideNavbar = ( ) =>{
  if (window.scrollY > 80) {
    navbar.classList.add('active')
  } else {
    navbar.classList.remove('active') 
  }
}
window.onscroll = ()=>{
  hideNavbar()
}





// Books Swiper 
var swiper = new Swiper(".book-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});