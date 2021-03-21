import React from "react";

import ListContainer from "./ListContainer";
import ListWithHook from "./ListWithHook";

const ListWithHookContainer = (props) => {
  return (
    <ListContainer ListComponent={ListWithHook} {...props}></ListContainer>
  );
};

export default ListWithHookContainer;
