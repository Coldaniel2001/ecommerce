import React from 'react';
import frontPage from '../../images/Portada/frontPage.png'
import './Home.css'
import NavBar from '../NavBar/NavBar';


const Home = () => {
	return (

		<>
			<NavBar />
			<img className='front-Page__img' src={frontPage} alt="front-page" />;
		</>

	)
};

export default Home;
