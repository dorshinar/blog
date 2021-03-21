import React from "react";
import styled from "styled-components";

import Loader from "../../../content/assets/loader.svg";

const Upper = styled.div`
  height: ${({ height = 21 }) => `${height}rem`};
  width: 100%;
  background-color: white;
  display: grid;
  place-items: center;
  border-radius: 5px;
`;
const StyledLoader = styled(Loader)`
  height: 3rem;
  width: 3rem;
`;
const Lower = styled.div`
  height: ${({ height = 1.45 }) => `${height}rem`};
  width: 100%;
  background-color: transparent;
`;

export const Placeholder = ({ upperHeight, lowerHeight }) => {
  return (
    <>
      <Upper height={upperHeight}>
        <StyledLoader />
      </Upper>
      <Lower height={lowerHeight} />
    </>
  );
};
