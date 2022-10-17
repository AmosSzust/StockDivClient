import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const baseURLDev = 'http://localhost:3000/api/';
//const baseURLProd = 'https://stockdiv.com:8445/api';

const api = axios.create({ baseURL: baseURLDev });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
