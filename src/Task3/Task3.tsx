import React, {ChangeEvent, KeyboardEvent,useState} from 'react';
import '../App.css';
import {v1} from "uuid";
import MyInput from "../common/Input/MyInput";
import MyButton from "../common/Button/MyButton";
import s from "./Task3.module.css";

export type TaskType = {
    id: string
    name: string
}

function Task3() {
    let [text, setText] = useState("");
    let [error, setError] = useState<string | null>(null);
    let [tasks, setTasks] = useState(Array<TaskType>());

    function updateAlert(name: string) {
        let task = {id: v1(), name: name};
        let newTask = [task, ...tasks];
        setTasks(newTask);
    }

    const addAlert = () => {
        if (text.trim() !== "") {
            updateAlert(text);
            alert("Привет " + text);
            setText("");
        } else {
            setError("Alert is required!")
        }
    }

    function removeTask(id: string) {
        let filterTasks = tasks.filter(t => t.id !== id);
        setTasks(filterTasks);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addAlert();
        }
    }

    return (
        <div>
            <span className={s.spn}>{tasks.length}</span>
            <MyInput value={text} error={error} onChangeHandler={onChangeHandler} onKeyPressHandler={onKeyPressHandler}/>
            <MyButton className={undefined} text={"+"} onClick={addAlert}/>
            <ul>
                {
                    tasks.map(t => {
                        const onClickHandler = () => removeTask(t.id)
                        return <li key={t.id} className="">
                            <span>{t.name}</span>
                            <MyButton className={undefined} text={"x"} onClick={onClickHandler}/>
                        </li>
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default Task3;