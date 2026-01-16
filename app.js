const productos = [
    {
        nombre: "Cámara WiFi",
        precio: "$38.500",
        img: [
            "img/camera.avif",
            "img/camera2.avif",
            "img/camera3.avif"
        ],
        descripcion: "Cámara WiFi con visión nocturna, audio bidireccional y seguimiento de movimiento."
    },
    {
        nombre: "Sandalias",
        precio: "$22.500",
        img: [
            "img/sandalias.avif",
            "img/sandalias2.avif",
            "img/sandalias3.avif"
        ],
        descripcion: "Sandalias de Verano Nuevas Casuales de Moda para Mujer."
    },
    {
        nombre: "Humificador",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "Humificador pequeño",
        precio: "$14.000",
        img: [
            "img/humificador3.avif",
            "img/pequeno.avif",
            "img/pequeno1.avif"
        ],
        descripcion: "Difusor de Aceites Esenciales con Luz Nocturna Apagable."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "",
        precio: "$20.000",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    }
];

const contenedor = document.querySelector(".productos");

productos.forEach((producto, index) => {
    contenedor.innerHTML += `
        <div class="card">
            <img 
                class="principal" 
                id="principal-${index}" 
                src="${producto.img[0]}" 
                alt="${producto.nombre}"
            >

            <div class="miniaturas">
                ${producto.img.map(imagen => `
                    <img 
                        src="${imagen}" 
                        alt="${producto.nombre}"
                        onclick="cambiarImagen('${imagen}', ${index})"
                    >
                `).join("")}
            </div>

            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">${producto.precio}</p>
        </div>
    `;
});

function cambiarImagen(imagen, index) {
    const imagenPrincipal = document.getElementById(`principal-${index}`);
    imagenPrincipal.src = imagen;
}
