import React, { useContext, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import UserAuthContext from '../../context/UserAuth/UserAuthContext';





const Login = () => {



	const { url } = useContext(UserContext)
	const { dataLogin, setDataLogin, login, isLogged } = useContext(UserAuthContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (isLogged) {
			navigate("/")
		}
	}, [isLogged, navigate])

	const handleSubmit = (event) => {
		event.preventDefault();
		const body = {
			gmail: dataLogin.gmail,
			password: dataLogin.password
		}
		fetch(`${url.urlAllUser}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
			.then(response => response.json())
			.then(data => {
				if (data.status === 'OK') {
					login(data.user)
				}
				if (data.status === 'NOT FOUND') {
					alert('User not found')
				}
			}
			)
	}

	const handleInput = (event) => {
		setDataLogin({ ...dataLogin, [event.target.name]: event.target.value })
	}

	return (
		<section className='bg-blue-200 flex justify-center items-center w-full h-screen'>

			<form onSubmit={handleSubmit} className='bg-blue-300 bg-opacity-25 border-1 rounded-md flex flex-col justify-around items-center w-[30%] h-[80%]'>
				<div>
					<p className='text-[3rem] font-bold'>
						Login
					</p>
				</div>
				<div className='w-[20rem] border-b-[0.2rem] '>
					<label className='font-semibold'>gmail:<input type='email' name="gmail" className='bg-transparent outline-0 font-normal' onChange={handleInput} required /></label>
				</div>
				<div className='w-[20rem] border-b-[0.2rem]'>
					<label className='font-semibold'>contraseña:<input type='password' name="password" className='bg-transparent outline-0 font-normal' onChange={handleInput} required /></label>
				</div>
				<div>
					<span className='text-sm'>¿Tu no tienes cuenta? <Link className='text-blue-500 hover:text-red-500' to="/register">pincha aqui</Link></span>
				</div>

				<button type='submit' className='bg-blue-800 text-white w-[12rem] h-[2.5rem]'>Entrar</button>
			</form>
		</section>
	);
};

export default Login;
