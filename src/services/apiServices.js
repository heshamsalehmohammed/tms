import axios from 'axios';


if (localStorage.getItem('token') !== null) {
    axios.defaults.headers.common = {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    };
}

axios.interceptors.response.use(null, (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    // if (error.response && error.response.status >= 500)
    //   addToast("An unexpected error occurred, we couldn't perform this action", {
    //     appearance: "error",
    //     autoDismiss: true,
    //     preventDuplicate: true
    //   });

    // if (error.response && error.response.status === 401)
    //   addToast('You do not have permission to perform this action', {
    //     appearance: "error",
    //     autoDismiss: true,
    //     preventDuplicate: true
    //   });

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    isRequestCancelled: axios.isCancel
};
