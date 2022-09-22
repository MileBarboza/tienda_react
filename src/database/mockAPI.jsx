const data = [
    {
        id: 1,
        title: "Sweater con puntila" ,
        price: 3050 ,
        img:"/assets/1.jpg",
        stock: 3,
        catagory: "Sweater"
    },
    {
        id: 2,
        title: "Sweater de punto acanalado" ,
        price: 3410 ,
        img:"/assets/2.jpg",
        stock: 4,
        catagory: "Sweater"
    },
    {
        id: 3,
        title: "Blusa con volados" ,
        price: 2490 ,
        img:"/assets/3.jpg",
        stock: 3,
        catagory: "Remera"
    },
    {
        id: 4,
        title: "Camisa lisa" ,
        price: 2900 ,
        img:"/assets/4.jpg",
        stock: 2,
        catagory: "Remera"
    },
    {
        id: 5,
        title: "Campera Chaqueta" ,
        price: 7590 ,
        img:"/assets/5.jpg",
        stock: 3,
        catagory: "Abrigo"
    },
    {
        id: 6,
        title: "Cardigan" ,
        price: 3699 ,
        img:"/assets/6.jpg",
        stock: 5,
        catagory: "Sweater"
    },
    {
        id: 7,
        title: "Chupin bengalina con lazo" ,
        price: 4760 ,
        img:"/assets/7.jpg",
        stock: 6,
        catagory: "Pantalón"
    },
    {
        id: 8,
        title: "Blusa estampada" ,
        price: 2670 ,
        img:"/assets/8.jpg",
        stock: 5,
        catagory: "Remera"
    },
    {
        id: 9,
        title: "Campera bomber" ,
        price: 6990 ,
        img:"/assets/9.jpg",
        stock: 2,
        catagory: "Abrigo"
    },
    {
        id: 10,
        title: "Remera calada" ,
        price: 2180 ,
        img:"/assets/10.jpg",
        stock: 4,
        catagory: "Remera"
    }        
  ]

  export default function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1500);
    })
  }



  