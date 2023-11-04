import type { RequestEvent, ServerLoadEvent } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';

export function load(event: ServerLoadEvent) {
	// redirect user if logged in
	if (event.locals.user) {
		throw redirect(302, '/');
	}
}

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
			return fail(400, {
				error: 'email and password are required',
				error_description: 'email and password are required'
			});
		}

		if (email?.toString().includes('ng') || password?.toString().includes('ng')) {
			return fail(403, {
				error: 'invalid username or password',
				error_description: 'invalid username or password'
			});
		}

		// const session_id = Math.random().toString(36).slice(-8);
		const userName = email?.toString().split('@')[0];

		cookies.set('session_id', userName + ':1234567890abcdef', {
			path: '/',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		throw redirect(302, '/');
	}
};
