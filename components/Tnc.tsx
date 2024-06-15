'use client';

import { Checkbox } from '@/components/ui/checkbox';

export function TncBox() {
	return (
		<div className=' flex  '>
			<div className='flex   pt-2'>
				<Checkbox id='terms1' />
				{/*<div className='grid gap-1.5 leading-none'>
				<label
					htmlFor='terms1'
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black'
	></label>
			</div>*/}

				<p className='text-xs text-secondary pl-2'>
					allow CRED to access your credit information from{' '}
					<span className='underline text-background'>
						RBI approved bureaus
					</span>
					&nbsp; this does not impact your credit score
				</p>
			</div>
		</div>
	);
}
