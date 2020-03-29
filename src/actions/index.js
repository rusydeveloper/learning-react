import axios from "axios";

import { server } from "../constants/server";
import { push } from "connected-react-router";
import swal from "sweetalert";

export const increment = nr => {
  return {
    type: "INCREMENT",
    payload: nr
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const login = (email, password) => {
  const loginInput = {
    email: email,
    password: password
  };
  return function action(dispatch) {
    dispatch({ type: "LOGIN" });
    const url_api = server;

    return axios.post(url_api + "/api/auth/login", loginInput).then(
      response => {
        dispatch(loginSuccess(response));
        dispatch(push("/"));
      },
      err => dispatch(loginFailed(err))
    );
  };
};

export const loginSuccess = data => {
  swal("Berhasil!", "Anda berhasil masuk", "success");
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  };
};

export const loginFailed = data => {
  swal("Gagal!", "Email atau password yang anda masukan salah", "error");
  return {
    type: "LOGIN_FAILED",
    payload: data
  };
};

export const logout = () => {
  return function action(dispatch) {
    dispatch(push("/"));
    dispatch({ type: "LOGOUT" });
  };
};

export const addCart = item => {
  console.log(item);

  return function action(dispatch) {
    // dispatch(push("/"));
    dispatch({ type: "ADD", payload: item });
  };
  // const loginInput = {
  //   email: email,
  //   password: password
  // };
  // return function action(dispatch) {
  //   dispatch({ type: "LOGIN" });
  // const url_api = server;

  // return axios.post(url_api + "/api/auth/login", loginInput).then(
  //   response => {
  //     dispatch(loginSuccess(response));
  //     dispatch(push("/"));
  //   },
  //   err => dispatch(loginFailed(err))
  // );
  // };
};
