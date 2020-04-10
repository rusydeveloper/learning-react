const initialProductState = {
  items: [],
  next_page_url: "",
  prev_page_url: "",
  first_page_url: "",
  last_page_url: "",
  categories: [],
  current_page: 0,
  last_page: 0,
  total: 0,
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT":
      return {
        ...state,
        items: action.payload.data.data,
        next_page_url: action.payload.data.next_page_url,
        prev_page_url: action.payload.data.prev_page_url,
        first_page_url: action.payload.data.first_page_url,
        last_page_url: action.payload.data.last_page_url,
        current_page: action.payload.data.current_page,
        last_page: action.payload.data.last_page,
        total: action.payload.data.total,
      };

    case "LOAD_CATEGORY":
      return {
        ...state,
        categories: action.payload.data,
      };
    case "LOAD_PRODUCT_FAILED":
      return "FAILED";
    case "LOAD_CATEGORY_FAILED":
      return "FAILED";
    default:
      return state;
  }
};
export default productReducer;
