import Image from 'next/image';
import flipkart from '@/app/images/flipkart.svg';

export default function OfferCard() {
	return (
		<div className='flex flex-col space-y-2 bg-white space-x-2 p-2'>
			<Image src={flipkart} alt='flipkart' height={40} />
			<div>Flipkart</div>
			<div>10% off on flipkart</div>
		</div>
	);
}
