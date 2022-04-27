import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from "./components/components.module.css"
import {ScoreBoard} from "./components/ScoreBoard";
import {SetBoard} from "./components/SetBoard";

function App() {
    const [startScore, setStartScore] = useState<number>(0)
    const [maxScore, setMaxScore] = useState<number>(0)
    const [score, setScore] = useState<number>(startScore)
    const [incDisabled, setIncDisabled] = useState<boolean>(false)
    const [setDisabled, setSetDisabled] = useState<boolean>(false)
    const onClickInc = () => {
        const newScore = score + 1
        setScore(newScore)
        newScore === maxScore && setIncDisabled(true)
    }
    const onClickReset = () => {
        setScore(0)
        setIncDisabled(false)
    }
    const onClickSetValue = () => {
        localStorage.setItem("max", JSON.stringify(maxScore))
        localStorage.setItem("start", JSON.stringify(startScore))

        console.log(localStorage.getItem("max"))
        console.log(localStorage.getItem("start"))
    }
    const onChangeStartValue = (value: number) => {
        setStartScore(value)
    }
    const onChangeMaxValue = (value: number) => {
        setMaxScore(value)
    }


    return (
        <div className="App">
            <div className="block">
                <ScoreBoard score={score}/>
                <span className={s.buttons}>
                    <Button callback={onClickInc} title={"INC"} disabled={incDisabled}/>
                    <Button callback={onClickReset} title={"RESET"}/>
                </span>
            </div>

            <div className="block">
                <SetBoard startValue={startScore} maxValue={maxScore} onChangeStartValue={onChangeStartValue} onChangeMaxValue={onChangeMaxValue}/>
                <span className={s.buttons}>
                    <Button callback={onClickSetValue} title={"SET"} disabled={setDisabled}/>
                </span>
            </div>
        </div>
    );
}

export default App;
