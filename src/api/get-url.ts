import {environment} from '../environments/environment';

export const getUrl = (url) => {
  return environment.baseUrl + url;
};
