import styled from "styled-components";
import React from "react";
export default class Timetable extends React.Component {
  render() {
    return (
      <TimeTableWrap>
        <h1>Timetable</h1>
      </TimeTableWrap>
    );
  }
}

const TimeTableWrap = styled.div`
  color: rgb(204, 0, 102);
`;
