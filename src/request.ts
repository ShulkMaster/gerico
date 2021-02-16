import axios, {AxiosResponse} from 'axios';

export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

export type ErrorCause = { message: string };

export type ApiResult<T> = {
  status: number;
  statusText: string;
  result: T | ErrorCause;
};

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

const mapApiErrors = <T extends Json>(res: AxiosResponse<T>): T | ErrorCause => {
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }

  switch (res.status) {
    case 500:
      return { message: 'Server error' };
    case 401:
      return { message: 'Not authorize' };
    case 404:
      return { message: 'Resource not found' };
    default:
      return { message: 'Ups... something went wrong' };
  }
};

const unwrapResponse = <T extends Json>(response: AxiosResponse<T>): ApiResult<T> => {
  return {
    status: response.status,
    statusText: response.statusText,
    result: mapApiErrors(response),
  };
};

export const apiGet = async <T extends Json>(endPoint: string, query?: Json): Promise<ApiResult<T>> => {
  try {
    const res = await client.get<T>(endPoint, { params: query });
    return unwrapResponse(res);
  } catch (e) {
    return {
      status: -1,
      statusText: 'REACT APP ERROR',
      result: { message: e.message },
    };
  }
};

export function isApiSuccessResult<T>(res: T | ErrorCause): res is T {
  return Object.keys(res).find(k => k === 'message') === undefined;
}