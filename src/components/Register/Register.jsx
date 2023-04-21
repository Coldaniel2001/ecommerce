import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import UserAuthContext from '../../context/UserAuth/UserAuthContext';

const Register = () => {

	const [dataInput, setDataInput] = useState({
		name: "",
		gmail: "",
		password: "",
	})
	const { url, allUsers, setAllUsers } = useContext(UserContext)
	const { isLogged } = useContext(UserAuthContext)

	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
		event.target.reset()

		
		const gmailRepeat= allUsers.find((users)=>{
			return users.gmail===dataInput.gmail
		})
		if (!gmailRepeat) {

			const body = {

				name: dataInput.name,
				gmail: dataInput.gmail,
				password: dataInput.password
			}
			fetch(url.urlAllUser, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})
				.then(response => response.json())
				.then(data =>
					setAllUsers([...allUsers, {
						_id: data.createUsers._id,
						name: data.createUsers.name,
						gmail: data.createUsers.gmail,
						password: data.createUsers.password
					}]))
		} else {
			alert("El gmail ya existe, por favor pon otro gmail")
		}
	}

	const handleInput = (event) => {
		setDataInput({ ...dataInput, [event.target.name]: event.target.value })
	}

	useEffect(() => {
		if (isLogged) {
			navigate("/")
		}
	}, [isLogged, navigate])


	return (
		<section className='bg-blue-200 flex justify-center items-center w-full h-screen'>

			<form onSubmit={handleSubmit} className='bg-blue-300 bg-opacity-25 border-1 rounded-md flex flex-col justify-around items-center w-[30%] h-[80%]'>
				<div>
					<p className='text-[3rem] font-bold'>
						Registro
					</p>
				</div>
				<div className='w-[20rem] border-b-[0.2rem] '>
					<label className='font-semibold'>Nombre:<input type='text' className='bg-transparent outline-0 font-normal' name='name' onChange={handleInput} required /></label>
				</div>
				<div className='w-[20rem] border-b-[0.2rem] '>
					<label className='font-semibold'>gmail:<input type='email' className='bg-transparent outline-0 font-normal' name='gmail' onChange={handleInput} required /></label>
				</div>
				<div className='w-[20rem] border-b-[0.2rem]'>
					<label className='font-semibold'>contraseña:<input type='password' className='bg-transparent outline-0 font-normal' name='password' onChange={handleInput} minLength={5} maxLength={15} required /></label>
				</div>
				<div>
					<span className='text-sm'>¿Tu no tienes cuenta? <Link className='text-blue-500 hover:text-red-500' to="/login">pincha aqui</Link></span>
				</div>

				<button type='submit' className='bg-blue-800 text-white w-[12rem] h-[2.5rem]'>Registrar</button>
			</form>
		</section>
	);
};

export default Register;
