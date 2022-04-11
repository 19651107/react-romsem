import React from 'react';
import Logo from '../../../assets/Home/logo.png'
import Pizza from '../../../assets/Home/Link/Pizza.svg'
import Sets from '../../../assets/Home/Link/Sets.svg'
import Wok from '../../../assets/Home/Link/Wok.svg'
import Rolls from '../../../assets/Home/Link/Rolls.svg'
import Sushi from '../../../assets/Home/Link/Sushi.svg'
import Salads from '../../../assets/Home/Link/Salads.svg'
import Sups from '../../../assets/Home/Link/Sups.svg'
import CornDogs  from '../../../assets/Home/Link/CornDogs.svg'
import Drinks from "../../../assets/Home/Link/Drinks.svg";
import Action from '../../../assets/Home/Link/Action.svg'
import {Link, NavLink} from "react-router-dom";


const SideBar = () => {
    return (
        <aside className="home__sidebar">
                    <div className="home__sidebar-top">
                        <Link to="/">
                            <img className="home__logo" src={Logo} alt="Romsem logo"/>
                        </Link>
                        <h2 className="home__sidebar-title">Romsem</h2>
                    </div>
            <ul className="home__sidebar-list">
                <li className="home__sidebar-list-item">
                    <img src={Pizza} alt="Pizza"/>
                    <NavLink className="home__sidebar-link" to="/pizza">
                        Пицца</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Sets} alt="Sets"/>
                    <NavLink className="home__sidebar-link" to="/set">
                        Сеты</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Wok} alt="Wok"/>
                    <NavLink className="home__sidebar-link" to="/wok">
                        WOK</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Rolls} alt="Rolls"/>
                    <NavLink className="home__sidebar-link" to="/roll">
                        Роллы</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Sushi} alt="Sushi"/>
                    <NavLink className="home__sidebar-link" to="/sushi">
                        Суши</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Salads} alt="Salads"/>
                    <NavLink className="home__sidebar-link" to="/salad">
                        Салаты</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Sups} alt="Sups"/>
                    <NavLink className="home__sidebar-link" to="/sup">
                        Супы</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={CornDogs} alt="CornDogs"/>
                    <NavLink className="home__sidebar-link" to="/corndog">
                        Корндоги</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Drinks} alt="Drinks"/>
                    <NavLink className="home__sidebar-link" to="/drink">
                        Напитки</NavLink>
                </li>
                <li className="home__sidebar-list-item">
                    <img src={Action} alt="Action"/>
                    <NavLink className="home__sidebar-link" to="/action">
                        Акции <span className="home__sidebar-act">скоро</span></NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;