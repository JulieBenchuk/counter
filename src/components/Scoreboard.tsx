import React from 'react';
import s from "./components.module.css"

type ScoreboardPropsType = {
    score: number
}
export const Scoreboard = (props: ScoreboardPropsType) => {
    const scoreClassName = props.score>=5 ? s.scoreMore : ""
    return (
        <div className={s.scoreboard}>
            <div className={scoreClassName}>{props.score}</div>
        </div>
    );
}

