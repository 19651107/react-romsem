import React from 'react';
import Logo from '../../../../assets/Home/Link/Action.svg'
import RouteContent from "./RouteContent/RouteContent";

const Action = () => {
    return (
        <>
            <RouteContent Logo={Logo} title="Акция"/>
            <h2 className="home__content-act">Скоро все будет!</h2>
        </>
    );
};

export default Action;