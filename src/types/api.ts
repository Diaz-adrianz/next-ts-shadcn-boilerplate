export type TmainApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
