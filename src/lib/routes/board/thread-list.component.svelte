<script lang="ts">
	import type { BoardPage } from '$lib/services/api/endpoints/boards/types';

	export let page: BoardPage;
	export const { threads } = page;
</script>

<ul>
	{#each threads as thread}
		{thread.id}
	{/each}
</ul>
