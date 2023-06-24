export type CommonRequestProps = { url: string; headers?: {}; params?: {} };

export type RequestType = CommonRequestProps & {
  method: string;
  data?: {};
  baseURL?: string;
};

export type GetRequestType = CommonRequestProps;