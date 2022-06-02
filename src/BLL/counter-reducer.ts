import {AppRootStateType} from "./store";

let initialState = {
    startScore: 0,
    maxScore: 5,
    value: 0
}
 type initialStateType = {
    startScore: number
    maxScore: number
    value: number
}
type IncActionType = { type: "INC"}
export type ActionTypes = IncActionType /// add all types!!!!!
export const IncAC = (value: string) => {
    return {type: "INC"} as const
}
export const counterReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "INC":
            return {...state, value: state.value + 1};
        default: return state
    }
}