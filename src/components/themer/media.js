import { css } from "styled-components";

const sizes = {
  small: 37.5, // 600px
  medium: 48, // 768px
  large: 62, // 992px
  xLarge: 75 // 1200
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
