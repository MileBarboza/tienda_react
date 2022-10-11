import React from 'react'
import './filtro.scss'
import { Link } from "react-router-dom"


function Filtro() {

  return (
    <div className='filtro App'>
        <h3>Filtrar</h3>
            <h4>Categoria</h4>
                <ul>	
                  <li><Link to='/categoria/Abrigo'>Abrigo</Link></li>
                  <li><Link to='/categoria/Pantalón'>Pantalón</Link></li>
                  <li><Link to='/categoria/Remera'>Remera</Link></li>
                  <li><Link to='/categoria/Sweater'>Sweater</Link></li>
                </ul>
            <h4>Talle:</h4>
              <div> 
                  <ul >
                     <li><Link to='/talle/xs'>XS</Link></li>
                     <li><Link to='/talle/s'>S</Link></li>
                     <li><Link to='/talle/m'>M</Link></li>
                     <li><Link to='/talle/l'>L</Link></li>
                     <li><Link to='/talle/xl'>XL</Link></li>
                     {/* className='btn__talle */}
                  </ul>
              </div>
              
            <h4>Color:</h4>
               <div className='itemD__detalle App'> 
                    <Link to='/color/gris'><button className='btn__color btn__color-gris'></button></Link>
                    <Link to='/color/rosa'><button className='btn__color btn__color-rosa'></button></Link>
                    <Link to='/color/beige'><button className='btn__color btn__color-blanco'></button></Link>
                    <Link to='/color/negro'><button className='btn__color btn__color-negro'></button></Link>
                    <Link to='/color/celeste'><button className='btn__color btn__color-celeste'></button></Link>
                    <Link to='/color/verde'><button className='btn__color btn__color-verde'></button></Link>
              </div>
            <h4>Precio:</h4>
           
    </div>
  )
}

export default Filtro