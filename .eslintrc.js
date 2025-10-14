module.exports = {
  extends: ["airbnb", "airbnb/hooks"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-native"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/no-danger": "off",
  },
};
