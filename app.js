const productos = [
    {
        nombre: "Camara",
        precio: "$40.000",
        img: ["img/camera.avif",
            "img/camera2.jpg.avif",
            "img/camera3.avif"
        ],
        descripcion: "1pc Cámara WiFi Inalámbrica de Visión Nocturna a Todo Color | 1080P Full HD, Doble Uso Interior/Exterior, Audio Bidireccional, Tecnología PTZ, Seguridad para el Hogar Inteligente, Seguimiento de Movimiento, Adecuada para el Monitoreo de Ancianos y Mascotas, Para Colgar en la Pared."
    },
    {
        nombre: "Humificador",
        precio: "$20.000",
        img: ["img/humificador.avif",
            "img/humificador2.avif"
        ],
        descripcion: "Descripción breve del producto 2."
    },
    {
        nombre: "Humificador",
        precio: "$16.000",
        img: "img/humificador3.avif",
        descripcion: "Difusor de Aceites Esenciales 1 en 1 y Humidificador de Niebla Fría"
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
