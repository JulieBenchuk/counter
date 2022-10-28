import React from 'react';
import s from "./components.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/store";

type ScoreBoardWithReduxPropsType = {
    errorValue: boolean
}
export const ScoreBoardWithRedux = (props: ScoreBoardWithReduxPropsType) => {

    const maxScore = useSelector<AppRootStateType, number>(state => state.counter.maxScore)
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const scoreMessage = useSelector<AppRootStateType, number | string>(state => state.counter.scoreMessage)
    const scoreClassName = props.errorValue || scoreMessage !== value ? s.errorMessageBoard : (value === maxScore) ? s.scoreMore : ""
    const errorMessage = "invalid input!!!"
    return (
        <div className={s.scoreBoard}>
            <div className={scoreClassName}>
                {props.errorValue ? errorMessage : scoreMessage}
            </div>
        </div>
    );
}

