import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

import Spacer from "./Spacer";
import { useTheme } from "./themer/themer";

const CheckboxContainer = styled(motion.label)`
  display: flex;
  align-items: center;
  position: relative;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  width: 0;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
const StyledCheckbox = styled(motion.div)`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  position: relative;

  ${HiddenCheckbox}:focus + & {
    outline: 2px solid var(--light);
  }
  ${HiddenCheckbox}:focus:not(:focus-visible) + & {
    outline: none;
  }

  ${(props) =>
    props.theme === "dark"
      ? css`
          border: 1px solid var(--gray-700);
        `
      : css`
          border: 1px solid var(--gray-500);
        `}

  ${CheckboxContainer}:hover &.dark {
    border-color: var(--gray-300);
  }
  ${CheckboxContainer}:hover &.light {
    border-color: var(--gray-900);
  }
`;
const CheckMark = styled(motion.div)`
  border-radius: 2px;
  background-color: var(--dark);
  position: absolute;
  inset: 2px;
`;

const Checkbox = ({ className, checked, children, ...props }) => {
  const theme = useTheme();

  return (
    <CheckboxContainer className={className} whileTap="tap">
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox
        checked={checked}
        variants={{
          tap: { scale: 0.7 },
        }}
        theme={theme}
        className={theme}
      >
        <AnimatePresence>
          {checked && (
            <CheckMark
              initial={{ scale: 0 }}
              animate={{ scale: 1, delay: 0.5 }}
              exit={{ scale: 0 }}
            />
          )}
        </AnimatePresence>
      </StyledCheckbox>
      <Spacer left="0.5rem" />
      {children}
    </CheckboxContainer>
  );
};

export default Checkbox;
