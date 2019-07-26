import Typography from "typography";

const typography = new Typography();

export const { scale, rhythm, options } = typography;
export default typography;

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}
