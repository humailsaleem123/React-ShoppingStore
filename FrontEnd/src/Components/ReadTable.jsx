import React from 'react'


function ReadTable( { tabData , handleEditClick , deleteUser } ) {

    return (

        <tr >
        <th scope="row">{tabData.ID}</th>
        <td>{tabData.FullName} </td>
        <td>{tabData.Email}</td>
        <td>{tabData.UserName}</td>
        <td>{tabData.Password}</td>


        <td>
            <button type="button" className='btn-secondary' onClick={(event) => {handleEditClick(event , tabData)}} > Edit</button>
        </td>

        <td>
            <button className='btn-secondary' onClick={()=> {deleteUser(tabData.ID)}} type="button">Delete</button>
        </td>
       
        </tr>
    )
}

export default ReadTable;
