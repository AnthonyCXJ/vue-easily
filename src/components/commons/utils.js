import config from "../../config";

export default {
  setTitle: function (name) {
    document.title = name + ' --' +
      config.title +
      (config['titleExtra'] || '');
  }
};
