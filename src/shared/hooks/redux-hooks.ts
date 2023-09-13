import { useDispatch, TypedUseSelectorHook, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState } from "@/app/providers/store-provider/store.types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
