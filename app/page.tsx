import Image from 'next/image';
import Loading from '@/components/Loading';
import authchecker from '@/app/actions/authchecker';

export default async function Home() {
	authchecker();
	return <main>{<Loading />}</main>;
}
