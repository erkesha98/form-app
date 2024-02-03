import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import FormApp from "../FORM/FormApp";
import Stepper from "../FORM/Stepper";
import FirstStep from "../FORM/FirstStep";
import "./userList.style.css"

const url = "https://jsonplaceholder.typicode.com/users";
const UserList = () => {
  const [userList, setUserList] =useState([]);
  const[showForm, setShowForm]=useState(false);

  useEffect(() => {
    getUsers();
  },[]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList([...userList, ...data]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteHandle = (id) => {
    setUserList((prevUserList)=>prevUserList.filter((el) => el.id !== id));
  };

  const addUser=()=>{
setShowForm(true);
  }
  return (
  <>
  <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
         
          </tr>
        </thead>
        <tbody>
          {userList.slice(0,10).map((el, index) => (
            <UserRow key={index} user={el} deleteHandle={deleteHandle} />
          ))}
        </tbody>
      </table>
      </div>
      <div><button onClick={addUser}>Add</button></div>
      {showForm &&(
        <>
 <Stepper/>
 <FirstStep/>

 </>
      )}
      {/* {showForm&& <FormApp/>} */}
   
      </>
   
  );
};

export default UserList;
