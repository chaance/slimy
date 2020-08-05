import { light } from "./schemes/light";
import { dark } from "./schemes/dark";
import { darkContrast } from "./schemes/dark-contrast";

export { Color } from "./color";

export const schemes = {
	light,
	dark,
	darkContrast,
};

export default schemes;

export type SchemeName = keyof typeof schemes;
export type { ColorScheme } from "./types";
