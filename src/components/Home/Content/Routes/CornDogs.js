import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/Home/Link/CornDogs.svg'

const CornDogs = () => {
    return (
            <RouteContent Logo={Logo} title="Корндог" path="corndog"/>
    );
};

export default CornDogs;