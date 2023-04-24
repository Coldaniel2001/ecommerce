import React, { createContext, useEffect, useState, useContext } from 'react'

import UserAuthContext from './UserAuth/UserAuthContext';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [allTasks, setAllTasks] = useState([])
    const [url, setUrl] = useState({
        urlAllTask: "http://localhost:4002/todos",
        urlOneTask: "http://localhost:4002/todos/",
        urlupdateDoneTask: "http://localhost:4002/todos/done"
    })

    const { user } = useContext(UserAuthContext)


    useEffect(() => {
        if (user) {
            async function getTaskOfUsers() {
                const response = await fetch(`${url.urlOneTask}${user.id}`);
                const data = await response.json()
                setAllTasks(data.user.todos)
            }

            getTaskOfUsers()
        }
    }, [url.urlOneTask, user])

    return (
        <TaskContext.Provider value={{ allTasks, setAllTasks, url, setUrl }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;
