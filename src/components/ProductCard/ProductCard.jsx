import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useSearchParams } from "react-router-dom"
import ItemProduct from "../ItemProduct/ItemProduct";
import "./ProductCard.css"
import NavBar from "../NavBar/NavBar";
import search from '../../images/search/search.png';
import AdminControl from "../AdminControl/AdminControl";
import { AuthContext } from "../../auth/context/AuthContext";

export const ProductCard = () => {

    const { allElectric } = useContext(ProductContext);
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get("q") ?? ""

    const {user} = useContext(AuthContext);
    
    const handleInput = (event) => {
        setSearchParams({ q: event.target.value })
    }

    return (
        <>
            <NavBar />
            <div className="product__div--search">
                <input value={query} className='productSearch__input' placeholder="Buscador" onChange={handleInput} />
                <img className='productSearch__img' src={search} alt={"search"} />
            </div>
            {user.admin?<AdminControl/>:null}
            <div className="grid__div--container">
                {
                    allElectric.filter(({ id, title }) => {
                        if (!query) return true
                        else {
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


