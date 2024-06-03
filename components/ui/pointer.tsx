export enum Directions {
	NORTH = 'north',
	SOUTH = 'south',
	EAST = 'east',
	WEST = 'west',
}

export type ChevronProps = {
	color?: string;
	direction?: Directions;
	style?: React.CSSProperties;
};

export type PointerProps = ChevronProps & {
	size?: 'big' | 'medium' | 'small';
};

const RotateDegrees = {
	[Directions.NORTH]: '-90deg',
	[Directions.SOUTH]: '90deg',
	[Directions.EAST]: '0deg',
	[Directions.WEST]: '180deg',
};

export const Pointer = ({
	color = '#ffffff', //mainColors.white,
	direction = Directions.EAST,
	size = 'medium',
	style,
}: PointerProps) =>
	size === 'small' ? (
		<svg
			style={{
				transform: `rotate(${RotateDegrees[direction ?? Directions.EAST]})`,
				...style,
			}}
			width='13'
			height='9'
			viewBox='0 0 13 9'
			fill='none'
		>
			<path
				d='M1 3.74996H0.25V5.24996H1V3.74996ZM1 5.24996H11.9997V3.74996H1V5.24996ZM8.37874 0.5C8.37874 3.09998 10.4246 5.25 12.9997 5.25V3.75C11.299 3.75 9.87874 2.31829 9.87874 0.5L8.37874 0.5ZM12.9997 3.75C10.4246 3.75 8.37865 5.89999 8.37865 8.5H9.87865C9.87865 6.68173 11.299 5.25 12.9997 5.25V3.75Z'
				fill={color}
			/>
		</svg>
	) : (
		<svg
			style={{
				transform: `rotate(${RotateDegrees[direction ?? Directions.EAST]})`,
				...style,
			}}
			width='21'
			height='9'
			viewBox='0 0 21 9'
			fill='none'
		>
			<path
				d='M1 3.74996H0.25L0.25 5.24996L1 5.24996L1 3.74996ZM1 5.24996L20 5.24996V3.74996L1 3.74996L1 5.24996ZM16.379 0.5C16.379 3.09998 18.4249 5.25 21 5.25V3.75C19.2993 3.75 17.879 2.3183 17.879 0.5L16.379 0.5ZM21 3.75C18.4249 3.75 16.3789 5.89999 16.3789 8.5H17.8789C17.8789 6.68172 19.2993 5.25 21 5.25V3.75Z'
				fill={color}
			/>
		</svg>
	);
