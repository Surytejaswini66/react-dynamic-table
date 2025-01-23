module.exports = {
  presets: [
    "react-app", // Preset used by Create React App
  ],
  plugins: [
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-private-property-in-object", // Add the missing plugin
  ],
};
