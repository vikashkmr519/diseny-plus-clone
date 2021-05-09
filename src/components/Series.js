import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Series() {
  return (
    <Container>
      <ContentBox>
        <NotImplemented>Series Page Not Implemented Yet !!</NotImplemented>
      </ContentBox>
    </Container>
  );
}

export default Series;

const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const NotImplemented = styled.p`
  padding: 20px;
  font-size: 20px;
`;
