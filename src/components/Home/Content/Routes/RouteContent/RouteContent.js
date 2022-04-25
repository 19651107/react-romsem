import React, {useEffect, useState} from 'react';
import axios from "axios";
import SortItem from "../SortItem/SortItem";
import {Link} from "react-router-dom";
import PizzaSize from "./PizzaSize";
import WantBuy from "./WantBuy";
import Price from "./Price";
import Card from "./Card/Card";

const RouteContent = ({Logo, title, path}) => {

    const [arr, setArr] = useState([])
    const [sort,setSort] = useState('Название')

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
                        return a.price - b.price && a.priceMiddle - b.priceMiddle || a.priceLarge - b.priceLarge
                    } else if (sort === 'Сначала дороже'){
                        return b.price - a.price && b.priceMiddle - a.priceMiddle || b.priceLarge - a.priceLarge
                    } else if (sort === 'Вес'){
                        return a.weight - b.weight
                    } else if (sort === 'Количество кусочков') {
                        return a.count - b.count
                    }
                }).map((item) => (
                    <Card item={item} path={path} key={item.id}/>
                ))}
            </div>
        </div>
    );
};

export default RouteContent;