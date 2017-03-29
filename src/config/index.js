import extend from "node.extend";
import devConfig from "./development";
import productionConfig from "./production";

let config = {
  'env': __ENV__,
  'title': '个人网站'
};
extend(true, config, config.env === 'production' ? productionConfig : devConfig);


export default config;
