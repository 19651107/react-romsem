import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/Home/Link/Drinks.svg'

const Drinks = () => {
    return (
            <RouteContent Logo={Logo} title="Напитки" path="drinks"/>
    );
};

export default Drinks;