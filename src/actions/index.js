import axios from "axios";

import { server } from "../constants/server";
import { push } from "connected-react-router";
import swal from "sweetalert";
import ReactGA from "react-ga";
import { Mixpanel } from "../components/Mixpanel";
import Swal from "sweetalert2";

var i = 0;

export const checkOrdered = (item, cart) => {
  if (cart.length > 0) {
    for (i = 0; i < cart.length; i++) {
      if (cart[i].id === item) {
        return function action(dispatch) {
          dispatch(productOrdered());
          return true;
        };
      }
    }
    return function action(dispatch) {
      dispatch(productEmpty());
    };
  } else {
    return function action(dispatch) {
      dispatch(productEmpty());
      return false;
    };
  }
};

export const productOrdered = () => {
  return {
    type: "PRODUCT_ORDERED",
  };
};

export const productEmpty = () => {
  return {
    type: "PRODUCT_EMPTY",
  };
};

export const signup = (
  name,
  registerEmail,
  phone,
  address,
  cooperative,
  registerPassword,
  registerRepassword,
  cartItem,
  tnc
) => {
  const signupInput = {
    name: name,
    email: registerEmail,
    phone: phone,
    address: address,
    cooperative: cooperative,
    password: registerPassword,
    password_confirmation: registerRepassword,
    tnc: tnc,
  };

  ReactGA.event({
    category: "User",
    action: "User signup",
  });

  Swal.fire({
    title: "Mohon tunggu pendaftaran sedang diproses",
    onBeforeOpen: () => {
      Swal.enableLoading();
    },
  });

  return function action(dispatch) {
    dispatch({ type: "SIGNUP" });
    const url_api = server;
    if (registerPassword !== registerRepassword) {
      dispatch(passwordNotMatch());
    }

    return axios.post(url_api + "/api/auth/signup", signupInput).then(
      (response) => {
        dispatch(signupSuccess(response));
        dispatch(signupLoginSuccess(response));
        dispatch(loadBusiness(response));
        dispatch(loadWallet(response));

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem(
          "business",
          JSON.stringify(response.data.business)
        );

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
      (err) => {
        dispatch(signupFailed(err));
      }
    );
  };
};

export const signupSuccess = (data) => {
  Swal.disableLoading();
  Swal.close();
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
  swal(
    "Gagal!",
    "Check kembali formulir atau email kamu sudah terdaftar",
    "error"
  );
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
  ReactGA.event({
    category: "User",
    action: "User Login",
  });
  return function action(dispatch) {
    dispatch({ type: "LOGIN" });
    const url_api = server;

    return axios.post(url_api + "/api/auth/login", loginInput).then(
      (response) => {
        dispatch(loginSuccess(response));
        dispatch(loadUser(response));
        dispatch(loadBusiness(response));
        dispatch(loadWallet(response));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem(
          "business",
          JSON.stringify(response.data.business)
        );

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

export const loadUserFromStorage = (user) => {
  return {
    type: "LOAD_USER_FROM_STORAGE",
    payload: user,
  };
};

export const loadBusinessFromStorage = (business) => {
  return {
    type: "LOAD_BUSINESS_FROM_STORAGE",
    payload: business,
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

export const loadWallet = (data) => {
  return {
    type: "LOAD_WALLET",
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
  ReactGA.event({
    category: "User",
    action: "User Logout",
  });
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
        dispatch({ type: "REMOVE_WALLLET" });
        localStorage.clear();
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
  ReactGA.event({
    category: "User",
    action: "User See Product",
  });

  Mixpanel.track("Successful load product");

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
  ReactGA.event({
    category: "User",
    action: "User Search Product",
  });
  return function action(dispatch) {
    if (event) {
      // dispatch(foundProduct(event));
      dispatch(foundCampaign(event));
    } else {
      // dispatch(loadProducts());
      dispatch(loadCampaigns());
    }
  };
};

export const foundProduct = (event) => {
  const url_api = server;
  return function action(dispatch) {
    return axios.get(url_api + "/api/product/search/" + event).then(
      (response) => {
        dispatch({ type: "LOAD_PRODUCT", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
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

export const foundCampaign = (event) => {
  const url_api = server;
  return function action(dispatch) {
    return axios.get(url_api + "/api/campaign/search/" + event).then(
      (response) => {
        dispatch({ type: "LOAD_CAMPAIGN", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
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

  ReactGA.event({
    category: "User",
    action: "User Filter Product based Category",
  });

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
  return function action(dispatch) {
    dispatch(foundProductCategory(id));
    dispatch(foundCampaignCategory(id));
  };
};

export const foundProductCategory = (id) => {
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

export const foundCampaignCategory = (id) => {
  const url_api = server;
  return function action(dispatch) {
    return axios.get(url_api + "/api/campaign/category/" + id).then(
      (response) => {
        dispatch({ type: "LOAD_CAMPAIGN", payload: response });
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
  ReactGA.event({
    category: "User",
    action: "User Add Product to Cart",
  });
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
  ReactGA.event({
    category: "User",
    action: "User Add Quantity Product in Cart",
  });

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

  ReactGA.event({
    category: "User",
    action: "User Remove Quantity Product in Cart",
  });

  return function action(dispatch) {
    dispatch({ type: "MINUS", payload: minusCardInput });
  };
};

export const removeCart = (item, index) => {
  ReactGA.event({
    category: "User",
    action: "User Remove Product from Cart",
  });
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
  paymentMethod,
  uniqueNumber,
  walletBalance
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
    uniqueNumber,
    walletBalance,
  };
  const url_api = server;

  ReactGA.event({
    category: "User",
    action: "User Checkout",
  });
  Swal.fire({
    title: "Mohon tunggu pesanan sedang diproses",
    onBeforeOpen: () => {
      Swal.enableLoading();
    },
  });

  return function action(dispatch) {
    if (checkoutInput.user_id) {
      return axios.post(url_api + "/api/order/submit", orderInput).then(
        (response) => {
          dispatch(
            checkoutSuccess(item, totalItem, totalAmount, checkoutInput)
          );
          dispatch(clearCart());
          dispatch(push("/invoice"));
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
  Swal.disableLoading();
  Swal.close();

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

export const loadInvoices = (user_id) => {
  const url_api = server;

  ReactGA.event({
    category: "User",
    action: "User See Invoice",
  });
  return function action(dispatch) {
    if (user_id) {
      return axios.get(url_api + "/api/invoice/user/" + user_id).then(
        (response) => {
          dispatch({ type: "LOAD_INVOICE", payload: response });
        },
        (err) => dispatch(loadFailed(err))
      );
    } else {
      swal(
        "Maaf, kamu harus login atau daftar terlebih dahulu untuk melihat riwayat pemesanan!"
      );
      dispatch(push("/login"));
    }
  };
};

export const checkLoginBeforeCart = (user_id) => {
  return function action(dispatch) {
    if (user_id) {
      dispatch(push("/order"));
    } else {
      swal(
        "Maaf, kamu harus login atau daftar terlebih dahulu untuk melanjutkan pemesanan!"
      );
      dispatch(push("/login"));
      return null;
    }
  };
};

export const checkBalance = (user_id) => {
  const url_api = server;

  return function action(dispatch) {
    if (user_id) {
      return axios.get(url_api + "/api/wallet/user/" + user_id).then(
        (response) => {
          dispatch({ type: "CHECK_WALLET", payload: response });
        },
        (err) => dispatch(loadFailed(err))
      );
    } else {
      return null;
    }
  };
};
