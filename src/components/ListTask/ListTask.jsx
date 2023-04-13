import React, { useState, useContext } from 'react';
import ItemTask from '../ItemTask/ItemTask';
import TaskContext from '../../context/TaskContext';
import './ListTask.css';

const ListTask = ({ hasInput, hasImg, status, handleDelete }) => {
	const [isChange, setIsChange] = useState(false)
	const [updateInput, setUpdateInput] = useState('')
	const { url } = useContext(TaskContext)

	const handleChange = (inputTask) => {
		setIsChange(true)
		setUpdateInput(inputTask)
	}

	const handleCancel = () => {
		setIsChange(false)
	}
	const handleAccept = () => {
		if(updateInput.text!== ""){
			setIsChange(false)
			fetch(`${url.urlOneTask}${updateInput._id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ text: updateInput.text })
			})

		}else{
			alert("Error")
		}
	}

	const handleText = (event) => {
		setUpdateInput({ ...updateInput, text: event.target.value })
	}

	return (
		<>
			<div className='flex-task__list'>
				{status.map((list) => (
					<ItemTask
						key={list._id}
						list={list}
						hasInput={hasInput}
						handleDelete={handleDelete}
						handleChange={handleChange}
						hasImg={hasImg}
					/>
				))}

			</div>
			{isChange && <section>
				<h2>Edit</h2>
				<label>Text:<input value={updateInput.text} onChange={handleText} /></label>
				<button className='button__accept--success' onClick={handleAccept}>Accept</button>
				<button className='button__cancel--error' onClick={handleCancel}>Cancel</button>
			</section>}
		</>
	);
};

export default ListTask;
