import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser, setUsers } from "./actions";
import firebase from "./firebase/config";
import Router from "./Router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) dispatch(setAuthUser(user));
      else dispatch(setAuthUser(null));
    });
  }, [dispatch]);

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
  }, [dispatch]);

  return <Router />;
}

export default App;
