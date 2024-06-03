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
			<div className='flex flex-col h-[50dvh] justify-end max-w-64'>
				<div className=' text-xs font-serif text-primary pb-1'>
					MEMBERSHIP APPLICATION
				</div>
				<div className='font-gilroy-light text-2xl '>enter the OTP sent to</div>
				<div className='font-gilroy-light text-2xl pb-4'>number</div>
			</div>
			<div className='flex flex-col bg-white h-1/2 w-full'>
				<hr className=' h-2 mx-auto  border-0 rounded  w-full bg-secondary' />
				<div className='flex flex-col mt-2 items-center grow pt-2  '>
					<div className='flex flex-col max-w-72 self-center  pb-8'>
						<InputOTP maxLength={4} className=' flex self-center'>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />

								<InputOTPSlot index={3} />
							</InputOTPGroup>
						</InputOTP>
						<div className='flex flex-row text-background text-xs '>
							<div className='flex '>didn&apos;t receive OTP?</div>
							&nbsp;&nbsp;&nbsp;
							<div className='underline text-xs flex-nowrap'>Resend OTP </div>
							&nbsp;&nbsp;
							<div className='underline text-xs flex-nowrap'>OTP on call</div>
							&nbsp;&nbsp;
						</div>
						<div className=' flex flex-row text-background text-xs '>
							<p>
								by proceeding, you are indicating that you have read and agree
								to our <span className='underline '>terms of use</span> &amp;
								<span className='underline '>privacy policy</span>
							</p>
						</div>
						<Link href='/otp-verification' className=''>
							<Button
								className='max-w-52  rounded-none bg-background text-foreground font-gilroy-extra-bold  font-light 
						 
						'
								variant='secondary'
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
