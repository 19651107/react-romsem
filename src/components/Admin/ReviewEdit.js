import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const ReviewEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="text" />
                <DateInput source="published_at" />
            </SimpleForm>
        </Edit>
    );
};

export default ReviewEdit;