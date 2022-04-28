import React from 'react';
import { List, Datagrid, DateField, TextField, EditButton,DeleteButton } from 'react-admin';

const ReviewList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name" />
                <TextField source="text" />
                <DateField source="published_at" />
                <TextField source="id" />
                <EditButton basePath="/reviews"/>
                <DeleteButton basePath="/reviews"/>
            </Datagrid>
        </List>
    );
};

export default ReviewList;