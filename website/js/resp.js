burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
searchbar = document.querySelector('.searchbar')


burger.addEventListener('ckick',()=>{
    searchbar.classList.toggle('v-class');
    naList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})