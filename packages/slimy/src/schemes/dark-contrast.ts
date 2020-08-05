import { ColorScheme } from "../types";
import { color } from "../color";

const _ = color("121515");

// Not a chalk color but one we'll use a few times in this theme.
const forestGreen = _("405c50");

const chalk: ColorScheme["chalk"] = {
	red: _("d86161"),
	green: _("bbe887"),
	yellow: _("efd154"),
	blue: _("9dd2ea"),
	magenta: _("e8b5bb"),
	cyan: _("88e0ff"),
	orange: _("e28c52"),
	black: _("121515").brighten(0.3),
	white: _("ffffff"),
	purple: _("c593e5"),
};

const base: ColorScheme["base"] = {
	bg: _("121515"),
	fg: _("e0e0e0"),
	accent: _("a3ea34"),
	ui: _("babebf"),
};

const syntax: ColorScheme["syntax"] = {
	tag: chalk.yellow,
	func: _("ffbe88"),
	entity: chalk.yellow.darken(0.1),
	string: chalk.blue,
	regexp: chalk.green.mix(chalk.blue, 0.5).brighten(0.4),
	markup: _("f9bf8c"),
	keyword: chalk.blue.brighten(0.3),
	special: chalk.green,
	comment: _("959b99"),
	constant: chalk.purple,
	operator: _("dee2d5"),
	error: chalk.red,
	variable: chalk.magenta,
	type: chalk.cyan,

	boolean: chalk.red.darken(0.2).desaturate(0.6),
	class: chalk.yellow.darken(0.1).desaturate(0.7),
	cssClass: chalk.green.brighten(0.4).desaturate(0.5),
	cssId: chalk.magenta.darken(0.2),
	cssProperties: chalk.green.mix(chalk.blue, 0.5).brighten(0.4),
	cssTag: chalk.yellow.darken(0.1),
	storage: chalk.blue.brighten(0.3).fade(0.2),
	punctuation: base.fg.fade(0.4),
	number: chalk.purple.brighten(0.2),
};

const vcs: ColorScheme["vcs"] = {
	added: chalk.green,
	modified: chalk.blue,
	removed: chalk.red,
};

const ui: ColorScheme["ui"] = {
	line: _("000000"),
	panel: {
		bg: base.bg,
		shadow: _("000000"),
		border: base.ui.alpha(0.75),
	},
	popover: {
		bg: _("000000"),
		shadow: _("000000"),
		border: base.ui,
	},
	button: {
		bg: _("006860"),
	},
	gutter: {
		normal: base.ui.fade(0.3),
		active: base.ui.fade(0.1),
	},
	selection: {
		bg: base.ui.fade(0.87),
		inactive: base.ui.fade(0.94),
		border: null,
	},
	guide: {
		normal: base.ui.fade(0.5),
		active: base.ui.fade(0.3),
	},
	state: {
		error: syntax.error,
		warning: syntax.tag,
		info: syntax.keyword,
		success: base.accent.darken(0.5),
	},
	list: {
		activeBg: forestGreen,
		activeFg: base.fg.brighten(0.5),
		hoverBg: forestGreen.alpha(0.25),
		hoverFg: base.fg.brighten(0.5),
	},
};

export const darkContrast: ColorScheme = {
	chalk,
	base,
	syntax,
	vcs,
	ui,
};

export default darkContrast;
