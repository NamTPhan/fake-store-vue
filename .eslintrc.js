module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        "prettier",
        "@vue/typescript/recommended",
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/multi-word-component-names': 'off',
    },
    plugins: ["@typescript-eslint", "prettier"],
}