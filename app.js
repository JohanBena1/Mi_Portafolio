
//funcion de seleccion  
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className = "seleccionado";

    //desaparecer menu despues de seleccionar
    var x = document.getElementById("nav");
    x.className="";
}
//responsive menu
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
    
}

window.onscroll = function(){
    efectoHabilidades()
};

//animacion barras de skills

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight - skills.getClientRects().top;
    if (distacia_skills >= 300){
        document.getElementById("ar").classList.add("barra-progreso1");
        document.getElementById("hm").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("pt").classList.add("barra-progreso4");
        document.getElementById("sql").classList.add("barra-progreso5");

    }
}