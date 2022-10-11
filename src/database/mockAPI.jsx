const data = [
    {
        id: 1,
        title: "Sweater con puntilla" ,
        price: 3050 ,
        offer: true,
        img:"/assets/Sweater con puntilla.jpg",
        img1:"/assets/Sweater con puntilla1.jpg",
        stock: 3,
        category: "Sweater",
        color: "beige",
        size: "s"
    },
    {
        id: 2,
        title: "Sweater de punto acanalado" ,
        price: 3410 ,
        offer: true,
        img:"/assets/Sweater de punto acanalado.jpg",
        img1:"/assets/Sweater de punto acanalado1.jpg",
        stock: 4,
        category: "Sweater",
        color: "gris",
        size: "m"

    },
    {
        id: 3,
        title: "Blusa con volados" ,
        price: 2490 ,
        offer: false,
        img:"/assets/Blusa con volados.jpg",
        img1:"/assets/Blusa con volados1.jpg",
        stock: 3,
        category: "Remera",
        color: "rosa",
        size: "xl"

    },
    {
        id: 4,
        title: "Camisa lisa" ,
        price: 2900 ,
        offer: false,
        img:"/assets/Camisa lisa.jpg",
        img1:"/assets/Camisa lisa1.jpg",
        stock: 2,
        category: "Remera",
        color: "celeste",
        size: "m"
    },
    {
        id: 5,
        title: "Chaqueta doble botonadura" ,
        price: 7590 ,
        offer: false,
        img:"/assets/Chaqueta doble botonadura.jpg",
        img1:"/assets/Chaqueta doble botonadura1.jpg",
        stock: 3,
        category: "Abrigo",
        color: "verde",
        size: "xs"
    },
    {
        id: 6,
        title: "Cardigan" ,
        price: 3699 ,
        offer: true,
        img:"/assets/Cardigan.jpg",
        img1:"/assets/Cardigan1.jpg",
        stock: 5,
        category: "Sweater",
        color: "rosa",
        size: "m"
    },
    {
        id: 7,
        title: "Chupin bengalina con lazo" ,
        price: 4760 ,
        offer: false,
        img:"/assets/Chupin bengalina con lazo.jpg",
        img1:"/assets/Chupin bengalina con lazo1.jpg",
        stock: 6,
        category: "Pantalón",
        color: "celeste",
        size: "l"
    },
    {
        id: 8,
        title: "Blusa estampada" ,
        price: 2670 ,
        offer: false,
        img:"/assets/Blusa estampada.jpg",
        img1:"/assets/Blusa estampada1.jpg",
        stock: 5,
        category: "Remera",
        color: "beige",
        size: "xl"
    },
    {
        id: 9,
        title: "Campera bomber" ,
        price: 6990 ,
        offer: true,
        img:"/assets/Campera bomber.jpg",
        img1:"/assets/Campera bomber1.jpg",
        stock: 2,
        category: "Abrigo",
        color: "negro",
        size: "s"
    },
    {
        id: 10,
        title: "Remera calada" ,
        price: 2180 ,
        offer: false,
        img:"/assets/Remera calada.jpg",
        img1:"/assets/Remera calada1.jpg",
        stock: 4,
        category: "Remera",
        color: "rosa",
        size: "m"
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
      }, 500)
    });
  }

  export function getSingleItems(idItem) {
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

  