import React, {useContext, useState} from 'react';
import PizzaSize from "../../Routes/RouteContent/PizzaSize";
import Price from "../../Routes/RouteContent/Price";
import WantBuy from "../../Routes/RouteContent/WantBuy";
import {CustomContext} from "../../../../../Context";

const ProductContent = ({item}) => {

    const {plusOne,minusOne} = useContext(CustomContext)
    const [pizza,setPizza] = useState(item)

    return (
        <div className="product__content">
            <img className="product__content-img" src={item.imageUrl} alt={item.title}/>
            <div className="product__content-info">
                <h2 className="product__content-title">{item.title}</h2>
                <PizzaSize item={pizza.categories === 'pizza' ? pizza : item} setPizza={setPizza}/>
                <div className="product__content-buy">
                    <Price item={pizza.categories === 'pizza' && pizza.size === 0
                        ? item.price
                        : pizza.categories === 'pizza' && pizza.size === 1
                            ? item.priceMiddle : pizza.categories === 'pizza' && pizza.size === 2 ? item.priceLarge : item.price}/>
                    <div className="product__content-pay">
                        <span className="product__content-pay-back" onClick={()=> minusOne(pizza.categories === 'pizza' ? pizza : item)}>-</span>
                        <span className="product__content-pay-count">1 сом</span>
                        <span className="product__content-pay-btn" onClick={()=> plusOne(pizza.categories === 'pizza' ? pizza : item)}>+</span>
                    </div>
                </div>
                <WantBuy item={pizza.categories === 'pizza' ? pizza : item}/>
            </div>
        </div>
    );
};

export default ProductContent;