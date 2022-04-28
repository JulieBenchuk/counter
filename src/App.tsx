import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from "./components/components.module.css"
import {ScoreBoard} from "./components/ScoreBoard";
import {SetBoard} from "./components/SetBoard";

function App() {
    const [startScore, setStartScore] = useState<number>(0)
    const [maxScore, setMaxScore] = useState<number>(5)
    const [value, setValue] = useState<number>(startScore)
    const [incDisabled, setIncDisabled] = useState<boolean>(false)
    /*const [setDisabled, setSetDisabled] = useState<boolean>(false)*/
    useEffect(()=>{
        localStorage.setItem("start", JSON.stringify(startScore))
    }, [startScore])
    useEffect(()=>{
        localStorage.setItem("max", JSON.stringify(maxScore))
    }, [maxScore])
    const onClickInc = () => {
        const newValue = value + 1
        setValue(newValue)
        newValue === maxScore && setIncDisabled(true)
    }
    const onClickReset = () => {
        setValue(startScore)
        setIncDisabled(false)
    }
    const onClickSetValue = () => {
        localStorage.setItem("max", JSON.stringify(maxScore))
        localStorage.setItem("start", JSON.stringify(startScore))
        setValue(startScore)
    }
    const onChangeStartValue = (value: number) => {
        setStartScore(value)
    }
    const onChangeMaxValue = (value: number) => {
        setMaxScore(value)
    }
    const errorValue = maxScore<=startScore || startScore<0

    return (
        <div className="App">
            <div className="block">
                <ScoreBoard value={value}
                            startScore={startScore}
                            maxScore={maxScore}
                            errorValue={errorValue}/>
                <span className={s.buttons}>
                    <Button callback={onClickInc} title={"INC"} disabled={incDisabled}/>
                    <Button callback={onClickReset} title={"RESET"}/>
                </span>
            </div>

            <div className="block">
                <SetBoard startValue={startScore}
                          maxValue={maxScore}
                          onChangeStartValue={onChangeStartValue}
                          onChangeMaxValue={onChangeMaxValue}
                          errorValue={errorValue}/>
                <span className={s.buttons}>
                    <Button callback={onClickSetValue} title={"SET"} disabled={errorValue}/>
                </span>
            </div>
        </div>
    );
}

export default App;
