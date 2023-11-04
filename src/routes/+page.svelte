<script>
	import { Alert } from 'flowbite-svelte';
	import { page } from '$app/stores';
</script>

<div class="p-8">
	<Alert color="green">
		<span class="font-medium">Welcome {$page.data.user.name} !</span>
	</Alert>
</div>
