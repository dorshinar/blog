import Typography from "typography";

const typography = new Typography();

export const { scale, options } = typography;
export default typography;

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}
