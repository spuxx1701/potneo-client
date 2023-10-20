<script>
	import '$lib/styles/global.css';
	// import { bootstrap } from '$lib/bootstrap';

	// bootstrap();
</script>

<main>
	<slot />
</main>

<style>
	:global(html) {
		height: 100svh;
		width: 100svw;
	}

	:global(body) {
		height: 100%;
		width: 100%;
		margin: 0;
		background-color: var(--color-app-background);
		color: var(--color-text-default);
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	main {
	}
</style>
