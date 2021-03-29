burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
// burger= document.querySelector('.burger')
flexcol= document.querySelector('.flex-col')
opacity= document.querySelector('.v-class')



burger.addEventListener('click' , ()=>{
    navbar.classList.toggle('h-class')
    flexcol.classList.toggle('flex-col')
    opacity.classList.toggle('v-class')
})