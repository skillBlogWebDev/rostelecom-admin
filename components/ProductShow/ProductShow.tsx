// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  ImageField,
  DeleteButton,
} from 'react-admin';
import './index.css'

export const ProductShow = () => {

  return (
    <Show>
      <SimpleShowLayout>
        <div className='show-actions'>
          <DeleteButton />
        </div>
        <ImageField source="images" src="url" title="desc" />
        <TextField source="name" />
        <TextField source="category" />
        <RichTextField source="description" />
      </SimpleShowLayout>
    </Show>
  );
};
