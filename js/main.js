const misProductos = [
    {
    id: 1,
    nombre: 'intel i5 9600k',
    marca: 'intel',
    tipo: 'procesador',
    precio: 35.000,
    },
    {
    id: 2,
    nombre: 'AMD Ryzen 3600X',
    marca: 'AMD',
    tipo: 'procesador',
    precio: 45.000
    },
  
    {
    id: 3,
    nombre: 'Aorus ultra gaming 2.0',
    marca: 'Aorus',
    socket: 'AM4',
    tipo: 'motherboard',
    precio: 45.000
    },

    {

    id: 4,
    nombre: 'Asus Prime B365m-a',
    marca: 'Asus',
    socket: '1151',
    tipo: 'motherboard',
    precio: 40.000
    },
    {
    id: 5,
    nombre: 'Wester digital 1TB',
    marca: 'Wester digital',
    capacidad: '1TB',
    tipo: 'almacenamiento',
    precio: 10.000
    },
    {
    id:6,
    nombre: 'Kingston 240GB',
    marca: 'Kingstone',
    capacidad: '240GB',
    tipo: 'almacenamiento',
    precio: 12.000
    }
];
  
class Carrito {
constructor(productos){
    this.productosEnElCarrito = []
}
agregarAlCarrito(producto) {
    this.productosEnElCarrito.push(producto)
}
mostrarCarrito(){
    return this.productosEnElCarrito
    }  
}

class Productos {
constructor(productos){
    this.productos = []
}
cargarProducto(producto){
// validar si el producto ya existe
    this.productos.push(producto)
}

mostrarProductos(){
    return this.productos
    }
}
  
class Producto {
    constructor(id, nombre,marca, tipo, precio, cantidad){
    this.id = id
    this.nombre = nombre
    this.marca = marca
    this.tipo = tipo
    this.precio = precio
    this.cantidad = 1
    }
}
  
  const carrito = new Carrito()
  
  const productos = new Productos()
  
  misProductos.forEach((producto) => {
  
   const nuevoProducto = new Producto(producto.id, producto.nombre, producto.marca,producto.tipo, producto.precio, producto.cantidad)
  
   productos.cargarProducto(nuevoProducto)
  
  })
  

//MOSTRAR RESULTADOS:
//   console.log(productos.mostrarProductos())
  
//   carrito.agregarAlCarrito(misProductos[0])
  
//   console.log(carrito.mostrarCarrito())
  
//   carrito.agregarAlCarrito(misProductos[1])
  
//   console.log(carrito.mostrarCarrito())




alert ('Bienvenidos a la tienda PROYECT-HARDWARE');
do{
    entradaProducto = prompt ('Ingrese el producto que desea comprar: \n \n 0 - Procesadores \n 1 - Mothers \n 2 - Almacenamiento \n \n Escriba FIN para terminar');
    if (entradaProducto >= 0 && entradaProducto == 0){
        const productos = misProductos.filter((producto) => {
            return producto.tipo === 'procesador';
        });
        console.log(productos);
        seleccion = prompt ('Seleccione el producto que desea comprar: ')
            switch (seleccion){
                case '0':
                    carrito.agregarAlCarrito(misProductos[0])
                    console.log('Estos son los productos dentro de su carrito :', carrito.mostrarCarrito())
                    alert ('FELICITACIONES!!! El producto seleccionado se ha agregado al carrito Correctamente!')
                    break;
                case '1':
                    carrito.agregarAlCarrito(misProductos[1])
                    console.log('Estos son los productos dentro de su carrito :', carrito.mostrarCarrito())
                    alert ('FELICITACIONES!!! El producto seleccionado se ha agregado al carrito Correctamente!')
                    break;
                default:
                    alert ('ATENCION!!! Ingrese una opcion valida!');
                    break;
            }
    }else if (entradaProducto > 0 && entradaProducto == 1){
        const productos = misProductos.filter((producto) => {
            return producto.tipo === 'motherboard';
        });
        console.log(productos);
        seleccion = prompt ('Seleccione el producto que desea comprar: ')
            switch (seleccion){
                case '0':
                    carrito.agregarAlCarrito(misProductos[2])
                    console.log('Estos son los productos dentro de su carrito :', carrito.mostrarCarrito())
                    alert ('FELICITACIONES!!! El producto seleccionado se ha agregado al carrito Correctamente!')
                    break;
                case '1':
                    carrito.agregarAlCarrito(misProductos[3])
                    console.log('Estos son los productos dentro de su carrito :', carrito.mostrarCarrito())
                    alert ('FELICITACIONES!!! El producto seleccionado se ha agregado al carrito Correctamente!')
                    break;
                default:
                    alert ('ATENCION!!! Ingrese una opcion valida!');
                    break;
            }
    }else if (entradaProducto > 0 && entradaProducto == 2){
        const productos = misProductos.filter((producto) => {
            return producto.tipo === 'almacenamiento';
        });
        console.log(productos);
        seleccion = prompt ('Seleccione el producto que desea comprar: ')
            switch (seleccion){
                case '0':
                    carrito.agregarAlCarrito(misProductos[4])
                    console.log('Estos son los productos dentro de su carrito :', carrito.mostrarCarrito())
                    alert ('FELICITACIONES!!! El producto seleccionado se ha agregado al carrito Correctamente!')
                    break;
                case '1':
                    carrito.agregarAlCarrito(misProductos[5])
                    console.log('Estos son los productos dentro de su carrito :', carrito.mostrarCarrito())
                    alert ('FELICITACIONES!!! El producto seleccionado se ha agregado al carrito Correctamente!')
                    break;
                default:
                    alert ('ATENCION!!! Ingrese una opcion valida!');
                    break;
            }
    }else if (entradaProducto != 'FIN'){
        alert ("ATENCION!!!, Ingrese una opcion valida!");
    }
} while (entradaProducto != 'FIN');

carrito.forEach ((producto) => {
    console.log(producto.precio);
});

const precioTotal = carrito.reduce((acumulador, ) => {
    return acumulador + carrito.precio;
}, 0);

console.log (precioTotal)



alert ('Estoy resolviendolo');
