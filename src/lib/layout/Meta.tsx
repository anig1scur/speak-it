import { Helmet } from "react-helmet";

const APP_NAME = "speak-your-heart-out";

const Meta = () => {
  return (
    <Helmet>
      <title>Speak Your Heart Out</title>
      <meta name="description" content="Speak Your Heart Out 是一个帮助你快速生成“注音心声体”的工具，再也不用为括号和切换输入法而烦恼" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/assets/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default Meta;
