<script>
	import { Button, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<div class="container mx-auto px-8 py-4">
	<form class="flex flex-col space-y-6" method="POST" action="?/signin">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">ログイン</h3>
		<Label class="space-y-2">
			<span>メールアドレス</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>パスワード</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>ログイン状態を記録します</Checkbox>
			<a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">
				パスワードを忘れた場合
			</a>
		</div>
		<Button type="submit" class="w-full1">ログイン</Button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			まだ未登録ですか？ <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">
				アカウントの作成
			</a>
		</div>
	</form>
</div>
