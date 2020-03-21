import { ADD_ARTICLE, LOGIN } from "../constants/action-types";

const initialState = {
  articles: [],
  token: "",
  user: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === LOGIN) {
    return Object.assign({}, state, {
      token: state.token.concat(action.payload),
      user: state.user.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
