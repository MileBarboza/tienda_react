const data = [
    {
        id: 1,
        title: "Sweater con puntilla" ,
        price: 3050 ,
        img:"/assets/Sweater con puntilla.jpg",
        stock: 3,
        category: "Sweater"
    },
    {
        id: 2,
        title: "Sweater de punto acanalado" ,
        price: 3410 ,
        img:"/assets/Sweater de punto acanalado.jpg",
        stock: 4,
        category: "Sweater"
    },
    {
        id: 3,
        title: "Blusa con volados" ,
        price: 2490 ,
        img:"/assets/Blusa con volados.jpg",
        stock: 3,
        category: "Remera"
    },
    {
        id: 4,
        title: "Camisa lisa" ,
        price: 2900 ,
        img:"/assets/Camisa lisa.jpg",
        stock: 2,
        category: "Remera"
    },
    {
        id: 5,
        title: "Chaqueta doble botonadura" ,
        price: 7590 ,
        img:"/assets/Chaqueta doble botonadura.jpg",
        stock: 3,
        category: "Abrigo"
    },
    {
        id: 6,
        title: "Cardigan" ,
        price: 3699 ,
        img:"/assets/Cardigan.jpg",
        stock: 5,
        category: "Sweater"
    },
    {
        id: 7,
        title: "Chupin bengalina con lazo" ,
        price: 4760 ,
        img:"/assets/Chupin bengalina con lazo.jpg",
        stock: 6,
        category: "Pantalón"
    },
    {
        id: 8,
        title: "Blusa estampada" ,
        price: 2670 ,
        img:"/assets/Blusa estampada.jpg",
        stock: 5,
        category: "Remera"
    },
    {
        id: 9,
        title: "Campera bomber" ,
        price: 6990 ,
        img:"/assets/Campera bomber.jpg",
        stock: 2,
        category: "Abrigo"
    },
    {
        id: 10,
        title: "Remera calada" ,
        price: 2180 ,
        img:"/assets/Remera calada.jpg",
        stock: 4,
        category: "Remera"
    } 
  ]

  export default function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
  }

  export function getItemsBycategory(cat) {   // para las Categorias
    return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
        return item.category === cat;
      });
      setTimeout( () => {
        console.log("Encontramos:",itemFind)
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

  