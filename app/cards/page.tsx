import NavigationPane from '@/components/NavigationPane';
import { Button } from '@/components/ui/button';
import TFD from '@/app/images/tfd_banner_image.svg';
import Image from 'next/image';
import Setting from '@/app/images/profile_settings_nudge.svg';
import BankFAllback from '@/app/images/pToP/pps_bank_fallback.svg';
import Long_Right_Arrow from '@/app/images/ic_right_arrow_long.svg';
import Card from '@/components/Card';

export default function cards() {
	return (
		<div className='flex '>
			<NavigationPane />
			<div className='flex flex-col bg-[#121212] min-h-screen min-w-[80dvw] font-thin px-4 py-4 '>
				<div className='px-4 py-4 space-y-2'>
					<div className='flex justify-between items-center space-y-4 '>
						<div> mange your cards</div>
						<Button variant='outline'>add card</Button>
					</div>
					<div className='flex justify-between  space-y-1  '>
						<Image src={TFD} alt='tfd' height={40} />
						<div className='flex'>
							<Image src={BankFAllback} alt='bank fallback' height={40} />
							<Image src={BankFAllback} alt='bank fallback' height={40} />
							<Image src={BankFAllback} alt='bank fallback' height={40} />
							<Image src={Setting} alt='setting' height={40} />
						</div>
					</div>

					<div>SUMMARY ACROSS CARDS</div>
					<div className='flex  space-x-4 mt-2'>
						<div className='flex flex-col bg-[#3D3D3D]  space-y-1 px-2 py-2  '>
							<div>₹</div>
							<div>total due</div>
							<Image
								src={Long_Right_Arrow}
								alt='long right arrow'
								className='fill-white stroke-white'
							/>
						</div>
						<div className='flex flex-col bg-[#3D3D3D]  space-y-1 px-2 py-2 '>
							<div>₹</div>
							<div>recent spends</div>
							<Image
								src={Long_Right_Arrow}
								alt='long right arrow'
								className='fill-white stroke-white'
							/>
						</div>{' '}
						<div className='flex flex-col bg-[#3D3D3D]  space-y-1 px-2 py-2 '>
							<div>₹</div>
							<div>card offers</div>
							<Image
								src={Long_Right_Arrow}
								alt='long right arrow'
								className='fill-white stroke-white'
							/>
						</div>
					</div>
					<div className='mt-4 '>Your Cards</div>
				</div>
				<hr className='border-[0.5px] '></hr>
				<div className='flex flex-row space-x-4   px-4 mt-8'>
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
