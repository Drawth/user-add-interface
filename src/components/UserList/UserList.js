import classes from "./UserList.module.css";
import Card from "../UI/Card/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
          {/* {props.userInputs.UserName} , {props.userInputs.Age} Years old */}
          {props.users.map(user=>
            <li key={user.id}>{user.name}  ({user.age} Years old)</li>
          )}
      </ul>
    </Card>
  );
};
export default UserList;
