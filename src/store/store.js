import { createStore, compose, applyMiddleware } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";
import config from "../firebase/config";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reactReduxFirebase(config),
    reduxFirestore(config)
  )
);

export default store;
