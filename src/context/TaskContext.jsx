import React, { createContext, useEffect, useState } from 'react'

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
   
    const [allTasks, setAllTasks] = useState([])
    const [url, setUrl] = useState({
        urlAllTask:"http://localhost:4002/todos",
        urlOneTask:"http://localhost:4002/todos/"
    })


    useEffect(()=>{
        async function fetchData() {
            const response = await fetch(url.urlAllTask);
            const data = await response.json()
            setAllTasks(data.allTodos)
        }
        fetchData()
    },[url.urlAllTask, allTasks])

    return (
        <TaskContext.Provider value={{ allTasks, setAllTasks, url, setUrl }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
