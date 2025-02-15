/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Utilisation du bon package
    autoprefixer: {},
  },
};

export default config;
