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
	// Keywords
	entity: chalk.yellow.darken(0.1),
	keyword: chalk.orange.brighten(0.4),
	storage: chalk.orange.brighten(0.3).desaturate(0.3).fade(0.1),

	// Entity names
	class: chalk.yellow.darken(0.1).desaturate(0.7),
	constant: chalk.purple,
	func: chalk.orange.mix(chalk.yellow, 0.7).brighten(0.4).desaturate(0.4),
	tag: chalk.yellow,
	type: chalk.cyan,
	variable: chalk.magenta,

	// Data
	boolean: chalk.red.darken(0.2).desaturate(0.6),
	number: chalk.purple.brighten(0.2),
	regexp: chalk.green.mix(chalk.blue, 0.5).brighten(0.4),
	string: chalk.blue,

	// CSS
	cssAtRule: chalk.red.brighten(1).desaturate(0.6),
	cssClass: chalk.green.brighten(0.4).desaturate(0.5),
	cssId: chalk.magenta.darken(0.2),
	cssProperty: chalk.green.mix(chalk.blue, 0.5).brighten(0.4),
	cssUnit: chalk.blue.brighten(0.3),

	// Other
	comment: base.fg.fade(0.4),
	error: chalk.red,
	markup: chalk.orange.darken(0.3).desaturate(0.5),
	operator: _("dee2d5"),
	punctuation: base.fg.fade(0.4),
	special: chalk.green,
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
