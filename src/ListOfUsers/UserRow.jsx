import React from 'react'
import UserList from './UserList';
const UserRow = ({user, deleteHandle}) => {
    const{id,name,email,phone,website}=user;
  return (
  
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td><button onClick={()=>deleteHandle(user.id)}>x</button></td>
        </tr>

   
  )
}

export default UserRow