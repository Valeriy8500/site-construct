export interface IUserState {
  userId: string;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
  expiresAccess: number;
  expiresRefresh: number;
  error?: string | null;
}

export type ErrorType = {
  data: { error: { message: string, code: number } };
};
