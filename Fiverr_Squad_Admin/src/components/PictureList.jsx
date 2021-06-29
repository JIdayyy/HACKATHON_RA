import * as React from "react";

import {
  Create,
  ReferenceInput,
  SelectInput,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
} from "react-admin";

const PictureCreate = (props) => (
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

export default PictureCreate;
