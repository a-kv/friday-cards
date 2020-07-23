import {combineReducers, createStore} from "redux";
import { RegisterReducer } from "./RegisterReducer";
import { LoginReducer } from "./LoginReduser";

const rootReducer = combineReducers({
    login: LoginReducer,
    registration: RegisterReducer,
})

export const store = createStore(rootReducer);

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;
