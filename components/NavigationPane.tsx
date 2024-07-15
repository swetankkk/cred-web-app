import Link from 'next/link';
import Image from 'next/image';
import Profile from '@/app/images/profile_placeholder.png';
import Cards from '@/app/images/cards.jpeg';
import CredLogo from '@/app/images/ic_cred_name_logo.svg';

export default function NavigationPane() {
	return (
		<div className='flex flex-col min-w-32 w-[20dvw] h-full bg-black self-center space-y-2 px-2 text-white'>
			<div className='flex flex-row align-center justify-center h-[10dvh]  '>
				<Image src={CredLogo} alt='cred logo' height={64} className='py-4' />
			</div>
			<hr className='border-white rounded border-1 mt-8 border-x-0' />
			<div className='bg-black'>
				<Link href='/home' className='flex  items-center space-x-2'>
					<Image src={Profile} alt='profile' height={40} /> <div>Home</div>
				</Link>

				<Link href='/cards' className='flex  items-center space-x-2'>
					<Image src={Cards} alt='cards' height={40} />
					<div>CREDIT CARDS</div>
				</Link>
			</div>
			<hr className='flex   border-white  w-full self-center rounded border-1 mb-8' />
		</div>
	);
}
