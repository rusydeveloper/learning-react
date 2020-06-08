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

export const loadProductsSelectedSupplier = (supplierId) => {
  const url_api = server;
  ReactGA.event({
    category: "User",
    action: "User See Product",
  });

  Mixpanel.track("Successful load product");

  return function action(dispatch) {
    return axios.get(url_api + "/api/product/supplier/" + supplierId).then(
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

export const searchProductSelectedSupplier = (event, supplierId) => {
  ReactGA.event({
    category: "User",
    action: "User Search Product",
  });
  return function action(dispatch) {
    if (event) {
      // dispatch(foundProduct(event));
      dispatch(foundCampaignSelectedSupplier(event, supplierId));
    } else {
      // dispatch(loadProducts());
      dispatch(loadCampaignsSelectedSupplier(supplierId));
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

export const loadCampaignsSelectedSupplier = (supplierId) => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/campaigns/supplier/" + supplierId).then(
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

export const foundCampaignSelectedSupplier = (event, SupplierId) => {
  const url_api = server;
  return function action(dispatch) {
    return axios
      .get(
        url_api + "/api/campaign/search/" + event + "/supplier/" + SupplierId
      )
      .then(
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

export const loadCategoriesSelectedSupplier = (supplierId) => {
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

export const selectCategorySelectedSupplier = (id, supplierId) => {
  return function action(dispatch) {
    // dispatch(foundProductCategorySelectedSupplier(id, supplierId));
    dispatch(foundCampaignCategorySelectedSupplier(id, supplierId));
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

export const foundProductCategorySelectedSupplier = (id, supplierId) => {
  const url_api = server;
  return function action(dispatch) {
    return axios
      .get(url_api + "/api/product/category/" + id + "/supplier/" + supplierId)
      .then(
        (response) => {
          dispatch({ type: "LOAD_PRODUCT", payload: response });
        },
        (err) => dispatch(loadFailed(err))
      );
  };
};

export const foundCampaignCategorySelectedSupplier = (id, supplierId) => {
  console.log(supplierId);
  const url_api = server;
  return function action(dispatch) {
    return axios
      .get(url_api + "/api/campaign/category/" + id + "/supplier/" + supplierId)
      .then(
        (response) => {
          dispatch({ type: "LOAD_CAMPAIGN", payload: response });
        },
        (err) => dispatch(loadFailed(err))
      );
  };
};

export const checkEmptyCart = (cart) => {
  if (cart.totalItem === 0) {
    return function action(dispatch) {
      dispatch({ type: "CART_IS_EMPTY" });
      dispatch(push("/"));
    };
  } else {
    return function action(dispatch) {
      dispatch({ type: "CART_NOT_EMPTY" });
    };
  }
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

export const minusCart = (item, cart) => {
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
  if (cart.totalItem === 1) {
    return function action(dispatch) {
      swal({
        title: "Apakah kamu yakin akan menghapus produk dari keranjang?",
        icon: "warning",
        buttons: true,
        showCancelButton: true,
        dangerMode: true,
      }).then((result) => {
        if (result === null) {
          return function action(dispatch) {
            dispatch({ type: "CART_NOT_EMPTY" });
          };
        } else if (result) {
          dispatch(clearCart());
          dispatch(push("/"));
          return function action(dispatch) {
            dispatch({ type: "CART_IS_EMPTY" });
          };
        }
      });
    };
  } else {
    return function action(dispatch) {
      console.log("minus");
      dispatch({ type: "MINUS", payload: minusCardInput });
    };
  }
};

export const removeCart = (item, index, cart) => {
  return function action(dispatch) {
    swal({
      title: "Apakah kamu yakin akan menghapus produk dari keranjang?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result === null) {
        return function action(dispatch) {
          dispatch({ type: "CART_NOT_EMPTY" });
        };
      } else if (result) {
        if (cart.items.length === 1) {
          dispatch(clearCart());
          dispatch(push("/"));
          return function action(dispatch) {
            dispatch({ type: "CART_IS_EMPTY" });
          };
        } else {
          dispatch({ type: "REMOVE", payload: item, position: index });
        }
      }
    });
  };
};

export const checkClearCart = (cart) => {
  if (cart.totalItem === 1) {
    return function action(dispatch) {
      dispatch({ type: "CART_IS_EMPTY" });
      dispatch(push("/"));
    };
  } else {
    return function action(dispatch) {
      dispatch({ type: "CART_NOT_EMPTY" });
    };
  }
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
      // dispatch({ type: "CART_NOT_EMPTY" });
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

export const checkFeedbackLogin = (user_id) => {
  ReactGA.event({
    category: "User",
    action: "User See Invoice",
  });
  return function action(dispatch) {
    if (user_id) {
      return {
        type: "FEEDBACK_ALLOWED",
      };
    } else {
      swal(
        "Maaf, kamu harus login atau daftar terlebih dahulu untuk memberikan masukan!"
      );
      dispatch(push("/login"));
    }
  };
};

export const checkInventoryLogin = (user_id) => {
  return function action(dispatch) {
    if (user_id) {
      return {
        type: "PURCHASE_RECORDING_ALLOWED",
      };
    } else {
      swal(
        "Maaf, kamu harus login atau daftar terlebih dahulu untuk melakukan pencatatan pembelian!"
      );
      dispatch(push("/login"));
    }
  };
};

export const recordPurchasing = (
  userId,
  recordType,
  name,
  brand,
  quantity,
  unit,
  price,
  recordedDate
) => {
  const recordPurchasingInput = {
    user_id: userId,
    inventory_id: recordType,
    name: name,
    brand: brand,
    quantity: quantity,
    unit: unit,
    price: price,
    recorded_date: recordedDate,
  };

  Swal.fire({
    title: "Mohon tunggu pencatatan sedang diproses",
    onBeforeOpen: () => {
      Swal.enableLoading();
    },
  });

  return function action(dispatch) {
    const url_api = server;

    return axios
      .post(url_api + "/api/inventory/store", recordPurchasingInput)
      .then(
        (response) => {
          dispatch(recordPurchasingSuccess(response));
          dispatch(push("/inventory"));
        },
        (err) => {
          dispatch(recordPurchasingFailed(err));
        }
      );
  };
};

export const recordPurchasingSuccess = (data) => {
  Swal.disableLoading();

  Swal.close();
  swal("Berhasil!", "Anda berhasil mencatatkan pembelian", "success");

  Mixpanel.track("Successful record product purchasing");

  return {
    type: "CLEAR_INVENTORY_ITEM",
    payload: data,
  };
};

export const recordPurchasingFailed = (data) => {
  swal("Gagal!", "Check kembali formulir", "error");
  Mixpanel.track("Failed record product purchasing");
  return {
    type: "CURRENT_INVENTORY_ITEM",
    payload: data,
  };
};

export const loadInventoryList = (user) => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/inventory/user/" + user).then(
      (response) => {
        dispatch({ type: "LOAD_INVENTORY_LIST", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const loadInventoryItem = (product) => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/inventory/product/" + product).then(
      (response) => {
        dispatch({ type: "LOAD_INVENTORY_ITEM", payload: response });
        dispatch(editFormInventoryName(response.data.name));
        dispatch(editFormInventoryBrand(response.data.brand));
        dispatch(editFormInventoryUnit(response.data.unit));
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const clearInventoryItem = () => {
  return function action(dispatch) {
    dispatch({ type: "CLEAR_INVENTORY_ITEM" });
  };
};

export const editFormInventoryName = (name) => {
  return function action(dispatch) {
    dispatch({ type: "FORM_INVENTORY_NAME", payload: name });
  };
};

export const editFormInventoryBrand = (brand) => {
  return function action(dispatch) {
    dispatch({ type: "FORM_INVENTORY_BRAND", payload: brand });
  };
};

export const editFormInventoryUnit = (unit) => {
  return function action(dispatch) {
    dispatch({ type: "FORM_INVENTORY_UNIT", payload: unit });
  };
};

export const formValidTrue = () => {
  return function action(dispatch) {
    dispatch({ type: "FORM_VALID_TRUE" });
  };
};

export const formValidFalse = () => {
  return function action(dispatch) {
    dispatch({ type: "FORM_VALID_FALSE" });
  };
};

export const loadInventoryReport = (user, product) => {
  const url_api = server;

  return function action(dispatch) {
    return axios
      .get(
        url_api +
          "/api/inventory/history/user/" +
          user +
          "/product/" +
          product +
          "/report"
      )
      .then(
        (response) => {
          dispatch({ type: "LOAD_INVENTORY_REPORT", payload: response });
          Mixpanel.track("Successful load product purchasing report");
        },
        (err) => dispatch(loadFailed(err))
      );
  };
};

export const clearSupplier = () => {
  return function action(dispatch) {
    dispatch({ type: "CLEAR_SELECTED_SUPPLIERID" });
  };
};

export const addSupplier = (data) => {
  console.log(data);
  return function action(dispatch) {
    dispatch({ type: "ADD_SELECTED_SUPPLIERID", payload: data });
  };
};
export const currentSupplier = () => {
  return function action(dispatch) {
    dispatch({ type: "CURRENT_SELECTED_SUPPLIERID" });
  };
};

export const loadSupplier = (uniqueId) => {
  const url_api = server;

  return function action(dispatch) {
    return axios.get(url_api + "/api/business/" + uniqueId).then(
      (response) => {
        dispatch({ type: "LOAD_SELECTED_SUPPLIER", payload: response });
      },
      (err) => dispatch(loadFailed(err))
    );
  };
};

export const backFromSelectedSupplier = () => {
  return function action(dispatch) {
    swal({
      title: "Apakah kamu yakin akan membatalkan pemesanan ini?",
      icon: "warning",
      buttons: true,
      showCancelButton: true,
      dangerMode: true,
    }).then((result) => {
      if (result === null) {
        return function action(dispatch) {
          dispatch({ type: "CART_NOT_EMPTY" });
        };
      } else if (result) {
        dispatch(push("/"));
        dispatch(clearCart());
        dispatch(clearSupplier());
      }
    });
  };
};
