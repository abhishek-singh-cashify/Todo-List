import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from "./modules/todo/components/TodoComponent";

function App() {
    return (
        <main>
            <h1>Todo List</h1>
            <div className='input-container'>
                <input placeholder={"Task Name"}></input>
            </div>
            <br/>
            <div className='submit-button'>
                <button>+</button>
            </div>
        </main>
    );
}

export default App;
