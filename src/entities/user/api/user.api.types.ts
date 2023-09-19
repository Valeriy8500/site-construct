export interface SignInProps {
  email: string;
  password: string;
}
export interface SignUpProps {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type ErrorData = {
  [P in SignUpProps[keyof SignUpProps]]: {
    message: string;
  };
};

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  lastname: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
}
export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export interface ILoginReq {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface ILoginRes {
  displayName: string;
  email: string;
  idToken: string;
  localId: string;
  refreshToken: string;
  expiresIn: string;
}

export interface IRegisterReq {
  displayName: string;
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface IRegisterRes extends ILoginRes {}

export interface IUserProfileReq {
  idToken: string;
  email?: string;
  password?: string;
  displayName?: string;
  returnSecureToken?: boolean;
}

export interface IProviderUserInfo {
  providerId: string;
  displayName: string;
  federatedId: string;
  email: string;
  rawId: string;
}

export interface IUserProfileRes {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  providerUserInfo: IProviderUserInfo[];
  passwordHash: string;
  emailVerified: boolean;
}
export interface RefreshRes {
  access_token: string;
  expires_in: "3600";
  id_token: string;
  refresh_token: string;
}
