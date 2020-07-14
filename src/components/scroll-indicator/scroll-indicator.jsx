import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Container, Indicator } from "./scroll-indicator.styled";

export function ScrollIndicator() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setWidth(scrolled);
  }, []);

  return (
    <Container>
      <Indicator width={width} />
    </Container>
  );
}
