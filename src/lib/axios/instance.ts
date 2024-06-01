import { Connections, Setting } from '@/config';
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { Storage } from '../storage';
import { TuserData } from '@/types';
import { refreshToken } from './refresh-token';
import { toast } from '@/components/atoms/use-toast';

const axiosApi: AxiosInstance = axios.create({
  baseURL: Connections.main,
});

axiosApi.interceptors.request.use(
  async (conf: InternalAxiosRequestConfig) => {
    const userData = Storage.get<TuserData>('local', 'user_data');

    if (userData) {
      conf.headers.Authorization = 'Bearer ' + userData.access_token;
    }

    conf.headers['x-lang'] = Storage.get<string>('cookie', 'lang', Setting.defaultLanguage);

    return conf;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosApi.interceptors.response.use(
  (res) => res,
  async (err) => {
    const { response, code } = err;

    if (code && code == 'ERR_NETWORK') {
      toast({
        title: 'Network Error',
        variant: 'destructive',
        description: "Can't connect to server. Try again later.",
      });
    }

    if (response) {
      switch (response.status) {
        case 400:
          toast({
            title: 'Bad Request',
            variant: 'destructive',
            description: response.data?.message ?? 'Your request is incorrect.',
          });
          break;
        case 401:
          if (!err.config.sent) {
            err.config.sent = true;
            const newToken = await refreshToken();
            if (newToken) {
              err.config.headers = {
                ...err.config.headers,
                Authorization: `Bearer ${newToken}`,
              };
            }
            return axios(err.config);
          }
          break;
        case 403:
          toast({
            title: 'Access Denied',
            variant: 'destructive',
            description: response.data?.message ?? 'The resource has limited access.',
          });
          break;
        case 404:
          toast({
            title: 'Not Found',
            variant: 'destructive',
            description: response.data?.message ?? 'The resource did not exist.',
          });
          break;
        case 500:
          toast({
            title: 'Server Error',
            variant: 'destructive',
            description: response.data?.message ?? 'Internal server error.',
          });
          break;
        default:
          toast({
            title: 'Request Error',
            variant: 'destructive',
            description: response.data?.message ?? 'Something wrong with the request.',
          });
          break;
      }
    }
    throw err;
  },
);

export { axiosApi };
