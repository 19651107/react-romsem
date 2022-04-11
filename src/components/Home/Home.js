import React from 'react';
import './Home.css'
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import Cart from './Cart/Cart'


const Home = () => {


    return (
        <section className="home">
            <SideBar/>
            <Content/>
            <Cart/>
        </section>
    );
};

export default Home

