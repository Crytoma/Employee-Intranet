import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const EmployeeEdit = (props) => {
  return (
    <Edit title="Edit Employee Details" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="password" />
        <TextInput source="personalEmail" />
      </SimpleForm>
    </Edit>
  );
};

export default EmployeeEdit;
