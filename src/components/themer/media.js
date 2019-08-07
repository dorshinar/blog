import { css } from "styled-components";

const sizes = {
  small: 37.5,
  medium: 48,
  large: 62,
  xLarge: 75
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
