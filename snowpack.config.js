/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  env: {
    API_URL: 'http://api.openweathermap.org/',
    API_KEY: '25745ce0da2954b896c845ab208d6851'
  },
  buildOptions: {
    baseUrl: 'https://VictorTamayoBriones.github.io/workshop-3-weather',
  },
  plugins: ['@snowpack/plugin-dotenv'],
}
