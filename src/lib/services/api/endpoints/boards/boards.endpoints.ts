import { ApiService } from '../../api.service';
import type { Board } from './types';

export const boardsEndpoints = {
	/**
	 * foo
	 * @param id
	 * @returns
	 */ getBoard: async function (id: string, options?: { page?: number }) {
		const { page } = { ...options };
		let url = `boards/${id}`;
		if (page) url += `?page=${page}`;
		const board: Board = await ApiService.get(url);
		return board;
	}
};
