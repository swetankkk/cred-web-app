import tw from 'tailwindcss';
export const delay = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export enum FontType {
	HEADING = 'heading',
	CAPS = 'caps',
	BODY = 'body',
	SERIF_HEADING = 'serif-heading',
}

export enum FontWeights {
	EXTRA_BOLD = 800,
	BOLD = 700,
	SEMI_BOLD = 600,
	MEDIUM = 500,
	REGULAR = 400,
	THIN = 300,
}

export const generateTextStyle = (
	type = FontType.BODY,
	fontSize = 14,
	fontWeight = FontWeights.REGULAR,
	color = '#FFFFFF'
) => {
	const LINE_HEIGHT_MULTIPLIER = {
		[FontType.HEADING]: 1.25,
		[FontType.CAPS]: 1.25,
		[FontType.BODY]: 1.5,
		[FontType.SERIF_HEADING]: 1.25,
	};

	const getLetterSpacing = (
		fType: FontType,
		fSize: number,
		fWeight: FontWeights
	) => {
		switch (fType) {
			case FontType.HEADING:
				switch (fWeight) {
					case FontWeights.EXTRA_BOLD:
						return fSize >= 44 ? 0 : 0.2;
					case FontWeights.BOLD:
						return fSize >= 13 ? 0.2 : 0.4;
					case FontWeights.SEMI_BOLD:
						return fSize >= 18 ? 0.2 : 0.4;
					default:
						return 0.2;
				}
			case FontType.CAPS:
				if (fSize > 8) return 2;
				return 1;
			case FontType.BODY:
				return 0.4;
			case FontType.SERIF_HEADING:
				return 0.2;
			default:
				return 0.4;
		}
	};

	const letterSpacing = getLetterSpacing(type, fontSize, fontWeight);

	const textStyle = tw(
		`font-size: ${fontSize}px;` +
			`font-weight: ${fontWeight};` +
			`line-height: ${Math.round(fontSize * LINE_HEIGHT_MULTIPLIER[type])}px;` +
			`letter-spacing: ${letterSpacing}px;` +
			`color: ${color ?? ''};` +
			`font-style: normal;` +
			type ===
			FontType.CAPS
			? `text-transform: uppercase;`
			: ''
	);
	return textStyle;
};
