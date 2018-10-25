const postcss = require('postcss-import');
const tailwind = require('tailwindcss')('./tailwind.js');

module.exports = {
  plugins: [
    postcss,
    tailwind,
  ],
};
