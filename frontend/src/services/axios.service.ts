import axios from 'axios';
import {createBrowserHistory} from 'history';


import {authService} from './auth.service';
import { baseURL } from "../constants/urls";

const axiosService = axios.create({ baseURL });
const history = createBrowserHistory({ window });

axiosService.interceptors.request.use(config => {
  const access = authService.getAccessToken();

  if (access) {
    config.headers.Authorization = `Bearer ${access}`
  }

  return config
})

export {
  axiosService,
  history
}
