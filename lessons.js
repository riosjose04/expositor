window.addEventListener("resize",cambiarTexto);

function cambiarTexto(){
    var screenWidth = window.innerWidth;
    if(screenWidth>1000){
        document.getElementById("anterior").innerHTML = "Lección anterior";
        document.getElementById("inicio").innerHTML = "Volver al inicio";
        document.getElementById("siguiente").innerHTML = "Siguiente lección";
    }
    if(screenWidth<1000){
        document.getElementById("anterior").innerHTML = "Anterior";
        document.getElementById("inicio").innerHTML = "Inicio";
        document.getElementById("siguiente").innerHTML = "Siguiente";
    }
    if(screenWidth<600){
        document.getElementById("anterior").innerHTML = "";
        document.getElementById("inicio").innerHTML = "";
        document.getElementById("siguiente").innerHTML = "";
    }
}