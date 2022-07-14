
import "../styles/globals.scss";
import { useState,useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
