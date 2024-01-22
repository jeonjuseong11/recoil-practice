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
const initialState: State<any> = {
  loading: false,
  data: null,
  status: null,
  error: null,
  done: false,
};

const useAxios = <T = any>(): {
  loading: boolean;
  data: T | null;
  status: number | null;
  error: AxiosError | null;
  done: boolean;
  sendRequest: (
    config: AxiosRequestConfig,
    onSuccess?: (data: any) => void,
    onError?: (error: AxiosError) => void
  ) => Promise<void>;
  reset: () => void;
} => {
  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    reducer,
    initialState as State<T>
  );

  const sendRequest = useCallback(
    async (
      config: AxiosRequestConfig, //api 요청 url
      onSuccess?: (data: any) => void, //성공했을 때 실행될 함수
      onError?: (error: AxiosError) => void //실패했을 때 실행될 함수
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
          onSuccess({ data: response.data, status: response.status });
          console.log(response.data);
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
