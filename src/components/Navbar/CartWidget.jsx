import { useContext } from 'react';
import { GrCart } from 'react-icons/gr'
import { CartContext } from '../../context/CartContext';


function CartWidget() {

const { getItemCount } = useContext(CartContext)

  return (
    <div>
        <button className="icons__cart"> <GrCart/> 
            {getItemCount() === 0 || <span className='item__total'>{ getItemCount() }</span>}
        </button>
    </div>
  );
}

export default CartWidget;
