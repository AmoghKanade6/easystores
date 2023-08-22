import React from "react";
import Chart from "../Components/Chart";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 80px;
`;

const MostViewedProducts = () => {
  return (
    <>
      <Container>
        <Chart />
      </Container>
    </>
  );
};

export default MostViewedProducts;
