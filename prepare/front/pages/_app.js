import React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

/** Common Setting for components located in  'pages' folder.
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

export default App;
