import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/Home/Link/Salads.svg'

const Salads = () => {
    return (
            <RouteContent Logo={Logo} title="Салаты" path="salad"/>
    );
};

export default Salads;