import { useReducer, useCallback } from 'react';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import instance from '../api/apiClient';

interface State<T> {
  loading: boolean;
  data: T | null;
  status: number | null;
  error: AxiosError | null;
  done: boolean;
}

type Action<T> =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; data: T; status: number }
  | { type: 'ERROR'; error: AxiosError }
  | { type: 'RESET' };

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, done: false };
    case 'SUCCESS':
      return {
        ...state,
        data: action.data,
        status: action.status,
        loading: false,
        done: true,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
        done: true,
      };
    case 'RESET':
      return state;
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}
const initialState = <T>(): State<T> => ({
  loading: false,
  data: null,
  status: null,
  error: null,
  done: false,
});

const useAxios = <T>(): {
  loading: boolean;
  data: T | null;
  status: number | null;
  error: AxiosError | null;
  done: boolean;
  sendRequest: (
    config: AxiosRequestConfig,
    onSuccess?: (response: AxiosResponse<T>) => void,
    onError?: (error: AxiosError) => void
  ) => Promise<void>;
  reset: () => void;
} => {
  const [state, dispatch] = useReducer(reducer<T>, initialState<T>());
  const sendRequest = useCallback(
    async (
      config: AxiosRequestConfig,
      onSuccess?: (response: AxiosResponse<T>) => void,
      onError?: (error: AxiosError) => void
    ) => {
      dispatch({ type: 'LOADING' });
      try {
        const response: AxiosResponse<T> = await instance(config);
        dispatch({
          type: 'SUCCESS',
          data: response.data,
          status: response.status,
        });
        if (onSuccess) {
          onSuccess(response);
        }
      } catch (error) {
        dispatch({
          type: 'ERROR',
          error: error as AxiosError,
        });
        if (onError) {
          onError(error as AxiosError);
        }
      }
    },
    []
  );

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return { ...state, sendRequest, reset };
};

export default useAxios;
