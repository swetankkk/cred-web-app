import Image from 'next/image';
import Long_Right_Arrow from '@/app/images/ic_right_arrow_long.svg';

export default function SummaryCard({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) {
	return (
		<div className='flex flex-col bg-[#161616]  space-y-2 px-2 py-2 w-32 '>
			<div className='font-denton-regular'>{title}</div>
			<div className='flex text-primary text-xs flex-nowrap'>{subtitle}</div>
			<Image
				src={Long_Right_Arrow}
				alt='long right arrow'
				className='fill-white stroke-white'
			/>
		</div>
	);
}
