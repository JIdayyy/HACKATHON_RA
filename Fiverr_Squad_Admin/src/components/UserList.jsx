import * as React from "react";

import {
  Create,
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  List,
  Datagrid ,
  EmailField,
  TextField ,
  ChipField ,
  ArrayField,
  ImageField ,
  EditButton ,
  SingleFieldList,
  DateInput,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <TextField source="password" />
      <ImageField source="avatar_url" />
      <TextField source="phone_number" />
      <ArrayField source="owned_squads" >
        <Datagrid>
          <TextField source="id" />
         
        </Datagrid>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="avatar_url" />
      <TextInput source="phone_number" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="avatar_url" />
      <TextInput source="bio" />
      <TextInput source="phone_number" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);
