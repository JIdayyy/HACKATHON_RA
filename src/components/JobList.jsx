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



export const JobList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="label" />
      <TextField source="type" />
      <ReferenceField label="Sector" source="sector_id" reference="BusinessSector">
        <TextField source="name" />
      </ReferenceField>
      <EditButton/>
    </Datagrid>
  </List>
);

export const JobEdit = (props) => (
  <Edit {...props} >
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="label" />
      <TextInput source="type" />
      <ReferenceInput
        label="Sector"
        source="sector_id"
        reference="BusinessSector"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);


export const JobCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="label" />
      <ReferenceInput
        label="Sector"
        source="sector_id"
        reference="BusinessSector"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
