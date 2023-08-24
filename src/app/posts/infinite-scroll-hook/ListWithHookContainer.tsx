"use client";

import React, { ComponentPropsWithRef } from "react";

import ListContainer from "./ListContainer";
import ListWithHook from "./ListWithHook";

export function ListWithHookContainer(
  props: ComponentPropsWithRef<typeof ListContainer>
) {
  return (
    <ListContainer {...props} ListComponent={ListWithHook}></ListContainer>
  );
}
