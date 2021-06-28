import * as React from "react";

import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const ProjectCreate = (props) => (
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

export default ProjectCreate;
