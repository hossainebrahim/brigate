const mobileMenuBar =document.querySelector('.mobileMenuBar');
const manu = document.querySelector('.manu');
const submaniber = document.querySelectorAll('.submaniber')
// console.log(submaniber);
const home = document.querySelector('#home');
const pages=document.querySelector('#pages');

mobileMenuBar.addEventListener('click',function(){
    this.querySelector('i').classList.toggle('fa-times')
    manu.classList.toggle("SubMenuShow");

})
// home.addEventListener('click',function(){
//     submaniber.classList.toggle("submaniberShow");
// })
// pages.addEventListener('click',function(){
//     submaniber.classList.toggle("submaniberShow");
// })
submaniber.forEach(function(e){
    console.log(e);
    // e.querySelector('a').innerHTML +=`<i style="color:red;float:right;" class="fas fa-angle-down"`
})