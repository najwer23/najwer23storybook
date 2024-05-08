export interface GridTypes {
	children: React.ReactNode;
	gap: {
		col: string,
		row: string
	},
	col: {
		mobile: number;
		smallDesktop: number
		desktop: number;
		tablet: number
	}
}
