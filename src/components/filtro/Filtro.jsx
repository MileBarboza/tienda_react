import  React from 'react';
import './filtro.scss'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Filtro() {

  function valuetext(value) {
    return `${value}°C`;
  }
  const minDistance = 10;

  const [value1, setValue1] = React.useState([4500, 8000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <div className='filtro App'>
        <h4  className='filtro-sec'>Categoria</h4>
          <div>
              <ul>	
                <li><Link to='/productos'>Todo</Link></li>
                <li><Link to='/categoria/Abrigo'>Abrigo</Link></li>
                <li><Link to='/categoria/Pantalón'>Pantalón</Link></li>
                <li><Link to='/categoria/Remera'>Remera</Link></li>
                <li><Link to='/categoria/Sweater'>Sweater</Link></li>
              </ul>
          </div>
        <h4 className='filtro-sec'>Talle:</h4>
          <div>  
              <ul>
                 <li><Link to='/talle/xs'>XS</Link></li>
                 <li><Link to='/talle/s'>S</Link></li>
                 <li><Link to='/talle/m'>M</Link></li>
                 <li><Link to='/talle/l'>L</Link></li>
                 <li><Link to='/talle/xl'>XL</Link></li>
              </ul>
          </div>
          
        <h4  className='filtro-sec'>Color:</h4>
           <div> 
                <Link to='/color/gris'><button className='btn__color btn__color-gris'></button></Link>
                <Link to='/color/rosa'><button className='btn__color btn__color-rosa'></button></Link>
                <Link to='/color/beige'><button className='btn__color btn__color-blanco'></button></Link>
                <Link to='/color/negro'><button className='btn__color btn__color-negro'></button></Link>
                <Link to='/color/azul'><button className='btn__color btn__color-azul'></button></Link>
                <Link to='/color/verde'><button className='btn__color btn__color-verde'></button></Link>
          </div>

        <h4 className='filtro-sec'>Precio:</h4>
          <div className='filtro__precio'>
            <Box sx={{ width: 170 }}>
              <p>$2.000  -  $10.000</p>
              <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                min={2000}
                max={10000}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                />
            </Box>
          </div>
    </div>
  )
}

export default Filtro;


