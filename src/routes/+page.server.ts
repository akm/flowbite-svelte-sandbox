import type { ServerLoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export function load(event: ServerLoadEvent) {
	// redirect user if logged in
	if (!event.locals.user) {
		throw redirect(302, '/signin');
	}
}
