<script lang="ts">
	import { appConfig } from '$lib/config/app.config';

	export let title: string;
	if (!title) {
		title = appConfig.appName;
	} else {
		title += ` | ${appConfig.appName}`;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
