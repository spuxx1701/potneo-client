import { redirect, type HttpError } from '@sveltejs/kit';

/**
 * Use this wrapper to protect a specific route. Protected routes will redirect to `/login`
 * if any request within their `load` hook returns a `401`.
 * @param target The target function.
 * @returns The wrapped function.
 * @example
 * import { protect } from '$lib/services/auth/protect.wrapper';
 * import type { PageServerLoadEvent } from './$types';
 *
 * export const load = protect<PageServerLoadEvent>(async () => {
 *   const resource = ApiService.getSomeResource();
 *   return { resource };
 * });
 */
export const protect =
	<LoadEvent>(target: (event: LoadEvent) => Promise<object | undefined>) =>
	async (event: LoadEvent) => {
		try {
			return await target(event);
		} catch (error) {
			console.log(error);
			const httpError = error as HttpError;
			if (httpError.status === 401) {
				// console.error('redirecting to login');
				// throw redirect(302, '/login');
			}
		}
	};
