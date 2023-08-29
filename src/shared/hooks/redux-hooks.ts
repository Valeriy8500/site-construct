import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector, useStore } from "react-redux";
import { IStateSchema, RootState } from "@/app/providers/store-provider/store.types";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>;
export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
export const useAppStore = useStore<RootState>;
