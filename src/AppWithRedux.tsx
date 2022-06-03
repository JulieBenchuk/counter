import React, {useEffect, useState} from 'react';
import './App.css';
import s from "./components/components.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/store";
import {IncAC, ResetAC, SetMaxScoreAC, SetStartScoreAC, SetValueAC} from "./BLL/counter-reducer";
import {ScoreBoardWithRedux} from "./components/ScoreBoardWithRedux";
import {SetBoardWithRedux} from "./components/SetBoardWithRedux";
import {ButtonWithRedux} from "./components/ButtonWithRedux";

function AppWithRedux() {
    const dispatch = useDispatch()
    const startScore = useSelector<AppRootStateType, number>(state=>state.counter.startScore)
    const maxScore = useSelector<AppRootStateType, number>(state=>state.counter.maxScore)
    const incDisabled = useSelector<AppRootStateType, boolean>(state=>state.counter.incDisabled)
    const resetDisabled = useSelector<AppRootStateType, boolean>(state=>state.counter.resetDisabled)

    const errorValue = maxScore<=startScore || startScore<0
    useEffect(()=>{
        localStorage.setItem("start", JSON.stringify(startScore))
    }, [startScore])
    useEffect(()=>{
        localStorage.setItem("max", JSON.stringify(maxScore))
    }, [maxScore])
    const onClickInc = () => {
        dispatch(IncAC())
    }
    const onClickReset = () => {
        dispatch(ResetAC())
    }
    const onClickSetValue = () => {
        dispatch(SetValueAC())
    }
    const onChangeStartValue = (value: number) => {
        dispatch(SetStartScoreAC(value))
    }
    const onChangeMaxValue = (value: number) => {
        dispatch(SetMaxScoreAC(value))
    }
    return (
        <div className="App">
            <div className="block">
                <ScoreBoardWithRedux
                            errorValue={errorValue}/>
                <span className={s.buttons}>
                    <ButtonWithRedux callback={onClickInc} title={"INC"} disabled={incDisabled}/>
                    <ButtonWithRedux callback={onClickReset} title={"RESET"} disabled={resetDisabled}/>
                </span>
            </div>

            <div className="block">
                <SetBoardWithRedux
                          onChangeStartValue={onChangeStartValue}
                          onChangeMaxValue={onChangeMaxValue}
                          errorValue={errorValue}/>
                <span className={s.buttons}>
                    <ButtonWithRedux callback={onClickSetValue}
                            title={"SET"}
                            disabled={errorValue}/>
                </span>
            </div>
        </div>
    );
}

export default AppWithRedux;
