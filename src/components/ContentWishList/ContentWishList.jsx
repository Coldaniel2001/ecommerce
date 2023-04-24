import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './ContentWishList.css';
import TaskContext from '../../context/TaskContext';

const ContentWishList = ({tasks}) => {

	const {allTasks, setAllTasks, url} = useContext(TaskContext)
	
	const handleCleanCompleted = () =>{
		
		fetch(`${url.urlAllTask}`,{
			method:"DELETE",
		})
		.then(resolve=>{
			const filterCompleted = allTasks.filter(list=>{
				return list.done !== true
			})
			setAllTasks(filterCompleted)
		})
	}

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
			<span className='cursor-pointer' onClick={handleCleanCompleted}>Clear <br/> Completed</span>
		</div>
	</div>
	)
};

export default ContentWishList;
