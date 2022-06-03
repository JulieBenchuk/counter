import React, {ChangeEvent} from 'react';
import s from "./components.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/store";

type SetBoardWithReduxPropsType = {
    errorValue: boolean
    onChangeStartValue: (value: number)=> void
    onChangeMaxValue: (value: number)=>void
}
export const SetBoardWithRedux = (props: SetBoardWithReduxPropsType) => {
    const startScore = useSelector<AppRootStateType, number>(state=>state.counter.startScore)
    const maxScore = useSelector<AppRootStateType, number>(state=>state.counter.maxScore)
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
                <input type="number" onChange={onChangeMaxValue} value={maxScore} className={props.errorValue ? s.errorInput : ""}/>
            </div>
            <div className={s.startAndMaxValue}>
                <span>start value</span>
                <input type="number" onChange={onChangeStartValue} value={startScore} className={props.errorValue ? s.errorInput : ""}/>
            </div>
        </div>
    );
}

