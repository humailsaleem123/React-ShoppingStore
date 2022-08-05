import React from 'react'
import {Navigate , Outlet} from 'react-router-dom';

function Private() {

    const authPayment = localStorage.getItem('user');
   
    
    return  authPayment ?  <Outlet/> : <Navigate to="/login" />

}

export default Private;
