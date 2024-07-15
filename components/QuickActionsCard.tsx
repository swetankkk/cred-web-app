import Image from 'next/image';
import Long_Right_Arrow from '@/app/images/ic_right_arrow_long.svg';

export default function QuickActionsCard({
	heading,
	text,
}: {
	heading: string;
	text: string;
}) {
	return (
		<div className='flex flex-row flex-grow space-x-2 justify-between items-center w-full lg:w-52 h-10 '>
			<div className='flex flex-col   '>
				<div>{heading}</div>
				<div className='text-xs text-primary'>{text}</div>
			</div>
			<div className='flex self-end mr-4 pb-2'>
				<Image
					src={Long_Right_Arrow}
					alt='long right arrow'
					className='mr-2 self-end'
				/>
			</div>
		</div>
	);
}
