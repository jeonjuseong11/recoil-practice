import { useReducer, useCallback } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

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
  | { type: 'ERROR'; error: AxiosError };

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        done: false,
        status: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        status: action.status,
        error: null,
        done: true,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        status: null,
        error: action.error,
        done: true,
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

const useAxios = <T = any>(
  apiFunction: (params?: any) => Promise<AxiosResponse<T>>
): {
  loading: boolean;
  data: T | null;
  status: number | null;
  error: AxiosError | null;
  done: boolean;
  sendRequest: (params?: any) => Promise<AxiosResponse<T> | AxiosError>;
} => {
  const initialState: State<T> = {
    loading: false,
    data: null,
    status: null,
    error: null,
    done: false,
  };

  const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(
    reducer<T>,
    initialState
  );

  const sendRequest = useCallback(
    async (params?: any): Promise<AxiosResponse<T> | AxiosError> => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await apiFunction(params);
        dispatch({
          type: 'SUCCESS',
          data: response.data,
          status: response.status,
        });
        return response;
      } catch (error) {
        const axiosError = error as AxiosError;
        dispatch({ type: 'ERROR', error: axiosError });
        return axiosError;
      }
    },
    [apiFunction]
  );

  const { loading, data, status, error, done } = state;

  return { loading, data, status, error, done, sendRequest };
};

export default useAxios;
