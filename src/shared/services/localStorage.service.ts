import { IUserState } from "@/entities/user/model/user.types";

interface RefreshRes {
  access_token: string;
  expires_in: "3600";
  refresh_token: string;
}

const USER = "user";

const setUser = (user: IUserState) => {
  localStorage.setItem(USER, JSON.stringify(user));
};

const getUser = (): IUserState | null => {
  const user = localStorage.getItem(USER);
  return user ? JSON.parse(user) : null;
};

const getRefreshToken = (): IUserState["accessToken"] | null => {
  const user = getUser();
  return user ? user.refreshToken : null;
};

const getAccessToken = (): IUserState["accessToken"] | null => {
  const user = getUser();
  return user ? user.accessToken : null;
};

const refreshTokens = (
  response: RefreshRes & { expiresAccess: number; expiresRefresh: number }
) => {
  const user = getUser();
  localStorage.setItem(
    USER,
    JSON.stringify({
      ...user,
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
      expiresAccess: response.expiresAccess,
      expiresRefresh: response.expiresRefresh,
    })
  );
};

const removeUser = () => {
  localStorage.removeItem(USER);
};

export const localStorageService = {
  setUser,
  getUser,
  removeUser,
  getRefreshToken,
  getAccessToken,
  refreshTokens,
};
