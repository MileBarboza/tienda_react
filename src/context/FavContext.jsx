import React, { useState, createContext } from 'react'
import { toast } from "react-toastify";

 const FavContext = createContext()

export default  function FavContextProvider({children}) {
    <div>Favorito</div>
  const [fav, setFav] = useState([])  

  const addFav = (item) => {
    const newFav = fav.findIndex((i) => i.id === item.id);
    if (newFav > -1) {
        setFav([...fav]);
    } else {
        setFav([...fav, item]);
    }
    toast(`Agregaste a Favorito! `, {
        autoClose: 1300,
        theme: "colored",
        hideProgressBar: true,
        style: {
            background: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
            borderRadius: "7px",
            fontWeight: "600",
            top: "50px",
            color: "#fff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.386)",
            position: "left",
            gravity:"top",
        },
    });
};

const deleteFav = (id) => {
  return setFav(fav.filter(item => item.id !== id)) 
}

  return (  
   <FavContext.Provider value={{ fav, addFav, deleteFav}}>
       {children}
   </FavContext.Provider>
  )
}

export {FavContext}