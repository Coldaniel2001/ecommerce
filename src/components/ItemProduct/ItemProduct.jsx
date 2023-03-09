import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import addCart from '../../images/iconsCart/addCart.png';

const ItemProduct = ({ product }) => {
	const { title, img, description, price, id } = product;

	const [amountProducts, setAmountProducts] = useState(0);
	const { cart, setCart } = useContext(ProductContext);

	const addAmountProducts = (productId) => {
		setAmountProducts(amountProducts + 1);

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
			<img src={addCart} alt="addCart" onClick={() => addAmountProducts(id)}/>
			<p>{price}</p>
			<p>{amountProducts}</p>
		</div>
	</div>

)
};

export default ItemProduct;
