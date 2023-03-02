import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import ContainerWishList from '../ContainerWishList/ContainerWishList';
import ContentWishList from '../ContentWishList/ContentWishList';
import ListTask from '../ListTask/ListTask';
import './Home.css';

const Home = () => {

	const { allTasks, setAllTasks } = useContext(TaskContext)
	const [task, setTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setAllTasks([...allTasks, {
			id: Date.now(),
			text: task,
			done:false,
			isEdtiting:false
		}
		])
	}


	const onChangeTask = (e) => {
		setTask(e.target.value)
	}

	const handleDelete = (taskId) => {
		setAllTasks(allTasks.filter(task => task.id !== taskId))
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
