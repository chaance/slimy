import { Color } from "./color";

export type ColorScheme = {
	chalk: {
		black: Color;
		blue: Color;
		cyan: Color;
		green: Color;
		magenta: Color;
		orange: Color;
		purple: Color;
		red: Color;
		white: Color;
		yellow: Color;
	};
	base: {
		accent: Color;
		bg: Color;
		fg: Color;
		ui: Color;
	};
	syntax: {
		boolean: Color;
		class: Color;
		comment: Color;
		constant: Color;
		cssAtRule: Color;
		cssClass: Color;
		cssId: Color;
		cssProperty: Color;
		cssUnit: Color;
		entity: Color;
		error: Color;
		func: Color;
		keyword: Color;
		markup: Color;
		number: Color;
		operator: Color;
		punctuation: Color;
		regexp: Color;
		special: Color;
		storage: Color;
		string: Color;
		tag: Color;
		type: Color;
		variable: Color;
	};
	vcs: {
		added: Color;
		modified: Color;
		removed: Color;
	};
	ui: {
		line: Color;
		button: {
			bg: Color;
		};
		popover: {
			bg: Color;
			shadow: Color | null;
			border: Color | null;
		};
		panel: {
			bg: Color;
			shadow: Color | null;
			border: Color | null;
		};
		gutter: {
			normal: Color;
			active: Color;
		};
		selection: {
			bg: Color;
			inactive: Color;
			border: Color | null;
		};
		guide: {
			normal: Color;
			active: Color;
		};
		state: {
			error: Color;
			warning: Color;
			info: Color;
			success: Color;
		};
		list: {
			activeBg: Color;
			activeFg: Color;
			hoverBg: Color;
			hoverFg: Color;
		};
	};
};
