import { ClassNames } from '@emotion/react';
import { FormLabel } from '@mui/material';
import React , { useState , useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";
import Axios from "axios";
import './register.css'


function Register () {

  let Navigate = useNavigate();


    const handleClick = (e) => {

        return e.target.classList.add('label-active');

    }

    const nohandleClick = (e) => {

        return e.target.classList.remove('label-active');

    }

  




const [value , setValue] = useState('');

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

const [fullName , setFullName] = useState("");

const [userNameReg , setUserNameReg] = useState("");

const [email ,setEmail] = useState("");

const [passwordReg , setPasswordReg] = useState("");


const register = () => {
    Axios.post("http://localhost:4000/register",

    {
        fullName: fullName,
        userNameReg: userNameReg,
        email: email,
        passwordReg: passwordReg,

    })
    .then((response)=> {
        console.log(response);
        console.log("fullName: " , fullName )
    })
}



useEffect(() => {

  const auth = localStorage.getItem('user');

  if(auth){
      Navigate('/');
  }

})


    return (
      <>


        <section className="vh-100 bg-image" >

        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: "15px"}}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
      
                    <form action="/login">

                    <div className="txbb"  onFocus={handleClick} onBlur={nohandleClick}>

                            <p className="label-txt" >ENTER YOUR FULLNAME</p>
                                
                            <input type="text" className="input" valueFullName={fullName}

                            onChange={(e)=>{setFullName(e.target.value)}}
                            
                             required  
                            />

                            <div className="line-box">
                            <div className="line"></div>
                            </div>
                            
                        </div>

                        <div className="txbb">
                            <p className="label-txt">ENTER YOUR USERNAME</p>
                            <input type="text" className="input" 
                            onChange={(e)=>{setUserNameReg(e.target.value)}}
                             required
                            />
                            <div className="line-box">
                            <div className="line"></div>
                            </div>
                        </div>

                        <div className="txbb">
                            <p className="label-txt">ENTER YOUR EMAIL</p>
                            <input type="text" className="input"
                            onChange={(e)=>{setEmail(e.target.value)}}
                             required
                            />
                            <div className="line-box">
                            <div className="line"></div>
                            </div>
                        </div>

                        <div className="txbb">
                            <p className="label-txt">ENTER YOUR PASSWORD</p>
                            <input type="password" className="input"
                            onChange={(e)=>{setPasswordReg(e.target.value)}} required />
                            <div className="line-box">
                            <div className="line"></div>
                            </div>
                        </div>

                      <input type="submit" className="logbtn"  value="REGISTER" onClick={register}   />

                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"> <a  className="fw-bold text-body"><u>Login here</u></a></Link></p>

                    </form>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  </>


    )


}



export default Register;