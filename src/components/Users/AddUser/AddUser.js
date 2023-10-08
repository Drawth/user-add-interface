import classes from "./AddUser.module.css";
import Button from "../../UI/Card/Button/Button.js";
import { useState } from "react";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/Card/ErrorModal/ErrorModal";
const AddUser = (props) => {
  const [error, setError]= useState();
  const submitHandler = (event) => {
    event.preventDefault(); 
    if(username.trim().length===0 || age.toString().length===0){
      setError({
        title:"Geçersiz username",
        message:"Lütfen geçerli bir username girin"
      });
      return;
    }
    if(age<1){
      setError({
        title:"Geçersiz yaş",
        message:"Lütfen geçerli bir  yaş girin (>0)"
      });
      return;
    }
  props.onSendData(username,age);
  setAge(0);
  setUsername("");
  };
  const [username, setUsername] = useState("");
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const [age, setAge] = useState(0);
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div>
      { error &&<ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
    <form  onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username"  value={username} onChange={usernameHandler} type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" value={age} onChange={ageHandler} type="number" />
      <Button type="submit" onClick={submitHandler}>Add User</Button>
    </form>
    </Card>
    
    </div>
  );
};
export default AddUser;
