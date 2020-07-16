import React from 'react';
import '../../App.css';
import s from "./MyButton.module.css"

type PropsType = {
    text: string
    className: string | undefined
    onClick: () => void
}
function MyButton(props: PropsType) {
    return <button onClick={props.onClick}>{props.text}</button>
}
export default MyButton;