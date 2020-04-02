import axios from "axios";

import { server } from "../constants/server";
import { push } from "connected-react-router";
import swal from "sweetalert";

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
  return function action(dispatch) {
    dispatch({ type: "ADD", payload: item });
  };
};

export const removeCart = (item, index) => {
  return function action(dispatch) {
    dispatch({ type: "REMOVE", payload: item, position: index });
  };
};

export const clearCart = () => {
  return function action(dispatch) {
    dispatch({ type: "CLEAR" });
  };
};

export const checkout = (
  item,
  totalItem,
  totalAmount,
  name,
  phone,
  address,
  paymentMethod
) => {
  const checkoutInput = {
    name: name,
    phone: phone,
    address: address,
    paymentMethod: paymentMethod
  };

  const orderInput = {
    item,
    totalItem,
    totalAmount,
    checkoutInput
  };
  const url_api = server;

  return function action(dispatch) {
    return axios.post(url_api + "/api/order/submit", orderInput).then(
      response => {
        dispatch(checkoutSuccess(item, totalItem, totalAmount, checkoutInput));
        dispatch(clearCart());
        dispatch(push("/"));
      },
      err => dispatch(checkoutFailed(err))
    );
  };
};

export const checkoutSuccess = (item, totalItem, totalAmount, buyer) => {
  swal("Berhasil Memesan!", "Tunggu tim kami menghubungi Anda", "success");

  return {
    type: "CHECKOUT_SUCCESS",
    payload: item,
    totalItem: totalItem,
    totalAmount: totalAmount,
    buyer: buyer
  };
};

export const checkoutFailed = () => {
  swal("Gagal!", "Maaf, Pemesanan Anda Gagal", "error");
  return {
    type: "CHECKOUT_FAILED"
  };
};
