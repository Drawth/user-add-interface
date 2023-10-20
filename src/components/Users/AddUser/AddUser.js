import classes from "./AddUser.module.css";
import Button from "../../UI/Card/Button/Button.js";
import { useState, useRef } from "react";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/Card/ErrorModal/ErrorModal";
const AddUser = (props) => {

  const nameInputRef= useRef();
  const ageInputRef= useRef();


  const [error, setError]= useState();

  const submitHandler = (event) => {
    event.preventDefault(); 
    const enteredUsername=nameInputRef.current.value;
    const enteredAge=ageInputRef.current.value;
    if(enteredUsername.trim().length===0 || enteredAge.toString().length===0){
      setError({
        title:"Geçersiz username",
        message:"Lütfen geçerli bir username girin"
      });
      return;
    }
    if(enteredAge<1){
      setError({
        title:"Geçersiz yaş",
        message:"Lütfen geçerli bir  yaş girin (>0)"
      });
      return;
    }
  props.onSendData(enteredUsername,enteredAge);
  nameInputRef.current.value="";
  ageInputRef.current.value="";

  };

  const errorHandler=()=>{
    setError(null);
  }
  return (
    <>
      { error &&<ErrorModal title={error.title}  message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
    <form  onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username"  type="text"  ref={nameInputRef}/>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" ref={ageInputRef} />
      <Button type="submit" onClick={submitHandler}>Add User</Button>
    </form>
    </Card>
    </>
  );
};
export default AddUser;
