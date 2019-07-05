import Typography from "typography";
import CodePlugin from "typography-plugin-code";
import fairyGateTheme from "typography-theme-fairy-gates";

fairyGateTheme.plugins = [new CodePlugin()];

const typography = new Typography(fairyGateTheme);

export const { scale, rhythm, options } = typography;
export default typography;

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}
