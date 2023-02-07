import React, {FC} from 'react';
import {TaskType} from "./types/types";

type TasksListType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
}
const TasksList: FC<TasksListType> = (props) => {
    const tasksList: JSX.Element | Array<JSX.Element> = props.tasks.length
        ? props.tasks.map((t) => {
            const onRemoveHandler =() => props.removeTask(t.id)
            return (
                <div key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <label>{t.taskTitle} </label>
                    <button onClick={onRemoveHandler}>x</button>
                </div>
            )
        }) : <label>Task list is empty</label>
    return (
        <div>
            {tasksList}
        </div>
    );
};

export default TasksList;