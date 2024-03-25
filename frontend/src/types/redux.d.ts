// TypeScript definitions for Redux state to enhance type support
import "react-redux";
import { store } from "./app/store";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}
