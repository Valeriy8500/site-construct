import { ILoginRes } from "../api/user.api.types";
import { IUserState } from "../model/user.types";

export const getUserFromResponse = (response: ILoginRes): IUserState => {
  return {
    userId: response.localId,
    accessToken: response.idToken,
    email: response.email,
    expiresAccess: Date.now() + 5 * 60 * 1000,
    expiresRefresh: Date.now() + Number(response.expiresIn) * 1000,
    name: response.displayName,
    refreshToken: response.refreshToken,
  };
};
