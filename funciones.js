
let nombres =["carlos"];
function mostrar_tamano(){
    let cantidad = nombres.length;
    document.getElementById("mostrar").innerHTML = cantidad;
}

function agregar_texto(){
    var agregar = document.getElementById(Tweet).value;
    nombres.push(agregar);
    mostrar_contenido();
    document.getElementById("Tweet").value="";
}