import axios from "axios";

import { server } from "../constants/server";
import { push } from "connected-react-router";
import swal from "sweetalert";

export const signup = (
  name,
  registerEmail,
  phone,
  address,
  cooperative,
  registerPassword,
  registerRepassword,
  cartItem
) => {
  const signupInput = {
    name: name,
    email: registerEmail,
    phone: phone,
    address: address,
    cooperative: cooperative,
    password: registerPassword,
    password_confirmation: registerRepassword,
  };

  return function action(dispatch) {
    dispatch({ type: "SIGNUP" });
    const url_api = server;
    if (registerPassword != registerRepassword) {
      dispatch(passwordNotMatch());
    }

    return axios.post(url_api + "/api/auth/signup", signupInput).then(
      (response) => {
        dispatch(signupSuccess(response));
        dispatch(signupLoginSuccess(response));
        dispatch(loadBusiness(response));
        if (cartItem > 0) {
          swal({
            title: "Apakah kamu mau melanjutkan proses belanja?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((continueShopping) => {
            if (continueShopping) {
              dispatch(push("/order"));
            } else {
              dispatch(push("/user"));
            }
          });
        } else {
          dispatch(push("/user"));
        }
      },
      (err) => dispatch(signupFailed(err))
    );
  };
};

export const signupSuccess = (data) => {
  swal("Berhasil!", "Anda berhasil terdaftar dan masuk", "success");
  return {
    type: "SIGNUP_SUCCESS",
    payload: data,
  };
};

export const signupLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const signupFailed = (data) => {
  swal("Gagal!", "Data yang anda masukan salah " + data, "error");
  return {
    type: "SIGNUP_FAILED",
    payload: data,
  };
};

export const passwordNotMatch = () => {
  swal("Gagal!", "Password dan Ulangi Password tidak sama", "error");
  return {
    type: "PASSWORD_NOT_MATCH",
  };
};

export const login = (email, password, cartItem) => {
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
        dispatch(loadUser(response));
        dispatch(loadBusiness(response));
        if (cartItem > 0) {
          swal({
            title: "Apakah kamu mau melanjutkan proses belanja?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((continueShopping) => {
            if (continueShopping) {
              dispatch(push("/order"));
            } else {
              dispatch(push("/user"));
            }
          });
        } else {
          dispatch(push("/user"));
        }
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
export const loadUser = (data) => {
  return {
    type: "LOAD_USER",
    payload: data,
  };
};

export const loadBusiness = (data) => {
  return {
    type: "LOAD_BUSINESS",
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
    swal({
      title: "Apakah kamu yakin untuk keluar dari akun kamu?",
      text:
        "Kamu tidak dapat melakukan belanja online apabila keluar dari akun kamu!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(push("/"));
        dispatch({ type: "LOGOUT_USER" });
        dispatch({ type: "REMOVE_BUSINESS" });
        swal("Kamu berhasi keluar dari akun kamu!", {
          icon: "success",
        });
      } else {
        swal("Kamu dapat melanjutkan belanja online!");
      }
    });
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

export const addCartOrder = (item, campaign_id, campaign_image) => {
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
    image: campaign_image,
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
  userId,
  name,
  phone,
  businessId,
  cooperative,
  address,
  paymentMethod
) => {
  const checkoutInput = {
    user_id: userId,
    name: name,
    phone: phone,
    business_id: businessId,
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
    if (checkoutInput.user_id) {
      return axios.post(url_api + "/api/order/submit", orderInput).then(
        (response) => {
          dispatch(
            checkoutSuccess(item, totalItem, totalAmount, checkoutInput)
          );
          dispatch(clearCart());
          dispatch(push("/"));
        },
        (err) => dispatch(checkoutFailed(err))
      );
    } else {
      swal(
        "Maaf, kamu harus login atau daftar terlebih dahulu untuk melanjutkan pemesanan!"
      );
      dispatch(push("/login"));
    }
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

export const loadInvoices = () => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/invoice").then(
      (response) => {
        dispatch({ type: "LOAD_INVOICE", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};
