import React from 'react';
import Header from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import Pizza from "./Routes/Pizza";
import Sets from "./Routes/Sets";
import Wok from "./Routes/Wok";
import Rolls from "./Routes/Rolls";
import Sushi from "./Routes/Sushi";
import Salads from "./Routes/Salads";
import Sups from "./Routes/Sups";
import CornDogs from "./Routes/CornDogs";
import Drinks from "./Routes/Drinks";
import Action from "./Routes/Action";
import Main from "./Routes/Main/Main";
import Product from "./Product/Product";
import Reviews from "./Routes/Reviews/Reviews";
import Delivery from "./Routes/Delivery/Delivery";
import Footer from "./Footer/Footer";

const Content = () => {
    return (
        <div className="home__content">
                <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/pizza" element={<Pizza/>}/>
                    <Route path="/set" element={<Sets/>}/>
                    <Route path="/wok" element={<Wok/>}/>
                    <Route path="/roll" element={<Rolls/>}/>
                    <Route path="/sushi" element={<Sushi/>}/>
                    <Route path="/salad" element={<Salads/>}/>
                    <Route path="/sup" element={<Sups/>}/>
                    <Route path="/corndog" element={<CornDogs/>}/>
                    <Route path="/drink" element={<Drinks/>}/>
                    <Route path="/action" element={<Action/>}/>
                    <Route path="/:path/product/:id" element={<Product/>}/>
                    <Route path="/reviews" element={<Reviews/>}/>
                    <Route path="/delivery" element={<Delivery/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
};

export default Content;