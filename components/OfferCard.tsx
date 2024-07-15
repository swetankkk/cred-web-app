import Image from 'next/image';

export default function OfferCard({
	brandName,
	text,
	brandLogo,
}: {
	brandName: string;
	text: string;
	brandLogo: any;
}) {
	return (
		<div className='flex flex-col space-y-2 bg-white space-x-2 p-2'>
			<Image src={brandLogo} alt='flipkart' height={40} />
			<div>{brandName}</div>
			<div>{text}</div>
		</div>
	);
}
