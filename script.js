const containerServicios = document.getElementById('container-servicios');
const servicios = document.getElementById('servicios');


containerServicios.addEventListener("click", function(){
    servicios.classList.toggle("servicios-up");
})


// btn

function hamburgerMenu(panelBtn, navBar, nav, menuLink) {
    const d = document;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(navBar).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
            d.querySelector(nav).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(navBar).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
            d.querySelector(nav).classList.remove("is-active");
        
        }
    })
}

hamburgerMenu(".panel-btn", ".navBar-ul", ".navBar",".navBar-ul li a");


function saludo(){
    alert('Hola este es un saludo');
}
