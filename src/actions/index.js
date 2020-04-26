import axios from "axios";

import { server } from "../constants/server";
import { push } from "connected-react-router";
import swal from "sweetalert";

export const login = (email, password) => {
  const loginInput = {
    email: email,
    password: password,
  };
  return function action(dispatch) {
    dispatch({ type: "LOGIN" });
    const url_api = server;

    return axios.post(url_api + "/api/auth/login", loginInput).then(
      (response) => {
        dispatch(loginSuccess(response));
        dispatch(push("/"));
      },
      (err) => dispatch(loginFailed(err))
    );
  };
};

export const loginSuccess = (data) => {
  swal("Berhasil!", "Anda berhasil masuk", "success");
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const loginFailed = (data) => {
  swal("Gagal!", "Email atau password yang anda masukan salah", "error");
  return {
    type: "LOGIN_FAILED",
    payload: data,
  };
};

export const logout = () => {
  return function action(dispatch) {
    dispatch(push("/"));
    dispatch({ type: "LOGOUT" });
  };
};

export const loadProducts = () => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/product").then(
      (response) => {
        dispatch({ type: "LOAD_PRODUCT", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const searchProduct = (event) => {
  const url_api = server;

  return function action(dispatch) {
    if (event) {
      return axios.get(url_api + "/api/product/search/" + event).then(
        (response) => {
          dispatch({ type: "LOAD_PRODUCT", payload: response });
        },
        (err) => dispatch(loadFailed(err))
      );
    } else {
      dispatch(loadProducts());
    }
  };
};

export const loadCampaigns = () => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/campaigns").then(
      (response) => {
        dispatch({ type: "LOAD_CAMPAIGN", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const searchCampaign = (event) => {
  const url_api = server;

  return function action(dispatch) {
    if (event) {
      return axios.get(url_api + "/api/campaign/search/" + event).then(
        (response) => {
          dispatch({ type: "LOAD_CAMPAIGN", payload: response });
        },
        (err) => dispatch(loadFailed(err))
      );
    } else {
      dispatch(loadCampaigns());
    }
  };
};

export const loadProductPageUrl = (productPageUrl) => {
  return function action(dispatch) {
    return axios.get(productPageUrl).then(
      (response) => {
        dispatch({ type: "LOAD_PRODUCT", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const loadCategories = () => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/category").then(
      (response) => {
        dispatch({ type: "LOAD_CATEGORY", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const selectCategory = (id) => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/product/category/" + id).then(
      (response) => {
        dispatch({ type: "LOAD_PRODUCT", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const addCartOrder = (item, campaign_id) => {
  const addCardInput = {
    id: item.product.id,
    user_id: item.product.user_id,
    business_id: item.product.business_id,
    barcode: item.product.barcode,
    name: item.product.name,
    type: item.product.type,
    price: item.product.price,
    buying_price: item.product_initial_price,
    stock: item.product.stock,
    status: item.product.status,
    unique_id: item.product.unique_id,
    totalSubitem: 1,
    totalSubamount: item.product_initial_price,
    image: item.image,
    campaign_id: campaign_id,
  };
  return function action(dispatch) {
    dispatch({ type: "ADD_CAMPAIGN_ORDER", payload: addCardInput });
  };
};

export const addCart = (item, campaign_id) => {
  const addCardInput = {
    id: item.id,
    user_id: item.user_id,
    business_id: item.business_id,
    barcode: item.barcode,
    name: item.name,
    type: item.type,
    price: item.price,
    buying_price: item.buying_price,
    stock: item.stock,
    status: item.status,
    unique_id: item.unique_id,
    totalSubitem: 1,
    totalSubamount: item.buying_price,
    image: item.image,
    campaign_id: campaign_id,
  };
  return function action(dispatch) {
    dispatch({ type: "ADD", payload: addCardInput });
  };
};

export const plusCart = (item) => {
  const plusCardInput = {
    id: item.id,
    user_id: item.user_id,
    business_id: item.business_id,
    barcode: item.barcode,
    name: item.name,
    type: item.type,
    price: item.price,
    buying_price: item.buying_price,
    stock: item.stock,
    status: item.status,
    unique_id: item.unique_id,
    image: item.image,
  };

  return function action(dispatch) {
    dispatch({ type: "PLUS", payload: plusCardInput });
  };
};

export const minusCart = (item) => {
  const minusCardInput = {
    id: item.id,
    user_id: item.user_id,
    business_id: item.business_id,
    barcode: item.barcode,
    name: item.name,
    type: item.type,
    price: item.price,
    buying_price: item.buying_price,
    stock: item.stock,
    status: item.status,
    unique_id: item.unique_id,
    image: item.image,
  };

  return function action(dispatch) {
    dispatch({ type: "MINUS", payload: minusCardInput });
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
  paymentMethod,
  cooperative
) => {
  const checkoutInput = {
    name: name,
    phone: phone,
    address: address,
    paymentMethod: paymentMethod,
    cooperative: cooperative,
  };

  const orderInput = {
    item,
    totalItem,
    totalAmount,
    checkoutInput,
  };
  const url_api = server;

  return function action(dispatch) {
    return axios.post(url_api + "/api/order/submit", orderInput).then(
      (response) => {
        dispatch(checkoutSuccess(item, totalItem, totalAmount, checkoutInput));
        dispatch(clearCart());
        dispatch(push("/"));
      },
      (err) => dispatch(checkoutFailed(err))
    );
  };
};

export const loadFailed = () => {
  swal("Gagal!", "Maaf, Terjadi Kesalahan pada aplikasi", "error");
  return {
    type: "LOAD_PRODUCT_FAILED",
  };
};

export const checkoutSuccess = (item, totalItem, totalAmount, buyer) => {
  swal("Berhasil Memesan!", "Tunggu tim kami menghubungi Anda", "success");

  return {
    type: "CHECKOUT_SUCCESS",
    payload: item,
    totalItem: totalItem,
    totalAmount: totalAmount,
    buyer: buyer,
  };
};

export const checkoutFailed = () => {
  swal("Gagal!", "Maaf, Pemesanan Anda Gagal", "error");
  return {
    type: "CHECKOUT_FAILED",
  };
};
