import React, { useContext , useReducer } from 'react'
import {BioData} from './Coma';


const initialState = 0;

const reducer = (state, action) =>{

        if(action.type == "Increment"){
            return state + 1;
        }

        else{
            return state - 1;
        }
            
        



}


function COMC(){

    const [state, dispatch] = useReducer(reducer, initialState);

    const name = useContext(BioData);


return (

<div>
    <h3>react Practice {name}</h3>

    <div>

        <p>{state}</p>

    <button onClick={() => dispatch({type: "Increment"})}>INC</button>
    <button onClick={()=> dispatch({type: "Decrement"})}>DEC</button>

    </div>
   
</div>

)

}

export default COMC;