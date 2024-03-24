import axios from "axios";

export const ACTION_TYPES = {
  FETCH_USERS: "FETCH_USERS",
  ADD_USER: "ADD_USER",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
  try {
    const response = await axios.get("http://localhost:3001/users/showUsers");
    dispatch({ type: ACTION_TYPES.FETCH_USERS, payload: response.data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
  } finally {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload: false });
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/users/createUser",
      user
    );
    dispatch({ type: ACTION_TYPES.ADD_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
  }
};
