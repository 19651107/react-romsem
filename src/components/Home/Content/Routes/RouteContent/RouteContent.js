import React, {useEffect, useState} from 'react';
import axios from "axios";
import SortItem from "../SortItem/SortItem";
import {Link} from "react-router-dom";
import PizzaSize from "./PizzaSize";
import WantBuy from "./WantBuy";
import Price from "./Price";
import City from "../../City/City";

const RouteContent = ({Logo, title, path}) => {

    const [arr, setArr] = useState([])
    const [sort,setSort] = useState('По умолчанию')
    const [size,setSize] = useState(0)

    useEffect(() => {
        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setArr(data))
    }, [])

    return (
        <div>
            <div className="content__header">
                <div className="content__header-left">
                    <img className="content__header-img" src={Logo} alt={title}/>
                    <h3 className="content__header-title">{title}</h3>
                </div>
                <div className="content__header-sort">
                    <p className="content__header-sort-title">Сортировка</p>
                    <p className="content__header-sort-default">{sort}<span>︾</span></p>
                    <ul className="content__header-sort-list">
                        <SortItem text="Название" setSort={setSort}/>
                        <SortItem text="Сначала дешевле" setSort={setSort}/>
                        <SortItem text="Сначала дороже" setSort={setSort}/>
                        {path === 'sets'?
                            <>
                                <SortItem text="Вес" setSort={setSort}/>
                                <SortItem text="Количество кусочков" setSort={setSort}/>
                            </>
                            : ''
                        }
                    </ul>
                </div>
            </div>
            <div className="content__row">
                {arr.sort((a,b)=>{
                    if (sort === 'Название'){
                        return a.title > b.title ? 1 : -1
                    } else if (sort === 'Сначала дешевле'){
                        return a.price - b.price
                    } else if (sort === 'Сначала дороже'){
                        return b.price - a.price
                    } else if (sort === 'Вес'){
                        return a.weight - b.weight
                    } else if (sort === 'Количество кусочков') {
                        return a.count - b.count
                    }
                }).map((item) => (
                    <div className="content__card" key={item.id}>
                       <Link to={`/${path}/product/${item.id}`}><img className="content__card-img" src={item.imageUrl} alt=""/></Link>
                        <h4 className="content__card-title">{item.title}</h4>
                        {path === 'pizza' ? <><PizzaSize sizes={item.sizes}/></> : path === 'rolls' || path === 'sushi' ?
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
                            <Price price={item.price}/>
                            <WantBuy item={item}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RouteContent;