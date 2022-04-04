import UserList from "../components/UserList";
import Form from "../components/Form";
import { Button } from "react-bootstrap";
import firebase from "../firebase/config";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const handleLogOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h4>welcome {user.email}</h4>
      <Button style={{ float: "right" }} onClick={handleLogOut}>
        Log out
      </Button>
      <h3 className="text-muted">UserList App</h3>
      <Form />
      <br />
      <h3 className="text-muted">Users</h3>
      <UserList />
    </div>
  );
};

export default Home;
