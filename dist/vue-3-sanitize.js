(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var sanitizeHtml = require("sanitize-html");

    var vue = require('vue');

    var vue3SanitizeKey = Symbol('vue-3-sanitize');
    var Vue3Sanitize = {
      install: function install(app, options) {
        var sanitize = function sanitize(dirty) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return sanitizeHtml(dirty, opts || options);
        };

        app.config.globalProperties.$sanitize = sanitize;
        app.provide(vue3SanitizeKey, {
          sanitize: sanitize
        });
      },
      defaults: sanitizeHtml.defaults
    };

    var useVue3Sanitize = function useVue3Sanitize() {
      return vue.inject(vue3SanitizeKey);
    };

    exports.useVue3Sanitize = useVue3Sanitize;
    exports.Vue3Sanitize = Vue3Sanitize;

}));
//# sourceMappingURL=vue-3-sanitize.js.map
