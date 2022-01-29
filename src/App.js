import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { v4 as uuid } from "uuid";

function App() {
  const [users, setUsers] = useState([
    { id: uuid(), email: "jay@test.com", name: "Jay", gen: 20 },
    { id: uuid(), email: "tony@test.com", name: "Tony", gen: 10 },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser = (newUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === newUser.id) return newUser;
      return user;
    });

    console.log(updatedUsers);
    setUsers(updatedUsers);
  };

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <h3 className="text-muted">UserList App</h3>
      <Form addUser={addUser} />
      <br />
      <h3 className="text-muted">Users</h3>
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
