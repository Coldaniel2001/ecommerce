import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContentWishList.css';

const ContentWishList = ({tasks}) => {


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
