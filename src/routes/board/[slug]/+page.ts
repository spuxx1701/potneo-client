import { ApiService } from '$lib/services/api/api.service.js';
import type { Board } from '$lib/services/api/endpoints/boards/types/index.js';
import { protect } from '$lib/services/auth/protect.wrapper';
import type { PageLoadEvent } from './$types';

export interface BoardRouteModel {
	board?: Board;
}

export const load = protect<PageLoadEvent>(async ({ params }): Promise<BoardRouteModel> => {
	const { slug } = params;
	const board = await ApiService.getBoard(slug as string);
	return { board };
});
