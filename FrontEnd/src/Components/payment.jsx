import React, {useContext} from 'react'
import HEADER from './Header';
import shopContext  from '../Context/shopContext';


function Payment() {

    const context = useContext(shopContext);

    return (

        <>


        <HEADER 

        cartItemNumber = {context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;

        } , 0)}

        />

        <div>
          Payment DEDO I M GAREEB
        </div>


        </>
    )
}

export default Payment;
