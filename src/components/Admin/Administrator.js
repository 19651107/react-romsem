import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import ReviewList from "./ReviewList";
import ReviewEdit from "./ReviewEdit";
import ReviewCreate from "./ReviewCreate";
const Administrator = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name="reviews" list={ReviewList} edit={ReviewEdit} create={ReviewCreate}/>
        </Admin>
    );
};

export default Administrator;