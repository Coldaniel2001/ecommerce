import React, { useRef, useState } from 'react';
import './Login.css'

const Login = () => {
	const passwordRef = useRef();
	const [showPassword, setShowPassword] = useState('password')
	const [lock, setLock] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleType = (event) => {
		if (passwordRef.current.type === 'password') {
			setShowPassword('text')
			setLock(false)
		} else {
			setShowPassword('password')
			setLock(true)
		}
	}
	const handleEmail = (event) => {
		setEmail(event.target.value)
		if(emailError)setEmailError(false);
	}

	const handlePassword = (event) => {
		setPassword(event.target.value)
		if(passwordError)setPasswordError(false);
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (email.toLowerCase() === "danielvillenawilson@gmail.com" && password === "1234") {
			console.log("respuesta correcta")
		} 
		if (email.toLowerCase() !== "danielvillenawilson@gmail.com") {
			setEmailError(true)
		} 
		if(password !== "1234"){
			setPasswordError(true)
		}
	}

	return (
		<section className='container__login'>
			<div className="form__box">
				<div className="form__value">
					<form onSubmit={handleSubmit}>
						<h2 className='title__h2'>Login</h2>
						<div className="input__box">
							<ion-icon name="mail-outline"></ion-icon>
							<input type="email" value={email} onChange={handleEmail} required />
							<label >Correo</label>
							{emailError ? <span>El correo electronico ha sido incorrecto, por favor insertelo de nuevo</span>:""}
						</div>
						<br/>
						<div className="input__box">
							{lock ? <ion-icon name="lock-closed-outline" onClick={handleType}></ion-icon> : <ion-icon name="lock-open-outline" onClick={handleType}></ion-icon>}
							<input type={showPassword} value={password} onChange={handlePassword} required ref={passwordRef} />
							<label >Contraseña</label>
							{passwordError ? <span>La contraseña ha sido incorrecto, por favor insertelo de nuevo</span>: ""}
						</div>
						<div className="forget">
							<label ><input type="checkbox" />Recuerdame <span>Olvidar Contraseña</span> </label>
						</div>
						<button type='submit' className='login__button'>Log in</button>
						<div className="register">
							<p>No tienes una cuenta <span>Registrar</span></p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
