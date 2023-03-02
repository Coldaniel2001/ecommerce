import React, {useState} from 'react';
import { Button } from '../Button/Button';

const ItemProduct = ({ title, img, description, price }) => {

	const [amountProducts, setAmountProducts] = useState(0);
	const addAmountProducts = () => {
		setAmountProducts(amountProducts + 1);
	}
	const removeAmountProducts = () => {
		if (amountProducts !== 0) {
			setAmountProducts(amountProducts - 1);
		}
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
					value={'Add'}
					classes={'nada'}
					onclick={addAmountProducts}
				/>
				<Button
					value={'Remove'}
					classes={'nada'}
					onclick={removeAmountProducts}
				/>
				<p>{price}</p>
				<p>{amountProducts}</p>
			</div>
		</div>

	)
};

export default ItemProduct;
