import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { id: uuid(), email: "jay@test.com", name: "Jay", gen: 20 },
    { id: uuid(), email: "tony@test.com", name: "Tony", gen: 10 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "EDIT_USER":
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload;
        return user;
      });

      return {
        ...state,
        users,
      };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );

      return {
        ...state,
        users: filteredUsers,
      };

    default:
      return state;
  }
};

export default reducer;
