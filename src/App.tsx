import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {Filter, TaskType} from "./types/types";
import {v1} from "uuid";

type ToDoListDataType = {
    id: string
    toDoListTitle: string
    tasks: Array<TaskType>
}


const App = () => {

    const toDoListData: ToDoListDataType = {
        id: v1(),
        toDoListTitle: 'What to learn',
        tasks: [
            {id: v1(), taskTitle: 'CSS', isDone: true},
            {id: v1(), taskTitle: 'JS', isDone: true},
            {id: v1(), taskTitle: 'React', isDone: false},
        ]
    }
    const [list, setList] = useState<ToDoListDataType>(toDoListData)
    const [filter, setFilter] = useState<Filter>("ALL")
    let filteredList: ToDoListDataType = {...list, tasks: [...list.tasks]}
    const tasksFilter = (filter: Filter) => {
        setFilter(filter)
    }
    const removeTask = (taskId: string) => setList({...list, tasks: [...list.tasks.filter(t => t.id !== taskId)]})
    const addTask = (taskTitle: string) => {
        let newTask = {id: v1(), taskTitle: taskTitle, isDone: false};
        let newTaskAddedToDOList = {...list, tasks: [...list.tasks, newTask]}
        setList(newTaskAddedToDOList)
    }


    if (filter === "ALL") filteredList = list

    if (filter === "ACTIVE") {
        filteredList.tasks = filteredList.tasks.filter((t) => !t.isDone)
    }

    if (filter === "COMPLETED") {
        filteredList.tasks = filteredList.tasks.filter((t) => t.isDone)

    }

    return (
        <div className="App">
            <TodoList tasks={filteredList.tasks}
                      toDoListTitle={list.toDoListTitle}
                      tasksFilter={tasksFilter}
                      removeTask={removeTask}
                      addTask={addTask}/>
        </div>
    );
}


export default App;
