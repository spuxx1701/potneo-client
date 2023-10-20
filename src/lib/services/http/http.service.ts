import { error } from '@sveltejs/kit';
import { ServiceMixin } from '../base.service-mixin';

export class HttpService extends ServiceMixin<HttpService>() {
	public static async get(url: string, options?: Partial<RequestInit>) {
		const response = await this.fetch(url, {
			...options,
			method: 'GET'
		});
		return response;
	}

	public static async post(url: string, body: object, options?: Partial<RequestInit>) {
		const response = await this.fetch(url, {
			...options,
			method: 'POST',
			body: JSON.stringify(body)
		});
		return response;
	}

	public static async fetch(url: string, request: RequestInit) {
		const response = await fetch(url, request);
		if (response.status >= 400) {
			throw error(response.status, { message: response.statusText });
		}
		return response;
	}
}
