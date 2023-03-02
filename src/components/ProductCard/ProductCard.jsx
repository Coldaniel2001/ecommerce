import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import ItemProduct from "../ItemProduct/ItemProduct";
import "./ProductCard.css"

export const ProductCard = ({ title, img, description, price }) => {


    const { allElectric } = useContext(ProductContext);


    return (
        <div className="grid__div--container">
        {allElectric.map((list) => (
                <ItemProduct
                    key={list.id}
                    title={list.title}
                    img={list.img}
                    description={list.description}
                    price={list.price}
                />
        ))}
        </div>
    );
}


