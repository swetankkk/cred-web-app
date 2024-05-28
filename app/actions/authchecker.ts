'use server';
import { redirect } from 'next/navigation';

async function authchecker() {
	setTimeout(() => {
		redirect('/login'); // Replace '/your-target-page' with your actual target page path
	}, 5000);
}

export default authchecker;
