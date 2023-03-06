import styled from "styled-components";
import React from "react";

export default class Profile extends React.Component {
  render() {
    return (
      <ProfileWrap>
        <h1>{}</h1>
        <Image src="./assets/search_Icon.png/"></Image>
      </ProfileWrap>
    );
  }
}

const ProfileWrap = styled.div`
  color: #ff00ff;
`;

const Image = styled.img``;
