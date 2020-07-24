import {combineReducers, createStore} from "redux";
import { RegisterReducer } from "./RegisterReducer";
import { LoginReducer } from "./LoginReduser";
import {RestorePasswordReducer} from "./RestorePasswordReducer";
import {ProfileReducer} from "./ProfileReducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    registration: RegisterReducer,
    restore: RestorePasswordReducer,
    profile: ProfileReducer,
    setNewPassword: setNewPasswordReducer
})

export const store = createStore(rootReducer);

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>;
