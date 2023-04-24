import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import './ItemTask.css';
import Delete from '../../images/deleteTask/deleteTask.png';

import { AiFillEdit } from "react-icons/ai"


const ItemTask = ({ list, hasInput = false, hasImg = false, handleDelete, handleChange }) => {

	const { allTasks, setAllTasks, url } = useContext(TaskContext)
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
		const filterAllTask = allTasks.filter((task) => {
			return task._id !== list._id
		})

		if (list.done === true) {
			fetch(`${url.urlupdateDoneTask}${list._id}`, {
				method: "PUT",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ done: false })
			})
				.then(response => {
					const doneTask = { ...list, done: false }
					setAllTasks([...filterAllTask, doneTask])
				})
		} else if (list.done === false) {
			fetch(`${url.urlupdateDoneTask}${list._id}`, {
				method: "PUT",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ done: true })
			})
				.then(response => {
					const doneTask = { ...list, done: true }
					setAllTasks([...filterAllTask, doneTask])
				})
		}

	}

	return (
		<>
			<ul className='list-task__ul--insert'>
				<li className='flex__li'>
					{hasInput && <div className='div_flexLi'><input type='checkbox' checked={isChecked} onChange={handleOnChange} /></div>}
					<div className='div_flexLi'>
						<b>{list.text}</b>
					</div>
					<div className='div_flexLi'>
						<AiFillEdit className='update_images' onClick={() => handleChange(list)} />
					</div>

					{hasImg && <div className='div_flexLi'> <img className='delete_images' src={Delete} onClick={() => handleDelete(list._id)} alt="delete task in the images" /></div>}

				</li>
			</ul>

		</>
	);
};

export default ItemTask;
