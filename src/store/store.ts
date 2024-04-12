import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "./features/playlistSlice";
import { authReducer } from "./features/authSlice";

// Создание хранилища и передача редьюсеров
export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      playlist: playlistReducer,
      user: authReducer,
    }),
  });
};

// AppStore - тип стора, который передается в провайдер, чтобы в провайдере определить стор по этому типу
// и было проще орентироваться по ключам, например, получить isShuffled
// это TypeScript..
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
