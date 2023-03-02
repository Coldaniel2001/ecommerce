import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import ContainerWishList from '../ContainerWishList/ContainerWishList';
import ContentWishList from '../ContentWishList/ContentWishList';
import ListTask from '../ListTask/ListTask';

const Completed = () => {

	const { allTasks, setAllTasks } = useContext(TaskContext);

	const completedTask = allTasks.filter((task)=>{
		return task.done===true
	})

	return (
		<ContainerWishList>
			<ListTask hasInput={true} status={completedTask} />
			<ContentWishList tasks={completedTask} />
		</ContainerWishList>
	)
};

export default Completed;
