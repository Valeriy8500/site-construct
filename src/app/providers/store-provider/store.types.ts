import { IUserState } from "@/entities/user/model/user.types";
import { setupStore } from "./store.config";

export interface IStateSchema {
  user: IUserState;
}

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
