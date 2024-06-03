import { TncBox } from '@/components/Tnc';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Pointer } from '@/components/ui/pointer';

export default function login() {
	return (
		<div className='flex flex-col h-dvh justify-center items-center font'>
			<div className='flex flex-col h-[50dvh] justify-end max-w-64'>
				<div className=' text-xs font-serif text-primary pb-1'>
					MEMBERSHIP APPLICATION
				</div>
				<div className='font-gilroy-light text-2xl '>tell us your mobile</div>
				<div className='font-gilroy-light text-2xl pb-4'>number</div>
			</div>
			<div className='flex flex-col bg-white h-1/2 w-full'>
				<hr className=' h-2 mx-auto  border-0 rounded  w-full bg-primary/45' />
				<div className='flex flex-col mt-2  grow pt-2  '>
					<div className='flex flex-col max-w-52 self-center pb-8 '>
						<Label
							htmlFor='phone_no'
							className='text-primary font-gilroy-light '
						>
							MOBILE NO
						</Label>
						<Input
							id='phone_no'
							type='tel'
							className=' self-center focus:outline-none'
							maxLength={10}
							minLength={10}
						/>
						<TncBox />
					</div>

					<Link href='/otp-verification' className='self-center'>
						<Button className='max-w-52  rounded-none   font-gilroy-extra-bold text-white font-light bg-primary'>
							Agree and Continue &nbsp; <Pointer />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
