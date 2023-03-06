import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "./assets/search_Icon.png";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false, queryMessage: "" };

    this.handleSearchEnterKeyPress = this.handleSearchEnterKeyPress.bind(this);
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Handle clicking the search icon click.
  handleSearchButtonClick(e) {
    e.preventDefault();

    let messageFromInputBox = `${this.firstInput.value}`;
    this.setState({ queryMessage: messageFromInputBox });
    console.log(messageFromInputBox);
  }

  // Handle the enter key when searching
  handleSearchEnterKeyPress(e) {
    // e.preventDefault();
    if (e.charCode === 13) {
      let messageFromInputBox = `${this.firstInput.value}`;
      this.setState({ queryMessage: messageFromInputBox });
      console.log(messageFromInputBox);
    }
  }

  render() {
    return (
      <NavBarWrap>
        <SearchBarDiv className="searchBar">
          <SearchBarInput
            ref={(input) => (this.firstInput = input)}
            type="text"
            placeholder="Enter a query"
            aria-label="search"
            onKeyPress={(e) => this.handleSearchEnterKeyPress(e)}
          />
          <SearchButton
            onClick={(e) => this.handleSearchButtonClick(e)}
            aria-label="submit search"
          />
        </SearchBarDiv>

        <NavBarItems>
          <NavBarLogo>
            FDM Portal
            <FontAwesomeReact className="fab fa-react"></FontAwesomeReact>
          </NavBarLogo>
          <MenuIcon onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </MenuIcon>

          <NavigationMenu
            className={this.state.clicked ? "nav-menu active" : "nav-menu"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/timetable">Timetable</Link>
            </li>
            {/* <li>
              <Link to="/search">Search</Link>
            </li> */}
          </NavigationMenu>
        </NavBarItems>
      </NavBarWrap>
    );
  }
}

// The ul with all the links.
const NavigationMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  a:hover {
    background-color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  a:mobile {
    display: none;
  }
`;

// The menu burger.
const MenuIcon = styled.div`
  color: white;
  display: none;
`;

// The logo itself aka "Portal"
const NavBarLogo = styled.h1`
  color: #ffff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
`;

// The icon beside the icon
const FontAwesomeReact = styled.i`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  display: none;
`;

const NavBarItems = styled.nav`
  background: linear-gradient(90deg, #09c6f9 0%, #045de9 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const NavBarWrap = styled.ul``;

// Search bar JSX
const SearchBarDiv = styled.div`
  // Top removes the box somehow.
  top: 1.15%;
  //border: 2px solid white;
  border-radius: 100vh;
  height: 6%;
  background-color: transparent;
  display: flex;
  padding: 15px;
  z-index: 10;
  position: fixed;
  margin: 0 auto 0 auto;
  width: 3%;
  overflow: hidden;
  transition: 150ms ease-in-out;

  right: 0;

  &:focus-within {
    width: 40%;
    z-index: 14;
    background-color: white;
  }
`;

const SearchBarInput = styled.input`
  font-size: 1.1rem;
  color: black;
  background: transparent;
  border: 0;
  width: 90%;
  padding: 0 0.5em;
  z-index: 15;
  position: absolute;
  top: 30%;
  font-weight: bold;
  bottom: 0;
  opacity: 0;
  left: 15px;
  right: 0;

  &:focus-within {
    opacity: 1;
    z-index: 20;
  }

  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  border: 0;
  padding: 15px 15px;
  right: 30px;
  top: 10%;
  background-color: transparent;
  background-image: url(${searchIcon});
  background-size: contain;

  font-size: 1.5rem;
  cursor: pointer;
  border: 0;
  width: 30px;
  height: 30px;
  margin-left: auto;
  transition: background 150ms ease-in-out;

  z-index: 0;
`;
