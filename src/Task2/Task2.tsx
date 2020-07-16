import React from 'react';
import '../App.css';
import s from "./Task2.module.css"
import {FilterValuesType} from "../App";
import MyButton from "../common/Button/MyButton";

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
                <MyButton className={undefined} text={"x"} onClick={onClickHandler}/>
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
                <MyButton className={props.filter === "all" ? "active-filter" : ""} text={"all"} onClick={onAllClickHandler}/>
                <MyButton className={props.filter === "high" ? "active-filter" : ""} text={"high"} onClick={onHighClickHandler}/>
                <MyButton className={props.filter === "middle" ? "active-filter" : ""} text={"middle"} onClick={onMiddleClickHandler}/>
                <MyButton className={props.filter === "low" ? "active-filter" : ""} text={"low"} onClick={onLowClickHandler}/>
            </div>
        </div>
    );
}

export default Task2;