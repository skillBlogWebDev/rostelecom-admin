// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Datagrid, Identifier, List, NumberField, RaRecord, TextField } from 'react-admin';

export const GoodsList = () => {
  const handleRowClick = (
    id: Identifier,
    resource: string,
    record: RaRecord
  ) => {
    localStorage.setItem('show', JSON.stringify(record.category))

    return 'show'
  }

  return (
    <List>
      <Datagrid rowClick={handleRowClick}>
        <TextField source="id" />
        <TextField source="category" />
        <TextField source="type" />
        <NumberField source="price" />
        <TextField source="name" />
      </Datagrid>
    </List>
  )
};
