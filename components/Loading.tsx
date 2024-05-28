import Image from 'next/image';

export default function Loader() {
	// You can add any UI inside Loading, including a Skeleton.

	return (
		<div
			className={
				'flex flex-col  justify-center items-center h-dvh bg-[#0d0d0d]'
			}
		>
			<Image src={`/cred.svg`} alt='Cred Logo' width={60} height={60} />
			What if cred had a WebApp?
		</div>
	);
}
