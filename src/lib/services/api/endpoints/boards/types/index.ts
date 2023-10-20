export interface Board {
	name: string;
	description: string;
	threadsCount: number;
	repliesCount: number;
	categoryId: number;
	// lastPost: PostPreview;
	// moderators: User[];
	page: BoardPage;
}

export interface BoardPage {
	number: number;
	stickiesCount: number;
	globalsCount: number;
	threadsCount: number;
	threads: Thread[];
}
