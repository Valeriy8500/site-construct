import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector, useStore } from "react-redux";
import { IUserState } from "@/entities/user";
import { rootReducer } from "./store.config";

export interface IStateSchema {
  user: IUserState;
}

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>;
export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
export const useAppStore = useStore<RootState>;
