import React from 'react';
import s from "./components.module.css"

type ScoreBoardPropsType = {
    value: number
    startScore: number
    maxScore: number
    errorValue: boolean
    scoreMessage: number | string
}
export const ScoreBoard = (props: ScoreBoardPropsType) => {
    const scoreClassName = props.errorValue || props.scoreMessage!==props.value ? s.errorMessageBoard : (props.value===props.maxScore) ? s.scoreMore  : ""
    const errorMessage = "invalid input!!!"
    return (
        <div className={s.scoreBoard}>
            <div className={scoreClassName}>
                {props.errorValue ? errorMessage : props.scoreMessage}
            </div>
        </div>
    );
}

