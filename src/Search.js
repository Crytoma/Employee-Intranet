import React from "react";
import styled from "styled-components";
export default class Search extends React.Component {
  render() {
    return (
      <SearchBarWrap>
        <h1>Search Functionality Here.</h1>
      </SearchBarWrap>
    );
  }
}

const SearchBarWrap = styled.div`
  color: grey;
`;
