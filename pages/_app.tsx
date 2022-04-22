/**
 * @author: leroy
 * @date: 2021/8/20 20:30
 * @description：_app
 */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import ErrorPage from '../layout/Error';
import LoadingPage from '../layout/Loading';
import wrapper, { useAppDispatch, useAppSelector } from '../store/store';
import { clearPending } from '../utils/api';

import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/var.scss';
import LoginDialog from '../components/login/LoginDialog';
import { fetchTypeAddressSchool } from '../store/slices/commonSlice';
import { fetchAutoLogin } from '../store/slices/userSlice';
import { getToken, tokenKey } from '../utils/token_util';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { isLogin } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      // 路由切换loading
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);

      // 路由切换清空axios请求池
      clearPending();
    };

    if (!isLogin) {
      dispatch(fetchAutoLogin({}));
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, []);

  if ([403, 404, 500].includes(pageProps.statusCode)) {
    return <ErrorPage statusCode={pageProps.statusCode} />;
  }

  const isShowLogin = useAppSelector((state) => state.login.isShowLogin);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="Author" content="Leroy" />
        <meta name="baidu-site-verification" content="uGgzMZ4ZfV" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="cleartype" content="on" />
        <meta name="HandheldFriENDly" content="True" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="yes" name="apple-touch-fullscreen" />
        <link rel="stylesheet" href="//at.alicdn.com/t/font_1365762_tc49n8njksp.css" />
      </Head>
      <LoadingPage isMobile={pageProps.isMobile} loading={loading} />
      <Component {...pageProps} />
      {
        isShowLogin && <LoginDialog />
      }
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  let userAgent;
  if (ctx.req) {
    console.log('------服务端------');
    // if (!store.getState().user.isLogin) {
    //   await store.dispatch(fetchAutoLogin({}));
    // }
    userAgent = ctx.req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
      isMobile: /Mobile/gi.test(userAgent),
    },
  };
});

export default wrapper.withRedux(MyApp);
