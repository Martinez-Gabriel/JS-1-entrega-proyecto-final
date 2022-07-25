const misProductos = [
    {
        nombre: 'intel i5 9600k',
        marca: 'intel',
        tipo: 'procesador',
        precio: 35.000
     },
     {
        nombre: 'AMD Ryzen 3600X',
        marca: 'AMD',
        tipo: 'procesador',
        precio: 45.000
     },
     {
        nombre: 'Aorus ultra gaming 2.0',
        marca: 'Aorus',
        socket: 'AM4',
        tipo: 'motherboard',
        precio: 45.000
     },
     {
        nombre: 'Asus Prime B365m-a',
        marca: 'Asus',
        socket: '1151',
        tipo: 'motherboard',
        precio: 40.000
     },
     {
        nombre: 'Wester digital 1TB',
        marca: 'Wester digital',
        capacidad: '1TB',
        tipo: 'almacenamiento',
        precio: 10.000
     },
     {
        nombre: 'Kingston 240GB',
        marca: 'Kingstone',
        capacidad: '240GB',
        tipo: 'almacenamiento',
        precio: 12.000
     }
    ];
alert ('Bienvenidos a la tienda Proyect-Hardware');
entradaProducto = prompt ('Ingrese el producto que desea comprar: \n 0-Procesadores \n 1-Mothers \n 2-Discos Rigidos');
if (entradaProducto >= 0 && entradaProducto == 0){
    const productos = misProductos.filter((producto) => {
        return producto.tipo === 'procesador';
    });
    console.log(productos);
    seleccion = prompt ('Seleccione el producto que desea comprar: ')
        switch (seleccion){
            case '0':
                console.log(productos[0]); 
                break;
            case '1':
                console.log(productos[1]); 
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
}else if (entradaProducto > 0 && entradaProducto == 2){
    const productos = misProductos.filter((producto) => {
        return producto.tipo === 'almacenamiento';
    });
    console.log(productos);
}else{
    alert ("ATENCION!!!, Ingrese una opcion valida!");
}

