'use client';
import { redirect } from 'next/navigation';
import { delay } from '../utils';
import { useEffect, useTransition } from 'react';

function AuthChecker() {
	const [, startTransition] = useTransition();
	useEffect(() => {
		const timeout = setTimeout(
			() => startTransition(() => redirect('/login')),
			2000
		);
		return () => clearTimeout(timeout);
	}, []);

	return <></>;
}

export default AuthChecker;
