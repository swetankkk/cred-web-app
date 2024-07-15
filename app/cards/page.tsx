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
import SpendUI from '@/components/SpendUI';
import flipkart from '@/app/images/flipkart.svg';
import SummaryCard from '@/components/SummaryCard';

export default function Cards() {
	return (
		<div className='flex flex-row h-screen text-white'>
			<NavigationPane />

			<div className='flex flex-col relative overflow-x-hidden overflow-y-scroll   bg-[#121212]   font-thin px-4 '>
				<div className='px-4 py-8 space-y-2 sticky bg-[#121212] top-0'>
					<div className='flex justify-between items-center space-y-4 '>
						<div className='font-denton-regular'> manage your cards</div>
						<Button variant='outline' className='rounded-none'>
							Add card
						</Button>
					</div>
					<div className='flex justify-between  space-y-1  '>
						<Image src={TFD} alt='tfd' height={40} />
						<div className='flex'>
							<Image src={BankFAllback} alt='bank fallback' height={40} />
							<Image src={BankFAllback} alt='bank fallback' height={40} />
							<Image src={BankFAllback} alt='bank fallback' height={40} />
							<Image src={Setting} alt='setting' height={40} className='ml-4' />
						</div>
					</div>

					<div className='text-primary'>SUMMARY ACROSS CARDS</div>
					<div className='flex whitespace-nowrap mt-2 overflow-x-scroll flex-row w-full  space-x-2'>
						<SummaryCard title='₹' subtitle='total due' />
						<SummaryCard title='₹' subtitle='recent spends' />
						<SummaryCard title='₹' subtitle='card offers' />
					</div>
				</div>
				<div className='pt-8 text-primary mx-4'>Your Cards</div>
				<hr className=' '></hr>

				<div className='flex flex-row overflow-x-scroll lg:space-x-4 w-full  min-h-96 flex-wrap md:flex-nowrap gap-y-2 md:space-x-4 md:space-y-0  px-4 mt-8'>
					<Card
						bankName='ICICI'
						network='Amex'
						lastdigits=' 0000'
						cardholderName='John Doe'
						dueDate='5 JUL'
						dueMonth='May 24'
					/>
					<Card
						bankName='Axis'
						network='Visa'
						lastdigits=' 0000'
						cardholderName='John Doe'
						dueDate='5 JUL'
						dueMonth='May 24'
					/>
					<Card
						bankName='HDFC'
						network='Rupay'
						lastdigits=' 0000'
						cardholderName='John Doe'
						dueDate='5 JUL'
						dueMonth='May 24'
					/>
					<Card
						bankName='IDFC'
						network='Visa'
						lastdigits=' 0000'
						cardholderName='John Doe'
						dueDate='5 JUL'
						dueMonth='May 24'
					/>
					<Card
						bankName='ICICI'
						network='Visa'
						lastdigits=' 0000'
						cardholderName='John Doe'
						dueDate='5 JUL'
						dueMonth='May 24'
					/>
					<Card
						bankName='ICICI'
						network='Visa'
						lastdigits=' 0000'
						cardholderName='John Doe'
						dueDate='5 JUL'
						dueMonth='May 24'
					/>
				</div>
				<div className='flex flex-col mt-8 px-4 space-y-4'>
					<div className='text-primary'>Recent Spends</div>
					<div className='flex flex-row items-center space-x-4 bg-white justify-between pr-2'>
						<div className='flex '>
							<SpendUI merchantName='Amul' date='14th jun' amount=' 100' />
							<SpendUI merchantName='Bata' date='15th jun' amount=' 1,000' />
						</div>
						<Button
							variant='default'
							className=' mx-auto  text-black bg-white border-black border max-w-32'
						>
							view all
						</Button>
					</div>
					<div className='text-primary'> Offers on Card</div>
					<div className='flex text-black space-x-4'>
						<OfferCard
							brandName='Flipkart'
							text='10% off on flipkart'
							brandLogo={flipkart}
						/>
						<OfferCard
							brandName='Flipkart'
							text='10% off on flipkart'
							brandLogo={flipkart}
						/>
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
						<div className='mb-8 mt-4 text-primary'>Quick Actions</div>
						<div className='flex flex-row lg:space-x-4 space-y-4 lg:space-y-0 flex-wrap '>
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
