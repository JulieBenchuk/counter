import {combineReducers, createStore, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)
type AppStoreType = typeof store