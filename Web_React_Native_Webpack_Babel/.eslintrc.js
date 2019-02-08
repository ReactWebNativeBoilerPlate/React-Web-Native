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
        "no-console": 0,
        "react/prop-types": ["error", { "ignore": ["navigation"] }]
      },
      "globals": {
        "GLOBAL": false,
        "it": false,
        "expect": false,
        "describe": false,
       }
};