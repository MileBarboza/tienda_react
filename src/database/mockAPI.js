const data = [
  {
    id: 1,
    title: "Sweater con Puntilla",
    price: 3550,
    offer: true,
    img: "/assets/sweaterconpuntilla.jpg",
    img1: "/assets/sweaterconpuntilla1.jpg",
    stock: 4,
    category: "Sweater",
    color: "beige",
    size: "m",
  },
  {
    id: 2,
    title: "Sweater de punto Acanalado",
    price: 3710,
    offer: true,
    img: "/assets/sweaterdepuntoacanalado.jpg",
    img1: "/assets/sweaterdepuntoacanalado1.jpg",
    stock: 5,
    category: "Sweater",
    color: "gris",
    size: "s",
  },
  {
    id: 3,
    title: "Blusa con Volados",
    price: 2490,
    offer: false,
    img: "/assets/blusaconvolados.jpg",
    img1: "/assets/blusaconvolados1.jpg",
    stock: 4,
    category: "Remera",
    color: "rosa",
    size: "xl",
  },
  {
    id: 4,
    title: "Camisa Lisa",
    price: 2900,
    offer: false,
    img: "/assets/camisalisa.jpg",
    img1: "/assets/camisalisa1.jpg",
    stock: 3,
    category: "Remera",
    color: "azul",
    size: "m",
  },
  {
    id: 5,
    title: "Calza tipo Pescadora",
    price: 2390,
    offer: false,
    img: "/assets/calzatipopescadora.jpg",
    img1: "/assets/calzatipopescadora1.jpg",
    stock: 6,
    category: "Pantalón",
    color: "negro",
    size: "m",
  },
  {
    id: 6,
    title: "Chaqueta doble Botonadura",
    price: 7590,
    offer: false,
    img: "/assets/chaquetadoblebotonadura.jpg",
    img1: "/assets/chaquetadoblebotonadura1.jpg",
    stock: 4,
    category: "Abrigo",
    color: "verde",
    size: "xs",
  },
  {
    id: 7,
    title: "Remera Calada",
    price: 2180,
    offer: false,
    img: "/assets/remeracalada.jpg",
    img1: "/assets/remeracalada1.jpg",
    stock: 5,
    category: "Remera",
    color: "rosa",
    size: "m",
  },
  {
    id: 8,
    title: "Cardigan",
    price: 3990,
    offer: true,
    img: "/assets/cardigan.jpg",
    img1: "/assets/cardigan1.jpg",
    stock: 6,
    category: "Sweater",
    color: "rosa",
    size: "m",
  },
  {
    id: 9,
    title: "Chupin Bengalina con Lazo",
    price: 4860,
    offer: false,
    img: "/assets/chupinbengalinaconlazo.jpg",
    img1: "/assets/chupinbengalinaconlazo1.jpg",
    stock: 7,
    category: "Pantalón",
    color: "azul",
    size: "l",
  },
  {
    id: 10,
    title: "Blusa Estampada",
    price: 2670,
    offer: false,
    img: "/assets/blusaestampada.jpg",
    img1: "/assets/blusaestampada1.jpg",
    stock: 6,
    category: "Remera",
    color: "beige",
    size: "xl",
  },
  {
    id: 11,
    title: "Campera Bomber",
    price: 6990,
    offer: true,
    img: "/assets/camperabomber.jpg",
    img1: "/assets/camperabomber1.jpg",
    stock: 3,
    category: "Abrigo",
    color: "negro",
    size: "s",
  },
  {
    id: 12,
    title: "Chupin Bengalina",
    price: 4340,
    offer: false,
    img: "/assets/chupinbengalina.jpg",
    img1: "/assets/chupinbengalina1.jpg",
    stock: 5,
    category: "Pantalón",
    color: "beige",
    size: "l",
  },
  {
    id: 13,
    title: "Blusa Floral",
    price: 2590,
    offer: false,
    img: "/assets/blusafloral.jpg",
    img1: "/assets/blusafloral1.jpg",
    stock: 2,
    category: "Remera",
    color: "azul",
    size: "l",
  },
  {
    id: 14,
    title: "Buzo Oversized",
    price: 4060,
    offer: true,
    img: "/assets/buzooversized.jpg",
    img1: "/assets/buzooversized1.jpg",
    stock: 7,
    category: "Sweater",
    color: "negro",
    size: "l",
  },
  {
    id: 15,
    title: "Remera Encaje",
    price: 2450,
    offer: false,
    img: "/assets/remeraencaje.jpg",
    img1: "/assets/remeraencaje1.jpg",
    stock: 5,
    category: "Remera",
    color: "rosa",
    size: "l",
  },
  {
    id: 16,
    title: "Chupin Bengalina con Bolsillo",
    price: 4150,
    offer: false,
    img: "/assets/chupinbengalinabolsillo.jpg",
    img1: "/assets/chupinbengalinabolsillo1.jpg",
    stock: 6,
    category: "Pantalón",
    color: "verde",
    size: "s",
  },
  {
    id: 17,
    title: "Camisa Transparente con Encaje",
    price: 3480,
    offer: false,
    img: "/assets/camisatransparenteconencaje.jpg",
    img1: "/assets/camisatransparenteconencaje1.jpg",
    stock: 2,
    category: "Remera",
    color: "Crema",
    size: "s",
  },
  {
    id: 18,
    title: "Remera Murciélago",
    price: 2750,
    offer: false,
    img: "/assets/remeramangamurcielago.jpg",
    img1: "/assets/remeramangamurcielago1.jpg",
    stock: 5,
    category: "Remera",
    color: "rosa",
    size: "xl",
  },
  {
    id: 19,
    title: "Campera de Jean",
    price: 4890,
    offer: false,
    img: "/assets/camperajean.jpg",
    img1: "/assets/camperajean1.jpg",
    stock: 4,
    category: "Abrigo",
    color: "verde",
    size: "xl",
  },
  {
    id: 20,
    title: "Calza", 
    price: 2510,
    offer: false,
    img: "/assets/calza.jpg",
    img1: "/assets/calza1.jpg",
    stock: 6,
    category: "Pantalón",
    color: "gris",
    size: "m",
  },
  {
    id: 21, 
    title: "Remera Sedosa",
    price: 2870,
    offer: false,
    img: "/assets/remerasedoso.jpg",
    img1: "/assets/remerasedoso1.jpg",
    stock: 6,
    category: "Remera",
    color: "azul",
    size: "xs",
  },
  {
    id: 22,
    title: "Remera Cuello V",
    price: 2750,
    offer: false,
    img: "/assets/remeracuellov.jpg",
    img1: "/assets/remeracuellov1.jpg",
    stock: 3,
    category: "Remera",
    color: "negro",
    size: "xs",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}

export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.category === cat;
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 200);
  });
}

export function getItemsBySize(talle) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.size === talle;
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 200);
  });
}

export function getItemsByColor(colors) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.color === colors;
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 200);
  });
}

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id === parseInt(idItem);
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 500);
  });
}
