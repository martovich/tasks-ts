import React, {useState} from 'react';
import './App.css';
import Task1 from "./Task1/Task1";
import {v1} from 'uuid';
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";


export type FilterValuesType = "all" | "high" | "middle" | "low";

function App() {
    const messages = [
        {
            id: v1(),
            name: 'Artyom',
            text: 'Lorem ipsum dolor sit amet.',
            time: '11:12'
        },
        {
            id: v1(),
            name: 'Ignat',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, rem.',
            time: '11:14'
        },
        {
            id: v1(),
            name: 'Dima',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            time: '11:15'
        }];

    let [tasks, setTasks] = useState([
        {id: v1(), name: "работа", priority: "high"},
        {id: v1(), name: "аниме", priority: "low"},
        {id: v1(), name: "игры", priority: "middle"},
        {id: v1(), name: "реакт", priority: "high"},
        {id: v1(), name: "хтмл", priority: "low"}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForUI = tasks;

    if (filter === "low") {
        tasksForUI = tasks.filter(t => t.priority === "low");
    }
    if (filter === "middle") {
        tasksForUI = tasks.filter(t => t.priority === "middle");
    }
    if (filter === "high") {
        tasksForUI = tasks.filter(t => t.priority === "high");
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function removeTask(id: string) {
        let filterTasks = tasks.filter(t => t.id !== id);
        setTasks(filterTasks);
    }

    return (
        <div className="app-wrapper">
            <Task1 messages={messages}/>
            <Task2 tasks={tasksForUI}
                   filter={filter}
                   changeFilter={changeFilter}
                   removeTask={removeTask}/>
            <Task3/>
        </div>
    );
}

export default App;
