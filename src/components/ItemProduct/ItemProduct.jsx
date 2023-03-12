import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import addCart from '../../images/iconsCart/addCart.png';
import imgDelete from '../../images/iconsAdmin/icon-delete.png'
import imgEdit from '../../images/iconsAdmin/icon-edit.png'
import { AuthContext } from '../../auth/context/AuthContext';
import "./ItemProduct.css";


const ItemProduct = ({ product }) => {
	const { title, img, description, price, id } = product;
	const { user } = useContext(AuthContext);

	const [amountProducts, setAmountProducts] = useState(0);
	const { cart, setCart, cartTotal, setCartTotal } = useContext(ProductContext);

	const [isEdit, setIsEdit] = useState(false);
	const [titleEdit, setTitleEdit] = useState("");
	const [priceEdit, setPriceEdit] = useState(Number);
	const [descriptionEdit, setDescriptionEdit] = useState("");
	const [imageEdit, setImageEdit] = useState(Object);
	const [productId, setProductId] = useState(Number);

	const addAmountProducts = (productId, productPrice) => {
		setAmountProducts(amountProducts + 1);
		setCartTotal(parseInt(cartTotal + productPrice));


		const cartContainProduct = cart.find(
			product => product.id === productId
		)
		return cartContainProduct ?
			setCart(cart.map(productCart =>
				productCart.id === productId
					? { ...productCart, quantity: productCart.quantity + 1 }
					: productCart
			))

			: setCart([...cart, product]);

	}

	const deleteProducts = (idProducts) => {
		fetch(`http://localhost:3000/products/${idProducts}`, {
			method: 'DELETE',
		})

			.catch(error => console.log(error))
	}

	const showEditProducts = (product) => {
		setIsEdit(true)
		setTitleEdit(product.title)
		setPriceEdit(product.price)
		setDescriptionEdit(product.description)
		setImageEdit(product.img)
		setProductId(product.id)
	}

	const handleSubmit = () => {
		setIsEdit(false)
		const urlImage = "./images/ElectricSkate/";
		fetch(`http://localhost:3000/products/${productId}`, {
			method: 'PUT',
			body: JSON.stringify({
				title: titleEdit,
				img: urlImage + imageEdit.name,
				price: parseInt(priceEdit),
				description: descriptionEdit,
				quantity: 1
			}),
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		})
			.then(response => response.json())
	}


	const handleTitle = (event) => {
		setTitleEdit(event.target.value);
	}

	const handlePrice = (event) => {
		setPriceEdit(event.target.value)
	}

	const handleDescription = (event) => {
		setDescriptionEdit(event.target.value);
	}

	const handleImage = (event) => {
		setImageEdit(event.target.files[0])
	}

	return (
		<>
			<div className='card-product__div--container'>
				<div>
					<h2>{title}</h2>
				</div>
				<div>
					<img className='img-product__img' src={img} alt="imgProduct" />
				</div>
				<div>
					<p>{description}</p>
				</div>
				<div className='info-product__div--container'>
					<img src={addCart} alt="addCart" onClick={() => addAmountProducts(id, price)} />
					{user.admin ? <img src={imgDelete} alt="deleteProduct" onClick={() => deleteProducts(id)} /> : null}
					{user.admin ? <img src={imgEdit} alt="editProduct" onClick={() => showEditProducts(product)} /> : null}
					<p>{price} €</p>
					<p>{amountProducts}</p>
				</div>
			</div>
			{isEdit ? <div className='create-product__div--container'>
				<div className="container-product__div">
					<h1>Editar Productos</h1>

					<form onSubmit={handleSubmit} className='form-create-product__form'>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Titulo: </label></div>
							<div className='form-input__div'><input className='input-product__input' type="text" name='title' value={titleEdit} onChange={handleTitle} required /></div>
						</div>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Imagen: </label></div>
							<div className='form-input__div'><input className='input-product__input' type="file" name='image' onChange={handleImage} required /></div>
						</div>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Precio: </label></div>
							<div className='form-input__div'><input className='input-product__input' type="number" name='price' value={priceEdit} onChange={handlePrice} required /></div>
						</div>

						<div>
							<div className='form-label__div'><label className='label-product__label'>Descripción: </label></div>
							<div className='form-input__div'><textarea className='input-product__input' type="text" name='description' rows="10" value={descriptionEdit} onChange={handleDescription} required /></div>
						</div>

						<div>
							<button className='create-product__button' type='submit'>Editar</button>
						</div>

					</form>

				</div>
			</div> : null}

		</>

	)
};

export default ItemProduct;
