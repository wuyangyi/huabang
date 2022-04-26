
const { name } = require('./package.json');
// const { withSentryConfig } = require('@sentry/nextjs');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  // 默认压缩，不用额外配置compression
  compress: true,
  sentry: {
    // 本地及测试环境禁用sentry
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
  excludeDefaultMomentLocales: true,
  env: {
    API_HOST: isProd ? "http://api.helpweb.top/api/v1/" : 'http://local.helpweb.top/api/v1/',
    STATIC_HOST: isProd ? `//cdn.leroy.net.cn/${name}/static` : '/static',
  },

  api: {
    bodyParser: true,
  },

  sassOptions: {
    // 写入额外变量
    additionalData: isProd
      ? `$static: '//cdn.helpweb.top/${name}/static';`
      : `$static: '/static';`,
    // prependData:  isProd ? `@import "@/styles/config/prod.scss";` : `@import "@/styles/config/dev.scss";`,
  },

  // webpack: (config, { webpack }) => {
  //   if (isProd) {
  //     config.optimization.minimizer.push(
  //       new TerserPlugin({
  //         terserOptions: {
  //           warnings: false,
  //           extractComments: false, // 移除注释
  //           compress: {
  //             drop_console: true,
  //             drop_debugger: true,
  //           },
  //         },
  //       }),
  //     );
  //   }
  //   return config;
  // },
}