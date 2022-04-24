import React from 'react';
import City from "../City/City";
import {Outlet} from "react-router-dom";

const ContentLayOut = () => {
    return (
        <>
            <Outlet/>
            <City/>
        </>
    );
};

export default ContentLayOut;