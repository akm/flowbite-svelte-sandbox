import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const sessionID = event.cookies.get('session_id');

	if (!sessionID) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	const parts = sessionID.split(':');
	if (parts.length !== 2) {
		return await resolve(event);
	}

	// if `user` exists set `events.local`
	event.locals.user = {
		name: parts[0]
	};

	// load page as normal
	return await resolve(event);
};
