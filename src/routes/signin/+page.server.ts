import type { RequestEvent } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	// https://kit.svelte.jp/docs/types#public-types-action
	// https://kit.svelte.jp/docs/form-actions#anatomy-of-an-action
	// https://learn.svelte.jp/tutorial/event
	signin: async (event: RequestEvent) => {
		const { cookies, request } = event;
		await new Promise((fulfil) => setTimeout(fulfil, 1000)); // artificial delay

		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		if (email == null || password == null) {
			fail(400, {
				error: 'invalid_request',
				error_description: 'email and password are required'
			});
			return;
		}

		if (email?.toString().includes('ng') || password?.toString().includes('ng')) {
			fail(403, {
				error: 'invalid_grant',
				error_description: 'invalid username or password'
			});
			return;
		}

		cookies.set('session_id', '1234567890abcdef', {
			path: '/',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		throw redirect(302, '/');
	}
};
