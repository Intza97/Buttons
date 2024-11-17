const esfera = document.querySelector('.esfera');



let fondoesfera = document.querySelector('.fondoEsfera');
let cloud = document.querySelector('.nube');
let fondo = document.querySelector('.background');
let luna = document.querySelector('.luna');
let stars = document.querySelector('.estrellas');


esfera.addEventListener('click',()=>{
    fondoesfera.classList.toggle("right");
    cloud.classList.toggle("abajo");
    fondo.classList.toggle("black");
    luna.classList.toggle("center");
    stars.classList.toggle("newstar");

})






   
