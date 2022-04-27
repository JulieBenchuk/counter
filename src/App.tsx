import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import s from "./components/components.module.css"
import {ScoreBoard} from "./components/ScoreBoard";
import {SetBoard} from "./components/SetBoard";

function App() {
    const startScore: number = 0
    const maxScore: number = 5
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
                <SetBoard startValue={startScore} maxValue={maxScore}/>
                <span className={s.buttons}>
                    <Button callback={()=>{}} title={"SET"} disabled={setDisabled}/>
                </span>
            </div>
        </div>
    );
}

export default App;
