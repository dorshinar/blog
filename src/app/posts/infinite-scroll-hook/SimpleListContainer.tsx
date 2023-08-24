"use client";

import React, { ComponentPropsWithRef } from "react";

import ListContainer from "./ListContainer";
import SimpleList from "./SimpleList";

export function SimpleListContainer(
  props: ComponentPropsWithRef<typeof ListContainer>
) {
  return <ListContainer {...props} ListComponent={SimpleList}></ListContainer>;
}
