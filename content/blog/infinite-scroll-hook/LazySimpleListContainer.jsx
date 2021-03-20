import React from "react";
import loadable from "@loadable/component";

import { Placeholder } from "../../../src/utils/styled/CodePlaceholder";

const LazyList = loadable(() => import("./SimpleListContainer"), {
  fallback: <Placeholder upperHeight={21} lowerHeight={3} />,
});

const LazySimpleListContainer = (props) => {
  return <LazyList {...props} />;
};

export default LazySimpleListContainer;
