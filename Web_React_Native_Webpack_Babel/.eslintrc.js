module.exports = {
      "parser": "babel-eslint",
      "env": {
        "browser": true,
        "node": true 
      },
      "plugins": [
        "react",
        "react-native"
      ],
      "ecmaFeatures": {
        "jsx": true
      },
      "extends": ["eslint:recommended", "plugin:react/recommended"],
      "rules": {
        /* "react/no-did-mount-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/jsx-uses-vars": 2,
        "no-undef": 2,
        "semi": 2,
        "react/prop-types": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-no-duplicate-props": 2, */

        "react/prop-types": 0,
        "react/jsx-no-bind": 0,
        "no-console": 0,
        "react/display-name" : 0,
      },
      "globals": {
        "GLOBAL": false,
        "it": false,
        "expect": false,
        "describe": false,
       }
};