import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    { email: "jay@test.com", name: "Jay", gen: 20 },
    { email: "tony@test.com", name: "Tony", gen: 10 },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h3 className="text-muted">UserList App</h3>
      <Form addUser={addUser} />
      <br />
      <h3 className="text-muted">Users</h3>
      <UserList users={users} />
    </div>
  );
}

export default App;
