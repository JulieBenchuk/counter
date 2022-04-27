import React from 'react';
import s from "./components.module.css"

type ScoreBoardPropsType = {
    score: number
    startValue?: number
    maxValue?: number
}
export const ScoreBoard = (props: ScoreBoardPropsType) => {
    const scoreClassName = props.score>=5 ? s.scoreMore : ""
    return (
        <div className={s.scoreBoard}>
            <div className={scoreClassName}>{props.score}</div>
        </div>
    );
}

