<script lang="ts">
	import PageHead from '$lib/components/misc/page-head/page-head.svelte';
	import type { Board } from '$lib/services/api/endpoints/boards/types';
	import ThreadList from './thread-list.component.svelte';

	export let board: Board;
	export const { page } = board;
</script>

<PageHead title={board.name} />

<ThreadList {page} />
