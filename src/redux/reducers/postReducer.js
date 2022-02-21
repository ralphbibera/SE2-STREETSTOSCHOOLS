import * as types from "../types/postTypes";

const initialState = {
  isLoading: true,
  posts: [],
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;
    case types.ADD_POST:
      state = { ...state, posts: [...state.posts, payload] };
      return state;
    case types.SET_POSTS:
      state = { ...state, posts: payload };
      return state;
    case types.RESET_POST:
      state = { initialState };
      return state;
    default:
      return state;
  }
};

export default postReducer;
