import * as types from "../types/bannerTypes";

const initialState = {
  isLoading: true,
  banners: [],
};

const bannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOADING:
      state = { ...state, isLoading: payload };
      return state;
    case types.ADD_BANNERS:
      state = { ...state, banners: [...state.banners, payload] };
      return state;
    case types.SET_BANNERS:
      state = { ...state, banners: payload };
      return state;
    default:
      return state;
  }
};

export default bannerReducer;
