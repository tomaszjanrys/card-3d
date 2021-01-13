//movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//item
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase button')
//Movinng animation even
container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX ) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY ) / 20;
   // let x = window.innerWidth
    //console.log(e.pageX, e.pageY);
    //console.log(x)
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`

});
//Animate in    
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Pop out efect
    title.style.transform = 'translateZ(150px)'
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)'
    description.style.transform = 'translateZ(125px)'
    sizes.style.transform = 'translateZ(125px)'
    purchase.style.transform = 'translateZ(75px)'
})

//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.2s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; // usuniecie myszy z card przywraca ustawienie card 
//Popback
title.style.transform = 'translateZ(0px)'
sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
description.style.transform = 'translateZ(0px)'
sizes.style.transform = 'translateZ(0px)'
purchase.style.transform = 'translateZ(0px)'
})