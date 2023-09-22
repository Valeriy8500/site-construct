import { Provider } from "react-redux";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

interface IStoreProviderProps {
  children: React.ReactNode;
}

export const MockStoreProvider = (props: IStoreProviderProps) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
