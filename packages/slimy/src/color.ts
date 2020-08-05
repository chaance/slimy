// https://github.com/ayu-theme/ayu-colors/blob/master/src/color.ts
/* eslint-disable no-shadow */
import chroma from "chroma-js";

const WCAG_RATIO_AA = 4.5;

export class Color {
	private base: chroma.Color;
	private color: chroma.Color;

	constructor(
		base: string | Color | chroma.Color,
		color: string | Color | chroma.Color
	) {
		if (base instanceof Color) {
			this.base = chroma(base.hex());
		} else if (typeof base === "string") {
			this.base = chroma(base);
		} else {
			this.base = base;
		}

		if (color instanceof Color) {
			this.color = chroma(color.hex());
		} else if (typeof color === "string") {
			this.color = chroma(color);
		} else {
			this.color = color;
		}
	}

	rgb() {
		return this.color.rgb();
	}

	rgba() {
		return this.color.rgba();
	}

	hex(type?: "rgb" | "rgba" | "blend"): string {
		if (type != "blend") return this.color.hex(type);

		const alpha = this.color.alpha();
		return this.alpha(1)
			.fade(1 - alpha)
			.hex();
	}

	alpha(value: number) {
		return new Color(this.base, this.color.alpha(value));
	}

	makeOpaque() {
		return new Color(this.base, this.color.alpha(1));
	}

	fade(value: number) {
		return new Color(this.base, chroma.mix(this.base, this.color, 1 - value));
	}

	mix(colorToMix: Color, mixRatio: number) {
		return new Color(
			this.base,
			chroma.mix(this.color, colorToMix.color, 1 - mixRatio)
		);
	}

	blend(colorToMix: Color) {
		return this.mix(colorToMix, 0.5);
	}

	darken(value: number) {
		return new Color(this.base, this.color.darken(value));
	}

	brighten(value: number) {
		return new Color(this.base, this.color.brighten(value));
	}

	/**
	 * @alias Color.brighten
	 * @param value
	 */
	lighten(value: number) {
		return this.brighten(value);
	}

	saturate(value: number) {
		return new Color(this.base, this.color.saturate(value));
	}

	desaturate(value: number) {
		return new Color(this.base, this.color.desaturate(value));
	}

	getContrastRatio(colorToCompare: Color) {
		return chroma.contrast(this.color, colorToCompare.color);
	}

	hasSufficientContrastAgainst(
		colorToCompare: Color,
		desiredRatio: number = WCAG_RATIO_AA
	) {
		return this.getContrastRatio(colorToCompare) >= desiredRatio;
	}
}

export function color(hexBase: string) {
	return (hexColor: string) => new Color(hexBase, hexColor);
}

export default color;
