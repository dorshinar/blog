import React from "react";
import loadable from "@loadable/component";

import { Placeholder } from "../../../src/utils/styled/CodePlaceholder";

const LazyBox = loadable(() => import("./ColorShiftingBox"), {
  fallback: <Placeholder upperHeight={20} />,
});

const LazyColorShiftingBoxContainer = (props) => {
  return <LazyBox {...props} />;
};

export default LazyColorShiftingBoxContainer;
