import React from "react";
import loadable from "@loadable/component";

import { Placeholder } from "../../../src/utils/styled/CodePlaceholder";

const LazyList = loadable(() => import("./ListWithHookContainer"), {
  fallback: <Placeholder upperHeight={21} lowerHeight={3} />,
});

const LazyListWithHooksContainer = (props) => {
  return <LazyList {...props} />;
};

export default LazyListWithHooksContainer;
