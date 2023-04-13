import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import ContainerWishList from '../ContainerWishList/ContainerWishList';
import ContentWishList from '../ContentWishList/ContentWishList';
import ListTask from '../ListTask/ListTask';

const Active = () => {
	const { allTasks } = useContext(TaskContext)
	const activeTask = allTasks.filter((task) => {
		return task.done === false
	})



	return (
		<ContainerWishList>
			<ListTask hasInput={true} status={activeTask} />
			<ContentWishList tasks={activeTask} />
		</ContainerWishList>

	)
};

export default Active;
