import React from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState("");
  const DataHandler = (uName, uAge) => {
    setUserInput((prevList)=>{
      return[...prevList, {name:uName,age:uAge, id:Math.random().toString()}]; 
    });
  };
  return (
    <div>
      <AddUser onSendData={DataHandler} />
      {!userInput && <h2 style={{ textAlign: "center", color:"white"}}>There is no data </h2>}
      {userInput && <UserList users={userInput} />}
    </div>
  );
}

export default App;
