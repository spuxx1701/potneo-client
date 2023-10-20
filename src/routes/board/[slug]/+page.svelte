<script lang="ts">
	import BoardPage from '$lib/routes/board/board-page.component.svelte';
	import type { BoardRouteModel } from './+page';

	export let data: BoardRouteModel;
	const { board } = data;
</script>

{#if board}
	<BoardPage {board} />
{:else}
	foo
{/if}
