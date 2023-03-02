console.log('here');

const btnMenu = document.querySelector('.main-menu')

btnMenu.addEventListener('click', ()=>{

    btnMenu.classList.toggle('main-menu--active')

})

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