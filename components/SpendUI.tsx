export default function SpendUI({
	merchantName,
	date,
	amount,
}: {
	merchantName: string;
	date: string;
	amount: string;
}) {
	return (
		<div className='flex space-x-2  text-black  px-4 py-2'>
			<div className='flex flex-col'>
				<div>{merchantName}</div>
				<div className='text-primary'>{date}</div>
			</div>
			<div>
				{amount} {'>'}
			</div>
		</div>
	);
}
