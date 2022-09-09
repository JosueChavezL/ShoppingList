let btnAgregar = document.getElementById("btnAgregar");
let campoNombre = document.getElementById("Name");
let campoCantidad = document.getElementById("Number");
let i = 1;
let flag = true;
let resumen = 0;



btnAgregar.addEventListener("click", function(event){
event.preventDefault;

let campoResumen = document.getElementById("resumen");
let inputNombre = document.getElementById("Name").value;
let inputCant = parseFloat(document.getElementById("Number").value);
let total = 0;

if (inputNombre == "" || !isNaN(inputNombre) ) {
    flag= false;
    campoNombre.classList.remove("is-valid");
    campoNombre.classList.add("is-invalid");
}
else{
    campoNombre.classList.remove("is-invalid");
    flag = true;
}
if (inputCant == "" || isNaN(inputCant) || inputCant == 0 ) {
    flag= false;
    campoCantidad.classList.remove("is-valid");
    campoCantidad.classList.add("is-invalid");
}
else{
    campoCantidad.classList.remove("is-invalid");
    flag = true;
}


if (flag){

    let ul = document.getElementsByClassName("list-group");
    let ulShop = document.createElement("ul");
    ulShop.className = ("list-group list-group-horizontal");
    
    let li0 = document.createElement("li");
    li0.innerText = (i);
    li0.className = ("list-group-item font-weight-bold");
    
    let li1 = document.createElement("li");
    li1.innerText = (inputNombre);
    li1.className = ("list-group-item");
    
    let li2 = document.createElement("li");
    li2.innerText = (inputCant);
    li2.className = ("list-group-item");
    
    ul[i].after(ulShop);
    ulShop.append(li0);
    ulShop.append(li1);
    ulShop.append(li2);
    i += 1;

    resumen += inputCant;
    campoResumen.innerText = resumen;

}



});