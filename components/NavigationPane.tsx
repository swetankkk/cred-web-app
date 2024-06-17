import Link from 'next/link';
import Image from 'next/image';
import Profile from '@/app/images/profile_placeholder.png';
import Cards from '@/app/images/cards.jpeg';

export default function NavigationPane() {
	return (
		<div className='flex flex-col  w-[20dvw] h-full bg-[#121212] self-center space-y-2'>
			<hr className='border-white rounded border-1 mt-8 border-x-0' />

			<Link href='/home' className='flex  items-center space-x-2'>
				<Image src={Profile} alt='profile' height={40} /> <div>Home</div>
			</Link>

			<Link href='/cards' className='flex  items-center space-x-2'>
				<Image src={Cards} alt='cards' height={40} />
				<div>CREDIT CARDS</div>
			</Link>

			<hr className='flex   border-white  w-full self-center rounded border-1 mb-8' />
		</div>
	);
}
