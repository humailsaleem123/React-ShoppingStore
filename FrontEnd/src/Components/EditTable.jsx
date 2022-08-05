import React , {useState} from 'react'
import TextField from '@mui/material/TextField';
import Axios from 'axios';



function EditTable({tabData , deleteUser , handleCancelClick , setNewUserName , setNewPassword , updateUsers}) 
{


    return (

        <tr  >
        <th scope="row">{tabData.ID}</th>

        <td> {tabData.FullName} </td>
        <td> {tabData.Email} </td>
        <td> <TextField id="username" defaultValue={tabData.UserName} variant="standard" onChange={(e) => setNewUserName(e.target.value) } /> </td>

        <td> <TextField id="password" defaultValue={tabData.Password}variant="standard" onChange={(e)=> setNewPassword(e.target.value)}  /> </td>


        <td>
            <button  className='btn-secondary'  type="button" onClick={()=> {updateUsers(tabData.ID)}}  >Update</button>

            <button className='btn-secondary'  type="button"  onClick={()=> handleCancelClick()} >Cancel</button>
        </td>

        <td>
            <button className='btn-secondary' onClick={()=> {deleteUser(tabData.ID)}} type="button">Delete</button>
        </td>
       
        </tr>
    )
}

export default EditTable;
