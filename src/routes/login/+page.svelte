<script lang="ts">
	import { AuthService } from '$lib/services/auth/auth.service';
	import { info } from '$lib/services/logger/logger.service';

	export let username = '';
	export let password = '';

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		await AuthService.login(username, password, 360000);
	}

	async function handleTest() {
		// const session = await AuthService.getSession();
		// console.log(session);
		info('foo');
	}

	// function handleChange() {}
</script>

<form id="login-form" class="flex-column align-items-center" method="post" on:submit={handleSubmit}>
	<input bind:value={username} />
	<input type="password" bind:value={password} />
	<button type="submit">submit</button>
</form>

<button type="button" on:click={handleTest}>test</button>
