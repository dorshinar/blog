import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { CodeSnippetWrapper } from "../../../src/components/CodeSnippetWrapper";

const List = styled.ul`
  height: 20em;

  list-style: none;

  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  display: block;
  background-color: var(--primary);
  width: 4em;
  min-height: 4em;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--snippetBackgroundColor);
  margin-bottom: 0.5em !important;
`;
const Button = styled.button`
  margin: 0;
  padding: 0;
  border-radius: 10px;
  background-color: var(--primary);
  color: white;
  border: 3px solid var(--snippetBackgroundColor);
  min-height: 3em;
  width: 10em;
  cursor: pointer;

  :focus:not(:focus-visible) {
    outline: none;
  }
`;
const Spacer = styled.div`
  min-height: 0.5em;
`;

const SimpleList = ({ simulateLatency, items }) => {
  const [list, setList] = useState([...Array(items).keys()]);
  const [loading, setLoading] = useState(false);

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

  const ref = useCallback((refElement) => {
    if (!refElement) {
      return;
    }

    const rect = refElement.getBoundingClientRect();
    console.log(rect);
  }, []);

  return (
    <CodeSnippetWrapper>
      <List>
        {list.map((item, index, array) => (
          <ListItem
            key={item}
            ref={index === array.length - 1 ? ref : undefined}
          >
            {item}
          </ListItem>
        ))}
        <Button
          onClick={loadMore}
          title={loading ? "loading..." : "Load More!"}
        >
          {loading ? "loading..." : "Load More!"}
        </Button>
        <Spacer />
      </List>
    </CodeSnippetWrapper>
  );
};

export default SimpleList;
