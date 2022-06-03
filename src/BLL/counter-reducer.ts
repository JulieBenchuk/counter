const startMessage = "enter values and press 'set'"
let preloadedMaxScore = 0;
const maxScoreAsString = localStorage.getItem("max")
if (maxScoreAsString) {
    preloadedMaxScore = JSON.parse(maxScoreAsString)
}
let preloadedStartScore = 0;
const startScoreAsString = localStorage.getItem("start")
if (startScoreAsString) {
    preloadedStartScore = JSON.parse(startScoreAsString)
}
let initialState = {
    startScore: preloadedStartScore, // number from local storage (prev session)
    maxScore: preloadedMaxScore, // number from local storage
    value: preloadedStartScore,
    incDisabled: false,
    resetDisabled: false,
    scoreMessage: startMessage
}
type initialStateType = {
    startScore: number
    maxScore: number
    value: number
    incDisabled: boolean
    resetDisabled: boolean
    scoreMessage: number | string
}
type IncActionType = { type: "INC" }
export type ActionTypes =
    IncActionType
    | SetValueActionType
    | ResetActionType
    | SetStartScoreActionType
    | SetMaxScoreActionType
export const IncAC = () => {
    return {type: "INC"} as const
}
type ResetActionType = { type: "RESET" }
export const ResetAC = () => {
    return {type: "RESET"} as const
}
type SetValueActionType = { type: "SET-VALUE" }
export const SetValueAC = () => {
    return {type: "SET-VALUE"} as const
}
type SetStartScoreActionType = { type: "SET-START-SCORE", value: number }
export const SetStartScoreAC = (value: number) => {
    return {type: "SET-START-SCORE", value: value} as const
}
type SetMaxScoreActionType = { type: "SET-MAX-SCORE", value: number }
export const SetMaxScoreAC = (value: number) => {
    return {type: "SET-MAX-SCORE", value: value} as const
}
export const counterReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "INC":
            let newValue = state.value + 1;
            return {...state, value: newValue, incDisabled: newValue === state.maxScore, scoreMessage: newValue};
        case "RESET":
            return {...state, value: state.startScore, scoreMessage: state.startScore, incDisabled: false};
        case "SET-VALUE":
            return {
                ...state,
                value: state.startScore,
                scoreMessage: state.startScore,
                incDisabled: false,
                resetDisabled: false
            }
        case "SET-START-SCORE":
            return {
                ...state,
                value: action.value,
                startScore: action.value,
                scoreMessage: startMessage,
                incDisabled: true,
                resetDisabled: true
            };
        case "SET-MAX-SCORE":
            return {
                ...state,
                value: action.value,
                maxScore: action.value,
                scoreMessage: startMessage,
                incDisabled: true,
                resetDisabled: true
            }

        default:
            return state
    }
}