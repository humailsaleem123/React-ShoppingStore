import Axios  from 'axios'
import React , {useState , useEffect} from 'react'
import shopContext from '../Context/shopContext';



export const Productss = () => {

    const [products , setProducts] = useState([]);

useEffect(() => {
   
    Axios.get("http://localhost:4000/products")
    .then(
        res => setProducts(res.data)
    )
    .catch(
        error => console.log(error)
    )


}, [])





}
