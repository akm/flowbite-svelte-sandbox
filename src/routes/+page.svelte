<script>
	import { Alert } from 'flowbite-svelte';
	import { page } from '$app/stores';
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span>
		Welcome {$page.data.user.name}
	</Alert>
</div>
