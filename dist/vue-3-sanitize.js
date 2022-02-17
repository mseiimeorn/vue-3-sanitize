(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["vue-3-sanitize"] = factory());
})(this, (function () { 'use strict';

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
      vue.inject(vue3SanitizeKey);
    };

    exports.useVue3Sanitize = useVue3Sanitize;

    return Vue3Sanitize;

}));
//# sourceMappingURL=vue-3-sanitize.js.map
