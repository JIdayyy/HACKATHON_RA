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



export const SkillList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="label" />
      <ReferenceField label="Job" source="job_id" reference="Job">
        <TextField source="label" />
      </ReferenceField>
      <EditButton/>
    </Datagrid>
  </List>
);

export const SkillEdit = (props) => (
  <Edit {...props} >
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="label" />
      <ReferenceInput
        label="Job"
        source="job_id"
        reference="Job"
      >
        <SelectInput optionText="label" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);


export const SkillCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="label" />
      <ReferenceInput
        label="Job"
        source="job_id"
        reference="Job"
      >
        <SelectInput optionText="label" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
