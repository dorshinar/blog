import React, { useCallback, useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  height: 20em;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: auto;
  background-color: white;

  & * {
    margin: 0.5em 0 !important;
  }
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
`;
const Button = styled.button`
  margin: 0;
  padding: 0;
  border-radius: 10px;
  background-color: var(--primary);
  color: white;
  border: 3px solid var(--snippetBackgroundColor);
  min-height: 3em;
  cursor: pointer;

  :focus:not(:focus-visible) {
    outline: none;
  }
`;

const SimpleList = ({ simulateLatency }) => {
  const [list, setList] = useState([...Array(5).keys()]);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (!simulateLatency) {
      return setList(
        list.concat([...Array(5).keys()].map((item) => item + list.length))
      );
    }

    setLoading(true);
    setTimeout(() => {
      setList(
        list.concat([...Array(5).keys()].map((item) => item + list.length))
      );
      setLoading(false);
    }, [2000]);
  }, [list, simulateLatency]);

  return (
    <List>
      {list.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
      <Button onClick={loadMore} title={loading ? "loading..." : "Load More!"}>
        {loading ? "loading..." : "Load More!"}
      </Button>
    </List>
  );
};

export default SimpleList;
