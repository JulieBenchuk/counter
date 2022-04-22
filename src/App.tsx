import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./components/Scoreboard";
import {Button} from "./components/Button";
import s from "./components/components.module.css"

function App() {
    const [score, setScore] = useState<number>(0)
    const [disabled, setDisabled] = useState<boolean>(false)
    const onClickInc = () => {
        setScore(score + 1)
        score >= 4 && setDisabled(true)
    }
    const onClickReset = () => {
        setScore(0)
        setDisabled(false)
    }


    return (
        <div className="App">
            <Scoreboard score={score}/>
            <span className={s.buttons}>
                 <Button callback={onClickInc} title={"INC"} disabled={disabled}/>
                <Button callback={onClickReset} title={"RESET"}/>
            </span>

        </div>
    );
}

export default App;
