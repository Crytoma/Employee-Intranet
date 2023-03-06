import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const EmployeeCreate = (props) => {
  return (
    <Create title="Create employee account" {...props}>
      <SimpleForm>
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="password" />
        <TextInput source="workEmail" />
      </SimpleForm>
    </Create>
  );
};

export default EmployeeCreate;
