import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export const loginAction = (data) => {
  return {
    type: 'LOGIN',
    data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOGOUT',
  };
};

/**
 * action creator
 * @param {*} data
 * @returns
 */
const changeNicknameAction = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  };
};

export { changeNicknameAction };

/**
 * (이전상태, 액션) => 다음상태
 * @param {*} state
 * @param {*} action
 * @returns
 */
const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data,
      };
    case 'LOGIN':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default rootReducers;
