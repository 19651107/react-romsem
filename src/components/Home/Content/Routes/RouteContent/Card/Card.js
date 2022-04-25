import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PizzaSize from "../PizzaSize";
import Price from "../Price";
import WantBuy from "../WantBuy";

const Card = ({item,path}) => {

    const [pizza,setPizza] = useState(item)

    return (
        <div className="content__card">
            <Link to={`/${path}/product/${item.id}`}><img className="content__card-img" src={item.imageUrl} alt=""/></Link>
            <h4 className="content__card-title">{item.title}</h4>
            {path === 'pizza' ? <><PizzaSize item={path === 'pizza' ? pizza : item} setPizza={setPizza}/></> : path === 'rolls' || path === 'sushi' ?
                <p className="content__card-ingr">
                    {item.ingredients.filter((item, idx) => idx < 4).join(',')}...
                </p> : path === 'sets' ?
                    <p className="content__card-ingr">
                        {item.weight} грамм
                        <br/>
                        {item.combo.filter((item, idx) => idx < 1).join(',')}...
                    </p> : path === 'wok' || path === 'salad' || path === 'soup' ?
                        <p className="content__card-ingr">
                            {item.ingredients.filter((item, idx) => idx < 3).join(',')}...
                        </p>
                        : path === 'drinks' ?
                            <p className="content__card-ingr">
                                {item.categories}...
                            </p> : path === 'corndog' ?
                                <p className="content__card-ingr">
                                    {item.ingredients.filter((item, idx) => idx < 2).join(',')}...
                                </p> : ''
            }
            <div className="content__card-bot">
                <Price item={path === 'pizza' && pizza.size === 0
                    ? item.price
                    : path === 'pizza' && pizza.size === 1
                        ? item.priceMiddle : path === 'pizza' && pizza.size === 2 ? item.priceLarge : item.price}/>
                <WantBuy item={path === 'pizza' ? pizza : item}/>
            </div>
        </div>
    );
};

export default Card;