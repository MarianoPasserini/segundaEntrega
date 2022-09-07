class productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
class productos1 {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}
// PROCEDO A DECLARAR LAS VARIABLES A UTILIZAR PARA EL PROYECTO EN BASE AL CONSTRUCTOR
let gpuLowEnd = new productos("1030", 5000, 10);
let gpuMidEnd = new productos("1060", 10000, 10);
let gpuHighEnd = new productos("1080", 20000, 10);
let cpuLowEndIntel = new productos("i3", 5000, 10);
let cpuMidEndIntel = new productos("i5", 10000, 10);
let cpuHighEndIntel = new productos("i7", 20000, 10);
let cpuLowEndAMD = new productos("Ryzen 3", 5000, 10);
let cpuMidEndAMD = new productos("Ryzen 5", 10000, 10);
let cpuHighEndAMD = new productos("Ryzen 7", 20000, 10);
let ram8gb = new productos("8gb", 5000, 10);
let ram16gb = new productos("16gb", 10000, 10);
let ram32gb = new productos("32gb", 20000, 10);
let ssdLowEnd = new productos("120gb", 5000, 10);
let ssdMidEnd = new productos("240gb", 10000, 10);
let ssdHighEnd = new productos("480gb", 20000, 10);
let hddLowEnd = new productos("500gb", 5000, 10);
let hddMidEnd = new productos("1tb", 10000, 10);
let hddHighEnd = new productos("2tb", 20000, 10);
let motherboardAMD = new productos("asus", 5000, 10);
let motherboardIntel = new productos("gigabyte", 5000, 10);
let fuenteLowEnd = new productos("500w", 5000, 10);
let fuenteMidEnd = new productos("750w", 10000, 10);
let fuenteHighEnd = new productos("1000w", 20000, 10);
let gabinete = new productos("corsair", 5000, 10);

// poner los objetos en un array
let productosArray = [gpuLowEnd, gpuMidEnd, gpuHighEnd, cpuLowEndIntel, cpuMidEndIntel, cpuHighEndIntel, cpuLowEndAMD, cpuMidEndAMD, cpuHighEndAMD, ram8gb, ram16gb, ram32gb, ssdLowEnd, ssdMidEnd, ssdHighEnd, hddLowEnd, hddMidEnd, hddHighEnd, motherboardAMD, motherboardIntel, fuenteLowEnd, fuenteMidEnd, fuenteHighEnd, gabinete];

// FUNCION PARA MOSTRAR LOS PRODUCTOS EN EL HTML

function mostrarProductos() {
    let productos = document.getElementById("productos");
    let productosHTML = "";
    for (let i = 0; i < productosArray.length; i++) {
        productosHTML += `<div class="producto">
        <h2>${productosArray[i].nombre}</h2>
        <p>Precio: ${productosArray[i].precio}</p>
        <p>Stock: ${productosArray[i].stock}</p>
        </div>`;
    }
    productos.innerHTML = productosHTML;
}
mostrarProductos();

// Crear el array para guardar los productos seleccionados
let productosSeleccionados = [];

// Elegir productos mediante un alert y un prompt para agregarlos al array
function elegirProductos() {
    let producto = prompt("Ingrese el nombre del producto que desea agregar al carrito");
    let cantidad = prompt("Ingrese la cantidad de productos que desea agregar");
    let productoSeleccionado = new productos1 (producto, cantidad);
    productosSeleccionados.push(productoSeleccionado);
    mostrarProductosSeleccionados();
}


// FUNCION PARA MOSTRAR LOS PRODUCTOS SELECCIONADOS EN EL HTML
function mostrarProductosSeleccionados() {
    let productosSeleccionadosHTML = "";
    for (let i = 0; i < productosSeleccionados.length; i++) {
        productosSeleccionadosHTML += `<div class="producto">
        <h2>${productosSeleccionados[i].nombre}</h2>
        <p>Cantidad: ${productosSeleccionados[i].cantidad}</p>
        </div>`;
    }
    document.getElementById("productosSeleccionados").innerHTML = productosSeleccionadosHTML;
}


// restar el stock de los productos seleccionados al comprar y mostrar el resultado en el HTML
function restarStock() {
    for (let i = 0; i < productosSeleccionados.length; i++) {
        for (let j = 0; j < productosArray.length; j++) {
            productosSeleccionados[i].nombre == productosArray[j].nombre? productosArray[j].stock -= productosSeleccionados[i].cantidad : "";
            
        }
    }
    mostrarProductos();
}

// al presionar el boton agregar productos se llama a la funcion elegirProductos
document.getElementById("boton").addEventListener("click", elegirProductos);

// crear bucle para elegir los productos hasta que se quiera
let seguir = "si";
while (seguir == "si") {
    let producto = prompt("Ingrese el nombre del producto que desea agregar al carrito");
    let cantidad = prompt("Ingrese la cantidad de productos que desea agregar");
    let productoSeleccionado = new productos(producto, cantidad);
    productosSeleccionados.push(productoSeleccionado);
    mostrarProductosSeleccionados();
    seguir = prompt("¿Desea seguir agregando productos al carrito? si/no");
}


// mostrar la suma de los precios de los productos seleccionados en el HTML al presionar el boton total
document.getElementById("total").addEventListener("click", function () {
    let total = 0;
    for (let i = 0; i < productosSeleccionados.length; i++) {
        for (let j = 0; j < productosArray.length; j++) {
            productosSeleccionados[i].nombre == productosArray[j].nombre ? total += productosSeleccionados[i].cantidad * productosArray[j].precio : "";
        }
    }
    alert(`El total de su compra es: ${total}`);
});


// mostrar el resultado de la compra con el stock restado y mostrar el resultado en el HTML al presionar el boton total
document.getElementById("total").addEventListener("click", function () {
    restarStock();
    mostrarProductos();
    mostrarProductosSeleccionados();
});
