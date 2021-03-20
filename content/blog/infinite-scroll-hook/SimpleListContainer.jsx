import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Checkbox from "../../../src/components/Checkbox";
import { CodeSnippetWrapper } from "../../../src/components/CodeSnippetWrapper";

const Wrapper = styled.div`
  margin-bottom: var(--rhythm);
`;
const ListWrapper = styled(CodeSnippetWrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: calc(var(--rhythm) / 4);
`;
const StickyWrapper = styled.div`
  top: 0;
  margin-left: auto;
  position: sticky;
`;
const Loading = styled(motion.div)`
  width: 8rem;
  height: 3rem;
  background-color: var(--primary);
  color: var(--textColor);
  display: grid;
  place-items: center;
  border-radius: 10px;
  margin-bottom: calc(var(--rhythm) * 0.5);
`;

const SimpleListContainer = ({
  items,
  ListComponent,
  hookVersion,
  initialSimulateLatency = false,
}) => {
  const [list, setList] = useState([...Array(items).keys()]);
  const [loading, setLoading] = useState(false);
  const [simulateLatency, setSimulateLatency] = useState(
    initialSimulateLatency
  );

  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { scale: 0.8, opacity: 0 };
  const animate = prefersReducedMotion
    ? { opacity: 1 }
    : { scale: 1, opacity: 1 };

  const loadMore = useCallback(() => {
    if (!simulateLatency) {
      return setList(
        list.concat([...Array(items).keys()].map((item) => item + list.length))
      );
    }

    setLoading(true);
    setTimeout(() => {
      setList(
        list.concat([...Array(items).keys()].map((item) => item + list.length))
      );
      setLoading(false);
    }, [2000]);
  }, [items, list, simulateLatency]);

  return (
    <Wrapper>
      <ListWrapper>
        <ListComponent
          list={list}
          loadMore={loadMore}
          loading={loading}
          hookVersion={hookVersion}
        />
        {hookVersion && (
          <StickyWrapper>
            <AnimatePresence>
              {loading && (
                <Loading initial={initial} animate={animate} exit={initial}>
                  Loading...
                </Loading>
              )}
            </AnimatePresence>
          </StickyWrapper>
        )}
      </ListWrapper>
      <Checkbox
        checked={simulateLatency}
        onChange={(event) => setSimulateLatency(event.target.checked)}
      >
        Simulate network latency?
      </Checkbox>
    </Wrapper>
  );
};

export default SimpleListContainer;
