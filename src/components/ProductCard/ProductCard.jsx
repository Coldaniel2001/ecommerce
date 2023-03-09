import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import {useSearchParams} from "react-router-dom"
import ItemProduct from "../ItemProduct/ItemProduct";
import "./ProductCard.css"

import search from '../../images/search/search.png';

export const ProductCard = () => {

    const { allElectric } = useContext(ProductContext);
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get("q") ?? ""

    const handleInput = (event) =>{
        setSearchParams({q : event.target.value})
    }

    return (
        <>
            <div className="product__div--search">
                <input value={query} className='productSearch__input' placeholder="Buscador" onChange={handleInput} />
                <img className='productSearch__img' src={search} alt={"search"} />
            </div>
            <div className="grid__div--container">
                {
                    allElectric.filter(({id, title})=>{
                        if(!query) return true
                        else{
                            return title.toLowerCase().includes(query.toLowerCase())
                        }

                    }).map((list) => (
                        <ItemProduct
                            key={list.id}
                            product={list}
                        />
                    ))
                }
                
            </div>
        </>

    );
}


