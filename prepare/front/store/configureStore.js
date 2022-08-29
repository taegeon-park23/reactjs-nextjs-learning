import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
/**
 * npm i react-redux-wrapper
 * npm i redux
 * npm i react-redux
 * npm i redux-devtools-extension -D
 *
 * login user info와 같은 데이터들이 여러 컴포넌트에 공유되기 위해선 부모 - 자식간의 공유가 이루어저야 한다.
 * 이와 같은 공유를 해주기 위해 컴포넌트의 props를 통해 데이터를 넘겨주게 되는데, 이 때 상위 - 하위 간의
 * depth가 길어질수록 props drilling이 이루어지게 된다.(부모로부터 넘어온 props 데이터의 근본 데이터가 어딘지 모르는 문제)
 * 이를 해결하기 위해 redux와 같은 중앙 상태 관리 라이브러리를 사용하거나, context를 사용한다.
 */

const configureStore = (context) => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
