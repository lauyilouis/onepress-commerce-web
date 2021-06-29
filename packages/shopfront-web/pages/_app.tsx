// import App from 'next/app';
import Head from 'next/head';

import { Nav, NavLeft, NavRight } from 'onepress-commerce-ui';

export default function App(props: any) {
  const { Component, pageProps, router } = props;
  return (
    <>
      <Head>
        <title>Onepress Commerce</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="The easy to deploy and edit opensource ecommerce platform"
        />
      </Head>
      <Nav>
        <NavLeft>Onepress Commerce</NavLeft>
        <NavRight>{props.userId}</NavRight>
      </Nav>
      <Component {...pageProps} />
    </>
  )
}