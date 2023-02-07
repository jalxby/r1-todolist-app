import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import './App.css'
import {TodoListType} from "./types/types";
import TasksList from "./TasksList";


export const TodoList: FC<TodoListType> = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }
    const onKeyDownEventHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey && event.key === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }
    const allFilter = () => props.tasksFilter("ALL")
    const completedFilter = () => props.tasksFilter("COMPLETED")
    const activeFilter = () => props.tasksFilter("ACTIVE")

    return (
        <div>
            <fieldset>
                <legend>{props.toDoListTitle}</legend>
                <div>
                    <input
                        onChange={onChangeInputHandler}
                        value={newTaskTitle}
                        placeholder={'Enter Task Title'}
                        onKeyDown={onKeyDownEventHandler}
                    />
                    <button onClick={addTask}>+</button>
                </div>
                <TasksList tasks={props.tasks} removeTask={props.removeTask}/>
                <div>
                    <button onClick={allFilter}>all</button>
                    <button onClick={completedFilter}>completed</button>
                    <button onClick={activeFilter}>active</button>
                </div>
            </fieldset>
        </div>
    );
};

export default TodoList;