import React from 'react';
import '../App.css';
import s from "./Task1.module.css"

export type MessageType = {
    id: string
    name: string
    text: string
    time: string
}


type PropsType = {
    messages: Array<MessageType>
}

function Task1(props: PropsType) {
    let msgArr = props.messages.map((msg) =>
        <div key={msg.id} className={s.message}>
            <p className={s.name}>{msg.name}</p>
            {msg.text}
            <span className={s.timestamp}>{msg.time}</span>
        </div>
    )
    return <div>{msgArr}</div>;
}

export default Task1;
