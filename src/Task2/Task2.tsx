import React from 'react';
import '../App.css';
import s from "./Task2.module.css"
import {FilterValuesType} from "../App";

type TaskType = {
    id: string
    name: string
    priority: string
}


type PropsType = {
    tasks: Array<TaskType>
    filter: string,
    changeFilter: (value: FilterValuesType) => void,
    removeTask: (taskId: string) => void,
}

function Task2(props: PropsType) {
    let tasksArr = props.tasks.map((t) => {
            const onClickHandler = () => props.removeTask(t.id)
            return <li key={t.id}
                       className={t.priority === "low" ? s.low : t.priority === "middle" ? s.middle : t.priority === "high" ? s.high : ""}>
                <span>{t.name}</span>
                <button onClick={onClickHandler}>x</button>
            </li>
        }
    )
    const onAllClickHandler = () => props.changeFilter("all")
    const onHighClickHandler = () => props.changeFilter("high")
    const onMiddleClickHandler = () => props.changeFilter("middle")
    const onLowClickHandler = () => props.changeFilter("low")
    return (
        <div>
            <ul>{tasksArr}</ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>all
                </button>
                <button className={props.filter === "high" ? "active-filter" : ""}
                        onClick={onHighClickHandler}>high
                </button>
                <button className={props.filter === "middle" ? "active-filter" : ""}
                        onClick={onMiddleClickHandler}>middle
                </button>
                <button className={props.filter === "low" ? "active-filter" : ""}
                        onClick={onLowClickHandler}>low
                </button>
            </div>
        </div>
    );
}

export default Task2;