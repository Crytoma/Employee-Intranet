import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  DeleteButton,
} from "react-admin";

const EmployeeList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <EmailField source="personalEmail" />
        <EditButton basePath="/employees" />
        <DeleteButton basePath="/employees" />
      </Datagrid>
    </List>
  );
};

export default EmployeeList;
