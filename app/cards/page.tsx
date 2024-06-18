import NavigationPane from '@/components/NavigationPane';
import { Button } from '@/components/ui/button';
import TFD from '@/app/images/tfd_banner_image.svg';
import Image from 'next/image';
import Setting from '@/app/images/profile_settings_nudge.svg';
import BankFAllback from '@/app/images/pToP/pps_bank_fallback.svg';
import Long_Right_Arrow from '@/app/images/ic_right_arrow_long.svg';
import Card from '@/components/Card';
import OfferCard from '@/components/OfferCard';
import RentCard from '@/components/RentCard';
import QuickActionsCard from '@/components/QuickActionsCard';

export default function Cards() {
	return (
		<div className='flex flex-row h-screen'>
			<NavigationPane />

			<div className='flex flex-col overflow-x-hidden overflow-y-scroll flex-grow  bg-[#121212]   font-thin px-4 py-4 '>
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
				<div className='flex flex-col mt-8 px-4 space-y-4'>
					<div>Recent Spends</div>
					<div className='bg-white text-black'>
						<div>
							<div>Amul</div>
							<div>60rs</div>
						</div>
					</div>
					<div> Offfers on Card</div>
					<div className='flex text-black space-x-4'>
						<OfferCard />
						<OfferCard />
					</div>
				</div>
				<div className='flex  mt-6 px-4 space-y-4 self-start'>
					<Button variant='outline' className='max-w-32 mx-auto'>
						view all offers{' '}
					</Button>
				</div>
				<div className='px-4 py-2 space-y-2'>
					<div className=' mt-4'>pay rent with your card</div>
					<div className='flex flex-row space-x-4'>
						<RentCard
							heading='paying rent? use credit card'
							text='transfer money from credit card to any bank a/c'
						/>
						<RentCard
							heading='instant deposit to bank a/c'
							text="money reaches your landlord's account in seconds"
						/>

						<RentCard
							heading='make your salary last longer'
							text='use credit card for your biggest monthly expenses'
						/>
					</div>
					<Button
						variant='outline'
						className='max-w-32 mx-auto bg-white text-black'
					>
						Try Now
					</Button>
					<div className='flex flex-col space-y-4'>
						<div className='mb-8'>Quick Actions</div>
						<div className='flex flex-row space-x-4 flex-wrap'>
							<QuickActionsCard
								heading='tap to pay with your phone'
								text='card payments are now cardless'
							/>
							<QuickActionsCard
								heading='view bill payments history'
								text='track all your past credit card bill payments in one place'
							/>
							<QuickActionsCard
								heading='get a RuPay credit card'
								text='get comfort of UPI with the power of credit'
							/>
							<QuickActionsCard
								heading='check my credit score'
								text='view how your credit utilisation has changed credit score'
							/>
							<QuickActionsCard
								heading='link cards'
								text='link your credit card from CRED'
							/>
							<QuickActionsCard
								heading='remove a card'
								text='remove my credit card from CRED'
							/>
							<QuickActionsCard
								heading='contact support'
								text='reach out to us for any help'
							/>
						</div>
						<div className='flex mb-8 self-center'>We support</div>
					</div>
				</div>
			</div>
		</div>
	);
}
