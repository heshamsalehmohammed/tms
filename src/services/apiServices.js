import axios from 'axios';

if (localStorage.getItem('token') !== null) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
}

axios.interceptors.response.use(null, (error) => {
  if (error.code == 'ERR_NETWORK') {
    error.response = {status: 404, statusText: 'Not Found'};
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  isRequestCancelled: axios.isCancel,
};
