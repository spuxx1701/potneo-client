import { apiConfig } from '$lib/config/api.config';
import { browser } from '$app/environment';
import { AuthService } from '../auth/auth.service';
import { ServiceMixin } from '../base.service-mixin';
import { HttpService } from '../http/http.service';
import { boardsEndpoints } from './endpoints/boards/boards.endpoints';

export class ApiService extends ServiceMixin<ApiService>() {
	public static async get(endpoint: string) {
		const response = await HttpService.get(this.instance.createUrl(endpoint), {
			headers: { ...this.instance.createHeaders() }
		});
		return response?.json();
	}

	public static async post(endpoint: string, body: object) {
		const response = await HttpService.post(this.instance.createUrl(endpoint), body, {
			headers: { ...this.instance.createHeaders() }
		});
		return response?.json();
	}

	private createUrl(endpoint: string) {
		let url = endpoint;
		if (!url.startsWith('/')) {
			url = `/${url}`;
		}
		url = `${apiConfig.hostname}${url}`;
		return url;
	}

	private createHeaders(): Record<string, string> {
		const headers: Record<string, string> = { ...apiConfig.headers };
		if (browser) {
			if (AuthService.accessToken) headers.Authorization = `Bearer ${AuthService.accessToken}`;
		}
		return headers;
	}

	// --- Endpoints --- //

	public static getBoard = boardsEndpoints.getBoard;
}
