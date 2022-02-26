import React from "react";
import User from "./User";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      {users.length ? (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gen</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={index} index={index} user={user} />
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-muted">No users available</h4>
      )}
    </div>
  );
};

export default UserList;
