import './App.css';
import COM from './Coma';
import COMB from './ComB';
import COMC from './ComC';
import HEADER from './Components/Header';
import TodoCard from './Components/TodoCard';
import GlobalState from './Context/GlobalState';
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CartPage from './Components/Carts/Cart';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import Users from './Components/users';
import Payment from './Components/payment/payment';
import Private from './Components/private';
import Footer from './Components/Footer';
import About from './Components/about/about'




function App() {



  return (

    <>
      
    <GlobalState> 

      <div className="App">


      <BrowserRouter>

        <Routes>

     

          <Route exact path="/" element={<>  <TodoCard/> </>  } />

          <Route path="/cart" element={ <CartPage/> }  /> 

          <Route path="/login" element={ <Login/>  }  />

          <Route path="/register"  element={ <> <HEADER/>  <Register/> </>  }  />

          <Route path="/users"  element={ <> <HEADER/>  <Users/> </>  }  />

          <Route path="/about"  element={ <>  <About/> </>  }  />
        

          <Route element={ <Private/> } >

          <Route path="/payment"  element={ <> <HEADER/>  <Payment/>  </>  } />

          </Route>

       

        </Routes>  

      </BrowserRouter>

    
      </div>

     

      <Footer/>
      
    </GlobalState>
      

   
    </>
  );
}

export default App;
