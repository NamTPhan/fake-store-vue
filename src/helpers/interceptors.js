import axios from 'axios';
import { useAuthenticationStore } from '../store/authentication';
import { useErrorStore } from '../store/errors';
import { useLoaderStore } from '../store/loader';

export function jwtInterceptor() {
    axios.interceptors.request.use((request) => {
        const loaderStore = useLoaderStore();
        const isJwtInterceptorActive = request.isJwtInterceptorActive ?? true;

        loaderStore.showLoader();

        if (isJwtInterceptorActive) {
            const authenticationStore = useAuthenticationStore();
            const token = authenticationStore.token;
            // const isApiUrl = request.url.startsWith(
            //     import.meta.env.VITE_MY_API_URL
            // );

            if (token) {
                request.headers.authorization = `Bearer ${token}`;
            }
        }

        return request;
    });
}

export function responseInterceptor() {
    const errorStore = useErrorStore();
    const loaderStore = useLoaderStore();

    axios.interceptors.response.use(
        (response) => {
            loaderStore.hideLoader();

            if (response.status === 200 || response.status === 201) {
                errorStore.resetError();
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        },
        (error) => {
            loaderStore.hideLoader();

            if (error.response.status) {
                switch (error.response.status) {
                    case 401:
                        errorStore.setError({
                            statusCode: 401,
                            errorTitle: 'Your session has expired',
                            errorMessage: 'Please sign in again',
                            modalType: 'danger',
                        });
                        break;
                    case 500:
                        errorStore.setError({
                            statusCode: 500,
                            errorTitle: 'Oops... Something went wrong...',
                            errorMessage:
                                'Please refresh the page, or try again later.',
                            modalType: 'danger',
                        });
                        break;
                }
                return Promise.reject(error.response);
            }
        }
    );
}