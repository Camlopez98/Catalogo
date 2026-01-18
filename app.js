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
        nombre: "Sandalias para dama",
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
        precio: "$34.900",
        img: [
            "img/humificador.avif",
            "img/humificador2.avif",
            "img/humificador0.avif"
        ],
        descripcion: "Humificador ultrasónico ideal para aromaterapia y ambientes relajantes."
    },
    {
        nombre: "Humificador pequeño",
        precio: "$15.900",
        img: [
            "img/humificador3.avif",
            "img/pequeno.avif",
            "img/pequeno1.avif"
        ],
        descripcion: "Difusor de Aceites Esenciales con Luz Nocturna Apagable."
    },
    {
        nombre: "Pantuflas negras",
        precio: "$22.900",
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
        precio: "$6.900",
        img: [
            "img/t.avif",
            "img/t1.avif",
            "img/t2.avif"
        ],
        descripcion: "Collar De Cadena De Clavícula Con Flor Pequeña"
    },
    {
        nombre: "Collar de Trebol Plateado",
        precio: "$6.900",
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
        precio: "$11.900",
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
        precio: "$5.500 c/u",
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
        precio: "$3.900 c/u",
        img: [
            "img/ca0.avif",
            "img/ca.avif",
            "img/ca1.avif"
        ],
        descripcion: "Estilo casual y moderno, perfectos para salir o ir al trabajo."
    },
    {
        nombre: "Correas de silicona por unidad",
        precio: "$7.900 c/u",
        img: [
            "img/ap.avif",
            "img/ap1.avif",
            "img/ap2.avif"
        ],
        descripcion: "impermeables diseñadas para ser compatibles con Apple Watch Ultra 2 y Series 11/10/9/8/7/6/SE/SE2/SE7."
    },
    {
        nombre: "Peine",
        precio: "$6.400",
        img: [
            "img/cepillo.avif",
            "img/cepillo1.avif",
            "img/cepillo2.avif"
        ],
        descripcion: "Peine Grande Curvo para Mujeres y Hombres."
    },
    {
        nombre: "Funda para iPhone 16 pro max",
        precio: "$16.900",
        img: [
            "img/fg.avif",
            "img/fg1.avif",
            "img/fg2.avif"
        ],
        descripcion: "Diseño Ilustrado de Girasol y Abeja ."
    },
    {
        nombre: "Funda para iPhone 15 pro max",
        precio: "$16.900",
        img: [
            "img/f15.avif",
            "img/f155.avif",
            "img/f15.avif"
        ],
        descripcion: "Funda de gelatina de dos en uno con agujeros grandes."
    },
    {
        nombre: "Funda para iPhone 14 pro.",
        precio: "$16.900",
        img: [
            "img/f14pro.avif",
            "img/f14pro1.avif",
            "img/f14pro2.avif"
        ],
        descripcion: "Funda de Teléfono Negra Elegante con Patrón de Trayectoria de Avión."
    },
    {
        nombre: "Mini Brocha 8 Piezas Bolsa de Maquillaje Portátil",
        precio: "$9.900",
        img: [
            "img/eb.avif",
            "img/eb1.avif",
            "img/eb2.avif"
        ],
        descripcion: "Set de Brochas para Corrector y Polvo Herramienta de Maquillaje de Pelo Suave con Bolsa de Cierre."
    },
    {
        nombre: "Brocha de pestañas y cejas por unidad",
        precio: "$3.600 c/u",
        img: [
            "img/bc.avif",
            "img/bc1.avif",
            "img/bc2.avif"
        ],
        descripcion: "Cepillo De Cejas Angulado Y Cepillo De Spoolie Para Definir Cejas."
    },
    {
        nombre: "Gafas para dama por unidad",
        precio: "$12.900 c/u",
        img: [
            "img/gs.avif",
            "img/gs1.avif",
            "img/gs2.avif"
        ],
        descripcion: "perfectas para el viaje diario y la moda urbana."
    },
    {
        nombre: "Pendientes de botones florales ",
        precio: "$7.900",
        img: [
            "img/ab.avif",
            "img/ab1.avif",
            "img/ab2.avif"
        ],
        descripcion: "Vintage para mujer - Hechos de aleación de zinc."
    },
    {
        nombre: "Collar de cadena con la letra M ",
        precio: "$11.900",
        img: [
            "img/cb222.avif",
            "img/cb1.avif",
            "img/cb2.avif"
        ],
        descripcion: "estilo europeo y americano, sensación de alta gama para mujeres."
    },
    {
        nombre: "aretes elegantes para dama",
        precio: "$7.200",
        img: [
            "img/pp.avif",
            "img/pp1.avif",
            "img/pp2.avif"
        ],
        descripcion: "modernos con forma de hoja."
    },
    {
        nombre: "Aretes de Tulipanes Coloridos",
        precio: "$8.900",
        img: [
            "img/at.avif",
            "img/at1.avif",
            "img/at2.avif"
        ],
        descripcion: "Uso Diario en Primavera y Verano del Medio Oriente.",

    },
    {
        nombre: "Aretes de tortuga para dama",
        precio: "$6.900",
        img: [
            "img/pt.avif",
            "img/pt1.avif",
            "img/pt2.avif"
        ],
        descripcion: "encantadores y elegantes adornados con diamantes de imitación."
    },
    {
        nombre: "Ear cuff para dama por unidad",
        precio: "$2.600 c/u",
        img: [
            "img/ec.avif",
            "img/ec1.avif",
            "img/ec2.avif"
        ],
        descripcion: "Círculo en Forma de C Punk Espiral Twist Suave Grandes Clips para la Oreja."
    },
    {
        nombre: "Pulseras Elegantes con Temática Oceánica por unidad",
        precio: "$2.800 c/u",
        img: [
            "img/pl.avif",
            "img/pl1.avif",
            "img/pl2.avif"
        ],
        descripcion: "Cuentas Acrílicas, Estrella de Mar y Otros Elementos."
    },
    {
        nombre: "Aretes de Corazón Doble",
        precio: "$8.900",
        img: [
            "img/ac.avif",
            "img/ac1.avif",
            "img/ac2.avif"
        ],
        descripcion: "Capa con Pintura Goteo Estilo Maillard."
    },
    {
        nombre: "Pendientes de Hoja para dama",
        precio: "$9.900",
        img: [
            "img/ah.avif",
            "img/ah2.avif",
            "img/ah3.avif"
        ],
        descripcion: "Aleación de Zinc con Postes de Acero Inoxidable."
    },
    {
        nombre: "Aretes redondos para dama por unidad",
        precio: "$3.900 c/u",
        img: [
            "img/aa.avif",
            "img/aa1.avif",
            "img/aa2.avif"
        ],
        descripcion: "cuadrados brillantes de moda vintage elegante | Aleación de aluminio."
    },
    {
        nombre: "Juego Multijugador para Batallas",
        precio: "$25.900",
        img: [
            "img/j.avif",
            "img/j1.avif",
            "img/j2.avif"
        ],
        descripcion: "Incluye Caja Plástica Fácil almacenamiento Actividad Grupal Interactiva Creativo Estéticamente Divertido."
    },
    {
        nombre: "Juego de mesa interactivo",
        precio: "$11.900",
        img: [
            "img/jt.avif",
            "img/jt1.avif",
            "img/jt2.avif"
        ],
        descripcion: "madera para dos jugadores de XO Tres en Raya, de deducción, para entrenamiento lógico,."
    },
    {
        nombre: "Alfombra de Baño con Relieve de Piedra Calada",
        precio: "$19.900",
        img: [
            "img/tp.avif",
            "img/tp1.avif",
            "img/tp2.avif"
        ],
        descripcion: "100% Poliéster, Suave, Absorbente, Antideslizante, Lavable, Sin Parabenos, Ideal para la Decoración de la Ducha."
    },
    {
        nombre: "Pijama casual para mujer",
        precio: "$43.900",
        img: [
            "img/pj.avif",
            "img/pj1.avif",
            "img/pj2.avif"
        ],
        descripcion: "TALLA M, cuello en V y sin mangas, con estampado de mariposas negras en blanco."
    },
    {
        nombre: "Conjunto de pijama para mujer",
        precio: "$24.900",
        img: [
            "img/po.avif",
            "img/po1.avif",
            "img/po2.avif"
        ],
        descripcion: "TALLA S, Camiseta cómoda con cintura elástica y pantalones cortos."
    },
    {
        nombre: "Conjunto de pijama negra para dama",
        precio: "$19.900",
        img: [
            "img/pn.avif",
            "img/pn1.avif",
            "img/pn2.avif"
        ],
        descripcion: " TALLA S, cuello en V, manga corta, mezcla de poliéster, perfecto para primavera/verano."
    },
    {
        nombre: "Pijama Elegante para Mujer",
        precio: "$32.300",
        img: [
            "img/pv.avif",
            "img/pv1.avif",
            "img/pv2.avif"
        ],
        descripcion: "TALLA M, 2 Piezas con Estampado Floral en Verde Esmeralda."
    },
    {
        nombre: "Conjunto de Pijama para dama",
        precio: "$34.900",
        img: [
            "img/pr.avif",
            "img/pr1.avif",
            "img/pr2.avif"
        ],
        descripcion: "TALLA M, Top de Tirantes de Satén y Estampado Floral y Pantalones Largos."
    },
    {
        nombre: "Pijama vinotinto para dama",
        precio: "$19.900",
        img: [
            "img/pe.avif",
            "img/pe1.avif",
            "img/pe2.avif"
        ],
        descripcion: "TALLA S, dos piezas con lencería de encaje ."
    },
    {
        nombre: "Conjunto de Pijama de Encaje blanco",
        precio: "$37.500",
        img: [
            "img/pb.avif",
            "img/pb1.avif",
            "img/pb2.avif"
        ],
        descripcion: "TALLA S, top de Tirantes Finos y Pantalones Elásticos."
    },
    {
        nombre: "Conjunto de Pijama para Mujer",
        precio: "$28.900",
        img: [
            "img/pc.avif",
            "img/pc1.avif",
            "img/pc2.avif"
        ],
        descripcion: "TALLA M, Encaje de Color Sólido con Cuello en V, Top sin Mangas y Pantalones Cortos ."
    },
    {
        nombre: "Conjunto de pijamas para dama",
        precio: "$35.900 c/u",
        img: [
            "img/ps.avif",
            "img/ps1.avif",
            "img/ps2.avif"
        ],
        descripcion: "TALLA M POR UNIDAD, estampado de cerezas, cuello rizado y pantalones largos.."
    },
    {
        nombre: "Camiseta Casual de Manga Corta para dama",
        precio: "$37.900",
        img: [
            "img/cc.avif",
            "img/cc1.avif",
            "img/cc2.avif"
        ],
        descripcion: "TALLA M, Estampado de Concha y Cuello Redondo."
    },
    {
        nombre: "Camiseta blanca",
        precio: "$28.900",
        img: [
            "img/cb.avif",
            "img/cb11.avif",
            "img/cb22.avif"
        ],
        descripcion: "TALLA M , Top de Manga Corta Ajustado con Cuello Cuadrado y Elástico."
    },
    {
        nombre: "Top de verano azul para dama",
        precio: "$36.300",
        img: [
            "img/tv.avif",
            "img/tv1.avif",
            "img/tv2.avif"
        ],
        descripcion: "TALLA M, top sin mangas asimétrico con dobladillo plisado."
    },
    {
        nombre: "Top de verano negro para dama",
        precio: "$29.900",
        img: [
            "img/tn.avif",
            "img/tn1.avif",
            "img/tn2.avif"
        ],
        descripcion: "TALLA L, Color Sólido con Hombro Descubierto y Dobladillo Asimétrico ."
    },
    {
        nombre: "Zapatillas de Verano amarilla para Hombre",
        precio: "$19.900",
        img: [
            "img/ch.avif",
            "img/ch1.avif",
            "img/ch2.avif"
        ],
        descripcion: "TALLA 38, Antideslizantes para Interior y Exterior, Sin Olor."
    },
    {
        nombre: "Soporte rústico para llaves",
        precio: "$20.600",
        img: [
            "img/rm.avif",
            "img/rm1.avif",
            "img/rm2.avif"
        ],
        descripcion: "diseñado para montaje en pared, con un estante estilo rústico de granja con cuatro ganchos."
    },
    {
        nombre: "Gafas de sol por unidad",
        precio: "$12.900",
        img: [
            "img/gf.avif",
            "img/gf1.avif",
            "img/gf2.avif"
        ],
        descripcion: "Marco de metal clásico, estilo versátil, elegancia sutil para el trabajo ."
    },
    {
        nombre: "Aspiradora Portátil",
        precio: "$42.900",
        img: [
            "img/qw.avif",
            "img/qw1.avif",
            "img/qw2.avif"
        ],
        descripcion: "Potente Succión, Diseño Ligero e sin varillas para Mayor Movilidad, Modos Doble de Soplo y Succión."
    },
    {
        nombre: "Batidora de Mano USB Recargable",
        precio: "$18.900",
        img: [
            "img/bt.avif",
            "img/bb0.avif",
            "img/bt2.avif"
        ],
        descripcion: "Batidor Eléctrico de Espuma de Leche y Café, Batidor Inalámbrico de Acero Inoxidable."
    },
    {
        nombre: "Funda para iPhone 14 pro max",
        precio: "$15.200",
        img: [
            "img/qq.avif",
            "img/qq1.avif",
            "img/qq2.avif"
        ],
        descripcion: "Diseño con estampado de estrella de mar, tortuga marina y flor de verano."
    },
    {
        nombre: "Funda para iPhone 15",
        precio: "$19.900",
        img: [
            "img/ww.avif",
            "img/ww1.avif",
            "img/ww2.avif"
        ],
        descripcion: "1 funda para teléfono con estampado de leopardo líquido , 1 protector de cargador, 1 correa para cable de datos y 2 protectores de cable,1 correa de protección para cable de datos."
    },
    {
        nombre: "Funda para iPhone 14 pro max",
        precio: "$19.900",
        img: [
            "img/ee.avif",
            "img/ee1.avif",
            "img/ee2.avif"
        ],
        descripcion: "Un set de 6 piezas que incluye una funda para teléfono con diseño de cachorro color crema texturizado, cubierta para la cabeza del cargador, protector de cable, correa de almacenamiento y correa de protección para cable de datos."
    },
    {
        nombre: "Funda para iPhone 11 pro",
        precio: "$15.900",
        img: [
            "img/rr.avif",
            "img/rr1.avif",
            "img/rr2.avif"
        ],
        descripcion: "funda líquida con agujero grande + cubierta para cargador + protector de cable + cuerda de almacenamiento + envoltura protectora para línea de datos."
    },
    {
        nombre: "Funda para iPhone 17",
        precio: "$15.900",
        img: [
            "img/ss.avif",
            "img/ss1.avif",
            "img/ss2.avif"
        ],
        descripcion: "Patrón de cuero blanco antiguo."
    },
    {
        nombre: "Funda para iPhone 11",
        precio: "$12.500",
        img: [
            "img/zz.avif",
            "img/zz1.avif",
            "img/zz2.avif"
        ],
        descripcion: "Funda con textura de lichi blanco y patrón de pulpo, estrella de mar, ballena y tortuga en azul claro"
    },
    {
        nombre: "Funda para iPhone 16 pro",
        precio: "$19.900",
        img: [
            "img/xx0.avif",
            "img/xx.avif",
            "img/xx1.avif"
        ],
        descripcion: "incluye una funda para teléfono de color rojo vino con cintas, una cubierta para la cabeza del cargador, una correa de almacenamiento y una correa de protección para cable de datos."
    },
    {
        nombre: "Funda para iPhone 11",
        precio: "$16.900",
        img: [
            "img/ff.avif",
            "img/ff1.avif",
            "img/ff2.avif"
        ],
        descripcion: "Funda minimalista con diseño alegre de cara de caramelo, con gran orificio, doble capa de gelatina."
    },
    {
        nombre: "Funda para iPhone 15 por unidad",
        precio: "$11.500",
        img: [
            "img/dd.avif",
            "img/dd1.avif",
            "img/dd2.avif"
        ],
        descripcion: "Funda Híbrida de Bambú IMD con Airbag."
    },
    {
        nombre: "Funda para iPhone 11",
        precio: "$16.900",
        img: [
            "img/tt.avif",
            "img/tt1.avif",
            "img/tt2.avif"
        ],
        descripcion: "Funda suave minimalista con marco cruzado blanco."
    },
    {
        nombre: "Funda para iPhone 16 pro max",
        precio: "$15.900",
        img: [
            "img/yy2.avif",
            "img/yy.avif",
            "img/yy1.avif"
        ],
        descripcion: "Fundas Transparentes Resistentes para Teléfono con Parte Trasera Dura."
    },
    {
        nombre: "Funda para iPhone 17",
        precio: "$18.900",
        img: [
            "img/uu.avif",
            "img/uu1.avif",
            "img/uu2.avif"
        ],
        descripcion: "Juego de 5 piezas, 1 Funda blanca antigua con patrón de logo C-Charles L-Leclerc 16, 1 Funda protectora para cargador, 1 Correa para cable de datos y 2 Protectores para cable de datos."
    },
    {
        nombre: "Bolso Tote Elegante para Mujer",
        precio: "$29.900",
        img: [
            "img/ii.avif",
            "img/ii1.avif",
            "img/ii2.avif"
        ],
        descripcion: "Gran Capacidad con Cierre de Cremallera Seguro - Bolso de Mano, Ligero y Duradero para Trabajo."
    },
    {
        nombre: "bolso de hombro elegante de paja tejida para mujer",
        precio: "$19.900",
        img: [
            "img/oo.avif",
            "img/oo1.avif",
            "img/002.avif"
        ],
        descripcion: "Correa de cadena desmontable y cierre con candado, versátil bandolera/bolso de mano con forro de poliéster, color caqui/moda casual."
    },
    {
        nombre: "Bolso pequeño cuadrado",
        precio: "$20.900",
        img: [
            "img/vv.avif",
            "img/vv1.avif",
            "img/vv2.avif"
        ],
        descripcion: "Bandolera de un hombro estilo juvenil dulce, cierre magnético, color sólido."
    },
    {
        nombre: "Canguro minimalista",
        precio: "$29.900",
        img: [
            "img/gg.avif",
            "img/gg1.avif",
            "img/gg2.avif"
        ],
        descripcion: "Bolso de hombro texturizado, cruzado para el pecho, riñonera compacta."
    },
    {
        nombre: "Portahuevos de Dibujos Animados por unidad",
        precio: "$3.600",
        img: [
            "img/ll.avif",
            "img/ll1.avif",
            "img/ll2.avif"
        ],
        descripcion: "Plástico PP Resistente para Almacenamiento en Cocina y Exhibición Divertida de Desayuno."
    },
    {
        nombre: "Flores de Bloques de Construcción",
        precio: "$13.900",
        img: [
            "img/kk.avif",
            "img/kk1.avif",
            "img/kk2.avif"
        ],
        descripcion: "Bloques de Construcción de Macetas de Flores."
    },
    {
        nombre: "Trípode para Teléfono",
        precio: "$29.900",
        img: [
            "img/hh.avif",
            "img/hh1.avif",
            "img/hh2.avif"
        ],
        descripcion: "Rotación 360° y Antivibración, Soporte Ajustable para Smartphone."
    },
    {
        nombre: "Bolsa de Lavandería",
        precio: "$7.900",
        img: [
            "img/nn.avif",
            "img/nn1.avif",
            "img/nn2.avif"
        ],
        descripcion: "Adecuada para Ropa y Prendas Delicadas.",
        vendido: false
    },
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
