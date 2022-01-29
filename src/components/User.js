import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const User = ({ user, index, deleteUser, editUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [show, setShow] = useState(false);

  const handleEdit = () => {
    editUser({ id: user.id, name, email, gen: user.gen });
    setShow(false);
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gen}</td>
        <td>
          <Button onClick={() => setShow(true)}>Edit</Button>
          <Button variant="danger" onClick={() => deleteUser(user.id)}>
            Delete
          </Button>
        </td>
      </tr>

      {/* Modal Section */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter you name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
