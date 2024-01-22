import Box from '@mui/material/Box';
import Brand1Svg from '@/assets/fa-brands-1.svg';
import Brand2Svg from '@/assets/fa-brands-2.svg';
import Brand3Svg from '@/assets/fa-brands-3.svg';
import Brand4Svg from '@/assets/fa-brands-4.svg';
import Brand5Svg from '@/assets/fa-brands-5.svg';
import Brand6Svg from '@/assets/fa-brands-6.svg';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Brands() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box
			display="flex"
			flexDirection={isDesktop ? 'row' : 'column'}
			gap="80px"
			justifyContent="center"
			alignItems="center"
		>
			<Brand1Svg />
			<Brand2Svg />
			<Brand3Svg />
			<Brand4Svg />
			<Brand5Svg />
			<Brand6Svg />
		</Box>
	);
}
