import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./actions";
import Form from "./components/Form";
import UserList from "./components/UserList";
import firebase from "./firebase/config";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((users) => {
        let data = [];

        users.forEach((user) => {
          data.push(user.data());
        });

        dispatch(setUsers(data));
      });
  }, []);

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h3 className="text-muted">UserList App</h3>
      <Form />
      <br />
      <h3 className="text-muted">Users</h3>
      <UserList />
    </div>
  );
}

export default App;
