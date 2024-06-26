import { Button } from '@/components/ui/button';
import { Pointer } from '@/components/ui/pointer';
import Bills from '@/app/images/bills.svg';
import Image from 'next/image';
import { RiBillLine } from 'react-icons/ri';
import Garage from '@/app/images/garage.jpeg';
import Travel from '@/app/images/travel.jpeg';
import Store from '@/app/images/store.jpeg';
import Safety from '@/app/images/safety.jpeg';
import Pay from '@/app/images/pay.png';
//import Bills from '@/app/images/bills.png';
import Shopping from '@/app/images/shopping.png';
import Motor from '@/app/images/motor.png';
import View_All from '@/app/images/view-all.png';
import Long_Right_Arrow from '@/app/images/ic_right_arrow_long.svg';
import Profile from '@/app/images/profile_placeholder.png';
import Cards from '@/app/images/cards.jpeg';
import Link from 'next/link';
import NavigationPane from '@/components/NavigationPane';

export default function home() {
	return (
		<div className='flex h-screen'>
			<NavigationPane />

			<div className='bg-[#121212]  overflow-y-scroll min-h-screen mw-[80dvw] font-thin '>
				<div className='min-h-[10dvh] bg-black flex justify-center items-center'>
					<Button className='bg-[#3D3D3D] rounded-full '>
						<div className='flex justify-between items-center space-x-8 min-width-64'>
							<div>play today&#39;s jackpot </div>
							<div> &gt;</div>
						</div>
					</Button>
				</div>
				<div className='flex flex-col text-[#8A8A8A] text-sm min-h-[90dvh] bg-[#0D0D0D] space-y-4'>
					<hr className='flex max-w-10  border-[#8A8A8A] border-solid w-full self-center rounded border-2 mt-4' />
					<div className='mb-6 ml-4'>
						<div className=' text-sm mb-1'>Your Money</div>
						<div className='flex flex-wrap space-y-2 lg:space-y-0'>
							<button className='flex  justify-between bg-[#3D3D3D] w-64 mx-4'>
								<div className='px-2 py-0.5'>CRED flash</div>
								<div className='px-2 '> upgrade now &gt;</div>
							</button>

							<button className='flex bg-[#3D3D3D] w-64 mx-4  justify-between'>
								{' '}
								<div className='px-2'>bank balance</div>
								<div className='px-2'> check balance &gt;</div>
							</button>
							<button className='flex  justify-between bg-[#3D3D3D] w-64 mx-4'>
								<div className='px-2 '>CRED CASH</div>
								<div className='px-2 text-green-500'> 5,00,000 &gt;</div>
							</button>
						</div>
					</div>
					<div className='ml-4'>
						<div className='flex justify-between max-w-72 mb-4 '>
							<div className='text-[#8A8A8A] text-sm '>UPCOMING BILLS</div>
							<div className='text-white underline text-xs mx-2'> view all</div>
						</div>
						<button className='flex  px-2 py-2 justify-between items-center bg-white my-1 mx-4 space-x-2'>
							<div className='flex flex-wrap flex-col '>
								<div className='lg:px-2 text-black'>car insurance </div>
								<div className='lg:px-2'>XXXXXXXXXX</div>
							</div>
							<div>
								<div className='px-2 mr-2 bg-black text-white p-1'>
									Renew Now
								</div>
								<div className='text-[#FF8744] text-xs'>Due in 12 days</div>
							</div>
						</button>
					</div>
					<div className='ml-4 mt-4 text-white'>
						<div className='text-[#8A8A8A] text-sm '>EXPLORE CRED </div>
						<div className='flex space-x-4 text-xs space-y-1 flex-wrap'>
							<div className='flex flex-col items-center space-y-1'>
								<Image alt='pay' src={Pay} height={50} />
								<div className=''>pay contacts</div>
							</div>
							<div className='flex flex-col items-center space-y-1'>
								<Image alt='bills' src={Bills} height={50} />
								<div>bills & recharges</div>
							</div>
							<div className='flex flex-col items-center space-y-1'>
								<RiBillLine className='w-10 h-10' />
								<div> rewards</div>
							</div>
							<div className='flex flex-col items-center space-y-1'>
								<RiBillLine className='w-10 h-10' />
								<div>refer</div>
							</div>
							<div className='flex flex-col items-center  '>
								<Image alt='Shopping' src={Shopping} height={50} />
								<div>shopping</div>
							</div>
							<div className='flex flex-col items-center  '>
								<Image alt='motor insurance' src={Motor} height={50} />
								<div>motor insurance</div>
							</div>
							<div className='flex flex-col items-center  '>
								<Image alt='view all' src={View_All} height={50} />
								<div>view all</div>
							</div>
						</div>
					</div>
					<hr></hr>
					<div className='flex flex-col ml-4   max-w-72'>
						<div className='flex justify-between'>
							<div className='text-[#8A8A8A] text-sm '>NEEDS ATTENTION</div>
							<div className='text-white underline text-xs mx-2'>view all</div>
						</div>
						<button className='flex items-center  px-2 mr-4 bg-[#8A8A8A] text-white my-1'>
							<div>set up a preferred account to get refunds instantly</div>{' '}
							<Pointer />
						</button>
					</div>
					<div className='ml-4 '>
						<div className='text-[#8A8A8A] text-sm '>EXPLORE CLUB</div>
						<div className='flex flex-col lg:flex-row space-y-4  lg:space-x-6 lg:space-y-0 flex-wrap mr-4 '>
							<div className='flex max-h-96'>
								<Image alt='car' src={Garage} />
							</div>
							<div className=''>
								<Image alt='travel' src={Travel}></Image>
							</div>
							<div>
								<Image src={Store} alt='store'></Image>
							</div>
						</div>
					</div>
					<div className='space-y-2 mx-4'>
						<div className='text-[#8A8A8A] text-sm '>STAY SECURE</div>
						<Image alt='safety' src={Safety} height={100} className='' />
					</div>
					<div className='ml-4'>
						<div className='text-[#8A8A8A] text-sm ml-4'>
							WIN BIG WITH CRED COINS
						</div>
					</div>
					<div className='pb-8 self-center'>
						<Image
							src={Long_Right_Arrow}
							alt='long right arrow'
							className='flex  '
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
