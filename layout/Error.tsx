/**
 * @author: leroy
 * @date: 2021/8/27 18:21
 * @description：_error
 */
import type { NextPage } from 'next';
import Layout from './Layout';
import { Result } from 'antd';

const errTitle = {
  403: '403 | Sorry, you are not authorized to access this page.',
  404: '404 | Sorry, the page you visited does not exist.',
  500: '500 | Sorry, something went wrong.',
};

const ErrorPage: NextPage<{ statusCode?: 403 | 404 | 500 }> = ({ statusCode }) => {
  return (
    <Layout title={statusCode && errTitle[statusCode]}>
      <Result status={statusCode} title={statusCode} />
    </Layout>
  );
};

export default ErrorPage;
