const OTheme = {
	default: 'default'
} as const;

export type Theme = (typeof OTheme)[keyof typeof OTheme];
