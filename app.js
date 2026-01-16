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
        nombre: "Pantuflas",
        precio: "$23.000",
        img: [
            "img/peluche.avif",
            "img/peluche1.avif",
            "img/pelcuhe2.avif"
        ],
        descripcion: "Decoración de Corazón, Diseño de Punta Abierta, Suaves y Cómodas, Ligeras, Ideales para Dormitorio."
    },
    {
        nombre: "Bomba de agua eléctrica USB",
        precio: "$22.800",
        img: [
            "img/d.avif",
            "img/d1.avif",
            "img/d2.avif"
        ],
        descripcion: "Dispensador de agua portátil/manos libres para botellas de 11.36-18.93 L."
    },
    {
        nombre: "Collar de Trebol Dorado",
        precio: "$7.000",
        img: [
            "img/t.avif",
            "img/t1.avif",
            "img/t2.avif"
        ],
        descripcion: "Collar De Cadena De Clavícula Con Flor Pequeña"
    },
    {
        nombre: "Collar de Trebol Plateado",
        precio: "$7.000",
        img: [
            "img/c.avif",
            "img/t2.avif",
            "img/c.avif"
        ],
        descripcion: "Collar De Cadena De Clavícula Con Flor Pequeña."
    },
    {
        nombre: "Collar y aretes de Perlas",
        precio: "$11.500",
        img: [
            "img/p0.avif",
            "img/p.avif",
            "img/p1.avif"
        ],
        descripcion: "Juego de 3 Piezas: Aretes y Collar de Perlas Falsas Minimalistas."
    },
    {
        nombre: "funda protectora de cargador",
        precio: "$12.000",
        img: [
            "img/pro.avif",
            "img/pro1.avif",
            "img/pro.avif"
        ],
        descripcion: "adecuada para la serie de for iphone 11/12/13/14/15/16."
    },
    {
        nombre: "Conjunto de deporte",
        precio: "$28.400",
        img: [
            "img/b.avif",
            "img/b1.avif",
            "img/b2.avif"
        ],
        descripcion: "TALLA M, soporte alto para mujer y pantalones cortos."
    },
    {
        nombre: "Aretes Cafes",
        precio: "$7.900",
        img: [
            "img/are1.avif",
            "img/are2.avif",
            "img/are.avif"
        ],
        descripcion: "Diseño Geométrico en Cuello de Cisne y Textura Redonda de Resina."
    },
    {
        nombre: "Conjunto Intimo",
        precio: "$36.400",
        img: [
            "img/con.avif",
            "img/con1.avif",
            "img/con2.avif"
        ],
        descripcion: "Conjunto de lencería de encaje TALLA S."
    },
    {
        nombre: "Juego de 8 brochas de maquillaje",
        precio: "$11.500",
        img: [
            "img/brochas.avif",
            "img/brochas1.avif",
            "img/brochas2.avif"
        ],
        descripcion: "Cerdas suaves para colorete y sombra de ojos, brochas de cerdas suaves para sombra de ojos y polvo suelto."
    },
    {
        nombre: "Juego de 13 Brochas de Maquillaje",
        precio: "$19.900",
        img: [
            "img/bro.avif",
            "img/bro1.avif",
            "img/bro2.avif"
        ],
        descripcion: "Pelo Suave para Sombra de Ojos, Base y Colorete."
    },
    {
        nombre: "Aretes plateados por unidad",
        precio: "$5.500",
        img: [
            "img/aret.avif",
            "img/aret1.avif",
            "img/aret2.avif"
        ],
        descripcion: "Pendientes anchos en forma de C con gotas de agua para mujer."
    },
    {
        nombre: "Pendientes rojos cuadrados",
        precio: "$7.900",
        img: [
            "img/ro.avif",
            "img/ro1.avif",
            "img/ro.avif"
        ],
        descripcion: "Adecuados para Fiestas y Ocasiones de Boda."
    },
    {
        nombre: "Pasadores para el cabello por unidad",
        precio: "$3.900",
        img: [
            "img/ca0.avif",
            "img/ca.avif",
            "img/ca1.avif"
        ],
        descripcion: "Estilo casual y moderno, perfectos para salir o ir al trabajo."
    },
    {
        nombre: "Correas de silicona por unidad",
        precio: "$8.000",
        img: [
            "img/ap.avif",
            "img/ap1.avif",
            "img/ap2.avif"
        ],
        descripcion: "impermeables diseñadas para ser compatibles con Apple Watch Ultra 2 y Series 11/10/9/8/7/6/SE/SE2/SE7."
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
