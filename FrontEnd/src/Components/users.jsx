
import React , {useState , useEffect, Fragment} from 'react'
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import ReadTable from './ReadTable';
import EditTable from './EditTable';

function Users() {

    const [userData , setUserData] = useState([]);

    const [editTable , setEditTable] = useState(null);

    const [editFormData , setEditFormData] = useState({
        fullName: "",
        Email : "",
        UserName : "",
        Password: "" ,
    })



    const deleteUser = (id) => {

        Axios.delete(`http://localhost:4000/delete/${id}`)
        .then((response) => {
            setUserData(userData.filter((val) => {
                return val.ID != id;
            }))
        })
    }


    const handleEditClick = (event, tabData) => {
        event.preventDefault();
        setEditTable(tabData.ID);
    

      };

      const handleCancelClick = () => {
          setEditTable(null);
      }



      const [newFullName , setNewFullName] = useState("");
      const [newEmail , setNewEmail] = useState("");
      const[newUserName , setNewUserName] = useState("");
      const [newPassword , setNewPassword] = useState("");
  
  
      const updateUsers = (id) => {
          Axios.put(`http://localhost:4000/update`,
  
          {
              id : id,
            //   FullName : newFullName,
            //   email : newEmail,
              UserName : newUserName,
              Password : newPassword,
  
          })
          .then((response)=> {

                // console.log( "UserName: " ,newUserName );
      
               
              setUserData(userData.map((val) => {
                  

                  return val.ID == id ? { ID : val.ID , FullName : val.FullName , Email : val.Email , UserName : newUserName , Password : newPassword }
                    :
                     val

                }

              ))

              setEditTable(null);

          })
          
          
          
      }



    useEffect(() => {

         Axios.get("http://localhost:4000/users")
         .then(
             res => setUserData(res.data)
             )
         .catch(
             error => console.log(error)
         )

    }, [])




    return (
        <>

        <h2 className='mt-5'>USERS INFORMATION</h2>
        
        <div className="mt-5 p-5" style={{'height' : '50vh'}} >
          
                        <table className="table">
            <thead>

                <tr>
                <th scope="col">#ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">UserName</th>
                <th scope="col">Password</th>
                <th scope="col">Edit</th>
                <th scope="col">del</th>
                </tr>

            </thead>

            <tbody>
                {userData.map((tabData) => {


                    return(

                        <>

                        <Fragment>



{/* 
                        <EditTable  handleCancelClick={handleCancelClick} tabData={tabData} deleteUser={deleteUser} 
                            setNewFullName={setNewFullName} setNewEmail={setNewEmail} setNewUserName={setNewUserName}
                            setNewPassword={setNewPassword} updateUsers={updateUsers}
                            /> */}

                        { editTable === tabData.ID  ? (

                            
                           

                         
                        <EditTable  handleCancelClick={handleCancelClick} tabData={tabData} deleteUser={deleteUser} 
                            setNewFullName={setNewFullName} setNewEmail={setNewEmail} setNewUserName={setNewUserName}
                            setNewPassword={setNewPassword} updateUsers={updateUsers}
                            />

                         )


                        :


                        (

                         <ReadTable handleEditClick={handleEditClick}  tabData={tabData} deleteUser={deleteUser}  />
                         
                        )}   

                        


                       
{/* 
                        <tr key={key} >
                        <th scope="row">{tabData.ID}</th>
                        <td>{tabData.FullName} </td>
                        <td>{tabData.Email}</td>
                        <td>{tabData.UserName}</td>
                        <td>{tabData.Password}</td>


                        <td>
                            <button className='btn-secondary'  type="button">Edit</button>
                        </td>



                        <td>
                            <button className='btn-secondary' onClick={()=> {deleteUser(tabData.ID)}} type="button">Delete</button>
                        </td>
                       
                        </tr> */}

                            </Fragment>

                        </> 
                    )
                    
                })}
        


            </tbody>
            </table>
        </div>


        </>
    )
}


export default Users;
