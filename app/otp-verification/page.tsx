import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Pointer } from '@/components/ui/pointer';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp';

export default function otpVerification() {
	return (
		<div className='flex flex-col h-dvh justify-center items-center font'>
			<div className='flex flex-col h-[50dvh] justify-end min-w-72'>
				<div className=' text-xs font-serif text-primary pb-1 '>
					MEMBERSHIP APPLICATION
				</div>
				<div className='font-gilroy-light text-2xl text-foreground'>
					enter the OTP sent to
				</div>
				<div className='font-gilroy-light text-2xl pb-4 min-w-full'>number</div>
			</div>
			<div className='flex flex-col bg-white h-1/2 w-full'>
				<hr className=' h-2 mx-auto  border-0 rounded  w-full bg-secondary' />
				<div className='flex flex-col mt-2 items-center  pt-2  '>
					<div className='flex flex-col max-w-72  '>
						<InputOTP maxLength={4} className=' flex justify-center  '>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />

								<InputOTPSlot index={3} className='' />
							</InputOTPGroup>
						</InputOTP>
						<div className='flex flex-row text-primary text-xs pt-4 pb-2 '>
							<div className='flex '>didn&apos;t receive OTP?</div>
							&nbsp;&nbsp;&nbsp;
							<div className='underline text-xs flex-nowrap text-black'>
								Resend OTP{' '}
							</div>
							&nbsp;&nbsp;
							<div className='underline text-xs flex-nowrap text-black'>
								OTP on call
							</div>
							&nbsp;&nbsp;
						</div>
						<div className=' flex flex-row text-primary text-xs pb-8'>
							<p>
								by proceeding, you are indicating that you have read and agree
								to our{' '}
								<span className='underline text-black'>terms of use</span> &amp;
								&nbsp;
								<span className='underline text-black'>privacy policy</span>
							</p>
						</div>
						<Link href='/home' className=''>
							<Button
								className='max-w-52  rounded-none  text-foreground font-gilroy-extra-bold  font-light 
						 
						'
							>
								Proceed &nbsp; <Pointer />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
