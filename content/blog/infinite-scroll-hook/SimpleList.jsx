import React from "react";
import styled from "styled-components";

export const ListWrapper = styled.div`
  height: 20rem;
`;
export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  display: block;
  background-color: var(--primary);
  width: 4rem;
  min-height: 4rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--snippetBackgroundColor);
  margin-bottom: var(--codeSnippetPadding) !important;
`;
export const Button = styled.button`
  margin: 0;
  padding: 0;
  border-radius: 10px;
  background-color: var(--primary);
  color: var(--textColor);
  border: 3px solid var(--snippetBackgroundColor);
  min-height: 3rem;
  width: 10rem;
  cursor: pointer;

  :focus:not(:focus-visible) {
    outline: none;
  }
`;
export const Spacer = styled.div`
  min-height: var(--codeSnippetPadding);
`;

const SimpleList = ({ list, loadMore, loading }) => {
  return (
    <ListWrapper>
      <List>
        {list.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
        <Button
          onClick={loadMore}
          title={loading ? "loading..." : "Load More!"}
        >
          {loading ? "loading..." : "Load More!"}
        </Button>
        <Spacer />
      </List>
    </ListWrapper>
  );
};

export default SimpleList;
