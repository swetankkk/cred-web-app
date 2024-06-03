import AuthChecker from '@/app/actions/AuthChecker';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function SplashScreen() {
	// You can add any UI inside Loading, including a Skeleton.

	return (
		<div
			className={
				'flex flex-col font-semibold justify-center items-center h-dvh  font-gilroy-light '
			}
		>
			<Image src={`/cred.svg`} alt='Cred Logo' width={60} height={60} />
			What if cred had a Web App?
			<AuthChecker />
		</div>
	);
}
