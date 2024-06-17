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
		<div className='flex space-x-4 min-w-60'>
			<div>
				<div>{heading}</div>
				<div className='text-xs'>{text}</div>
			</div>
			<Image src={Long_Right_Arrow} alt='long right arrow' />
		</div>
	);
}
