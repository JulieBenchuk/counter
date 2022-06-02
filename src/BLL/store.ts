import {combineReducers, createStore, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppRootStateType = {
    startScore: number
    maxScore: number
    value: number
}
export const store = legacy_createStore(rootReducer)