import React, { createContext } from 'react'
import COMB from './ComB';


const BioData = createContext();

function COM(){




return (
        
        <BioData.Provider value={"humail saleem"}>

            <COMB/>

        </BioData.Provider>
        

)




}

export default COM
export { BioData };