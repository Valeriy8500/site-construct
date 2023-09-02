export interface IUserState {
  userId: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
  expires: string;
  registered: boolean;
  error?: string | null;
}

export type ErrorType = {
  data: { error: { message: string } };
};
