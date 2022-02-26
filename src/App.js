import React from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
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
