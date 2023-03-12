import React, {  useState } from 'react';
import "./AdminControl.css"

const AdminControl = () => {

	const [isCreate, setCreate] = useState(false);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(Number);
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(Object);


	const handleCreateProducts = () => {
		setCreate(true)
	}

	const handleSubmit = () => {
		setCreate(false)
		const urlImage = "./images/ElectricSkate/";
		// useEffect(() => {
			// const fetchCreatedData = () => {
				fetch('http://localhost:3000/products', {
					method: 'POST',
					body: JSON.stringify({
						title: title,
						img: urlImage+image.name,
						price: parseInt(price),
						description: description,
						quantity: 1
					}),
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					}
				})
					.then(response => response.json())

			// }
			// fetchCreatedData();
		// }, [])

	}


	const handleTitle = (event) => {
		setTitle(event.target.value);
	}

	const handlePrice = (event) => {
		setPrice(event.target.value)
	}

	const handleDescription = (event) => {
		setDescription(event.target.value);
	}

	const handleImage = (event) => {
		setImage(event.target.files[0])
	}

	return (
		<>
			<div className='button-center__div'>
				<button onClick={handleCreateProducts}>Crear un nuevo producto</button>
			</div>
			{isCreate ? <div className='create-product__div--container'>
				<div className="container-product__div">
					<h1>Crear Productos</h1>

					<form onSubmit={handleSubmit} className='form-create-product__form'>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Titulo: </label></div>
							<div className='form-input__div'><input className='input-product__input' type="text" name='title' value={title} onChange={handleTitle} required /></div>
						</div>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Imagen: </label></div>
							<div className='form-input__div'><input className='input-product__input' type="file" name='image' onChange={handleImage} required /></div>
						</div>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Precio: </label></div>
							<div className='form-input__div'><input className='input-product__input' type="number" name='price' value={price} onChange={handlePrice} required /></div>
						</div>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Descripción: </label></div>
							<div className='form-input__div'><textarea className='input-product__input' type="text" name='description' rows="10" value={description} onChange={handleDescription} required /></div>
						</div>

						<div>
							<button className='create-product__button' type='submit'>Crear</button>
						</div>

					</form>

				</div>
			</div> : null}
		</>
	);
};

export default AdminControl;
