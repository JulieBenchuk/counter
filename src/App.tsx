import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard";
import {Button} from "./components/Button";
import s from "./components/components.module.css"

function App() {
    const startScore: number = 0
    const maxScore: number = 5
    const [score, setScore] = useState<number>(startScore)
    const [incDisabled, setIncDisabled] = useState<boolean>(false)
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
                <Scoreboard score={score}/>
                <span className={s.buttons}>
                    <Button callback={onClickInc} title={"INC"} disabled={incDisabled}/>
                    <Button callback={onClickReset} title={"RESET"}/>
                </span>
            </div>
            <div className="block">

            </div>
        </div>
    );
}

export default App;
