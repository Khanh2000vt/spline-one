import { RootState } from "./slices";

export * from "./slices";
export * from "./store";
export { default as rootReducer } from "./slices";

export const getAuthRedux = (state: RootState) => state.auth;
