import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { CodeSnippetWrapper } from "../../../src/components/CodeSnippetWrapper";

const Wrapper = styled.div`
  height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScrollMe = styled.div`
  font-size: 3em;
  color: #bd93bd;
  -webkit-text-stroke: 1px var(--backgroundColor);
`;

const BoxWrapper = styled.div`
  min-height: 30em;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5em;
`;

const Box = styled.div`
  width: 5em;
  height: 5em;
  background-color: ${({ isIntersecting }) =>
    isIntersecting ? "#BD93BD" : "#644052"};
  border-radius: 15px;
  border: 3px solid var(--snippetBackgroundColor);

  transition: ${({ isIntersecting }) =>
    !isIntersecting ? "none" : css`background-color 3s ease`};
`;

const ColorShiftingBox = () => {
  const observer = useRef(null);
  const [observedNode, setObservedNode] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const setIntersecting = useCallback((entries) => {
    setIsIntersecting(entries[0].isIntersecting);
  }, []);

  const boxRef = useCallback(
    (node) => {
      if (observedNode || !node) {
        return;
      }

      observer.current = new IntersectionObserver(setIntersecting);
      observer.current.observe(node);

      setObservedNode(node);
    },
    [observedNode, setIntersecting]
  );

  return (
    <CodeSnippetWrapper>
      <Wrapper>
        <ScrollMe>Scroll Me!</ScrollMe>
        <BoxWrapper>
          <Box ref={boxRef} isIntersecting={isIntersecting} />
        </BoxWrapper>
      </Wrapper>
    </CodeSnippetWrapper>
  );
};

export default ColorShiftingBox;
