import * as React from "react";

import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  ArrayInput,
  ReferenceField,
  SimpleFormIterator,
  TextInput,
  Edit,
  NumberInput,
  List,
  EditButton,
  Datagrid
} from "react-admin";


export const SquadList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="capacity" />
      <TextField source="img_url" />
      <TextField source="description" />
      <ReferenceField label="User" source="owner_id" reference="User">
        <TextField source="firstname" />
      </ReferenceField>
      <EditButton/>
    </Datagrid>
  </List>
);

export const SquadCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" />
      <NumberInput source="capacity" />
      <TextInput source="description" />
      <TextInput source="img_url" />
      <ReferenceInput label="User" source="owner_id" reference="User">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <ReferenceInput
        label="Buisness"
        source="business_id"
        reference="BusinessSector"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const SquadEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" />
      <TextInput source="img_url" />
      <NumberInput source="capacity" />
      <TextInput source="description" />
      <ReferenceInput label="User" source="owner_id" reference="User">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <ReferenceInput
        label="Buisness"
        source="business_id"
        reference="BusinessSector"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ArrayInput source="user_squads" >
      
        <SimpleFormIterator>
        
        <SelectInput source="id" />
    </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);


