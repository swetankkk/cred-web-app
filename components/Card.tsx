import Image from 'next/image';
import Card_Chip from '@/app/images/ic_onboarding_card_chip.webp';
import Setting from '@/app/images/profile_settings_nudge.svg';
import Long_Right_Arrow from '@/app/images/ic_right_arrow_long.svg';
import Contactless from '@/app/images/contactless.svg';

export default function Card({
	bankName,
	network,
	lastdigits,
	cardholderName,
	dueDate,
	dueMonth,
}: {
	bankName: string;
	network: string;
	lastdigits: string;
	cardholderName: string;
	dueDate: string;
	dueMonth: string;
}) {
	return (
		<div className='flex flex-col space-y-4'>
			<div className='flex flex-col bg-[#F08D32] aspect-video  space-y-1  px-2 py-2 rounded-md justify-between '>
				<div className='flex justify-between items-center'>
					<div>
						<div className=' text-sm  '>{bankName} Bank</div>
						<div>
							{network} XXXX {lastdigits}
						</div>
					</div>
					<div>Due on {dueDate}</div>
				</div>
				<div className='flex'>
					<Image src={Card_Chip} alt='card chip' height={40} className='8' />
					<Image src={Contactless} alt='contactless' height={30} />
				</div>
				<div>{cardholderName}</div>
			</div>
			<div className='flex '>
				<div className='bg-[#3D3D3D] mr-4 p-4'>
					<Image alt='setting' src={Setting} height={40} className='min-w-8' />
				</div>
				<div className='flex justify-between bg-[#3D3D3D] px-4 py-2 min-w-64'>
					<div className='flex flex-col'>
						<div>181</div>
						<div>card offers</div>
					</div>
					<Image src={Long_Right_Arrow} alt='long right arrow' />
				</div>
			</div>
			<div className='flex justify-between bg-[#3D3D3D] px-4 py-2'>
				<div>
					<div> statement summary</div>
					<div>for the month of {dueMonth}</div>
				</div>
				<div className='flex self-center bg-white text-black px-4 py-2 '>
					View Now
				</div>
			</div>
		</div>
	);
}
