import {combineReducers, createStore, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

export const rootReducer = combineReducers({
    counter: counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)
store.subscribe(()=>{
    localStorage.setItem("max", JSON.stringify(store.getState().counter.maxScore))
    localStorage.setItem("start", JSON.stringify(store.getState().counter.startScore))
})
type AppStoreType = typeof store