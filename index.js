const sanitizeHtml = require("sanitize-html");
const vue = require('vue');

const vue3SanitizeKey = Symbol('vue-3-sanitize');

const Vue3Sanitize = {
    install: (app, options) => {
        const sanitize = (dirty, opts = null) => 
            sanitizeHtml(dirty, opts || options);

        app.config.globalProperties.$sanitize = sanitize;
        
        app.provide(vue3SanitizeKey, { sanitize })
    },

    defaults: sanitizeHtml.defaults,
};

const useVue3Sanitize = () => {
    vue.inject(vue3SanitizeKey);
};

exports.useVue3Sanitize = useVue3Sanitize;
export default Vue3Sanitize;
