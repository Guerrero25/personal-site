import dark from "./dark";
import light from "./light";

const themes = {
  dark,
  light,
};

export type Theme = keyof typeof themes;

export default themes;
