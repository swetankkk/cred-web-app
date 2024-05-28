import Image from 'next/image';
import { delay } from './utils';
import Loading from '@/components/Loading';
import { redirect } from 'next/navigation';

async function waitandredirect() {
	setTimeout(() => {
		redirect('/login'); // Replace '/your-target-page' with your actual target page path
	}, 5000);
}
export default async function Home() {
	waitandredirect();
	return <main>{<Loading />}</main>;
}
