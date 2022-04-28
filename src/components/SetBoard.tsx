import React, {ChangeEvent} from 'react';
import s from "./components.module.css"

type SetBoardPropsType = {
    startValue: number
    maxValue: number
    errorValue: boolean
    onChangeStartValue: (value: number)=> void
    onChangeMaxValue: (value: number)=>void
}
export const SetBoard = (props: SetBoardPropsType) => {
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(e.currentTarget.valueAsNumber)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(e.currentTarget.valueAsNumber)
    }
    return (
        <div>
            <div className={s.startAndMaxValue}>
                <span>max value</span>
                <input type="number" onChange={onChangeMaxValue} value={props.maxValue}/>
            </div>
            <div className={s.startAndMaxValue}>
                <span>start value</span>
                <input type="number" onChange={onChangeStartValue} value={props.startValue}/>
            </div>
        </div>
    );
}

