import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import './ItemTask.css';
import Delete from '../../images/deleteTask/deleteTask.png';

const ItemTask = ({ list, hasInput = false, hasImg = false,handleDelete }) => {
console.log(handleDelete)
	const { allTasks, setAllTasks } = useContext(TaskContext)

	const [isChecked, setIsChecked] = useState(false);
	const handleOnChange = () => {
		setIsChecked(!isChecked);
		const filterAllTask = allTasks.filter((task) => {
			return task.id !== list.id
		})
		if (list.done === true) {
			const doneTask = { ...list, done: false }
			setAllTasks([...filterAllTask, doneTask])
		} else if (list.done === false) {
			const doneTask = { ...list, done: true }
			setAllTasks([...filterAllTask, doneTask])
		}
	}

	return (
		<ul className='list-task__ul--insert'>
			<li className='flex__li'>
				{hasInput && <input type='checkbox' checked={isChecked} onChange={handleOnChange} />}
				<b>{list.text}</b>
				{hasImg && <img className='delete_images' src={Delete}  onClick={()=> handleDelete(list.id)}/>}
			</li>
		</ul>
	);
};

export default ItemTask;
