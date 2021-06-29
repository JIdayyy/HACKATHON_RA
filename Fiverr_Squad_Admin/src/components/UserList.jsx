import * as React from "react";

import {
  Create,
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  DateInput,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <PasswordInput source="password" />
      <ImageField source="picture" />
      <TextField source="reservationId" />
      <TextField source="phoneNumber" />
      <TextField source="role" />
      <EditButton />
    </Datagrid>
  </List>
);

export const userCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);

export const userEdit = (props) => (
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
