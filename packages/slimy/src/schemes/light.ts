import { ColorScheme } from "../types";
import { color } from "../color";

const _ = color("f4f4f4");

// Not a chalk color but one we'll use a few times in this theme.
const mintGreen = _("47ba85");

const chalk: ColorScheme["chalk"] = {
	red: _("9b4040"),
	green: _("749948"),
	yellow: _("60572f"),
	blue: _("427c8e"),
	magenta: _("967176"),
	cyan: _("4badc4"),
	orange: _("a05a2a"),
	black: _("121515"),
	white: _("f4f4f4").darken(0.2),
	purple: _("735487"),
};

const base: ColorScheme["base"] = {
	bg: _("f4f4f4"),
	fg: _("121515"),
	accent: _("83ba24"),
	ui: _("5f605c"),
};

const syntax: ColorScheme["syntax"] = {
	tag: chalk.yellow,
	func: _("704614"),
	entity: chalk.yellow.brighten(0.1),
	string: chalk.blue,
	regexp: chalk.green.mix(chalk.blue, 0.5).darken(0.4),
	markup: _("6d533b"),
	keyword: chalk.blue.darken(0.2),
	special: chalk.green,
	comment: _("929390"),
	constant: chalk.purple,
	operator: _("55564f"),
	error: chalk.red,
	variable: chalk.magenta,
	type: chalk.cyan,

	boolean: chalk.red.brighten(0.2).desaturate(0.6),
	class: chalk.yellow.brighten(0.1).desaturate(0.7),
	cssClass: chalk.green.darken(0.4).desaturate(0.5),
	cssId: chalk.magenta.brighten(0.2),
	cssProperties: chalk.green.mix(chalk.blue, 0.5).darken(0.4),
	cssTag: chalk.yellow.brighten(0.1),
	storage: chalk.blue.darken(0.2).fade(0.2),
	punctuation: base.fg.fade(0.4),
	number: chalk.purple.darken(0.1),
};

const vcs: ColorScheme["vcs"] = {
	added: chalk.green,
	modified: chalk.blue,
	removed: chalk.red,
};

const ui: ColorScheme["ui"] = {
	line: base.bg.darken(0.2),
	panel: {
		bg: base.bg,
		shadow: null,
		border: null,
	},
	popover: {
		bg: _("ffffff"),
		shadow: null,
		border: null,
	},
	button: {
		bg: _("0ee2c8"),
	},
	gutter: {
		normal: base.ui.fade(0.6),
		active: base.ui.fade(0.2),
	},
	selection: {
		bg: base.accent.fade(0.7),
		inactive: base.ui.fade(0.9),
		border: null,
	},
	guide: {
		normal: base.ui.fade(0.7),
		active: base.ui.fade(0.8),
	},
	state: {
		error: _("b64e4e"),
		warning: _("e7d072"),
		info: _("9fb3c2"),
		success: base.accent,
	},
	list: {
		activeBg: mintGreen,
		activeFg: base.fg.darken(0.5),
		hoverBg: mintGreen.alpha(0.25),
		hoverFg: base.fg.darken(0.5),
	},
};

export const light: ColorScheme = {
	chalk,
	base,
	syntax,
	vcs,
	ui,
};

export default light;
