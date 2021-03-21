import React from "react";

export const Separator = () => (
  <hr
    style={{
      margin: "var(--rhythm) 0",
      backgroundColor: "var(--separatorColor)",
      transition: "background-color 0.25s ease",
    }}
  />
);
