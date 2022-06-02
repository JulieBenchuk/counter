import {AppRootStateType} from "./store";

let initialState = {
    startScore: 0,
    maxScore: 5,
    value: 0
}
type IncActionType = { type: "INC", value: number }
export const IncActionAC = (value: string) => {
    return {type: "INC", value: value}
}
export const counterReducer = (state: AppRootStateType = initialState, action: IncActionType) => {
    switch (action.type) {
        case "INC":
            return {...state, value: action.value + 1}
    }
}