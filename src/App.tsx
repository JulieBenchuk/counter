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
    const startMessage = "enter values and press 'set'"
    const [scoreMessage, setScoreMessage] = useState<number | string>(startMessage)
    const [incDisabled, setIncDisabled] = useState<boolean>(false)
    const [resetDisabled, setResetDisabled] = useState<boolean>(false)
    const errorValue = maxScore <= startScore || startScore < 0

    const onClickInc = () => {
        const newValue = value + 1
        setValue(newValue)
        setScoreMessage(newValue)
        newValue === maxScore && setIncDisabled(true)
    }
    const onClickReset = () => {
        setValue(startScore)
        setIncDisabled(false)
        setScoreMessage(startScore)
    }
    const onClickSetValue = () => {
        setValue(startScore)
        setScoreMessage(startScore)
        setIncDisabled(false)
        setResetDisabled(false)
    }
    const onChangeStartValue = (value: number) => {
        setStartScore(value)
        setScoreMessage(startMessage)
        setIncDisabled(true)
        setResetDisabled(true)
    }
    const onChangeMaxValue = (value: number) => {
        setMaxScore(value)
        setScoreMessage(startMessage)
        setIncDisabled(true)
        setResetDisabled(true)
    }

    useEffect(() => {
        localStorage.setItem("start", JSON.stringify(startScore))
    }, [startScore])
    useEffect(() => {
        localStorage.setItem("max", JSON.stringify(maxScore))
    }, [maxScore])

    return (
        <div className="App">

            <div className="block">
                <ScoreBoard value={value}
                            startScore={startScore}
                            maxScore={maxScore}
                            errorValue={errorValue}
                            scoreMessage={scoreMessage}/>
                <span className={s.buttons}>
                    <Button callback={onClickInc} title={"INC"} disabled={incDisabled}/>
                    <Button callback={onClickReset} title={"RESET"} disabled={resetDisabled}/>
                </span>
            </div>

            <div className="block">
                <SetBoard startValue={startScore}
                          maxValue={maxScore}
                          onChangeStartValue={onChangeStartValue}
                          onChangeMaxValue={onChangeMaxValue}
                          errorValue={errorValue}/>
                <span className={s.buttons}>
                    <Button callback={onClickSetValue}
                            title={"SET"}
                            disabled={errorValue}/>
                </span>
            </div>

        </div>
    );
}

export default App;
