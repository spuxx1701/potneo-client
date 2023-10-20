const OLogMessageType = {
	info: 'info',
	warn: 'warn',
	error: 'error'
} as const;

export type LogMessageType = (typeof OLogMessageType)[keyof typeof OLogMessageType];

export interface LogMessage {
	date: Date;
	type: LogMessageType;
	message: string;
	context?: string;
}
