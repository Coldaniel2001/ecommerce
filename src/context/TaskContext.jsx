import React, { createContext, useEffect, useState } from 'react'

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    const [allTasks, setAllTasks] = useState(taskList)

    useEffect(() => {
        const taskListToSave = JSON.stringify(allTasks)
        localStorage.setItem("taskList", taskListToSave)
    }, [allTasks]);

    return (
        <TaskContext.Provider value={{ allTasks, setAllTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
