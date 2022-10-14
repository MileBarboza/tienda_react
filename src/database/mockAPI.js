const data = [
    {
        id: 1,
        title: "Sweater con puntilla" ,
        price: 3050 ,
        offer: true,
        img:"/assets/sweaterconpuntilla.jpg",
        img1:"/assets/sweaterconpuntilla1.jpg",
        stock: 4,
        category: "Sweater",
        // color: "beige",
        // size: "m"
        color: ["beige"],
        size: ["s","m","l"]
    },
    {
        id: 2,
        title: "Sweater de punto acanalado" ,
        price: 3410 ,
        offer: true,
        img:"/assets/sweaterdepuntoacanalado.jpg",
        img1:"/assets/sweaterdepuntoacanalado1.jpg",
        stock: 5,
        category: "Sweater",
        // color: "gris",
        // size: "s"
        color: ["gris","blanco", "negro"],
        size: ["l","m","xl"]

    },
    {
        id: 3,
        title: "Blusa con volados" ,
        price: 2490 ,
        offer: false,
        img:"/assets/blusaconvolados.jpg",
        img1:"/assets/blusaconvolados1.jpg",
        stock: 4,
        category: "Remera",
        // color: "rosa",
        // size: "xl"
        color: ["rosa"],
        size: ["xs","s","xl"]

    },
    {
        id: 4,
        title: "Camisa lisa" ,
        price: 2900 ,
        offer: false,
        img:"/assets/camisalisa.jpg",
        img1:"/assets/camisalisa1.jpg",
        stock: 3,
        category: "Remera",
        // color: "celeste",
        // size: "m"
        color: ["celeste","negro","blanco", "amarillo"],
        size: ["m","l","xl"]
    },
    {
        id: 5,
        title: "Chaqueta doble botonadura" ,
        price: 7590 ,
        offer: false,
        img:"/assets/chaquetadoblebotonadura.jpg",
        img1:"/assets/chaquetadoblebotonadura1.jpg",
        stock: 4,
        category: "Abrigo",
        // color: "verde",
        // size: "xs"
        color: ["verde"],
        size: ["xs"]
    },
    {
        id: 6,
        title: "Cardigan" ,
        price: 3699 ,
        offer: true,
        img:"/assets/cardigan.jpg",
        img1:"/assets/cardigan1.jpg",
        stock: 6,
        category: "Sweater",
        // color: "rosa",
        // size: "m"
        color: ["rosa"],
        size: ["m","l"]
    },
    {
        id: 7,
        title: "Chupin bengalina con lazo" ,
        price: 4760 ,
        offer: false,
        img:"/assets/chupinbengalinaconlazo.jpg",
        img1:"/assets/chupinbengalinaconlazo1.jpg",
        stock: 7,
        category: "Pantalón",
        // color: "celeste",
        // size: "l"
        color: ["celeste","negro"],
        size: ["s","l","m"]
    },
    {
        id: 8,
        title: "Blusa estampada" ,
        price: 2670 ,
        offer: false,
        img:"/assets/blusaestampada.jpg",
        img1:"/assets/blusaestampada1.jpg",
        stock: 6,
        category: "Remera",
        // color: "beige",
        // size: "xl"
        color: ["beige"],
        size: ["m","xl"]
    },
    {
        id: 9,
        title: "Campera bomber" ,
        price: 6990 ,
        offer: true,
        img:"/assets/camperabomber.jpg",
        img1:"/assets/camperabomber1.jpg",
        stock: 3,
        category: "Abrigo",
        // color: "negro",
        // size: "s"
        color: ["negro"],
        size: ["s","m",]
    },
    {
        id: 10,
        title: "Remera calada" ,
        price: 2180 ,
        offer: false,
        img:"/assets/remeracalada.jpg",
        img1:"/assets/remeracalada1.jpg",
        stock: 5,
        category: "Remera",
        // color: "rosa",
        // size: "m"
        color: ["rosa","blanco"],
        size: ["m"]
    } 
  ]

  export default function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
  }

  export function getItemsByCategory(cat) {   
    return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
        return item.category === cat;
      });
      setTimeout( () => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 200)
    });
  }

  export function getItemsBySize(talle) {   
    return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
        return item.size === talle;
      });
      setTimeout( () => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 200)
    });
  }

  export function getItemsByColor(colors) {   
    return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
        return item.color === colors;
      });
      setTimeout( () => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 200)
    });
  }

  export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
      let itemFind = data.find((item) => {
        return item.id === parseInt(idItem);
      });
      setTimeout( () => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 500)
    });
  }

  