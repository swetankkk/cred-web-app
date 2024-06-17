export default function RentCard({
	heading,
	text,
}: {
	heading: string;
	text: string;
}) {
	return (
		<div className='flex flex-col bg-[url("../app/images/bg_invite_pattern.svg")] min-h-60 bg-no-repeat justify-center max-w-48'>
			<div>{heading}</div>
			<div className='text-xs'>{text}</div>
		</div>
	);
}
