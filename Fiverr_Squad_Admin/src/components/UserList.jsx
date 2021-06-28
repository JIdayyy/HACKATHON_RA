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
      <EmailField source="email" />
      <TextField source="password" />
      <ImageField source="picture" />
      <TextField source="birthDate" />
      <TextField source="reservationId" />
      <TextField source="phoneNumber" />
      <TextField source="role" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
