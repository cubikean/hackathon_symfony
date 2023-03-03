console.log('here');

const btnMenu = document.querySelector('.main-menu')

if (btnMenu){

btnMenu.addEventListener('click', ()=>{

    btnMenu.classList.toggle('main-menu--active')

})
}

function change() {
 
    select = document.getElementById("select");
    select_s = select.style;
     
    switch(select.selectedIndex) {
     
    case 0 :
    select_s.background = "url('assets/img/mars.png') no-repeat";
    break;
     
    case 1 :
    select_s.background = "url('assets/img/planete.png') no-repeat";
    break;
     
    case 2 :
    select_s.background = "url('assets/img/mars.png') no-repeat";
    break;
     
    case 3 :
    select_s.background = "url('assets/img/mars.png') no-repeat";
    break;
     
    default:
    select_s.background = "none";
    break;
    }
    }

const paiment = document.querySelector('.checkout')
const bouton__propulser = document.querySelector('.bouton__propulser')

if (paiment){
bouton__propulser.addEventListener('click', (e)=>{
    e.preventDefault();
    paiment.classList.toggle('checkout--active')

})
}

const btnForm = document.querySelector('form button')

if(btnForm){
    btnForm.addEventListener('click', (e)=>{
    e.preventDefault();
    paiment.classList.toggle('checkout--active')
    })
}