window.addEventListener("resize",cambiarTexto);

function cambiarTexto(){
    var screenWidth = window.innerWidth;
    if(screenWidth>1000){
        document.getElementById("anterior").innerHTML = "<i class="fa-solid fa-arrow-left-long"></i>&nbsp; Lección anterior";
        document.getElementById("inicio").innerHTML = "Volver al inicio &nbsp;<i class="fa-solid fa-house"></i>";
        document.getElementById("siguiente").innerHTML = "Siguiente lección &nbsp;<i class="fa-solid fa-arrow-right"></i>";
    }
    if(screenWidth<1000){
        document.getElementById("anterior").innerHTML = "<i class="fa-solid fa-arrow-left-long"></i>&nbsp; Anterior";
        document.getElementById("inicio").innerHTML = "Inicio &nbsp;<i class="fa-solid fa-house"></i>";
        document.getElementById("siguiente").innerHTML = "Siguiente &nbsp;<i class="fa-solid fa-arrow-right"></i>";
    }
    if(screenWidth<600){
        document.getElementById("anterior").innerHTML = "<i class="fa-solid fa-arrow-left-long"></i>";
        document.getElementById("inicio").innerHTML = "<i class="fa-solid fa-house"></i>";
        document.getElementById("siguiente").innerHTML = "<i class="fa-solid fa-arrow-right"></i>";
    }
}
