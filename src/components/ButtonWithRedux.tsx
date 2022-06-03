import React from 'react';
import s from "./components.module.css"

type ButtonWithReduxPropsType = {
    title: string
    callback: () => void
    disabled: boolean

}
export const ButtonWithRedux = (props: ButtonWithReduxPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={s.button} onClick={onClickHandler} disabled={props.disabled}>
            {props.title}
        </button>
    );
}

