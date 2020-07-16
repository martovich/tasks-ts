import React from 'react';
import '../../App.css';
import s from "./MyButton.module.css"

type PropsType = {
    text: string
    onClickHandler: () => void
}
function MyButton(props: PropsType) {
    return <button onClick={props.onClickHandler}>{props.text}</button>
}
export default MyButton;