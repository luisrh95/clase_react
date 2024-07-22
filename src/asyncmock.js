const items = [
    {   id: 1,
        nombre:"Vela Clásica de Lavanda Tranquila",
        texto:"Sumérgete en la serenidad con nuestra Vela Clásica de Lavanda Tranquila. Creada con cera de soya de alta calidad, esta vela emana un aroma suave y relajante de lavanda, transportándote a campos floridos en cada inhalación. Perfecta para momentos de calma y tranquilidad, esta vela añade un toque de serenidad a tu espacio.",
        imagen:"/src/images/img_001.jpg",
        precio: 30000,
        stock: 10,
        categoria: "Aromaticas"
    },
    {   id: 2,
        nombre:"Vela Bohemia de Vainilla Cálida",
        texto:"Experimenta la calidez reconfortante de nuestra Vela Bohemia de Vainilla Cálida. La suavidad de la cera de soya se combina con un aroma dulce y envolvente de vainilla, creando una atmósfera acogedora y relajante. Ideal para noches especiales o para crear un ambiente acogedor, esta vela te envuelve en una fragancia reconfortante.",
        imagen:"/src/images/img_002.jpeg",
        precio: 30000,
        stock: 10,
        categoria: "Aromaticas"
    },
    {   id: 3,
        nombre:"Citrus Fresco con Toque de Menta",
        texto:"Refresca tus sentidos con nuestra Vela de Citrus Fresco con Toque de Menta. La combinación estimulante de cítricos vibrantes y la frescura revitalizante de la menta se fusiona con la cera de soya, creando una vela que energiza tu espacio. Perfecta para levantar el ánimo y crear una atmósfera vibrante y revitalizante.	",
        imagen:"/src/images/img_003.jpeg",
        precio: 30000,
        stock: 10,
        categoria: "Aromaticas"
    },
]


export const getProducts = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)            
        }, 2000);
    })
}