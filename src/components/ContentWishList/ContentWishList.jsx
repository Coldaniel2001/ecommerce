import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TaskContext from '../../context/TaskContext';
import './ContentWishList.css';

const ContentWishList = ({tasks}) => {
	const { allTasks, setAllTasks } = useContext(TaskContext);

	return (
	<div className='flex__div--status'>
		<div className='status__div'>
			{tasks.length} Item
		</div>
		<div className='status__div'>
			<NavLink to={'/'} className={({isActive})=>isActive?'active':'desactive'}>All</NavLink>
		</div>
		<div className='status__div'>
			<NavLink to={'/active'} className={({isActive})=>isActive?'active':'desactive'}>Active</NavLink>
		</div>
		<div className='status__div'>
			<NavLink to={'/completed'} className={({isActive})=>isActive?'active':'desactive'}>Completed</NavLink>
		</div>
		<div className='status__div' >
			Clear <br/> Completed
		</div>
	</div>
	)
};

export default ContentWishList;
