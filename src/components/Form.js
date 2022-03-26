import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import firebase from "../firebase/config";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: uuid(), name, email, gen };

    try {
      firebase.firestore().collection("users").doc(newUser.id).set(newUser);
    } catch (err) {
      console.log(err.messge);
    }

    // dispatch(addUser(newUser));

    setName("");
    setEmail("");
    setGen(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Gen
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
