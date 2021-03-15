import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import { CodeSnippetWrapper } from "../../../src/components/CodeSnippetWrapper";

const StyledCodeSnippetWrapper = styled(CodeSnippetWrapper)`
  position: relative;
  padding: 0;
`;
const Wrapper = styled.div`
  height: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
  z-index: 1;
  position: relative;
  padding: var(--codeSnippetPadding);
`;
const IntersectionObserverRoot = styled.div`
  height: calc(100% - 200px);
  min-height: 8rem;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-300);
  border-radius: 10px;

  color: var(--gray-800);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 100px;
  bottom: 100px;
  left: 100px;
  right: 100px;
`;
const ScrollMe = styled.div`
  font-size: 3em;
  color: #bd93bd;
  -webkit-text-stroke: 1px var(--backgroundColor);
`;

const BoxWrapper = styled.div`
  min-height: 60em;
  width: fit-content;
  display: flex;
  align-items: center;
  padding-bottom: 5em;
`;

const Box = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({ isIntersecting }) =>
    isIntersecting ? "#BD93BD" : "#644052"};
  border-radius: 15px;
  border: 3px solid var(--snippetBackgroundColor);

  transition: background-color 3s ease;
`;

const ColorShiftingBox = ({ root, threshold }) => {
  const observer = useRef(null);
  const [observedNode, setObservedNode] = useState(null);
  const [rootNode, setRootNode] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const setIntersecting = useCallback((entries) => {
    setIsIntersecting(entries[0].isIntersecting);
  }, []);

  const rootRef = useCallback((node) => {
    setRootNode(node);
  }, []);

  const boxRef = useCallback(
    (node) => {
      if (observedNode || !node) {
        return;
      }

      setObservedNode(node);

      const options = {};
      if (root) {
        options.rootMargin = "-100px";
        options.root = rootNode;
      }
      if (threshold) {
        options.threshold = threshold;
      }

      observer.current = new IntersectionObserver(setIntersecting, options);
      observer.current.observe(node);
    },
    [observedNode, root, rootNode, setIntersecting, threshold]
  );

  return (
    <StyledCodeSnippetWrapper>
      {root && (
        <IntersectionObserverRoot>
          The box will turn pink when it enters the gray rectangle!
        </IntersectionObserverRoot>
      )}
      <Wrapper ref={rootRef}>
        <ScrollMe>Scroll Me!</ScrollMe>
        <BoxWrapper>
          {((root && rootNode) || !root) && (
            <Box ref={boxRef} isIntersecting={isIntersecting} />
          )}
        </BoxWrapper>
      </Wrapper>
    </StyledCodeSnippetWrapper>
  );
};

export default ColorShiftingBox;
