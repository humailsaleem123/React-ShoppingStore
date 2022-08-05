import React, {useState, useReducer , useEffect} from 'react'; 
import shopContext from './shopContext';
import {shopReducer, ADD_PRODUCT , REMOVE_PRODUCT} from './reducers';
import Data from '../data.json';
import Axios  from 'axios'

function GlobalState(props){

    // const [product , setProduct] = useState([]);

    const products = Data ;


     const [cartState, dispatch] = useReducer(shopReducer, {cart: []});

     const addProductCart = product => {

         dispatch({type: ADD_PRODUCT, product: product});

     }


     const removeProductFromCart = productId => {

         dispatch({type: REMOVE_PRODUCT, productId : productId});
     }

    //  useEffect(() => {
   
    //     Axios.get("http://localhost:4000/products")
    //     .then(
    //         res => setProduct(res.data) 
          
    //     )
    //     .catch(
    //         error => console.log(error)
    //     )
    
    
    // }, [])
    

     return (
         <shopContext.Provider
             value ={{
                products : products,
                 cart : cartState.cart,
                 addProductCart : addProductCart,
                 removeProductFromCart : removeProductFromCart
             }}

        >

             {props.children}

         </shopContext.Provider>
     )
}
export default GlobalState;