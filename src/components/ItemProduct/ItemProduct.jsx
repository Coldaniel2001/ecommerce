import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Button } from '../Button/Button';

const ItemProduct = ({ product }) => {
	const { title, img, description, price } = product;

	const [amountProducts, setAmountProducts] = useState(0);
	const { cart, setCart } = useContext(ProductContext);

	const addAmountProducts = (hasCart) => {
		setAmountProducts(amountProducts + 1);
		setCart([...cart, product]);
	}
	
	return (
		<div>
			<div>
				<h2>{title}</h2>
			</div>
			<div>
				<img src={img} alt="imgProduct" />
			</div>
			<div>
				<p>{description}</p>
			</div>
			<div>
				<Button
					value={'Añadir'}
					classes={'nada'}
					onclick={addAmountProducts}
				/>
				<p>{price}</p>
				<p>{amountProducts}</p>
			</div>
		</div>

	)
};

export default ItemProduct;
