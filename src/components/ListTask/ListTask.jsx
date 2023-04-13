import React from 'react';
import ItemTask from '../ItemTask/ItemTask';
import './ListTask.css';

const ListTask = ({ hasInput, hasImg, status, handleDelete }) => {
	return (
		<div className='flex-task__list'>
			{status.map((list) => (
				<ItemTask
					key={list._id}
					list={list}
					hasInput={hasInput}
					handleDelete={handleDelete}
					hasImg={hasImg}
				/>
			))}

		</div>
	);
};

export default ListTask;
