import React, {useCallback, useEffect} from "react";
import '../../../App.css';
import TodoItemComponent from "./TodoItemComponent";
import {useState} from 'react'
import {TodoItemModel} from "../models/TodoItemModel";

const TodoComponent = () => {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState<TodoItemModel[]>([])

    const addTodos = useCallback((dataModel: TodoItemModel) => {
        todos.push(dataModel)
        setTodos(todos)
    }, [todos]);

    const deleteTask = useCallback((id: number) => {
        const newList = todos.filter((value) => {
            return value.taskId !== id;
        })
        setTodos(newList);
    }, [todos])

    const markTaskAsDone = useCallback((id: number) => {
        let index = todos.findIndex((value) => {
            return value.taskId === id;
        })
        if (index !== -1) {
            todos[index].isFullFilled = !todos[index].isFullFilled;
        }
        setTodos(todos)
    }, [todos])


    return (
        <>
            <h1>Todo List</h1>
            <div className='input-container'>
                <input placeholder={"Task Name"} value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}></input>
            </div>
            <br/>
            <div className='submit-button'>
                <button onClick={(e) => {
                    if (inputValue.length == 0) {
                        console.error("Empty Task not allowed")
                    } else {
                        const dataModel: TodoItemModel = new TodoItemModel(inputValue, Date.now());
                        addTodos(dataModel)
                        setInputValue("")
                        console.log(todos.length)
                    }
                }}>+
                </button>
            </div>
            <div className='todo-component'>
                {
                    todos.map((value: TodoItemModel) => {
                        return <TodoItemComponent dataModel={value} onDelete={() => {
                            deleteTask(value.taskId)
                        }} onMark={() => {
                            markTaskAsDone(value.taskId)
                        }}></TodoItemComponent>
                    })
                }
            </div>
        </>
    )
}
export default TodoComponent