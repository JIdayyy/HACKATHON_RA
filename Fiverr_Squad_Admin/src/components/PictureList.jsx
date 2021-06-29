import * as React from "react";

import {
  Create,
  ReferenceInput,
  ReferenceField,
  SelectInput,
  Edit,
  SimpleForm,
  Datagrid,
  List,
  TextField,
  TextInput,
  EditButton,
} from "react-admin";





export const PictureList = (props) => (
  <List {...props} >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="url" />
      <ReferenceField
        label="Project"
        source="project_id"
        reference="Project"
      >
        <TextField source="name" />
      </ReferenceField>
<EditButton/>
      </Datagrid>
  </List>
);

export const PictureEdit = (props) => (
  <Edit {...props} >
    <SimpleForm>
    <TextInput disabled label="Id" source="id" />
      <TextInput source="url" />
      <ReferenceInput label="Project" source="project_id" reference="Project">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);


export const PictureCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="url" />
      <ReferenceInput label="Project" source="project_id" reference="Project">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);


