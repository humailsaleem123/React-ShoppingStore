import React , { useEffect, useState  } from 'react';
import { Link, Route , useNavigate  } from "react-router-dom";
import Axios from 'axios';
import './login.css'
import TodoCard from '../TodoCard';
import HEADER from '../Header';

function Login () {


    const handleClick = (e) => {

        return e.target.classList.add('focus');

    }

    const nohandleClick = (e) => {

        
        if(e.target.value == ''){
            return e.target.classList.remove('focus');
        }
        

    }




// const [value , setValue] = useState('');

const [userName , setUserName] = useState("");

const [password, setPassword] = useState("");

const [loginStatus , setLoginStatus] = useState("");

const [user , setUser] = useState("");

let Navigate = useNavigate();


const onSubmit = async () => {



     await Axios.post("http://localhost:4000/login",

    {
        userName : userName,
        password : password,
    })
    .then((response) => {

        const userData = JSON.stringify(response.data);
     
        if (response.data.message) {
            setLoginStatus(response.data.message);
        } 

        else {
            console.log(response.data);
            setLoginStatus(response.data[0].UserName); 

            localStorage.setItem("user", userData);

            Navigate("/");

           
          
        }

        const username = response.data[0].UserName;
        const password = response.data[0].password;
        
        

    });


}


useEffect(() => {

    const authPayment = localStorage.getItem('user');
    if(authPayment){
        Navigate('/');
    }

})



// const [errors , setErrors] = useState([]);

// function isRequired(val) {

//     return val.length > 0 ? "" : "*cannot be blank";
// }

// function validate (validations){
//     setErrors(validations.map(errorsFor => errorsFor(value)))
// }

// const adminUser = {
    
//     name = "humailsaleem",
//     password = "admin123"
// }

// const [user , setUser] = useState ({name="" , password=""});

// const [error , setError] = useState("");

// const Login = details => {

//     console.log("login");

// }

// const Logout = () =>{


//     console.log("logout");

// }
// onBlur={() => validate([isRequired])}

// onBlur={() => validate([isRequired])}


    return (

    

            <>

                <HEADER 

                />

<section className="vh-100 bg-image" >

                    {/* <h1 className="text-center mt-5 pt-5">ONLINE SHOPPING STORE</h1> */}

                    <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">

            <form   className="login-form formm">

            <h2>LOGIN SYSTEM</h2>


            <div  className="txtb" onFocus={handleClick} onBlur={nohandleClick} >


                <input type="text" userValue={userName} onChange={(e) => setUserName(e.target.value)}  required /> <span data-placeholder="Username"> </span> 

            
              

            </div>
            <p  className="has-error fadeIn">{loginStatus}</p>
                       
            {/* {
                    errors.length > 0 ? ( <span className="has-error" >{errors.join(", ")} </span> ) : null
                } */}
           

            <div className="txtb" onFocus={handleClick}  onBlur={nohandleClick}   >

                <input type="password"  passwordValue={password}  onChange={(e) => setPassword(e.target.value)} required /> <span data-placeholder="Password"></span> 

            </div>
            <p  className="has-error" >{loginStatus}</p>

            {/* {
                    errors.length > 0 ? ( <span className="has-error" >{errors.join(", ")} </span> ) : null
                } */}
               

                 < input  onClick={onSubmit} className="logbtn text-center"  value="LOGIN" />

                 <p className="text-center text-muted mt-5 mb-0">Have you register? <Link to="/register"> <a  className="fw-bold text-body"><u>Register here</u></a></Link></p>

                 <a  className="fw-bold text-body"></a>
            </form>


            </div>
            </div>
            </section>


            </>
    )


}



export default Login;