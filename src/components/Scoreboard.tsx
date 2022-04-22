import React from 'react';
import s from "./components.module.css"

type ScoreboardPropsType = {
    score: number
}
export const Scoreboard = (props: ScoreboardPropsType) => {

    return (
        <div className={s.scoreboard}>
            <div className={props.score>=5 ? s.scoreMore : ""}>{props.score}</div>
        </div>
    );
}

