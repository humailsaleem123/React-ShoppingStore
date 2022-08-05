import React from "react";
import Data from "../data.json";

export default React.createContext({

    product : Data , 
    cart: [], 

    addProductCart : product => {},
    removeProductFromCart: productId => {}
    
});