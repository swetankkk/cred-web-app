import type { Metadata } from 'next';
import Gilroy from 'next/font/local';
import './globals.css';
import './fonts.css';

const gilroy = Gilroy({
	src: [
		{ path: './font/Gilroy-Light.otf' },
		{ path: './font/Gilroy-ExtraBold.otf' },
	],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={gilroy.className}>{children}</body>
		</html>
	);
}
