module.exports = {
  plugins: [
    require("stylelint")({
      configFile: ".stylelintrc",
    }),
    require("postcss-extend"),
    require("precss"),
    require("postcss-preset-env"),
    // uncomment if you're using Tailwind
    // require('tailwindcss')('tailwind.config.js'),
    require("postcss-nested"),
    require("autoprefixer")(),
    require("postcss-reporter"),
  ],
};
