import React from 'react';
import './App.css';
import Task1 from "./Task1/Task1";
import {v1} from 'uuid';

function App() {
    const messages = [{
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
    return (
        <div className="app-wrapper">
            <Task1 messages={messages}/>
        </div>
    );
}

export default App;
