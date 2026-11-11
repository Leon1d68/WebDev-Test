import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",

            globals: {
                ...globals.node,
            },
        },

        rules: {
            "no-undef": "error",
            "no-unused-vars": "warn",
        },
    },

    eslintConfigPrettier,
];
