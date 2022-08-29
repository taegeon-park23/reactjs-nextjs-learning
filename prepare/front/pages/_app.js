import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

/** High Order Component(HOC)
 * Common Setting for components located in  'pages' folder.
 * 개발 세팅(Chrome Extensions) - React developer tools, Redux DevTools
 * @see https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko
 * @see https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=ko
 * @param {elementType} Component
 * @returns Component
 */
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Test</title>
      </Head>
      <Component></Component>
    </>
  );
};

export default wrapper.withRedux(App);
