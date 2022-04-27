import React from 'react';
import s from "./components.module.css"

type SetBoardPropsType = {
    startValue: number
    maxValue: number
}
export const SetBoard = (props: SetBoardPropsType) => {
    /*const scoreClassName = props.startValue===props.maxValue ? s.scoreMore : "" //!!!!!!!!!*/
    return (
        <div>
            <div className={s.startAndMaxValue}>
                <span>max value</span>
                <input type="number" value={props.maxValue}/>
            </div>
            <div className={s.startAndMaxValue}>
                <span>start value</span>
                <input type="number" value={props.startValue}/>
            </div>
        </div>
    );
}

