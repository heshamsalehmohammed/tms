import ReduxDispatchSingleton from './reduxDispatchSingleton';
import {
    startLoading,
    stopLoading
} from '../redux/slices/utilitiesSlice.js';
import showMessage from './showMessagePopup';

export function handleHttpRequestPromise(
    request,
    errorMessageConfig,
    successMessageConfig
) {
    return new Promise((resolve, reject) => {
        handleHTTPRequest(() => request, {
            handleException: reject,
            handleSuccess: resolve,
            errorMessageConfig,
            successMessageConfig
        });
    });
}

export async function handleHTTPRequest(
    executionCode,
    { handleException, handleSuccess, errorMessageConfig, successMessageConfig }
) {
    const dispatch = ReduxDispatchSingleton.getDispatch();
    dispatch(startLoading());
    return new Promise((resolve, reject) => {
        executionCode()
            .then((result) => {
                if (result.data.IsFailure) {
                    reject(mapError(result.data.Error, 400));
                } else {
                    resolve(result);
                }
            })
            .catch(reject);
    })
        .then((result) => {
            if (successMessageConfig) showMessage(successMessageConfig);
            handleSuccess(result);
        })
        .catch((error) => {
            if (errorMessageConfig) showMessage(errorMessageConfig);
            handleException(error);
        })
        .finally(() => {
            dispatch(stopLoading());
        });
}




const mapError = (errorMessage, status) => {
    const returnedError = {};
    if (!returnedError.response) returnedError.response = {};
    returnedError.response.status = status;
    returnedError.response.data = errorMessage;
    return returnedError;
};

