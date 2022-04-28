import React from 'react';
import s from "./components.module.css"

type ScoreBoardPropsType = {
    value: number
    startScore: number
    maxScore: number
    errorValue: boolean
}
export const ScoreBoard = (props: ScoreBoardPropsType) => {
    const scoreClassName = props.errorValue ? s.errorMessageBoard : (props.value===props.maxScore) ? s.scoreMore  : ""
    const errorMessage = "invalid input!"
    const setMessage = "enter values and press 'set'"
    return (
        <div className={s.scoreBoard}>
            <div className={scoreClassName}>
                {props.errorValue ? errorMessage : props.value}
            </div>
        </div>
    );
}

