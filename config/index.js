import ComponentsPlugin from "unplugin-vue-components/webpack";
import NutUIResolver from "@nutui/nutui-taro/dist/resolver";
import * as path from "path";

const config = {
  projectName: "cat-book",
  date: "2023-2-24",
  sourceRoot: "src",
  outputRoot: "dist",

  // 开启 HTML 插件
  plugins: ["@tarojs/plugin-html"],
  // 配置全局 Scss 变量
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  },
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, "/").indexOf("@nutui") > -1) {
      return 375;
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750;
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },

  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "vue3",
  compiler: {
    type: "webpack5",
    prebundle: { enable: false }
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/apis': path.resolve(__dirname, '..', 'src/apis'),
    '@/consts': path.resolve(__dirname, '..', 'src/consts'),
    '@/store': path.resolve(__dirname, '..', 'src/store')
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    webpackChain(chain) {
      chain.plugin("unplugin-vue-components").use(
        ComponentsPlugin({
          resolvers: [NutUIResolver({ taro: true })],
        })
      );
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
    webpackChain(chain) {
      chain.plugin("unplugin-vue-components").use(
        ComponentsPlugin({
          resolvers: [NutUIResolver({ taro: true })],
        })
      );
    },
  },
  rn: {
    appName: "taroDemo",
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
