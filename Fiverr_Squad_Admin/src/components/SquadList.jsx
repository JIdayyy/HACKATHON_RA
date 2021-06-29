import * as React from "react";

import {
  Create,
  ReferenceInput,
  SelectInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  DateInput,
} from "react-admin";

const SquadCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" />
      <NumberInput source="capacity" />
      <TextInput source="description" />
      <ReferenceInput label="User" source="user_id" reference="Users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput
        label="Buisness"
        source="business_id"
        reference="BusinessSector"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default SquadCreate;
