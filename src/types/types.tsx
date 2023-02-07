export type TodoListType = {
    toDoListTitle: string
    tasks: Array<TaskType>
    tasksFilter: (filter: Filter) => void
    removeTask: (taskId: string) => void
    addTask: (taskTitle: string) => void
}

export type TaskType = {
    id: string
    taskTitle: string
    isDone: boolean
}

export type Filter = 'ALL' | 'COMPLETED' | 'ACTIVE'