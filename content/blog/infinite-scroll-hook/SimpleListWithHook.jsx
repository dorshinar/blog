import React from "react";
import styled from "styled-components";

import { ListWrapper } from "./SimpleList";
import { Spacer, ListItem, List } from "./SimpleList";
import useInfiniteScrollV2 from "./useInfiniteScroll-2";
import useInfiniteScrollV1 from "./useInfiniteScroll-1";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SimpleListWithHook = ({ list, loading, loadMore, hookVersion }) => {
  const infiniteScrollRefV1 = useInfiniteScrollV1(loadMore, !loading);
  const infiniteScrollRefV2 = useInfiniteScrollV2(loadMore, !loading);

  const ref = hookVersion === 1 ? infiniteScrollRefV1 : infiniteScrollRefV2;

  return (
    <ListWrapper>
      <Wrapper>
        <List>
          {list.map((item, index, array) => (
            <ListItem
              key={item}
              ref={index === array.length - 1 ? ref : undefined}
            >
              {item}
            </ListItem>
          ))}
          <Spacer />
        </List>
      </Wrapper>
    </ListWrapper>
  );
};

export default SimpleListWithHook;
