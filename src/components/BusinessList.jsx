import * as React from "react";

import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  ReferenceField,
  TextInput,
  List,
  Edit,
  EditButton,
  Datagrid
} from "react-admin";



export const BusinessList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const BusinessEdit = (props) => (
  <Edit {...props} >
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="name" />
      
    </SimpleForm>
  </Edit>
);


export const BusinessCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
