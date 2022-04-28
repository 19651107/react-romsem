import React from 'react';
import {Create,SimpleForm,TextInput} from 'react-admin'
const ReviewCreate = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput multiline source="text" />
                <TextInput label="Publication date" source="published_at" />
            </SimpleForm>
        </Create>
    );
};

export default ReviewCreate;