import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				'gilroy-bold': ['GilroyBold', 'sans-serif'],
				'gilroy-medium': ['GilroyMedium', 'sans-serif'],
				'gilroy-regular': ['GilroyRegular', 'sans-serif'],
				'gilroy-semibold': ['GilroySemiBold', 'sans-serif'],
				'gilroy-extra-bold': ['GilroyExtraBold', 'sans-serif'],
				'circka-bold': ['PPCirckaBold', 'serif'],
				'circka-light': ['PPCirckaLight', 'serif'],
				'circka-variable': ['PPCirckaVariable', 'serif'],
				'denton-bold': ['DentonBold', 'sans-serif'],
				'denton-light': ['DentonLight', 'sans-serif'],
				'denton-medium': ['DentonMedium', 'sans-serif'],
				'denton-regular': ['DentonRegular', 'sans-serif'],
				'denton-thin': ['DentonThin', 'sans-serif'],
				'overpass-mono-bold': ['OverpassMonoBold', 'sans-serif'],
				'roboto-bold': ['RobotoBold', 'sans-serif'],
				'roboto-regular': ['RobotoRegular', 'sans-serif'],
				'cred-symbols': ['CredSymbols', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
