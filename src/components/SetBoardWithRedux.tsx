import React, {ChangeEvent} from 'react';
import s from "./components.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/store";
import {SetMaxScoreAC, SetStartScoreAC} from "../BLL/counter-reducer";

type SetBoardWithReduxPropsType = {
    errorValue: boolean
}
export const SetBoardWithRedux = (props: SetBoardWithReduxPropsType) => {
    const dispatch = useDispatch()
    const startScore = useSelector<AppRootStateType, number>(state=>state.counter.startScore)
    const maxScore = useSelector<AppRootStateType, number>(state=>state.counter.maxScore)
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetStartScoreAC(e.currentTarget.valueAsNumber))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetMaxScoreAC(e.currentTarget.valueAsNumber))
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

