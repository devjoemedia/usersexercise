import UserList from "../components/UserList";
import Form from "../components/Form";
import { Button } from "react-bootstrap";
import firebase from "../firebase/config";

const Home = () => {
  const handleLogOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
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
