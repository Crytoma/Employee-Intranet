import React from "react";
import styled from "styled-components";
import "./App.css";

// Importing other pages.
import Login from "./Login";
import Home from "./Home";
import Timetable from "./Timetable";
import Profile from "./Profile";
import Search from "./Search";

// Routing import.
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";

// Navigation bar
import NavBar from "./NavBar";

import { Admin, Resource } from "react-admin";

import restProvider from "ra-data-simple-rest";

// Components for posts.
import PostList from "./PostList";
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";

// Components for employees.
import EmployeeList from "./EmployeeList";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeEdit from "./EmployeeEdit";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  // Will probably include essential information from db.
  state = { name: "" };

  // This is for loading the db into an array.
  async fetchEmployees() {
    const res = await fetch("http://localhost:5000/employees");
    const data = await res.json();

    return data;
  }

  // Deleting the specific employee from database by id.
  async deleteEmployee() {
    await fetch(
      `http://localhost:5000/employees/$
    {id}`,
      {
        method: "DELETE",
      }
    );
  }

  // Getting specific employee by id.
  async getEmployee(id) {}

  // Verify login credentials. Work with the login js component.
  async verifyLoginCredentials(username, password) {
    await fetch(`http://localhost:5000/employees/${username}`);
  }

  // Used to add annual leave to the database
  async addAnnualLeave(annualLeave) {
    let res = await fetch(`http://localhost:5000/annualLeaves`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(annualLeave),
    });

    let data = res.json();
  }

  render() {
    return (
      <DesktopWrap>
        {/* <NavBar /> */}
        <Admin dataProvider={restProvider("http://localhost:3000")}>
          <Resource
            name="employees"
            list={EmployeeList}
            create={EmployeeCreate}
            edit={EmployeeEdit}
          ></Resource>

          <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
          ></Resource>
        </Admin>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/timetable" component={Timetable} />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <Profile fetchEmployees={this.fetchEmployees} {...props} />
          )}
        />
        <Route exact path="/search" component={Search} />
      </DesktopWrap>
    );
  }
}

const DesktopWrap = styled.section``;
