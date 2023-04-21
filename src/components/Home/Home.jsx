import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import ContainerWishList from '../ContainerWishList/ContainerWishList';
import ContentWishList from '../ContentWishList/ContentWishList';
import ListTask from '../ListTask/ListTask';
import './Home.css';


const Home = () => {
	const { allTasks, setAllTasks, url } = useContext(TaskContext)

	const [task, setTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(url.urlAllTask, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				text: task,
				done: false
			})
		})
			.then(response => response.json())
			.then(data =>
			
				setAllTasks([...allTasks, {
					_id: data.createTodos._id,
					text: data.createTodos.text,
					done: false
				}]))
	}


	const onChangeTask = (e) => {
		setTask(e.target.value)
	}

	const handleDelete = (taskId) => {

		fetch(`${url.urlOneTask}${taskId}`, {
			method: 'DELETE',
		})
			.then(response =>
				setAllTasks(allTasks.filter((task) => {
					return task._id !== taskId
				}))

			)

	}


	return (
		<ContainerWishList>
			<div className='create-task__div'>
				<div className='flex__input'>
					<form onSubmit={(e) => handleSubmit(e)}>
						<input className='task__input--create' name='task' placeholder='Create new Task' value={task} onChange={(e) => onChangeTask(e)} />
						<button className='task__button--create' type='submit' >Add</button>
					</form>
				</div>

				<ListTask hasImg={true} status={allTasks} handleDelete={handleDelete} />

			</div>

			<ContentWishList tasks={allTasks} />
		</ContainerWishList>
	)


};

export default Home;
