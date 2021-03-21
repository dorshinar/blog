import React from "react";

import ListContainer from "./ListContainer";
import SimpleList from "./SimpleList";

const SimpleListContainer = (props) => {
  return <ListContainer {...props} ListComponent={SimpleList}></ListContainer>;
};

export default SimpleListContainer;
