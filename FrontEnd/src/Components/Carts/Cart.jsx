import React, {useContext , useEffect} from 'react';
import shopContext  from '../../Context/shopContext';
import HEADER from '../Header';
import "./Cart.css";
import { BrowserRouter,Link, Route, Switch , Redirect } from "react-router-dom";
import Payment from '../payment';
import { Button } from '@mui/material';


function CartPage(props){


    const context = useContext(shopContext);

    const itemsPrice = context.cart.reduce((a, c) => a + c.Price * c.quantity, 0);

    const taxPrice = itemsPrice * 0.14;

    const shippingPrice = itemsPrice > 2000 ? 0 : 50;

    const totalPrice = itemsPrice + taxPrice + shippingPrice;   

    useEffect (() => {
        console.log(context);

    } , []);




    

    return(
        <>
        <React.Fragment>


                    <HEADER 

                    cartItemNumber = {context.cart.reduce((count, curItem) => {
                        return count + curItem.quantity;

                    } , 0)}

                    />
                            
                            <div className="wrapper">


                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex flex-column">
                                            <div className="h3">Cart</div>
                            
                                        </div>
                                    </div>
                                    <div className="notification alert alert-dismissible fade show text-white d-flex align-items-center my-3 text-justify" role="alert"></div>
                                    <div id="table" className="bg-white rounded" >

                                        <div className="d-md-flex align-items-md-center px-3 pt-3">
                                            <div className="d-flex flex-column">
                                                <div className="h4 font-weight-bold">Cart lists</div>
                                                <div className="text-muted">{context.cart.length} items</div>
                                            </div>
                                        </div>

                                            
                                        <hr></hr>
                                        <div className="table-responsive" style={{'height' : '50vh'}}>

                                            

                                            <table className="table activitites" >
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="text-uppercase header">item</th>
                                                            <th scope="col" className="text-uppercase">Quantity</th>
                                                            <th scope="col" className="text-uppercase">price each</th>
                                                            <th scope="col" className="text-uppercase">total</th>
                                                        </tr>
                                                    </thead>

                                                    {context.cart.length <= 0  &&
                                                    
                                                    <tbody>
                                                        <tr> 
                                                            <td colspan="4"><strong style={{fontSize:"1.5rem"}}>Cart Is Empty</strong></td>
                                                        </tr>
                                                   
                                                    </tbody>
                                                    
                                                    }
                                                    <tbody>
                                                {context.cart.map(cartItem => {
                                                    return(

                                                   
                                                   
                                                        <tr>
                                                            <td className="item">
                                                                <div className="d-flex"> <img src={cartItem.imgsrc} alt="" />
                                                                    <div className="pl-2" style={{marginLeft:"20px"}}> {cartItem.name} <div className="text-uppercase new"></div>
    
                                                                    </div>
    
                                                                </div>
                                                            </td>
    
                                                            <td>{cartItem.quantity}</td>
    
                                                            <td className="d-flex flex-column"><span className="red">${cartItem.Price}</span> </td>
    
                                                            <td className="font-weight-bold"> ${itemsPrice.toFixed(2)}</td>
    
                                                            <td className="item">        
                                                                
                                                                <button className="btn border" onClick={context.addProductCart.bind(this, cartItem)} >+</button> 
                                                            
                                                            </td>
    
                                                            <td className="item">
                                                                <button className="btn border" onClick={context.removeProductFromCart.bind(this, cartItem.id)} >-</button>
                                                            </td>
    
                                                         </tr>
                            
                                               

                                                    )
                                                   

                                                }
                                                )}  

                                                    </tbody>
                                
                                                
                             

                                              
                                             </table>
                                        </div>
                                        {/* <hr></hr> */}
                                    




                                    </div>


                            

                                    {context.cart.length !==0 && 
                                    <>


                                        <div className="d-flex justify-content-between">
                                        <div className="text-muted">  </div>
                                        <div className="d-flex flex-column justify-content-end align-items-end">
                                            <div className="d-flex px-3 pr-md-5 py-1 subtotal">
                                                <div className="px-4">Subtotal</div>
                                                <div className="h5 font-weight-bold px-md-2">${totalPrice.toFixed(2)}</div>
                                            </div>
                                            
                                        </div>
                                        </div>


                                           <Link to="/payment" style={{'textDecoration': 'none'}} >
                                               <Button variant="outlined" size="large" color="secondary" > PROCEED TO CHECKOUT </Button></Link>

                                    </>
                                        }    


                                  
                            </div>


        </React.Fragment>


        </>

    )


}
export default CartPage;


