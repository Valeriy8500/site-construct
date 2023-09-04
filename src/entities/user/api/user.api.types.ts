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
  kind: string;
  localId: string;
  registered: boolean;
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
