import axios from "axios";

import { server } from "../constants/server";

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
      response => dispatch(loginSuccess(response)),
      err => dispatch(loginFailed(err))
    );
  };

  // const url_api = server;
  // // const dispatch = useDispatch();
  // const loginInput = {
  //   email: email,
  //   password: password
  // };
  // axios
  //   .post(url_api + "/api/auth/login", loginInput)
  //   .then(response => {
  //     console.log("success");
  //     sessionStorage.setItem("userName", response.data.user.name);
  //     sessionStorage.setItem("userId", response.data.user.id);
  //     sessionStorage.setItem("userToken", response.data.access_token);
  //     sessionStorage.setItem("isLoggedIn", true);
  //     // dispatch(loginSuccess(response.data));
  //     // dispatch(loginSuccess(response.data));
  //     return {
  //       type: "LOGIN"
  //     };
  //   })
  //   .catch(error => {
  //     // dispatch(loginFailed(response.data));
  //     if (error !== "Error: Network Error") {
  //       if (error.response.status === 401) {
  //         alert("email atau password anda salah");
  //       }
  //       if (error.response.status === 422) {
  //         alert("email atau password anda salah");
  //       }
  //     } else {
  //       alert("Mohon maaf sistem bermasalah, mohon kembali beberapa saat lagi");
  //     }
  //     return {
  //       type: "LOGOUT"
  //     };
  //   });
  // return dispatch => {
  //   return axios
  //     .post(url_api + "/api/auth/login", loginInput)
  //     .then(response => {
  //       console.log("success");
  //       sessionStorage.setItem("userName", response.data.user.name);
  //       sessionStorage.setItem("userId", response.data.user.id);
  //       sessionStorage.setItem("userToken", response.data.access_token);
  //       sessionStorage.setItem("isLoggedIn", true);
  //       dispatch(loginSuccess(response.data));
  //     })
  //     .catch(error => {
  //       if (error !== "Error: Network Error") {
  //         if (error.response.status === 401) {
  //           alert("email atau password anda salah");
  //         }
  //         if (error.response.status === 422) {
  //           alert("email atau password anda salah");
  //         }
  //       } else {
  //         alert(
  //           "Mohon maaf sistem bermasalah, mohon kembali beberapa saat lagi"
  //         );
  //       }
  //     });
  // };
};

export const loginSuccess = data => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  };
};
export const loginFailed = data => {
  return {
    type: "LOGIN_FAILED",
    payload: data
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};
