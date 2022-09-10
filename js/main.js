let btnAgregar = document.getElementById("btnAgregar");
let btnBorrar = document.getElementById("btnBorrar");
let campoNombre = document.getElementById("Name");
let campoCantidad = document.getElementById("Number");
let campoResumen = document.getElementById("resumen");
let campoTotal = document.getElementById("campoTotal");

let i = 1;
let j;
let flag = true;


let listArt = [];
let key = "Articulos";

let precio = 0;
let resumen = 0;
let totalProd = 0;
let totalCost = 0;

let ul = document.getElementsByClassName("list-group");

campoNombre.focus();

if(localStorage.getItem(key)){

       
    let savedArt = JSON.parse(localStorage.getItem(key));
    listArt = savedArt;   
       
    for (let k = 0; k < listArt.length; k++) {

        //Se crean los elementos de la lista, ul e il
        let ulShop = document.createElement("ul");
        ulShop.className = ("list-group list-group-horizontal");
        

        let liId = document.createElement("li");
        liId.className = ("list-group-item font-weight-bold text-center");
        liId.style = ("width: 20%");

        let liName = document.createElement("li"); 
        liName.className = ("list-group-item text-left");
        liName.style = ("width: 40%");

        let liCant = document.createElement("li");    
        liCant.className = ("list-group-item text-center");
        liCant.style = ("width: 20%");

        let liPrice = document.createElement("li");    
        liPrice.className = ("list-group-item text-center");
        liPrice.style = ("width: 20%");

        //se les asigna un valor a esos elementos.
        liId.innerText = listArt[k].id;
        liName.innerText = listArt[k].Nombre;
        liCant.innerText = listArt[k].Cantidad;
        liPrice.innerText = listArt[k].Precio;
        
        //Se insertan en el html (i comienza en 1 por que el ul[1] representa la tabla con los encabezados)
        ul[i].after(ulShop);
        ulShop.append(liId);
        ulShop.append(liName);
        ulShop.append(liCant);
        ulShop.append(liPrice);

        //se aprovecha el bucle par la suma de productos
        resumen += listArt[k].Cantidad;
        totalCost += parseFloat(listArt[k].Precio);
        i++;
    }
    campoResumen.innerText = resumen;
    campoTotal.innerText = totalCost.toFixed(2);

    //con forEach me cambia el orden de lectura
    /* listArt.forEach(element => {

        
        let ulShop = document.createElement("ul");
        ulShop.className = ("list-group list-group-horizontal");

        let liId = document.createElement("li");
        liId.className = ("list-group-item font-weight-bold");

        let liName = document.createElement("li"); 
        liName.className = ("list-group-item");

        let liCant = document.createElement("li");    
        liCant.className = ("list-group-item");

        let liPrice = document.createElement("li");    
        liPrice.className = ("list-group-item");

        liId.innerText = element.id;
        liName.innerText = element.Nombre;
        liCant.innerText = element.Cantidad;
        liPrice.innerText = element.Precio;
        
        ul[i].after(ulShop);
        ulShop.append(liId);
        ulShop.append(liName);
        ulShop.append(liCant);
        ulShop.append(liPrice);
        

    }); */
   /*  i++; */
}

btnAgregar.addEventListener("click", function(event){
event.preventDefault;


let inputNombre = document.getElementById("Name").value.toUpperCase();
let inputCant = parseFloat(document.getElementById("Number").value);


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

    j = listArt.length + 1;     
            
            let ulShop = document.createElement("ul");
            ulShop.className = ("list-group list-group-horizontal");

            let liId = document.createElement("li");
            liId.className = ("list-group-item font-weight-bold text-center");
            liId.style = ("width: 20%");

            let liName = document.createElement("li"); 
            liName.className = ("list-group-item text-left");
            liName.style = ("width: 40%");

            let liCant = document.createElement("li");    
            liCant.className = ("list-group-item text-center");
            liCant.style = ("width: 20%");

            let liPrice = document.createElement("li");    
            liPrice.className = ("list-group-item text-center");
            liPrice.style = ("width: 20%");

            precio = (Math.random() * 50).toFixed(2);

            liId.innerText = j;
            liName.innerText = inputNombre;
            liCant.innerText = inputCant;
            liPrice.innerText = precio;
            
            ul[j].after(ulShop);
            ulShop.append(liId);
            ulShop.append(liName);
            ulShop.append(liCant);
            ulShop.append(liPrice);
            
            
            let newArt = {"id": j , "Nombre": inputNombre, "Cantidad": inputCant, "Precio": precio};
            listArt.push(newArt);
            localStorage.setItem(key, JSON.stringify(listArt));
    

    i++;
    resumen += inputCant;
    campoResumen.innerText = resumen;

    totalCost += parseFloat(precio);
    campoTotal.innerText = totalCost.toFixed(2);

   
    campoCantidad.value = "";
    campoNombre.value = "";
    campoNombre.focus();
       
}
}) 

btnBorrar.addEventListener("click", function(event){
event.preventDefault;
localStorage.removeItem(key);
location.reload();

});

