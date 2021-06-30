import * as React from "react";

import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  ReferenceField,
  TextInput,
  Edit,
  List,
  EditButton,
  Datagrid
} from "react-admin";





export const ProjectList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="url" />
      <TextField source="description" />
      <ReferenceField label="Squad" source="squad_id" reference="Squad">
        <TextField source="name" />
      </ReferenceField>
      <EditButton/>
    </Datagrid>
  </List>
);

export const ProjectEdit = (props) => (
  <Edit {...props} >
   <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" />
      <TextInput source="url" />
      <TextInput source="description" />
      <ReferenceInput label="Squad" source="squad_id" reference="Squad">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" />
      <TextInput source="url" />
      <TextInput source="description" />
      <ReferenceInput label="Squad" source="squad_id" reference="Squad">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);


