import React from "react";
import User from "./User";

const UserList = ({ users, deleteUser, editUser }) => {
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
              <User
                key={index}
                index={index}
                user={user}
                deleteUser={deleteUser}
                editUser={editUser}
              />
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
