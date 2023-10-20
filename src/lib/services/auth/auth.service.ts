import { authConfig } from '$lib/config/auth.config';
import { ApiService } from '../api/api.service';
import { ServiceMixin } from '../base.service-mixin';
import type { Session } from './types';

export class AuthService extends ServiceMixin<AuthService>() {
	private _session?: Session;

	static async login(username: string, password: string, lifetime: number) {
		const { access_token }: { access_token: string } = await ApiService.post('auth/login', {
			username,
			password,
			lifetime
		});

		if (access_token) this.instance.createSession(access_token, lifetime);
	}

	createSession(accessToken: string, maxAge: number) {
		const cookie = `${authConfig.sessionCookieName}=${accessToken}; SameSite=strict; max-age=${maxAge}; path=/; Secure`;
		document.cookie = cookie;
	}

	static async getSession(): Promise<Session | undefined> {
		if (this.accessToken) {
			if (!this.instance._session) this.instance._session = await ApiService.get('auth/session');
			return this.instance._session;
		} else return undefined;
	}

	static get accessToken(): string | undefined {
		const cookies = document.cookie.split(';');
		const accessToken = cookies
			.find((cookie) => cookie.startsWith(authConfig.sessionCookieName))
			?.split('=')[1];
		return accessToken;
	}

	static async logout() {}
}
