import { browser } from '$app/environment';
import { ServiceMixin } from '../base.service-mixin';
import type { LogMessage, LogMessageType } from './types';

export class Logger extends ServiceMixin<Logger>() {
	messages?: LogMessage[];

	/**
	 * Logs a message with log level `info`.
	 * @param message The message.
	 * @param context (optional) The context (e.g. the callee).
	 */
	public static info(message: string, context?: string) {
		Logger.output('info', message, context);
	}

	/**
	 * Logs a message with log level `warn`.
	 * @param message The message.
	 * @param context (optional) The context (e.g. the callee).
	 */
	public static warn(message: string, context?: string) {
		Logger.output('warn', message, context);
	}

	/**
	 * Logs a message with log level `error`.
	 * @param message The message.
	 * @param context (optional) The context (e.g. the callee).
	 */
	public static error(message: string, context?: string) {
		Logger.output('error', message, context);
	}

	static output(type: LogMessageType, message: string, context?: string) {
		let string = message;
		if (context) string = `[${context}]  ${string}`;
		if (browser) {
			// Client-side we store the message and output the message via the browser console
			if (!this.instance.messages) this.instance.messages = [];
			this.instance.messages.push({
				date: new Date(),
				type,
				message,
				context
			});
			console[type](string);
		} else {
			// Server-side we output the message via vite's custom logger
			// this.instance.viteLogger[type](string);
		}
	}
}
export const { info, warn, error } = Logger;
