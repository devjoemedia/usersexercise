export const setAuthUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    payload: users,
  };
};

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const editUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};

export const deleteUser = (userId) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};
