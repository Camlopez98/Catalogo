const productos = [
    {
        nombre: "Camara",
        precio: "$40.000",
        img: ["img/camera.avif",
            "img/camera2.jpg.avif"
        ],
        descripcion: "Descripción breve del producto 1."
    },
    {
        nombre: "Producto 2",
        precio: "$55.000",
        img: "img/producto2.jpg",
        descripcion: "Descripción breve del producto 2."
    },
    {
        nombre: "Producto 3",
        precio: "$80.000",
        img: "img/producto3.jpg",
        descripcion: "Descripción breve del producto 3."
    }
];

// Seleccionamos el contenedor de productos
const contenedor = document.querySelector(".productos");

// Recorremos los productos
productos.forEach(producto => {
    contenedor.innerHTML += `
        <div class="card">
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">${producto.precio}</p>
        </div>
    `;
});
